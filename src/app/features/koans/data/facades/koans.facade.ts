import { inject, Injectable } from '@angular/core';
import type { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, Subject, switchMap, tap } from 'rxjs';

import { KoanApiService } from '@features/koans/data/api/koan-api.service';
import { resolveKoanError } from '@features/koans/data/api/koan-errors';
import { KoansPersistenceService } from '@features/koans/data/services/koans-persistence.service';
import { KoansStore } from '@features/koans/data/store/koans.store';

import type { KoanCategory } from '@features/koans/data/models/koan.model';

@Injectable()
export class KoansFacade {
  private readonly store = inject(KoansStore);
  private readonly api = inject(KoanApiService);
  private readonly persistence = inject(KoansPersistenceService);
  private readonly randomKoan$ = new Subject<string | null>();
  private readonly koanList$ = new Subject<void>();
  private readonly selectKoan$ = new Subject<string>();

  public readonly randomKoan = this.store.randomKoan;
  public readonly koanList = this.store.koanList;
  public readonly filteredList = this.store.filteredList;
  public readonly groupedList = this.store.groupedList;
  public readonly selectedKoan = this.store.selectedKoan;
  public readonly loadingRandom = this.store.loadingRandom;
  public readonly loadingList = this.store.loadingList;
  public readonly loadingSelected = this.store.loadingSelected;
  public readonly error = this.store.error;
  public readonly readSet = this.store.readSet;
  public readonly koanTheme = this.store.koanTheme;

  constructor() {
    this.store.setReadSet(this.persistence.loadReadSet());
    this.store.setKoanTheme(this.persistence.loadTheme());

    this.randomKoan$
      .pipe(
        tap(() => this.store.startLoadingRandom()),
        switchMap((exclude) =>
          this.api.getRandomKoan(exclude ?? undefined).pipe(
            tap((koan) => this.store.setRandomKoan(koan)),
            catchError((error: HttpErrorResponse) => {
              this.store.setError(resolveKoanError(error.status), 'random');

              return EMPTY;
            })
          )
        ),
        takeUntilDestroyed()
      )
      .subscribe();

    this.koanList$
      .pipe(
        tap(() => this.store.startLoadingList()),
        switchMap(() =>
          this.api.getKoanList().pipe(
            tap((list) => this.store.setKoanList(list)),
            catchError((error: HttpErrorResponse) => {
              this.store.setError(resolveKoanError(error.status), 'list');

              return EMPTY;
            })
          )
        ),
        takeUntilDestroyed()
      )
      .subscribe();

    this.selectKoan$
      .pipe(
        tap(() => this.store.startLoadingSelected()),
        switchMap((slug) =>
          this.api.getKoan(slug).pipe(
            tap((koan) => this.store.setSelectedKoan(koan)),
            catchError((error: HttpErrorResponse) => {
              this.store.setError(resolveKoanError(error.status), 'selected');

              return EMPTY;
            })
          )
        ),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  public loadRandomKoan(exclude: string | null): void {
    this.randomKoan$.next(exclude);
  }

  public loadKoanList(): void {
    this.koanList$.next();
  }

  public selectKoan(slug: string): void {
    this.selectKoan$.next(slug);
  }

  public setQuery(query: string): void {
    this.store.setQuery(query);
  }

  public setCategory(category: KoanCategory | null): void {
    this.store.setCategory(category);
  }

  public toggleTag(tag: string): void {
    this.store.toggleTag(tag);
  }

  public markRead(slug: string): void {
    this.store.markRead(slug);
    this.persistence.saveReadSet(this.store.readSet());
  }

  public setKoanTheme(theme: 'sumi' | 'washi'): void {
    this.store.setKoanTheme(theme);
    this.persistence.saveTheme(theme);
  }

  public selectRandomFromFiltered(): void {
    const pool = this.store.filteredList().filter((k) => k.slug !== this.store.selectedKoan()?.slug);

    if (!pool.length) {
      return;
    }

    this.selectKoan$.next(pool[Math.floor(Math.random() * pool.length)].slug);
  }
}
