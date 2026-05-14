import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs';

import type { KoanListItemModel, KoanModel } from '@features/koans/data/models/koan.model';
import { KoanApiService } from '@features/koans/data/api/koan/services/koan-api.service';

interface KoansState {
  randomKoan: KoanModel | null;
  koanList: KoanListItemModel[];
  selectedKoan: KoanModel | null;
  loadingRandom: boolean;
  loadingList: boolean;
  loadingSelected: boolean;
  error: string | null;
}

const initialState: KoansState = {
  randomKoan: null,
  koanList: [],
  selectedKoan: null,
  loadingRandom: false,
  loadingList: false,
  loadingSelected: false,
  error: null,
};

const ERROR_MESSAGE = 'Свиток недоступен. Мастер велит подождать и попробовать снова.';

export const KoansFacade = signalStore(
  withState<KoansState>(initialState),
  withMethods((store, api = inject(KoanApiService)) => ({
    loadRandomKoan: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loadingRandom: true, error: null })),
        switchMap(() =>
          api.getRandomKoan().pipe(
            tap((randomKoan) => patchState(store, { randomKoan, loadingRandom: false })),
            catchError(() => {
              patchState(store, { loadingRandom: false, error: ERROR_MESSAGE });

              return EMPTY;
            })
          )
        )
      )
    ),

    loadKoanList: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loadingList: true, error: null })),
        switchMap(() =>
          api.getKoanList().pipe(
            tap((koanList) => patchState(store, { koanList, loadingList: false })),
            catchError(() => {
              patchState(store, { loadingList: false, error: ERROR_MESSAGE });

              return EMPTY;
            })
          )
        )
      )
    ),

    selectKoan: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { loadingSelected: true, error: null })),
        switchMap((slug) =>
          api.getKoan(slug).pipe(
            tap((selectedKoan) => patchState(store, { selectedKoan, loadingSelected: false })),
            catchError(() => {
              patchState(store, { loadingSelected: false, error: ERROR_MESSAGE });

              return EMPTY;
            })
          )
        )
      )
    ),
  }))
);
