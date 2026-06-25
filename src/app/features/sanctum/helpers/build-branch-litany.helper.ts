import type { BranchNameInspection } from '@features/sanctum/data/models/branch-name-inspection.model';
import type { BranchLitanyLine } from '@features/sanctum/data/models/branch-litany-line.model';
import type { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { marker } from '@jsverse/transloco-keys-manager/marker';

export function buildBranchLitany(
  inspection: BranchNameInspection,
  spiritLevel: number,
  intent: RitualIntent
): BranchLitanyLine[] {
  const lines: BranchLitanyLine[] = [
    { key: marker('sanctum.litany.boot') },
    {
      key: marker('sanctum.litany.target'),
      params: { branch: inspection.normalizedBranch },
    },
    {
      key: marker('sanctum.litany.intent'),
      params: { intent },
    },
    {
      key: marker('sanctum.litany.spirit'),
      params: { level: spiritLevel },
    },
    {
      key: marker(inspection.hasSacredPrefix ? 'sanctum.litany.convention_found' : 'sanctum.litany.convention_missing'),
    },
  ];

  if (inspection.forbiddenMatch) {
    lines.push({
      key: marker('sanctum.litany.forbidden'),
      params: { pattern: inspection.forbiddenMatch.source },
    });
  }

  if (inspection.hereticalMatch) {
    lines.push({
      key: marker('sanctum.litany.heresy'),
      params: { pattern: inspection.hereticalMatch.source },
    });
  }

  if (inspection.isKebabCase) {
    lines.push({ key: marker('sanctum.litany.kebab') });
  }

  if (inspection.isLongBranch) {
    lines.push({ key: marker('sanctum.litany.length_warn') });
  }

  lines.push({ key: marker('sanctum.litany.verdict_pending') });

  return lines;
}
