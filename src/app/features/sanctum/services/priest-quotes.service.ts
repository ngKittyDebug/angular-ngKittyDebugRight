import { effect, inject, Service, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { firestore } from '@env/environment';
import { TranslocoService } from '@jsverse/transloco';
import { PRIEST_QUOTES_COLLECTION } from '@features/sanctum/constants/priest-quotes.config';
import type { PriestQuote } from '@features/sanctum/data/models/priest-quote.model';
import type { PriestQuotesByPool } from '@features/sanctum/data/models/priest-quotes-by-pool.model';
import { createEmptyPriestQuotesByPool } from '@features/sanctum/helpers/create-empty-priest-quotes-by-pool.helper';
import { groupPriestQuotesByPool } from '@features/sanctum/helpers/group-priest-quotes-by-pool.helper';
import { collection, getDocs, query, where } from 'firebase/firestore';

@Service({
  autoProvided: false,
})
export class PriestQuotesService {
  private readonly translocoService = inject(TranslocoService);
  private readonly cache = new Map<string, PriestQuotesByPool>();

  private readonly activeLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang(),
  });

  public readonly quotesByPool = signal<PriestQuotesByPool>(createEmptyPriestQuotesByPool());

  public constructor() {
    effect(() => {
      const lang = this.activeLang();

      void this.loadQuotes(lang).then((quotes) => {
        this.quotesByPool.set(quotes);
      });
    });
  }

  public getQuotesByPool(): Promise<PriestQuotesByPool> {
    return this.loadQuotes(this.activeLang() ?? this.translocoService.getActiveLang());
  }

  private async loadQuotes(lang: string): Promise<PriestQuotesByPool> {
    if (this.cache.has(lang)) {
      return this.cache.get(lang)!;
    }

    const priestQuotesQuery = query(collection(firestore, PRIEST_QUOTES_COLLECTION), where('lang', '==', lang));
    const snapshot = await getDocs(priestQuotesQuery);

    const quotes = snapshot.docs.map((document) => {
      const data = document.data();

      return {
        lang: data['lang'] as string,
        pool: data['pool'] as PriestQuote['pool'],
        text: data['text'] as string,
      } satisfies PriestQuote;
    });

    const groupedQuotes = groupPriestQuotesByPool(quotes);

    this.cache.set(lang, groupedQuotes);

    return groupedQuotes;
  }
}
