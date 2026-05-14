import { DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import type { KoanListItemModel, KoanModel } from '@features/koans/data/models/koan.model';
import { KoanApiService } from '@features/koans/data/api/koan/koan-api.service';

interface KoansState {
  randomKoan: KoanModel | null;
  koanList: KoanListItemModel[];
  selectedKoan: KoanModel | null;
  loadingRandom: boolean;
}

const initialState: KoansState = {
  randomKoan: null,
  koanList: [],
  selectedKoan: null,
  loadingRandom: false,
};

export const KoansStore = signalStore(
  withState<KoansState>(initialState),
  withMethods((store, api = inject(KoanApiService), destroyReference = inject(DestroyRef)) => ({
    loadRandomKoan(): void {
      patchState(store, { loadingRandom: true });
      api
        .getRandomKoan()
        .pipe(takeUntilDestroyed(destroyReference))
        .subscribe((koan) => patchState(store, { randomKoan: koan, loadingRandom: false }));
    },

    loadKoanList(): void {
      api
        .getKoanList()
        .pipe(takeUntilDestroyed(destroyReference))
        .subscribe((koanList) => patchState(store, { koanList }));
    },

    selectKoan(slug: string): void {
      api
        .getKoan(slug)
        .pipe(takeUntilDestroyed(destroyReference))
        .subscribe((selectedKoan) => patchState(store, { selectedKoan }));
    },
  }))
);
