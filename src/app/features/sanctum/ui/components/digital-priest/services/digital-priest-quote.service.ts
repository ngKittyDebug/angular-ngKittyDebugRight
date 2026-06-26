import { resource, Service } from '@angular/core';
import type { DigitalPriestMood } from '@features/sanctum/ui/components/digital-priest/data/models/digital-priest-mood.model';
import { resolvePriestQuotePool } from '@features/sanctum/ui/components/digital-priest/helpers/resolve-priest-quote-pool.helper';
import { shuffleQuoteList } from '@features/sanctum/ui/components/digital-priest/helpers/shuffle-quote-list.helper';

interface QuotePickerState {
  poolId: string;
  queue: string[];
  quoteKey: string;
}

const EMPTY_QUOTE_PICKER_STATE: QuotePickerState = {
  poolId: '',
  queue: [],
  quoteKey: '',
};

@Service({
  autoProvided: false,
})
export class DigitalPriestQuoteService {
  public readonly quoteState = resource<QuotePickerState, null>({
    params: () => null,
    defaultValue: EMPTY_QUOTE_PICKER_STATE,
    loader: async () => EMPTY_QUOTE_PICKER_STATE,
  });

  public pick(mood: DigitalPriestMood, spiritLevel: number, isBusy: boolean): string {
    const pool = resolvePriestQuotePool(mood, spiritLevel, isBusy);
    const current = this.quoteState.value();
    const queue =
      current.poolId === pool.poolId && current.queue.length > 0
        ? [...current.queue]
        : shuffleQuoteList(pool.quoteList);
    const quoteKey = queue.pop() ?? pool.quoteList[0];

    this.quoteState.set({
      poolId: pool.poolId,
      queue,
      quoteKey,
    });

    return quoteKey;
  }
}
