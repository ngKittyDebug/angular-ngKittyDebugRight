import { BRANCH_PROPHECY_KEYS } from '@features/sanctum/constants/branch-prophecy-keys.config';
import type { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';

export function resolveBranchProphecyKey(sanctity: BranchSanctity, randomValue: number): string {
  const prophecyKeys = BRANCH_PROPHECY_KEYS[sanctity];
  const prophecyIndex = Math.floor(randomValue * prophecyKeys.length);

  return prophecyKeys[prophecyIndex];
}
