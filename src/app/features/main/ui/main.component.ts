import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TarotService } from '@features/main/data/api/services/tarot.service';
import type { TarotResponseApi } from '@features/main/data/api/models/deploy-tarot-response-api.model';
import { CardComponent } from '@shared/ui/card/card.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiButton } from '@taiga-ui/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'ngKitty-ui',
  imports: [CardComponent, TranslocoPipe, TuiButton],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly tarotService = inject(TarotService);
  protected readonly result = signal<TarotResponseApi | null>(null);
  protected readonly isLoading = signal(false);

  public onDrawCards(): void {
    this.isLoading.set(true);

    this.tarotService
      .loadReading()
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (data) => {
          this.result.set(data);
        },
      });
  }
}
