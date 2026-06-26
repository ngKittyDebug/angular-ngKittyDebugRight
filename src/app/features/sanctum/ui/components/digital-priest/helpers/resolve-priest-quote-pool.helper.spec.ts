import { describe, expect, it } from 'vitest';

import { priestQuotesByPoolFixture } from '@features/sanctum/fixtures/priest-quotes-by-pool.fixture';
import { DigitalPriestMood } from '@features/sanctum/data/models/digital-priest-mood.model';
import { resolvePriestQuotePool } from '@features/sanctum/ui/components/digital-priest/helpers/resolve-priest-quote-pool.helper';

describe('resolvePriestQuotePool', () => {
  it('должен возвращать busy-пул во время ритуала', () => {
    expect(resolvePriestQuotePool(priestQuotesByPoolFixture, DigitalPriestMood.IDLE, 80, true, 0).poolId).toBe('busy');
  });

  it('должен возвращать mood-пул по настроению', () => {
    expect(resolvePriestQuotePool(priestQuotesByPoolFixture, DigitalPriestMood.BLESSING, 80, false, 0).poolId).toBe(
      DigitalPriestMood.BLESSING
    );
  });

  it('должен учитывать низкий уровень духа', () => {
    expect(resolvePriestQuotePool(priestQuotesByPoolFixture, DigitalPriestMood.IDLE, 10, false, 0.2).poolId).toBe(
      'low_spirit'
    );
  });
});
