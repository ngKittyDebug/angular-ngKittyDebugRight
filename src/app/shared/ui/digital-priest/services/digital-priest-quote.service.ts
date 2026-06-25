import { Injectable } from '@angular/core';
import type { DigitalPriestMood } from '@shared/ui/digital-priest/data/models/digital-priest-mood.model';
import { resolvePriestQuotePool } from '@shared/ui/digital-priest/helpers/resolve-priest-quote-pool.helper';
import { shuffleQuoteList } from '@shared/ui/digital-priest/helpers/shuffle-quote-list.helper';

@Injectable()
export class DigitalPriestQuoteService {
  private activePoolId: string | null = null;
  private quoteQueue: string[] = [];

  public pick(mood: DigitalPriestMood, spiritLevel: number, isBusy: boolean): string {
    const { poolId, quoteList } = resolvePriestQuotePool(mood, spiritLevel, isBusy);

    if (this.activePoolId !== poolId || this.quoteQueue.length === 0) {
      this.activePoolId = poolId;
      this.quoteQueue = shuffleQuoteList(quoteList);
    }

    return this.quoteQueue.pop() ?? quoteList[0];
  }
}
