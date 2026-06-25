import {
  BRANCH_FORBIDDEN_PENALTY,
  BRANCH_HERETICAL_PENALTY,
  BRANCH_KEBAB_CASE_BONUS,
  BRANCH_LONG_NAME_PENALTY,
  BRANCH_SACRED_PREFIX_BONUS,
  BRANCH_SCORE_BASE,
  BRANCH_SHORT_NAME_PENALTY,
  BRANCH_SHORT_NAME_THRESHOLD,
  BRANCH_SPIRIT_LEVEL_WEIGHT,
} from '@features/sanctum/constants/branch-judgment-scoring.config';
import type { BranchNameInspection } from '@features/sanctum/data/models/branch-name-inspection.model';
import type { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { resolveRitualIntentScoreModifier } from '@features/sanctum/helpers/resolve-ritual-intent-score-modifier.helper';

export function calculateBranchScore(
  inspection: BranchNameInspection,
  spiritLevel: number,
  intent: RitualIntent
): number {
  let score = BRANCH_SCORE_BASE + Math.round(spiritLevel * BRANCH_SPIRIT_LEVEL_WEIGHT);

  if (inspection.normalizedBranch.length < BRANCH_SHORT_NAME_THRESHOLD) {
    score -= BRANCH_SHORT_NAME_PENALTY;
  }

  if (inspection.isLongBranch) {
    score -= BRANCH_LONG_NAME_PENALTY;
  }

  if (inspection.hasSacredPrefix) {
    score += BRANCH_SACRED_PREFIX_BONUS;
  }

  if (inspection.forbiddenMatch) {
    score -= BRANCH_FORBIDDEN_PENALTY;
  }

  if (inspection.hereticalMatch) {
    score -= BRANCH_HERETICAL_PENALTY;
  }

  if (inspection.isKebabCase) {
    score += BRANCH_KEBAB_CASE_BONUS;
  }

  score += resolveRitualIntentScoreModifier(intent, inspection.normalizedBranch);

  return score;
}
