import {
  BRANCH_SANCTITY_HERETICAL_THRESHOLD,
  BRANCH_SANCTITY_SACRED_THRESHOLD,
} from '@features/sanctum/constants/branch-judgment-scoring.config';
import { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';

export function resolveBranchSanctity(score: number): BranchSanctity {
  if (score >= BRANCH_SANCTITY_SACRED_THRESHOLD) {
    return BranchSanctity.SACRED;
  }

  if (score >= BRANCH_SANCTITY_HERETICAL_THRESHOLD) {
    return BranchSanctity.HERETICAL;
  }

  return BranchSanctity.FORBIDDEN;
}
