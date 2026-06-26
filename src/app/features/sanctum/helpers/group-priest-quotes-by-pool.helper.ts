import type { PriestQuote } from '@features/sanctum/data/models/priest-quote.model';
import type { PriestQuotePoolId } from '@features/sanctum/data/models/priest-quote-pool-id.model';
import type { PriestQuotesByPool } from '@features/sanctum/data/models/priest-quotes-by-pool.model';
import { createEmptyPriestQuotesByPool } from '@features/sanctum/helpers/create-empty-priest-quotes-by-pool.helper';

function isPriestQuotePoolId(pool: string): pool is PriestQuotePoolId {
  return (
    pool === 'busy' ||
    pool === 'low_spirit' ||
    pool === 'idle' ||
    pool === 'preaching' ||
    pool === 'blessing' ||
    pool === 'damning'
  );
}

export function groupPriestQuotesByPool(quotes: readonly PriestQuote[]): PriestQuotesByPool {
  const grouped = createEmptyPriestQuotesByPool();

  for (const quote of quotes) {
    if (!isPriestQuotePoolId(quote.pool)) {
      continue;
    }

    grouped[quote.pool] = [...grouped[quote.pool], quote.text];
  }

  return grouped;
}
