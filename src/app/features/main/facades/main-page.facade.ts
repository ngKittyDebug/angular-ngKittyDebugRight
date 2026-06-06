import { DestroyRef, inject, Service, signal } from '@angular/core';
import { TarotService } from '@features/main/data/api/services/tarot/tarot.service';
import type { TarotResponseApi } from '@features/main/data/api/models/deploy-tarot-response-api.model';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';

@Service({
  autoProvided: false,
})
export class MainPageFacade {
  private readonly tarotService = inject(TarotService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly _result = signal<TarotResponseApi | null>(null);
  private readonly _error = signal<unknown | null>(null);
  private readonly _isLoading = signal(false);
  public readonly result = this._result.asReadonly();
  public readonly isLoading = this._isLoading.asReadonly();
  public intent = this.tarotService.intent;
  public role = this.tarotService.role;
  public readonly error = this._error.asReadonly();

  public loadTarot(): void {
    this._isLoading.set(true);
    this._error.set(null);

    this.tarotService
      .loadReading()
      .pipe(
        finalize(() => {
          this._isLoading.set(false);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (tarotResponse) => {
          this._result.set(tarotResponse);
        },
        error: (error: unknown) => {
          if (error instanceof HttpErrorResponse) {
            this._error.set(error.message);

            return;
          }
          this._error.set('Unknown error');
        },
      });
  }
}
