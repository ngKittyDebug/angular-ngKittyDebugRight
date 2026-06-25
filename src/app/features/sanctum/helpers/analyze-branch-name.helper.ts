import { BRANCH_SCORE_MAX, BRANCH_SCORE_MIN } from '@features/sanctum/constants/branch-judgment-scoring.config';
import type { BranchJudgment } from '@features/sanctum/data/models/branch-judgment.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { buildBranchLitany } from '@features/sanctum/helpers/build-branch-litany.helper';
import { buildBranchOmens } from '@features/sanctum/helpers/build-branch-omens.helper';
import { calculateBranchScore } from '@features/sanctum/helpers/calculate-branch-score.helper';
import { inspectBranchName } from '@features/sanctum/helpers/inspect-branch-name.helper';
import { resolveBranchProphecyKey } from '@features/sanctum/helpers/resolve-branch-prophecy-key.helper';
import { resolveBranchSanctity } from '@features/sanctum/helpers/resolve-branch-sanctity.helper';
import { resolveMergeFate } from '@features/sanctum/helpers/resolve-merge-fate.helper';

export function analyzeBranchName(
  branchName: string,
  spiritLevel: number,
  intent: RitualIntent = RitualIntent.MERGE,
  randomValue = Math.random()
): BranchJudgment {
  const inspection = inspectBranchName(branchName);
  const score = Math.min(
    BRANCH_SCORE_MAX,
    Math.max(BRANCH_SCORE_MIN, calculateBranchScore(inspection, spiritLevel, intent))
  );
  const sanctity = resolveBranchSanctity(score);
  const mergeFate = resolveMergeFate(score, intent, Boolean(inspection.forbiddenMatch));

  return {
    branchName: inspection.normalizedBranch,
    sanctity,
    score,
    prophecyKey: resolveBranchProphecyKey(sanctity, randomValue),
    intent,
    mergeFate,
    omens: buildBranchOmens(inspection, spiritLevel, sanctity, intent),
    litany: buildBranchLitany(inspection, spiritLevel, intent),
  };
}
