import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { of, tap } from 'rxjs';

import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';
import type { KoanModel } from '@features/koans/data/models/koan.model';

@Injectable({ providedIn: 'root' })
export class KoanApiService {
  private readonly http = inject(HttpClient);
  private readonly cache = new Map<string, KoanModel>();

  public getRandomKoan(exclude?: string): Observable<KoanModel> {
    return this.http.get<KoanModel>('/.netlify/functions/koan-random', exclude ? { params: { exclude } } : undefined);
  }

  public getKoanList(): Observable<KoanListItemModel[]> {
    return this.http.get<KoanListItemModel[]>('/.netlify/functions/koan-list');
  }

  public getKoan(slug: string): Observable<KoanModel> {
    const hit = this.cache.get(slug);

    if (hit) {
      return of(hit);
    }

    return this.http
      .get<KoanModel>('/.netlify/functions/koan-get', { params: { slug } })
      .pipe(tap((koan) => this.cache.set(slug, koan)));
  }
}
