import { describe, expect, it } from 'vitest';

import { DigitalPriestMood } from '@shared/ui/digital-priest/data/models/digital-priest-mood.model';
import { resolvePriestQuotePool } from '@shared/ui/digital-priest/helpers/resolve-priest-quote-pool.helper';

describe('resolvePriestQuotePool', () => {
  it('должен возвращать busy-пул во время ритуала', () => {
    expect(resolvePriestQuotePool(DigitalPriestMood.IDLE, 80, true, 0).poolId).toBe('busy');
  });

  it('должен возвращать mood-пул по настроению', () => {
    expect(resolvePriestQuotePool(DigitalPriestMood.BLESSING, 80, false, 0).poolId).toBe(DigitalPriestMood.BLESSING);
  });

  it('должен учитывать низкий уровень духа', () => {
    expect(resolvePriestQuotePool(DigitalPriestMood.IDLE, 10, false, 0.2).poolId).toBe('low_spirit');
  });
});
