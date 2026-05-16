# `koans.facade.ts` — patch (additive, signal-store extension)

Текущий `KoansFacade` оставляем как есть — только расширяем его новыми сигналами и computed-выборками. Используем `withComputed` и `withMethods` поверх существующего стора.

## Полная версия после патча

Замени файл `src/app/features/koans/data/facades/koans.facade.ts` на это:

```ts
import { computed, inject } from '@angular/core';
import type { HttpErrorResponse } from '@angular/common/http';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs';

import type { KoanCategory, KoanListItemModel, KoanModel } from '@features/koans/data/models/koan.model';
import { KoanApiService } from '@features/koans/data/api/koan-api.service';

type KoanTheme = 'sumi' | 'washi';

interface KoansState {
  randomKoan: KoanModel | null;
  koanList: KoanListItemModel[];
  selectedKoan: KoanModel | null;
  loadingRandom: boolean;
  loadingList: boolean;
  loadingSelected: boolean;
  error: string | null;
  koanCache: Record<string, KoanModel>;

  // ─ 「Свиток」additions ─
  query: string;
  activeCategory: KoanCategory | null;
  activeTags: string[];
  readSlugs: string[];
  theme: KoanTheme;
}

const READ_KEY = 'koan-read';
const THEME_KEY = 'koan-theme';

const readInitialReadSet = (): string[] => {
  try {
    const raw = localStorage.getItem(READ_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

const readInitialTheme = (): KoanTheme => {
  try {
    const raw = localStorage.getItem(THEME_KEY) as KoanTheme | null;
    return raw === 'washi' ? 'washi' : 'sumi';
  } catch {
    return 'sumi';
  }
};

const initialState: KoansState = {
  randomKoan: null,
  koanList: [],
  selectedKoan: null,
  loadingRandom: false,
  loadingList: false,
  loadingSelected: false,
  error: null,
  koanCache: {},

  query: '',
  activeCategory: null,
  activeTags: [],
  readSlugs: readInitialReadSet(),
  theme: readInitialTheme(),
};

const ERROR_MESSAGE = 'Свиток недоступен. Мастер велит подождать и попробовать снова.';
const ERROR_NETWORK = 'Связь с монастырём прервана. Проверьте соединение.';
const ERROR_NOT_FOUND = 'Этого коана нет в свитках.';

const resolveKoanError = (status: number): string => {
  if (status === 0) return ERROR_NETWORK;
  if (status === 404) return ERROR_NOT_FOUND;
  return ERROR_MESSAGE;
};

const matchesQuery = (item: KoanListItemModel, q: string): boolean => {
  if (!q) return true;
  const hay = [
    item.title,
    item.slug,
    String(item.number),
    ...(item.tags ?? []),
  ]
    .join(' ')
    .toLowerCase();
  return hay.includes(q);
};

export const KoansFacade = signalStore(
  withState<KoansState>(initialState),

  /* ─── Derived selectors ───────────────────────────── */
  withComputed((store) => ({
    readSet: computed(() => new Set(store.readSlugs())),

    /** All categories present in the loaded list, with counts. */
    categoryCounts: computed(() => {
      const out = new Map<KoanCategory, number>();
      for (const k of store.koanList()) {
        if (k.category) out.set(k.category, (out.get(k.category) ?? 0) + 1);
      }
      return out;
    }),

    /** Tag frequency across the whole list (sorted by count desc, then alpha). */
    tagCounts: computed(() => {
      const m = new Map<string, number>();
      for (const k of store.koanList()) for (const t of k.tags ?? []) m.set(t, (m.get(t) ?? 0) + 1);
      return [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    }),

    /** List after query / category / tag filters. */
    filteredList: computed(() => {
      const q = store.query().trim().toLowerCase();
      const cat = store.activeCategory();
      const tagSet = new Set(store.activeTags());
      return store.koanList().filter((k) => {
        if (cat && k.category !== cat) return false;
        if (tagSet.size) {
          const kt = new Set(k.tags ?? []);
          for (const t of tagSet) if (!kt.has(t)) return false;
        }
        return matchesQuery(k, q);
      });
    }),

    /** Filtered list grouped by category for sidebar rendering. */
    groupedList: computed(() => {
      const order: KoanCategory[] = ['javascript', 'angular', 'philosophy'];
      const filtered = store.koanList().filter((k) => {
        // re-run filter inline to avoid depending on the other computed below
        // (kept explicit because computeds can't reference each other cleanly here)
        const q = store.query().trim().toLowerCase();
        const cat = store.activeCategory();
        const tagSet = new Set(store.activeTags());
        if (cat && k.category !== cat) return false;
        if (tagSet.size) {
          const kt = new Set(k.tags ?? []);
          for (const t of tagSet) if (!kt.has(t)) return false;
        }
        return matchesQuery(k, q);
      });
      const groups = new Map<KoanCategory | 'other', KoanListItemModel[]>();
      for (const k of filtered) (groups.get(k.category ?? 'other') ?? groups.set(k.category ?? 'other', []).get(k.category ?? 'other')!).push(k);
      return order
        .filter((c) => groups.has(c))
        .map((c) => ({ category: c, items: groups.get(c)! }))
        .concat(groups.has('other') ? [{ category: 'other' as KoanCategory, items: groups.get('other')! }] : []);
    }),
  })),

  /* ─── Methods (HTTP + state mutators) ─────────────── */
  withMethods((store, api = inject(KoanApiService)) => ({
    loadRandomKoan: rxMethod<string | null>(
      pipe(
        tap(() => patchState(store, { loadingRandom: true, error: null })),
        switchMap((exclude) =>
          api.getRandomKoan(exclude ?? undefined).pipe(
            tap((randomKoan) => patchState(store, { randomKoan, loadingRandom: false })),
            catchError((error_: HttpErrorResponse) => {
              const error = error_.status === 0 ? ERROR_NETWORK : ERROR_MESSAGE;
              patchState(store, { loadingRandom: false, error });
              return EMPTY;
            }),
          ),
        ),
      ),
    ),

    loadKoanList: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loadingList: true, error: null })),
        switchMap(() =>
          api.getKoanList().pipe(
            tap((koanList) => patchState(store, { koanList, loadingList: false })),
            catchError((error_: HttpErrorResponse) => {
              const error = error_.status === 0 ? ERROR_NETWORK : ERROR_MESSAGE;
              patchState(store, { loadingList: false, error });
              return EMPTY;
            }),
          ),
        ),
      ),
    ),

    selectKoan: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { loadingSelected: true, error: null })),
        switchMap((slug) => {
          const cached = store.koanCache()[slug];
          if (cached) {
            patchState(store, { selectedKoan: cached, loadingSelected: false });
            return EMPTY;
          }
          return api.getKoan(slug).pipe(
            tap((selectedKoan) =>
              patchState(store, (s) => ({
                selectedKoan,
                loadingSelected: false,
                koanCache: { ...s.koanCache, [slug]: selectedKoan },
              })),
            ),
            catchError((error_: HttpErrorResponse) => {
              const error = resolveKoanError(error_.status);
              patchState(store, { loadingSelected: false, error });
              return EMPTY;
            }),
          );
        }),
      ),
    ),

    /* ─── 「Свиток」 additions ─── */
    setQuery: (query: string): void => patchState(store, { query }),
    setCategory: (activeCategory: KoanCategory | null): void => patchState(store, { activeCategory }),
    toggleCategory: (category: KoanCategory | null): void =>
      patchState(store, (s) => ({ activeCategory: s.activeCategory === category ? null : category })),
    toggleTag: (tag: string): void =>
      patchState(store, (s) => {
        const next = s.activeTags.includes(tag)
          ? s.activeTags.filter((t) => t !== tag)
          : [...s.activeTags, tag];
        return { activeTags: next };
      }),
    clearTags: (): void => patchState(store, { activeTags: [] }),
    setTheme: (theme: KoanTheme): void => {
      patchState(store, { theme });
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch {
        /* ignore quota errors */
      }
    },
    toggleTheme: (): void =>
      patchState(store, (s) => {
        const theme: KoanTheme = s.theme === 'sumi' ? 'washi' : 'sumi';
        try {
          localStorage.setItem(THEME_KEY, theme);
        } catch {
          /* ignore */
        }
        return { theme };
      }),
    markRead: (slug: string): void =>
      patchState(store, (s) => {
        if (s.readSlugs.includes(slug)) return {};
        const next = [...s.readSlugs, slug];
        try {
          localStorage.setItem(READ_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return { readSlugs: next };
      }),
  })),

  /* ─── Side effects (auto-mark read after dwell) ───── */
  withHooks(() => ({})),
);
```

