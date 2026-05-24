import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';
import type { KoanGroup } from '@features/koans/data/models/koan-group.model';
import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';
import type { KoanModel } from '@features/koans/data/models/koan.model';

interface KoansState {
  randomKoan: Nullable<KoanModel>;
  koanList: KoanListItemModel[];
  selectedKoan: Nullable<KoanModel>;
  loadingRandom: boolean;
  loadingList: boolean;
  loadingSelected: boolean;
  loadingCategories: boolean;
  error: Nullable<string>;
  query: string;
  activeCategory: Nullable<string>;
  activeTags: ReadonlySet<string>;
  readSet: ReadonlySet<string>;
  categories: KoanCategoryMeta[];
}

const initialState: KoansState = {
  randomKoan: null,
  koanList: [],
  selectedKoan: null,
  loadingRandom: false,
  loadingList: false,
  loadingSelected: false,
  loadingCategories: false,
  error: null,
  query: '',
  activeCategory: null,
  activeTags: new Set(),
  readSet: new Set(),
  categories: [],
};

function groupByCategory(list: KoanListItemModel[], knownOrder: readonly string[]): KoanGroup[] {
  const map = new Map<string, KoanListItemModel[]>();

  for (const item of list) {
    const group = map.get(item.category);

    if (group) {
      group.push(item);
    } else {
      map.set(item.category, [item]);
    }
  }

  const order: string[] = [
    ...knownOrder.filter((c) => c !== 'other'),
    ...[...map.keys()].filter((c) => c !== 'other' && !knownOrder.includes(c)),
    'other',
  ];

  return order
    .filter((c) => map.has(c))
    .map((category) => ({
      category,
      items: map.get(category) ?? [],
    }));
}

export const KoansStore = signalStore(
  withState<KoansState>(initialState),
  withComputed(({ koanList, query, activeCategory, activeTags, categories }) => {
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

        return !(q && !k.title.toLowerCase().includes(q));
      });
    });

    return {
      filteredList,
      groupedList: computed(() =>
        groupByCategory(
          filteredList(),
          categories().map((c) => c.id)
        )
      ),

      categoryCounts: computed<ReadonlyMap<string, number>>(() => {
        const out = new Map<string, number>();

        for (const k of koanList()) {
          out.set(k.category, (out.get(k.category) ?? 0) + 1);
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
    clearSelectedKoan(): void {
      patchState(store, { selectedKoan: null });
    },
    setCategories(categories: KoanCategoryMeta[]): void {
      patchState(store, { categories, loadingCategories: false });
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
    startLoadingCategories(): void {
      patchState(store, { loadingCategories: true, error: null });
    },

    setError(error: string, target: 'random' | 'list' | 'selected' | 'categories'): void {
      patchState(store, {
        error,
        loadingRandom: target === 'random' ? false : store.loadingRandom(),
        loadingList: target === 'list' ? false : store.loadingList(),
        loadingSelected: target === 'selected' ? false : store.loadingSelected(),
        loadingCategories: target === 'categories' ? false : store.loadingCategories(),
      });
    },

    setQuery(query: string): void {
      patchState(store, { query });
    },
    toggleCategory(category: Nullable<string>): void {
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
