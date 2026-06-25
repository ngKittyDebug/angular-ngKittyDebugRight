export interface BranchNameInspection {
  normalizedBranch: string;
  hasSacredPrefix: boolean;
  forbiddenMatch?: RegExp;
  hereticalMatch?: RegExp;
  isKebabCase: boolean;
  isLongBranch: boolean;
}
