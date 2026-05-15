import { inject } from '@angular/core';
import type { HttpErrorResponse } from '@angular/common/http';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs';

import type { KoanListItemModel, KoanModel } from '@features/koans/data/models/koan.model';
import { KoanApiService } from '@features/koans/data/api/koan-api.service';

interface KoansState {
  randomKoan: KoanModel | null;
  koanList: KoanListItemModel[];
  selectedKoan: KoanModel | null;
  loadingRandom: boolean;
  loadingList: boolean;
  loadingSelected: boolean;
  error: string | null;
  koanCache: Record<string, KoanModel>;
}

const initialState: KoansState = {
  randomKoan: null,
  koanList: [],
  selectedKoan: null,
  loadingRandom: false,
  loadingList: false,
  loadingSelected: false,
  error: null,
  koanCache: {},
};

const ERROR_MESSAGE = 'Свиток недоступен. Мастер велит подождать и попробовать снова.';
const ERROR_NETWORK = 'Связь с монастырём прервана. Проверьте соединение.';
const ERROR_NOT_FOUND = 'Этого коана нет в свитках.';

const resolveKoanError = (status: number): string => {
  if (status === 0) {
    return ERROR_NETWORK;
  }
  if (status === 404) {
    return ERROR_NOT_FOUND;
  }

  return ERROR_MESSAGE;
};

export const KoansFacade = signalStore(
  withState<KoansState>(initialState),
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
            tap((koanList) => {
              patchState(store, { koanList, loadingList: false });
            }),
            catchError((error_: HttpErrorResponse) => {
              const error = error_.status === 0 ? ERROR_NETWORK : ERROR_MESSAGE;

              patchState(store, { loadingList: false, error });

              return EMPTY;
            })
          )
        )
      )
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
              }))
            ),
            catchError((error_: HttpErrorResponse) => {
              const error = resolveKoanError(error_.status);

              patchState(store, { loadingSelected: false, error });

              return EMPTY;
            })
          );
        })
      )
    ),
  }))
);
