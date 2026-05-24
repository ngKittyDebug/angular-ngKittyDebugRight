import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { map, of, tap } from 'rxjs';
import { TranslocoService } from '@jsverse/transloco';

import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';

interface RawKoanCategory {
  id: string;
  kanji: string;
}

@Injectable({ providedIn: 'root' })
export class KoanCategoryService {
  private readonly http = inject(HttpClient);
  private readonly transloco = inject(TranslocoService);
  private readonly cache = new Map<string, KoanCategoryMeta[]>();

  public getCategories(): Observable<KoanCategoryMeta[]> {
    const lang = this.transloco.getActiveLang();
    const hit = this.cache.get(lang);

    if (hit) {
      return of(hit);
    }

    return this.http.get<RawKoanCategory[]>('/.netlify/functions/koan-categories', { params: { lang } }).pipe(
      map((items) => items.map(({ id, kanji }) => ({ id, kanji, label: id }))),
      tap((categories) => this.cache.set(lang, categories))
    );
  }

  public invalidate(): void {
    this.cache.clear();
  }
}
