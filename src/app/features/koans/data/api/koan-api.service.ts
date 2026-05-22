import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { of, tap } from 'rxjs';
import { TranslocoService } from '@jsverse/transloco';

import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';
import type { KoanModel } from '@features/koans/data/models/koan.model';

@Injectable({ providedIn: 'root' })
export class KoanApiService {
  private readonly http = inject(HttpClient);
  private readonly transloco = inject(TranslocoService);
  private readonly cache = new Map<string, KoanModel>();

  public getRandomKoan(exclude?: string): Observable<KoanModel> {
    const parameters: Record<string, string> = { lang: this.lang };

    if (exclude) {
      parameters['exclude'] = exclude;
    }

    return this.http.get<KoanModel>('/.netlify/functions/koan-random', { params: parameters });
  }

  public getKoanList(): Observable<KoanListItemModel[]> {
    return this.http.get<KoanListItemModel[]>('/.netlify/functions/koan-list', { params: { lang: this.lang } });
  }

  public getKoan(slug: string): Observable<KoanModel> {
    const key = `${this.lang}:${slug}`;
    const hit = this.cache.get(key);

    if (hit) {
      return of(hit);
    }

    return this.http
      .get<KoanModel>('/.netlify/functions/koan-get', { params: { slug, lang: this.lang } })
      .pipe(tap((koan) => this.cache.set(key, koan)));
  }

  private get lang(): string {
    return this.transloco.getActiveLang();
  }
}