## Что изменилось — по полям

| Сигнал                              | Откуда / как              |
|-------------------------------------|---------------------------|
| `query()`                           | input в шапке             |
| `activeCategory()`                  | клик по category в сайдбаре |
| `activeTags()`                      | клики по чипам/тегам      |
| `readSlugs()` → `readSet()`         | автомарк через 2.5с в `KoansPageComponent` |
| `theme()`                           | переключатель «солнце/луна» |
| `categoryCounts()`                  | для подписей в сайдбаре   |
| `tagCounts()`                       | сортированный список chip’ов |
| `filteredList()` / `groupedList()`  | реально рендерится в списке |

## Auto-mark read

В `KoansPageComponent` (см. `angular/koans-page/koans-page.component.ts`) добавляется effect:
```ts
effect((onCleanup) => {
  const slug = this.store.selectedKoan()?.slug;
  if (!slug) return;
  const timer = setTimeout(() => this.store.markRead(slug), 2500);
  onCleanup(() => clearTimeout(timer));
});
```

## Random navigation

Random использует `groupedList()` или `filteredList()`:
```ts
const pool = this.store.filteredList().filter((k) => k.slug !== current);
const pick = pool[Math.floor(Math.random() * pool.length)] ?? this.store.filteredList()[0];
if (pick) void this.router.navigate(['/koans', pick.slug]);
```

Этот фрагмент уже зашит в `koans-page.component.ts` из пакета.
