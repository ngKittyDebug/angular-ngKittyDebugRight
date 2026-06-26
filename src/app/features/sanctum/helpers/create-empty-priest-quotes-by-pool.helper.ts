import type { PriestQuotesByPool } from '@features/sanctum/data/models/priest-quotes-by-pool.model';

export function createEmptyPriestQuotesByPool(): PriestQuotesByPool {
  return {
    busy: [],
    low_spirit: [],
    idle: [],
    preaching: [],
    blessing: [],
    damning: [],
  };
}
