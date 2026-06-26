import {
  PRIEST_LOW_SPIRIT_CHANCE,
  PRIEST_LOW_SPIRIT_THRESHOLD,
} from '@features/sanctum/constants/priest-quotes.config';
import type { PriestQuotesByPool } from '@features/sanctum/data/models/priest-quotes-by-pool.model';
import type { DigitalPriestMood } from '@features/sanctum/data/models/digital-priest-mood.model';

export interface PriestQuotePool {
  poolId: string;
  quoteList: readonly string[];
}

export function resolvePriestQuotePool(
  quotesByPool: PriestQuotesByPool,
  mood: DigitalPriestMood,
  spiritLevel: number,
  isBusy: boolean,
  randomValue = Math.random()
): PriestQuotePool {
  if (isBusy) {
    return { poolId: 'busy', quoteList: quotesByPool.busy };
  }

  if (spiritLevel < PRIEST_LOW_SPIRIT_THRESHOLD && randomValue < PRIEST_LOW_SPIRIT_CHANCE) {
    return { poolId: 'low_spirit', quoteList: quotesByPool.low_spirit };
  }

  return { poolId: mood, quoteList: quotesByPool[mood] };
}
