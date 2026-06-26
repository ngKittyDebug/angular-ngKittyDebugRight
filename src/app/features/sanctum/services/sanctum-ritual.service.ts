import { computed, effect, inject, Service, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import type { RitualRequest } from '@features/sanctum/data/models/ritual-request.model';
import type { RitualSessionState } from '@features/sanctum/data/models/ritual-session-state.model';
import { SanctumSoundPhase } from '@features/sanctum/data/models/sanctum-sound-phase.model';
import { createRitualTimelineStream } from '@features/sanctum/helpers/create-ritual-timeline-stream.helper';
import { resolveVerdictSoundPhase } from '@features/sanctum/helpers/resolve-verdict-sound-phase.helper';
import { SanctumSoundService } from '@features/sanctum/services/sanctum-sound.service';
import { EMPTY } from 'rxjs';

const EMPTY_RITUAL_SESSION: RitualSessionState = {
  litanyLines: [],
  judgment: null,
};

@Service({
  autoProvided: false,
})
export class SanctumRitualService {
  private readonly sanctumSound = inject(SanctumSoundService);
  private readonly _requestId = signal(0);
  private readonly _ritualRequest = signal<RitualRequest | undefined>(undefined);
  private lastLitanyLength = 0;

  public readonly ritualSession = rxResource({
    params: () => this._ritualRequest(),
    defaultValue: EMPTY_RITUAL_SESSION,
    stream: ({ params }) => {
      if (!params) {
        return EMPTY;
      }

      return createRitualTimelineStream(params);
    },
  });

  public readonly isJudging = computed(() => {
    if (this.ritualSession.value().judgment) {
      return false;
    }

    const status = this.ritualSession.status();

    return status === 'loading' || status === 'reloading';
  });

  public readonly litanyLines = computed(() => this.ritualSession.value().litanyLines);

  public readonly judgment = computed(() => this.ritualSession.value().judgment);

  public constructor() {
    effect(() => {
      const state = this.ritualSession.value();
      const status = this.ritualSession.status();

      if (status !== 'loading' && status !== 'reloading') {
        return;
      }

      if (state.litanyLines.length === 0 && this.lastLitanyLength === 0) {
        this.sanctumSound.play(SanctumSoundPhase.RITUAL_START);
      } else if (state.litanyLines.length > this.lastLitanyLength) {
        this.sanctumSound.play(SanctumSoundPhase.LITANY_TICK);
      }

      if (state.judgment) {
        this.sanctumSound.play(resolveVerdictSoundPhase(state.judgment.sanctity));
      }

      this.lastLitanyLength = state.litanyLines.length;
    });
  }

  public startRitual(branch: string, ritualIntent: RitualRequest['ritualIntent'], spiritLevel: number): void {
    this.lastLitanyLength = 0;
    this.ritualSession.set(EMPTY_RITUAL_SESSION);
    this._requestId.update((requestId) => requestId + 1);

    this._ritualRequest.set({
      branch,
      ritualIntent,
      spiritLevel,
      requestId: this._requestId(),
    });
  }
}
