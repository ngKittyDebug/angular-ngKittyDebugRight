import { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';
import { marker } from '@jsverse/transloco-keys-manager/marker';

export const BRANCH_PROPHECY_KEYS: Record<BranchSanctity, readonly string[]> = {
  [BranchSanctity.SACRED]: [
    marker('sanctum.prophecies.sacred.0'),
    marker('sanctum.prophecies.sacred.1'),
    marker('sanctum.prophecies.sacred.2'),
  ],
  [BranchSanctity.HERETICAL]: [
    marker('sanctum.prophecies.heretical.0'),
    marker('sanctum.prophecies.heretical.1'),
    marker('sanctum.prophecies.heretical.2'),
  ],
  [BranchSanctity.FORBIDDEN]: [
    marker('sanctum.prophecies.forbidden.0'),
    marker('sanctum.prophecies.forbidden.1'),
    marker('sanctum.prophecies.forbidden.2'),
  ],
};
