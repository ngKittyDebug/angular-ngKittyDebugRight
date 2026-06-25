import {
  BRANCH_FORBIDDEN_PATTERNS,
  BRANCH_HERETICAL_PATTERNS,
  BRANCH_KEBAB_CASE_PATTERN,
  BRANCH_SACRED_PREFIXES,
} from '@features/sanctum/constants/branch-judgment-patterns.config';
import { BRANCH_LONG_NAME_THRESHOLD } from '@features/sanctum/constants/branch-judgment-scoring.config';
import type { BranchNameInspection } from '@features/sanctum/data/models/branch-name-inspection.model';

export function inspectBranchName(branchName: string): BranchNameInspection {
  const normalizedBranch = branchName.trim();

  return {
    normalizedBranch,
    hasSacredPrefix: BRANCH_SACRED_PREFIXES.some((prefix) => normalizedBranch.startsWith(prefix)),
    forbiddenMatch: BRANCH_FORBIDDEN_PATTERNS.find((pattern) => pattern.test(normalizedBranch)),
    hereticalMatch: BRANCH_HERETICAL_PATTERNS.find((pattern) => pattern.test(normalizedBranch)),
    isKebabCase: BRANCH_KEBAB_CASE_PATTERN.test(normalizedBranch),
    isLongBranch: normalizedBranch.length > BRANCH_LONG_NAME_THRESHOLD,
  };
}
