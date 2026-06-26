import type { BranchJudgment } from '@features/sanctum/data/models/branch-judgment.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { analyzeBranchName } from '@features/sanctum/helpers/analyze-branch-name.helper';

export const sacredBranchJudgmentFixture = analyzeBranchName(
  'feat/sanctum-branch-blessing',
  0,
  RitualIntent.MERGE,
  0
) satisfies BranchJudgment;
