import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { TuiNotificationService } from '@taiga-ui/core';
import { LoginFormService } from '../services/login-form.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';

@Injectable()
export class LoginPageFacade {
  private readonly destroyRef = inject(DestroyRef);
  private readonly authService = inject(AuthService);
  private readonly notifications = inject(TuiNotificationService);
  private readonly translocoService = inject(TranslocoService);
  private readonly router = inject(Router);
  public readonly isLoading = signal(false);
  public readonly loginForm = inject(LoginFormService).loginForm;

  public async login() {
    if (this.loginForm.invalid || this.isLoading()) {
      return;
    }
    this.isLoading.set(true);

    const { email, password } = this.loginForm.getRawValue();

    try {
      await this.authService.login(email, password);
      await this.showNotifications(
        this.translocoService.translate('login.success'),
        this.translocoService.translate('login.successTitle'),
        'positive'
      );
      await this.router.navigate(['./']);
    } catch (error) {
      if (error instanceof Error) {
        this.showNotifications(error.message, this.translocoService.translate('login.error.text'), 'negative');
      }
    } finally {
      this.isLoading.set(false);
    }
  }

  public loginWithGithub() {
    if (this.isLoading()) {
      return;
    }
    this.authService.loginWithGithub();
  }

  public loginWithGoogle() {
    if (this.isLoading()) {
      return;
    }
    this.authService.loginWithGoogle();
  }

  private showNotifications(message: string, label: string, appearance: string) {
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
