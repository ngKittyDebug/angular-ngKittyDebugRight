import { describe, expect, it } from 'vitest';

import type { PriestQuote } from '@features/sanctum/data/models/priest-quote.model';
import { priestQuotesByPoolFixture } from '@features/sanctum/fixtures/priest-quotes-by-pool.fixture';
import { groupPriestQuotesByPool } from '@features/sanctum/helpers/group-priest-quotes-by-pool.helper';
import { DigitalPriestMood } from '@features/sanctum/data/models/digital-priest-mood.model';

describe('groupPriestQuotesByPool', () => {
  it('должен группировать цитаты по пулам', () => {
    const grouped = groupPriestQuotesByPool([
      { lang: 'en', pool: 'busy', text: 'Busy quote' },
      { lang: 'en', pool: DigitalPriestMood.IDLE, text: 'Idle quote' },
      { lang: 'en', pool: 'unknown' as PriestQuote['pool'], text: 'Ignored quote' },
    ]);

    expect(grouped.busy).toEqual(['Busy quote']);
    expect(grouped[DigitalPriestMood.IDLE]).toEqual(['Idle quote']);
    expect(grouped[DigitalPriestMood.BLESSING]).toEqual([]);
  });

  it('должен совпадать с фикстурой при разворачивании', () => {
    const flatQuotes = [
      ...priestQuotesByPoolFixture.busy.map((text) => ({ lang: 'en', pool: 'busy' as const, text })),
      ...priestQuotesByPoolFixture[DigitalPriestMood.IDLE].map((text) => ({
        lang: 'en',
        pool: DigitalPriestMood.IDLE,
        text,
      })),
    ];

    expect(groupPriestQuotesByPool(flatQuotes).busy).toEqual(priestQuotesByPoolFixture.busy);
    expect(groupPriestQuotesByPool(flatQuotes)[DigitalPriestMood.IDLE]).toEqual(
      priestQuotesByPoolFixture[DigitalPriestMood.IDLE]
    );
  });
});
