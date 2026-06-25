import { Service } from '@angular/core';
import type { SanctumSoundPhase } from '@features/sanctum/data/models/sanctum-sound-phase.model';
import { createSanctumAudioBus, scheduleSanctumPhase } from '@features/sanctum/helpers/schedule-sanctum-phase.helper';
import { isPrefersReducedMotion } from '@shared/helpers/is-prefers-reduced-motion.helper';

@Service({
  autoProvided: false,
})
export class SanctumSoundService {
  private context: AudioContext | null = null;
  private destination: AudioNode | null = null;

  public play(phase: SanctumSoundPhase): void {
    if (isPrefersReducedMotion()) {
      return;
    }

    void this.playPhase(phase).catch(() => undefined);
  }

  private async playPhase(phase: SanctumSoundPhase): Promise<void> {
    const context = await this.ensureContext();

    if (!context || !this.destination) {
      return;
    }

    scheduleSanctumPhase(context, this.destination, phase);
  }

  private async ensureContext(): Promise<AudioContext | null> {
    if (globalThis.AudioContext === undefined) {
      return null;
    }

    if (!this.context) {
      this.context = new AudioContext();
      this.destination = createSanctumAudioBus(this.context);
    }

    if (this.context.state === 'suspended') {
      await this.context.resume();
    }

    return this.context;
  }
}
