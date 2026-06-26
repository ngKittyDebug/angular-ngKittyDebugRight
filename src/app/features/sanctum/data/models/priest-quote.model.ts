import type { PriestQuotePoolId } from '@features/sanctum/data/models/priest-quote-pool-id.model';

export interface PriestQuote {
  lang: string;
  pool: PriestQuotePoolId;
  text: string;
}
