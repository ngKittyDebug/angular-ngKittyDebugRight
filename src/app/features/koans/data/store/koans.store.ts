import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

import type { KoanListItemModel, KoanModel } from '@features/koans/data/models/koan.model';

interface KoansState {
  randomKoan: KoanModel | null;
  koanList: KoanListItemModel[];
  selectedKoan: KoanModel | null;
  loadingRandom: boolean;
  loadingList: boolean;
  loadingSelected: boolean;
  error: string | null;
  query: string;
  activeCategory: string | null;
  activeTags: ReadonlySet<string>;
  readSet: ReadonlySet<string>;
  koanTheme: 'sumi' | 'washi';
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
  koanTheme: 'sumi',
};

export type KoanGroup = Readonly<{ category: string; items: KoanListItemModel[] }>;

function groupByCategory(list: KoanListItemModel[]): KoanGroup[] {
  const map = new Map<string, KoanListItemModel[]>();

  for (const item of list) {
    const key = item.category ?? '';
    const group = map.get(key);

    if (group) {
      group.push(item);
    } else {
      map.set(key, [item]);
    }
  }

  return [...map.entries()].map(([category, items]) => ({ category, items }));
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
    setCategory(activeCategory: string | null): void {
      patchState(store, { activeCategory });
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
    markRead(slug: string): void {
      const next = new Set(store.readSet());

      next.add(slug);
      patchState(store, { readSet: next });
    },
    setReadSet(readSet: ReadonlySet<string>): void {
      patchState(store, { readSet });
    },
    setKoanTheme(koanTheme: 'sumi' | 'washi'): void {
      patchState(store, { koanTheme });
    },
  }))
);
