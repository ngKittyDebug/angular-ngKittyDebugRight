import {
  PRIEST_BUSY_QUOTES,
  PRIEST_LOW_SPIRIT_CHANCE,
  PRIEST_LOW_SPIRIT_QUOTES,
  PRIEST_LOW_SPIRIT_THRESHOLD,
  PRIEST_MOOD_QUOTES,
} from '@shared/ui/digital-priest/constants/priest-quotes.config';
import type { DigitalPriestMood } from '@shared/ui/digital-priest/data/models/digital-priest-mood.model';

export interface PriestQuotePool {
  poolId: string;
  quoteList: readonly string[];
}

export function resolvePriestQuotePool(
  mood: DigitalPriestMood,
  spiritLevel: number,
  isBusy: boolean,
  randomValue = Math.random()
): PriestQuotePool {
  if (isBusy) {
    return { poolId: 'busy', quoteList: PRIEST_BUSY_QUOTES };
  }

  if (spiritLevel < PRIEST_LOW_SPIRIT_THRESHOLD && randomValue < PRIEST_LOW_SPIRIT_CHANCE) {
    return { poolId: 'low_spirit', quoteList: PRIEST_LOW_SPIRIT_QUOTES };
  }

  return { poolId: mood, quoteList: PRIEST_MOOD_QUOTES[mood] };
}
