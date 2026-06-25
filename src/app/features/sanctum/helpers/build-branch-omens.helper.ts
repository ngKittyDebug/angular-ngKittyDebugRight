import {
  BRANCH_OMEN_COUNT,
  BRANCH_OMEN_HIGH_SPIRIT_THRESHOLD,
  BRANCH_OMEN_LOW_SPIRIT_THRESHOLD,
} from '@features/sanctum/constants/branch-judgment-scoring.config';
import type { BranchNameInspection } from '@features/sanctum/data/models/branch-name-inspection.model';
import type { BranchOmen } from '@features/sanctum/data/models/branch-omen.model';
import { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { marker } from '@jsverse/transloco-keys-manager/marker';

export function buildBranchOmens(
  inspection: BranchNameInspection,
  spiritLevel: number,
  sanctity: BranchSanctity,
  intent: RitualIntent
): BranchOmen[] {
  const omens: BranchOmen[] = [];

  if (inspection.hasSacredPrefix) {
    omens.push({
      icon: '@tui.sparkles',
      sanctity: BranchSanctity.SACRED,
      messageKey: marker('sanctum.omens.sacred_prefix'),
    });
  }

  if (spiritLevel >= BRANCH_OMEN_HIGH_SPIRIT_THRESHOLD) {
    omens.push({
      icon: '@tui.flame',
      sanctity: BranchSanctity.SACRED,
      messageKey: marker('sanctum.omens.spirit_high'),
    });
  } else if (spiritLevel < BRANCH_OMEN_LOW_SPIRIT_THRESHOLD) {
    omens.push({
      icon: '@tui.cloud-off',
      sanctity: BranchSanctity.FORBIDDEN,
      messageKey: marker('sanctum.omens.spirit_low'),
    });
  }

  if (inspection.forbiddenMatch) {
    omens.push({
      icon: '@tui.ban',
      sanctity: BranchSanctity.FORBIDDEN,
      messageKey: marker('sanctum.omens.forbidden_mark'),
    });
  }

  if (inspection.hereticalMatch) {
    omens.push({
      icon: '@tui.alert-triangle',
      sanctity: BranchSanctity.HERETICAL,
      messageKey: marker('sanctum.omens.heretical_trace'),
    });
  }

  if (inspection.isKebabCase) {
    omens.push({
      icon: '@tui.check',
      sanctity: BranchSanctity.SACRED,
      messageKey: marker('sanctum.omens.kebab_aligned'),
    });
  }

  if (intent === RitualIntent.PENANCE) {
    omens.push({
      icon: '@tui.heart-handshake',
      sanctity,
      messageKey: marker('sanctum.omens.penance_rite'),
    });
  }

  if (omens.length < BRANCH_OMEN_COUNT) {
    omens.push({
      icon: '@tui.git-branch',
      sanctity,
      messageKey: marker(`sanctum.omens.fallback.${sanctity}`),
    });
  }

  return omens.slice(0, BRANCH_OMEN_COUNT);
}
