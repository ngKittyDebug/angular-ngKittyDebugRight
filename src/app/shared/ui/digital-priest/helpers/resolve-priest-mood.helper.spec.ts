import { describe, expect, it } from 'vitest';

import { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { analyzeBranchName } from '@features/sanctum/helpers/analyze-branch-name.helper';
import { DigitalPriestMood } from '@shared/ui/digital-priest/data/models/digital-priest-mood.model';
import { resolvePriestMood } from '@shared/ui/digital-priest/helpers/resolve-priest-mood.helper';

describe('resolvePriestMood', () => {
  it('должен возвращать preaching во время ритуала', () => {
    expect(resolvePriestMood(true, null)).toBe(DigitalPriestMood.PREACHING);
  });

  it('должен возвращать blessing для sacred-вердикта', () => {
    const judgment = analyzeBranchName('feat/sanctum-branch-blessing', 0, RitualIntent.MERGE, 0);

    expect(resolvePriestMood(false, judgment)).toBe(DigitalPriestMood.BLESSING);
    expect(judgment.sanctity).toBe(BranchSanctity.SACRED);
  });
});
