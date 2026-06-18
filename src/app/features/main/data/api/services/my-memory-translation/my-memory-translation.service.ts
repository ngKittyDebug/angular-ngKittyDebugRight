import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { catchError, forkJoin, map, of } from 'rxjs';

import type { TarotResponseApi } from '@features/main/data/api/models/deploy-tarot-response-api.model';
import type { MyMemoryTranslationResponseApi } from '@features/main/data/api/models/my-memory-translation-response-api.model';
import type { TarotCardApi } from '@features/main/data/api/models/tarot-card-api.model';
import { MY_MEMORY_TRANSLATION_URL } from '@features/main/data/api/tokens/my-memory-translation-url.token';
import { Languages } from '@core/models/languages.model';

@Injectable({ providedIn: 'root' })
export class MyMemoryTranslationService {
  private readonly httpClient = inject(HttpClient);
  private readonly url = inject(MY_MEMORY_TRANSLATION_URL);
  private readonly textEncoder = new TextEncoder();
  private readonly myMemoryTextByteLimit = 500;

  public translateReading(reading: TarotResponseApi, targetLang: string): Observable<TarotResponseApi> {
    const normalizedTargetLang = this.normalizeLanguage(targetLang);

    if (normalizedTargetLang === Languages.EN) {
      return of(reading);
    }

    return forkJoin({
      cards: this.translateCardList(reading.cards, normalizedTargetLang),
      verdictLabel: this.translateText(reading.verdict_label, normalizedTargetLang),
      verdictText: this.translateText(reading.verdict_text, normalizedTargetLang),
    }).pipe(
      map(({ cards, verdictLabel, verdictText }) => ({
        ...reading,
        cards,
        verdict_label: verdictLabel,
        verdict_text: verdictText,
      }))
    );
  }

  private translateCardList(cardList: TarotCardApi[], targetLang: string): Observable<TarotCardApi[]> {
    if (cardList.length === 0) {
      return of([]);
    }

    return forkJoin(cardList.map((card) => this.translateCard(card, targetLang)));
  }

  private translateCard(card: TarotCardApi, targetLang: string): Observable<TarotCardApi> {
    return forkJoin({
      name: this.translateText(card.name, targetLang),
      narrative: this.translateText(card.narrative, targetLang),
      positionLabel: this.translateText(card.position_label, targetLang),
    }).pipe(
      map(({ name, narrative, positionLabel }) => ({
        ...card,
        name,
        narrative,
        position_label: positionLabel,
      }))
    );
  }

  private translateText(text: string, targetLang: string): Observable<string> {
    if (!text.trim()) {
      return of(text);
    }

    const chunkList = this.createChunkList(text);

    return forkJoin(chunkList.map((chunk) => this.translateChunk(chunk, targetLang))).pipe(
      map((translatedChunkList) => translatedChunkList.join(' ')),
      catchError(() => of(text))
    );
  }

  private translateChunk(chunk: string, targetLang: string): Observable<string> {
    const parameters = new HttpParams().set('q', chunk).set('langpair', `${Languages.EN}|${targetLang}`);

    return this.httpClient.get<MyMemoryTranslationResponseApi>(this.url, { params: parameters }).pipe(
      map((response) => (response.responseStatus === 200 ? response.responseData.translatedText : chunk)),
      catchError(() => of(chunk))
    );
  }

  private createChunkList(text: string): string[] {
    const chunkList: string[] = [];
    let currentChunk = '';

    for (const word of text.split(' ')) {
      const nextChunk = currentChunk ? `${currentChunk} ${word}` : word;

      if (this.getByteLength(nextChunk) <= this.myMemoryTextByteLimit) {
        currentChunk = nextChunk;
        continue;
      }

      if (currentChunk) {
        chunkList.push(currentChunk);
      }

      currentChunk = this.getByteLength(word) <= this.myMemoryTextByteLimit ? word : this.trimToByteLimit(word);
    }

    if (currentChunk) {
      chunkList.push(currentChunk);
    }

    return chunkList;
  }

  private trimToByteLimit(text: string): string {
    let trimmedText = '';

    for (const symbol of text) {
      const nextText = `${trimmedText}${symbol}`;

      if (this.getByteLength(nextText) > this.myMemoryTextByteLimit) {
        return trimmedText;
      }

      trimmedText = nextText;
    }

    return trimmedText;
  }

  private getByteLength(text: string): number {
    return this.textEncoder.encode(text).length;
  }

  private normalizeLanguage(lang: string): string {
    const [language] = lang.toLowerCase().split('-');

    return language || Languages.EN;
  }
}
