import { computed, DestroyRef, inject, Service, signal } from '@angular/core';
import { CandlesService } from '@core/services/candles/candles.service';
import type { BranchJudgment } from '@features/sanctum/data/models/branch-judgment.model';
import type { BranchLitanyLine } from '@features/sanctum/data/models/branch-litany-line.model';
import { SanctumSoundPhase } from '@features/sanctum/data/models/sanctum-sound-phase.model';
import { analyzeBranchName } from '@features/sanctum/helpers/analyze-branch-name.helper';
import { resolveVerdictSoundPhase } from '@features/sanctum/helpers/resolve-verdict-sound-phase.helper';
import { runRitualTimeline } from '@features/sanctum/helpers/run-ritual-timeline.helper';
import { SanctumFormService } from '@features/sanctum/services/sanctum-form.service';
import { SanctumSoundService } from '@features/sanctum/services/sanctum-sound.service';
import { resolvePriestMood } from '@shared/ui/digital-priest/helpers/resolve-priest-mood.helper';

@Service({
  autoProvided: false,
})
export class SanctumPageFacade {
  private readonly candlesService = inject(CandlesService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly sanctumSound = inject(SanctumSoundService);

  private readonly _isJudging = signal(false);
  private readonly _judgment = signal<BranchJudgment | null>(null);
  private readonly _litanyLines = signal<BranchLitanyLine[]>([]);

  public readonly sanctumForm = inject(SanctumFormService).sanctumForm;
  public readonly isJudging = this._isJudging.asReadonly();
  public readonly judgment = this._judgment.asReadonly();
  public readonly litanyLines = this._litanyLines.asReadonly();
  public readonly blessingLevel = this.candlesService.blessingLevel;
  public readonly priestMood = computed(() => resolvePriestMood(this._isJudging(), this._judgment()));

  public invokeJudgment(): void {
    if (this.sanctumForm.invalid || this._isJudging()) {
      return;
    }

    const { branch, ritualIntent } = this.sanctumForm.getRawValue();
    const ritual = analyzeBranchName(branch, this.candlesService.blessingLevel(), ritualIntent);

    this._isJudging.set(true);
    this._judgment.set(null);
    this._litanyLines.set([]);
    this.sanctumSound.play(SanctumSoundPhase.RITUAL_START);

    runRitualTimeline(
      ritual,
      (line) => {
        this._litanyLines.update((lines) => [...lines, line]);
        this.sanctumSound.play(SanctumSoundPhase.LITANY_TICK);
      },
      (judgment) => {
        this._judgment.set(judgment);
        this._isJudging.set(false);
        this.sanctumSound.play(resolveVerdictSoundPhase(judgment.sanctity));
      },
      this.destroyRef
    );
  }

  public onPriestRaged(): void {
    this.sanctumSound.play(SanctumSoundPhase.PRIEST_RAGE);
  }
}
