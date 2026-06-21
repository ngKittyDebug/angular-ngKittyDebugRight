import { Component, inject, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { TuiIcon } from '@taiga-ui/core';
import { WisdomComponent } from './wisdom/wisdom.component';
import { ANSWER_KEYS } from '../constants/answer-keys';

@Component({
  selector: 'ngKitty-ball',
  imports: [TranslocoPipe, TuiIcon, WisdomComponent],
  templateUrl: './ball.component.html',
  styleUrl: './ball.component.scss',
})
export class BallComponent {
  private readonly transloco = inject(TranslocoService);
  protected readonly isCharging = signal(false);
  protected readonly answerText = signal<string | null>(null);

  protected onBallClick(): void {
    if (this.isCharging()) {
      return;
    }

    this.answerText.set(null);
    this.isCharging.set(true);

    setTimeout(() => {
      const randomKey = this.pickRandomAnswerKey();
      const translated = this.transloco.translate(`ball.answers.${randomKey}`);

      this.answerText.set(translated);
      this.isCharging.set(false);

      setTimeout(() => {
        this.answerText.set(null);
      }, 3000);
    }, 1800);
  }

  private pickRandomAnswerKey(): string {
    const index = Math.floor(Math.random() * ANSWER_KEYS.length);

    return ANSWER_KEYS[index];
  }
}
