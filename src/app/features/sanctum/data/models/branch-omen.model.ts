import type { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';

export interface BranchOmen {
  icon: string;
  sanctity: BranchSanctity;
  messageKey: string;
}
