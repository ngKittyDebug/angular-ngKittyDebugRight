import { computed, inject, Service } from '@angular/core';
import { CandlesService } from '@core/services/candles/candles.service';
import { RITUAL_INTENT_OPTIONS } from '@features/sanctum/constants/ritual-intent-options.config';
import { SanctumSoundPhase } from '@features/sanctum/data/models/sanctum-sound-phase.model';
import { resolvePriestMood } from '@features/sanctum/helpers/resolve-priest-mood.helper';
import { SanctumFormService } from '@features/sanctum/services/sanctum-form.service';
import { SanctumRitualService } from '@features/sanctum/services/sanctum-ritual.service';
import { SanctumSoundService } from '@features/sanctum/services/sanctum-sound.service';

@Service({
  autoProvided: false,
})
export class SanctumPageFacade {
  private readonly candlesService = inject(CandlesService);
  private readonly sanctumRitual = inject(SanctumRitualService);
  private readonly sanctumSound = inject(SanctumSoundService);

  public readonly sanctumForm = inject(SanctumFormService).sanctumForm;
  public readonly isJudging = this.sanctumRitual.isJudging;
  public readonly judgment = this.sanctumRitual.judgment;
  public readonly litanyLines = this.sanctumRitual.litanyLines;
  public readonly blessingLevel = this.candlesService.blessingLevel;
  public readonly ritualIntentOptions = RITUAL_INTENT_OPTIONS;
  public readonly priestMood = computed(() => resolvePriestMood(this.isJudging(), this.judgment()));

  public invokeJudgment(): void {
    if (this.sanctumForm.invalid || this.isJudging()) {
      return;
    }

    const { branch, ritualIntent } = this.sanctumForm.getRawValue();

    this.sanctumRitual.startRitual(branch, ritualIntent, this.candlesService.blessingLevel());
  }

  public onPriestRaged(): void {
    this.sanctumSound.play(SanctumSoundPhase.PRIEST_RAGE);
  }
}
