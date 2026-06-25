import { describe, expect, it } from 'vitest';

import { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';
import { MergeFate } from '@features/sanctum/data/models/merge-fate.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { analyzeBranchName } from '@features/sanctum/helpers/analyze-branch-name.helper';

describe('analyzeBranchName', () => {
  it('должен считать conventional branch sacred', () => {
    const judgment = analyzeBranchName('feat/sanctum-branch-blessing', 80, RitualIntent.MERGE, 0);

    expect(judgment.sanctity).toBe(BranchSanctity.SACRED);
    expect(judgment.score).toBeGreaterThanOrEqual(70);
    expect(judgment.mergeFate).toBe(MergeFate.GREEN);
    expect(judgment.omens.length).toBe(3);
    expect(judgment.litany.length).toBeGreaterThan(4);
  });

  it('должен считать wip branch forbidden', () => {
    const judgment = analyzeBranchName('wip-temp-stuff', 10, RitualIntent.MERGE, 0);

    expect(judgment.sanctity).toBe(BranchSanctity.FORBIDDEN);
    expect(judgment.mergeFate).toBe(MergeFate.RED);
  });

  it('должен учитывать уровень духа в оценке', () => {
    const lowSpirit = analyzeBranchName('refactor/module', 5, RitualIntent.MERGE, 0);
    const highSpirit = analyzeBranchName('refactor/module', 95, RitualIntent.MERGE, 0);

    expect(highSpirit.score).toBeGreaterThan(lowSpirit.score);
  });

  it('должен учитывать намерение ритуала', () => {
    const penanceFix = analyzeBranchName('fix/altar-scroll', 50, RitualIntent.PENANCE, 0);
    const deploy = analyzeBranchName('fix/altar-scroll', 50, RitualIntent.DEPLOY, 0);

    expect(penanceFix.score).toBeGreaterThan(deploy.score);
  });
});
