import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import type { Observable } from 'rxjs';
import type { KoanListItemModel, KoanModel } from '@features/koans/data/models/koan.model';
import { KoanBodyParserService } from '@features/koans/data/services/koan-body-parser.service';

interface RawKoanResponse {
  frontmatter: Omit<KoanModel, 'body' | 'segments'>;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class KoanApiService {
  private readonly http = inject(HttpClient);
  private readonly bodyParser = inject(KoanBodyParserService);

  public getRandomKoan(): Observable<KoanModel> {
    return this.http
      .get<RawKoanResponse>('/.netlify/functions/random-koan')
      .pipe(map((raw) => this.buildKoanModel(raw)));
  }

  public getKoanList(): Observable<KoanListItemModel[]> {
    return this.http.get<KoanListItemModel[]>('/.netlify/functions/koans-list');
  }

  public getKoan(slug: string): Observable<KoanModel> {
    return this.http
      .get<RawKoanResponse>(`/.netlify/functions/get-koan?slug=${slug}`)
      .pipe(map((raw) => this.buildKoanModel(raw)));
  }

  private buildKoanModel(raw: RawKoanResponse): KoanModel {
    return {
      ...raw.frontmatter,
      body: raw.body,
      segments: this.bodyParser.parse(raw.body),
    };
  }
}
