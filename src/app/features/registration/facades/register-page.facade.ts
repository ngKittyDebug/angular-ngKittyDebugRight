import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { RegisterFormService } from '@features/registration/services/register-form.service';
import { Router } from '@angular/router';
import { TuiNotificationService } from '@taiga-ui/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';

@Injectable()
export class RegisterPageFacade {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notifications = inject(TuiNotificationService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly translocoService = inject(TranslocoService);
  private readonly _isLoading = signal(false);
  public readonly registerForm = inject(RegisterFormService).form;
  public readonly isLoading = this._isLoading.asReadonly();

  public async signup() {
    if (this.registerForm().invalid() || this._isLoading()) {
      return;
    }

    this._isLoading.set(true);

    const { email, password, ...restRegisterData } = this.registerForm().value();

    try {
      await this.authService.signup(email, password, restRegisterData);

      void this.showNotification(
        this.translocoService.translate('notifications.login.success'),
        this.translocoService.translate('notifications.login.success-title'),
        'positive'
      );
      void this.router.navigate(['/']);
    } catch (error) {
      if (error instanceof Error) {
        void this.showNotification(
          error.message,
          this.translocoService.translate('notifications.login.failure'),
          'negative'
        );
      }
    } finally {
      this._isLoading.set(false);
    }
  }

  public loginWithGithub() {
    if (this._isLoading()) {
      return;
    }
    this.authService.loginWithGithub();
  }

  public loginWithGoogle() {
    if (this._isLoading()) {
      return;
    }
    this.authService.loginWithGoogle();
  }

  private showNotification(message: string, label: string, appearance: 'positive' | 'negative') {
    this.notifications
      .open(message, {
        label: label,
        appearance: appearance,
        autoClose: 5000,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
