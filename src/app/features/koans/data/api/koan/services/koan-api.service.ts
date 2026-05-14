import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import type { Observable } from 'rxjs';
import type { KoanApiResponse } from '@features/koans/data/api/koan/models/koan-api.model';
import type { KoanListItemModel, KoanModel } from '@features/koans/data/models/koan.model';
import { convertKoanApiResponseToKoanModel } from '@features/koans/data/api/koan/helpers/convert-koan-api-response-to-koan-model';
import { KoanBodyParserService } from '@features/koans/data/services/koan-body-parser.service';

@Injectable({ providedIn: 'root' })
export class KoanApiService {
  private readonly http = inject(HttpClient);
  private readonly bodyParser = inject(KoanBodyParserService);

  public getRandomKoan(): Observable<KoanModel> {
    return this.http
      .get<KoanApiResponse>('/.netlify/functions/koan-random')
      .pipe(map((response) => convertKoanApiResponseToKoanModel(response, this.bodyParser)));
  }

  public getKoanList(): Observable<KoanListItemModel[]> {
    return this.http.get<KoanListItemModel[]>('/.netlify/functions/koan-list');
  }

  public getKoan(slug: string): Observable<KoanModel> {
    return this.http
      .get<KoanApiResponse>('/.netlify/functions/koan-get', { params: { slug } })
      .pipe(map((response) => convertKoanApiResponseToKoanModel(response, this.bodyParser)));
  }
}
