import { inject, Service, signal } from '@angular/core';
import type { DigitalPriestMood } from '@features/sanctum/data/models/digital-priest-mood.model';
import { resolvePriestQuotePool } from '@features/sanctum/ui/components/digital-priest/helpers/resolve-priest-quote-pool.helper';
import { shuffleQuoteList } from '@features/sanctum/ui/components/digital-priest/helpers/shuffle-quote-list.helper';
import { PriestQuotesService } from '@features/sanctum/services/priest-quotes.service';

interface QuotePickerState {
  poolId: string;
  queue: string[];
}

const EMPTY_QUOTE_PICKER_STATE: QuotePickerState = {
  poolId: '',
  queue: [],
};

@Service({
  autoProvided: false,
})
export class DigitalPriestQuoteService {
  private readonly priestQuotes = inject(PriestQuotesService);
  private readonly pickerState = signal<QuotePickerState>(EMPTY_QUOTE_PICKER_STATE);

  public async pick(mood: DigitalPriestMood, spiritLevel: number, isBusy: boolean): Promise<string> {
    const quotesByPool = await this.priestQuotes.getQuotesByPool();
    const pool = resolvePriestQuotePool(quotesByPool, mood, spiritLevel, isBusy);

    if (pool.quoteList.length === 0) {
      return '';
    }

    const current = this.pickerState();
    const queue =
      current.poolId === pool.poolId && current.queue.length > 0
        ? [...current.queue]
        : shuffleQuoteList(pool.quoteList);
    const quoteText = queue.pop() ?? pool.quoteList[0];

    this.pickerState.set({
      poolId: pool.poolId,
      queue,
    });

    return quoteText;
  }
}
