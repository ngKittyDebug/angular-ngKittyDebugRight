import { DestroyRef, inject, Service, signal } from '@angular/core';
import { TarotService } from '@features/main/data/api/services/tarot.service';
import type { TarotResponseApi } from '@features/main/data/api/models/deploy-tarot-response-api.model';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { TarotRole } from '@features/main/data/api/models/role.model';
import type { TarotIntent } from '@features/main/data/api/models/intent.model';

@Service({
  autoProvided: false,
})
export class MainPageFacade {
  private readonly tarotService = inject(TarotService);
  private readonly destroyRef = inject(DestroyRef);
  public readonly result = signal<TarotResponseApi | null>(null);
  public readonly isLoading = signal(false);
  public readonly intent = this.tarotService.intent;
  public readonly role = this.tarotService.role;

  public loadCardList(): void {
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

  public setRole(role: TarotRole) {
    this.setRole(role);
  }

  public setIntent(intent: TarotIntent) {
    this.tarotService.setIntent(intent);
  }
}
