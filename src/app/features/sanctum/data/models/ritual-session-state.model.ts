import type { BranchJudgment } from '@features/sanctum/data/models/branch-judgment.model';
import type { BranchLitanyLine } from '@features/sanctum/data/models/branch-litany-line.model';

export interface RitualSessionState {
  litanyLines: BranchLitanyLine[];
  judgment: BranchJudgment | null;
}
