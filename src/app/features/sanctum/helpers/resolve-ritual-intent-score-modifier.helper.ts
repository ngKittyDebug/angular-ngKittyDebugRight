import {
  RITUAL_INTENT_DEPLOY_SCORE_MODIFIER,
  RITUAL_INTENT_PENANCE_DEFAULT_PENALTY,
  RITUAL_INTENT_PENANCE_FIX_BONUS,
} from '@features/sanctum/constants/branch-judgment-scoring.config';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';

export function resolveRitualIntentScoreModifier(intent: RitualIntent, branchName: string): number {
  switch (intent) {
    case RitualIntent.DEPLOY:
      return RITUAL_INTENT_DEPLOY_SCORE_MODIFIER;

    case RitualIntent.PENANCE:
      return branchName.startsWith('fix/') ? RITUAL_INTENT_PENANCE_FIX_BONUS : RITUAL_INTENT_PENANCE_DEFAULT_PENALTY;

    default:
      return 0;
  }
}
