import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

import { KOAN_CATEGORIES } from '@features/koans/data/models/koan-category.model';

import type { KoanCategory } from '@features/koans/data/models/koan-category.model';
import type { KoanGroup, KoanGroupCategory } from '@features/koans/data/models/koan-group.model';
import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';
import type { KoanModel } from '@features/koans/data/models/koan.model';

interface KoansState {
  randomKoan: KoanModel | null;
  koanList: KoanListItemModel[];
  selectedKoan: KoanModel | null;
  loadingRandom: boolean;
  loadingList: boolean;
  loadingSelected: boolean;
  error: string | null;
  query: string;
  activeCategory: KoanCategory | null;
  activeTags: ReadonlySet<string>;
  readSet: ReadonlySet<string>;
}

const initialState: KoansState = {
  randomKoan: null,
  koanList: [],
  selectedKoan: null,
  loadingRandom: false,
  loadingList: false,
  loadingSelected: false,
  error: null,
  query: '',
  activeCategory: null,
  activeTags: new Set(),
  readSet: new Set(),
};

const GROUP_ORDER: readonly KoanGroupCategory[] = [...KOAN_CATEGORIES.map((c) => c.id), 'other'];

function groupByCategory(list: KoanListItemModel[]): KoanGroup[] {
  const map = new Map<KoanGroupCategory, KoanListItemModel[]>();

  for (const item of list) {
    const key: KoanGroupCategory = item.category ?? 'other';
    const group = map.get(key);

    if (group) {
      group.push(item);
    } else {
      map.set(key, [item]);
    }
  }

  return GROUP_ORDER.filter((c) => map.has(c)).map((category) => ({
    category,
    items: map.get(category) ?? [],
  }));
}

export const KoansStore = signalStore(
  withState<KoansState>(initialState),
  withComputed(({ koanList, query, activeCategory, activeTags }) => {
    const filteredList = computed(() => {
      const q = query().trim().toLowerCase();
      const cat = activeCategory();
      const tags = activeTags();

      return koanList().filter((k) => {
        if (cat && k.category !== cat) {
          return false;
        }
        if (tags.size > 0 && !k.tags?.some((t) => tags.has(t))) {
          return false;
        }
        if (q && !k.title.toLowerCase().includes(q)) {
          return false;
        }

        return true;
      });
    });

    return {
      filteredList,
      groupedList: computed(() => groupByCategory(filteredList())),

      categoryCounts: computed<ReadonlyMap<KoanCategory, number>>(() => {
        const out = new Map<KoanCategory, number>();

        for (const k of koanList()) {
          if (k.category) {
            out.set(k.category, (out.get(k.category) ?? 0) + 1);
          }
        }

        return out;
      }),

      tagCounts: computed<readonly (readonly [string, number])[]>(() => {
        const m = new Map<string, number>();

        for (const k of koanList()) {
          for (const t of k.tags ?? []) {
            m.set(t, (m.get(t) ?? 0) + 1);
          }
        }

        return [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
      }),
    };
  }),
  withMethods((store) => ({
    setRandomKoan(randomKoan: KoanModel): void {
      patchState(store, { randomKoan, loadingRandom: false });
    },
    setKoanList(koanList: KoanListItemModel[]): void {
      patchState(store, { koanList, loadingList: false });
    },
    setSelectedKoan(selectedKoan: KoanModel): void {
      patchState(store, { selectedKoan, loadingSelected: false });
    },

    startLoadingRandom(): void {
      patchState(store, { loadingRandom: true, error: null });
    },
    startLoadingList(): void {
      patchState(store, { loadingList: true, error: null });
    },
    startLoadingSelected(): void {
      patchState(store, { loadingSelected: true, error: null });
    },

    setError(error: string, target: 'random' | 'list' | 'selected'): void {
      patchState(store, {
        error,
        loadingRandom: target === 'random' ? false : store.loadingRandom(),
        loadingList: target === 'list' ? false : store.loadingList(),
        loadingSelected: target === 'selected' ? false : store.loadingSelected(),
      });
    },

    setQuery(query: string): void {
      patchState(store, { query });
    },
    setCategory(activeCategory: KoanCategory | null): void {
      patchState(store, { activeCategory });
    },
    toggleCategory(category: KoanCategory | null): void {
      patchState(store, { activeCategory: store.activeCategory() === category ? null : category });
    },
    toggleTag(tag: string): void {
      const next = new Set(store.activeTags());

      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      patchState(store, { activeTags: next });
    },
    clearTags(): void {
      patchState(store, { activeTags: new Set<string>() });
    },
    markRead(slug: string): void {
      const next = new Set(store.readSet());

      next.add(slug);
      patchState(store, { readSet: next });
    },
    setReadSet(readSet: ReadonlySet<string>): void {
      patchState(store, { readSet });
    },
  }))
);
