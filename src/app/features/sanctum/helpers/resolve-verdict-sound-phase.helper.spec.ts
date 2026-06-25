import { describe, expect, it } from 'vitest';

import { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';
import { SanctumSoundPhase } from '@features/sanctum/data/models/sanctum-sound-phase.model';
import { resolveVerdictSoundPhase } from '@features/sanctum/helpers/resolve-verdict-sound-phase.helper';

describe('resolveVerdictSoundPhase', () => {
  it('должен маппить вердикт на фазу звука', () => {
    expect(resolveVerdictSoundPhase(BranchSanctity.SACRED)).toBe(SanctumSoundPhase.VERDICT_SACRED);
    expect(resolveVerdictSoundPhase(BranchSanctity.HERETICAL)).toBe(SanctumSoundPhase.VERDICT_HERETICAL);
    expect(resolveVerdictSoundPhase(BranchSanctity.FORBIDDEN)).toBe(SanctumSoundPhase.VERDICT_FORBIDDEN);
  });
});
