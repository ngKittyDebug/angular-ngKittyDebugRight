import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';
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

  public getCategories(): Observable<KoanCategoryMeta[]> {
    return this.http
      .get<RawKoanCategory[]>('/.netlify/functions/koan-categories', {
        params: { lang: this.transloco.getActiveLang() },
      })
      .pipe(map((items) => items.map(({ id, kanji }) => ({ id, kanji, label: id }))));
  }
}
