import {
  MERGE_FATE_AMBER_SCORE_THRESHOLD,
  MERGE_FATE_DEPLOY_SCORE_THRESHOLD,
  MERGE_FATE_FORBIDDEN_SCORE_THRESHOLD,
  MERGE_FATE_GREEN_SCORE_THRESHOLD,
} from '@features/sanctum/constants/branch-judgment-scoring.config';
import { MergeFate } from '@features/sanctum/data/models/merge-fate.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';

export function resolveMergeFate(score: number, intent: RitualIntent, hasForbidden: boolean): MergeFate {
  if (hasForbidden || score < MERGE_FATE_FORBIDDEN_SCORE_THRESHOLD) {
    return MergeFate.RED;
  }

  if (intent === RitualIntent.DEPLOY && score < MERGE_FATE_DEPLOY_SCORE_THRESHOLD) {
    return MergeFate.RED;
  }

  if (score >= MERGE_FATE_GREEN_SCORE_THRESHOLD) {
    return MergeFate.GREEN;
  }

  if (score >= MERGE_FATE_AMBER_SCORE_THRESHOLD) {
    return MergeFate.AMBER;
  }

  return MergeFate.RED;
}
