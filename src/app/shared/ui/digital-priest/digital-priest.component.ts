import { Component, computed, DestroyRef, inject, input, output, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { clampNumber } from '@shared/helpers/clamp-number.helper';
import {
  DIGITAL_PRIEST_MAX_EYE_OFFSET_X,
  DIGITAL_PRIEST_MAX_EYE_OFFSET_Y,
} from '@shared/ui/digital-priest/constants/digital-priest.config';
import { DigitalPriestMood } from '@shared/ui/digital-priest/data/models/digital-priest-mood.model';
import { DigitalPriestQuoteService } from '@shared/ui/digital-priest/services/digital-priest-quote.service';
import { DigitalPriestVoiceService } from '@shared/ui/digital-priest/services/digital-priest-voice.service';

@Component({
  selector: 'ngKitty-digital-priest',
  imports: [TranslocoPipe],
  providers: [DigitalPriestQuoteService, DigitalPriestVoiceService],
  templateUrl: './digital-priest.component.html',
  styleUrl: './digital-priest.component.scss',
  host: {
    '[class.digital-priest-stage]': 'layout() === "stage"',
  },
})
export class DigitalPriestComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly priestQuotes = inject(DigitalPriestQuoteService);
  private readonly priestVoice = inject(DigitalPriestVoiceService);

  public readonly mood = input<DigitalPriestMood>(DigitalPriestMood.IDLE);
  public readonly spiritLevel = input(50);
  public readonly disabled = input(false);
  public readonly layout = input<'default' | 'stage'>('default');
  public readonly ariaLabel = input<string>('Digital priest');
  public readonly priestRaged = output<void>();

  protected readonly speechKey = signal<string | null>(null);
  protected readonly isEngaged = signal(false);
  protected readonly isPointerOver = signal(false);
  protected readonly eyeOffsetX = signal(0);
  protected readonly eyeOffsetY = signal(0);

  protected readonly pupilTransform = computed(() => `translate(${this.eyeOffsetX()} ${this.eyeOffsetY()})`);
  protected readonly faceTransform = computed(() => {
    const tilt = this.eyeOffsetX() * 0.65;

    return `rotate(${tilt} 70 58)`;
  });

  public constructor() {
    this.destroyRef.onDestroy(() => {
      this.priestVoice.cancel();
    });
  }

  protected onPointerMove(event: PointerEvent): void {
    const frame = event.currentTarget as HTMLElement;
    const rect = frame.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    this.eyeOffsetX.set(
      clampNumber(
        relativeX * DIGITAL_PRIEST_MAX_EYE_OFFSET_X * 2,
        -DIGITAL_PRIEST_MAX_EYE_OFFSET_X,
        DIGITAL_PRIEST_MAX_EYE_OFFSET_X
      )
    );
    this.eyeOffsetY.set(
      clampNumber(
        relativeY * DIGITAL_PRIEST_MAX_EYE_OFFSET_Y * 2,
        -DIGITAL_PRIEST_MAX_EYE_OFFSET_Y,
        DIGITAL_PRIEST_MAX_EYE_OFFSET_Y
      )
    );
    this.isPointerOver.set(true);
  }

  protected onPointerLeave(): void {
    this.eyeOffsetX.set(0);
    this.eyeOffsetY.set(0);
    this.isPointerOver.set(false);
  }

  protected onInteract(): void {
    if (this.isEngaged()) {
      return;
    }

    const quoteKey = this.priestQuotes.pick(this.mood(), this.spiritLevel(), this.disabled());

    this.speechKey.set(quoteKey);
    this.isEngaged.set(true);
    this.priestRaged.emit();

    void this.priestVoice.speakQuote(quoteKey, this.mood()).finally(() => {
      this.speechKey.set(null);
      this.isEngaged.set(false);
    });
  }
}
