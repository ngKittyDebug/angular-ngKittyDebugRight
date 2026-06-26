import { signal } from '@angular/core';
import { vi } from 'vitest';
import type { PriestQuotesByPool } from '@features/sanctum/data/models/priest-quotes-by-pool.model';
import { priestQuotesByPoolFixture } from '@features/sanctum/fixtures/priest-quotes-by-pool.fixture';
import type { PriestQuotesService } from '@features/sanctum/services/priest-quotes.service';

export const priestQuotesServiceMock = {
  quotesByPool: signal<PriestQuotesByPool>(priestQuotesByPoolFixture),
  getQuotesByPool: vi.fn().mockResolvedValue(priestQuotesByPoolFixture),
} as const satisfies Pick<PriestQuotesService, 'quotesByPool' | 'getQuotesByPool'>;
