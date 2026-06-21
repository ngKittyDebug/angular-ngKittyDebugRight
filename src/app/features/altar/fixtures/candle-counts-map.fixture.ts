import { createEmptyCandleCounts } from '@core/services/candles/create-empty-candle-counts.helper';
import { CandleId } from '@core/services/candles/models/candle-id.model';
import type { CandleCounts } from '@core/services/candles/models/candle-counts.model';

export const candleCountsMapFixture = {
  ...createEmptyCandleCounts(),
  [CandleId.DEPLOY]: 3,
  [CandleId.BUG]: 1,
} as const satisfies CandleCounts;
