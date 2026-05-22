import { inject, Injectable } from '@angular/core';
import type { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, Subject, switchMap, tap } from 'rxjs';

import { KoanApiService } from '@features/koans/data/api/koan-api.service';
import { resolveKoanError } from '@features/koans/data/api/koan-errors';
import { KoanCategoryService } from '@features/koans/data/services/koan-category.service';
import { KoansPersistenceService } from '@features/koans/data/services/koans-persistence.service';
import { KoansStore } from '@features/koans/data/store/koans.store';

@Injectable()
export class KoansFacade {
  private readonly store = inject(KoansStore);
  private readonly api = inject(KoanApiService);
  private readonly categoryService = inject(KoanCategoryService);
  private readonly persistence = inject(KoansPersistenceService);
  private readonly randomKoan$ = new Subject<Nullable<string>>();
  private readonly koanList$ = new Subject<void>();
  private readonly selectKoan$ = new Subject<string>();
  private readonly categories$ = new Subject<void>();

  public readonly randomKoan = this.store.randomKoan;
  public readonly koanList = this.store.koanList;
  public readonly filteredList = this.store.filteredList;
  public readonly groupedList = this.store.groupedList;
  public readonly categoryCounts = this.store.categoryCounts;
  public readonly tagCounts = this.store.tagCounts;
  public readonly selectedKoan = this.store.selectedKoan;
  public readonly loadingRandom = this.store.loadingRandom;
  public readonly loadingList = this.store.loadingList;
  public readonly loadingSelected = this.store.loadingSelected;
  public readonly loadingCategories = this.store.loadingCategories;
  public readonly error = this.store.error;
  public readonly query = this.store.query;
  public readonly activeCategory = this.store.activeCategory;
  public readonly activeTags = this.store.activeTags;
  public readonly readSet = this.store.readSet;
  public readonly categories = this.store.categories;

  constructor() {
    this.store.setReadSet(this.persistence.loadReadSet());

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

    this.categories$
      .pipe(
        tap(() => this.store.startLoadingCategories()),
        switchMap(() =>
          this.categoryService.getCategories().pipe(
            tap((categories) => this.store.setCategories(categories)),
            catchError((error: HttpErrorResponse) => {
              this.store.setError(resolveKoanError(error.status), 'categories');

              return EMPTY;
            })
          )
        ),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  public loadRandomKoan(exclude: Nullable<string>): void {
    this.randomKoan$.next(exclude);
  }

  public loadKoanList(): void {
    this.koanList$.next();
  }

  public loadCategories(): void {
    this.categories$.next();
  }

  public selectKoan(slug: string): void {
    this.selectKoan$.next(slug);
  }

  public setQuery(query: string): void {
    this.store.setQuery(query);
  }

  public setCategory(category: Nullable<string>): void {
    this.store.setCategory(category);
  }

  public toggleCategory(category: Nullable<string>): void {
    this.store.toggleCategory(category);
  }

  public toggleTag(tag: string): void {
    this.store.toggleTag(tag);
  }

  public clearTags(): void {
    this.store.clearTags();
  }

  public markRead(slug: string): void {
    this.store.markRead(slug);
    this.persistence.saveReadSet(this.store.readSet());
  }

  public pickRandomFromFiltered(): Nullable<string> {
    const current = this.store.selectedKoan()?.slug ?? null;
    const list = this.store.filteredList();
    const others = list.filter((k) => k.slug !== current);
    const pool = others.length ? others : list;

    if (!pool.length) {
      return null;
    }

    return pool[Math.floor(Math.random() * pool.length)].slug;
  }
}
