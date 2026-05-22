import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import type { LoginForm } from './models/login-form.model';
import { EMAIL_PATTERN } from '@shared/patterns/email-pattern';
import { PASSWORD_PATTERN } from '@shared/patterns/password-pattern';
import {
  TuiButton,
  TuiError,
  TuiIcon,
  TuiInput,
  TuiLabel,
  TuiLoader,
  tuiLoaderOptionsProvider,
  TuiNotificationService,
  TuiTextfieldComponent,
} from '@taiga-ui/core';
import { TuiPassword } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm } from '@taiga-ui/layout';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Router, RouterLink } from '@angular/router';
import type { LoginField } from './models/login-field.model';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'ngKitty-login',
  imports: [
    ReactiveFormsModule,
    TuiTextfieldComponent,
    TuiButton,
    TuiInput,
    TuiLabel,
    TuiIcon,
    TuiPassword,
    TuiCardLarge,
    TuiForm,
    TranslocoModule,
    RouterLink,
    TuiError,
    TuiLoader,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiLoaderOptionsProvider({ size: 's' })],
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly translocoService = inject(TranslocoService);
  private readonly notifications = inject(TuiNotificationService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  protected readonly isLoading = signal(false);
  protected readonly loginForm = this.fb.nonNullable.group<LoginForm>({
    email: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
    password: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]),
  });

  protected getInputError(typeInput: LoginField): string | null {
    const control = this.loginForm.get(typeInput);

    if (!control || !control.touched) {
      return null;
    }

    if (control.hasError('required')) {
      return this.translocoService.translate('login.error.required');
    }

    if (control.hasError('pattern')) {
      return this.translocoService.translate(`login.error.${typeInput}Pattern`);
    }

    return null;
  }

  protected async onSubmit() {
    this.isLoading.set(true);
    if (this.loginForm.invalid) {
      return;
    }

    const data = this.loginForm.getRawValue();

    try {
      await this.authService.login(data.email, data.password);

      this.notifications
        .open('логин успешен', {
          label: 'Добро пожаловать',
          appearance: 'positive',
          autoClose: 5000,
        })
        .subscribe();

      await this.router.navigate(['./']);
    } catch (error) {
      if (error instanceof Error) {
        this.notifications
          .open(error.message, {
            label: 'Ошибка регистрации',
            appearance: 'negative',
            autoClose: 5000,
          })
          .subscribe();
      }
    } finally {
      this.isLoading.set(false);
    }
  }

  protected async loginWithGoogle() {
    this.isLoading.set(true);
    try {
      await this.authService.loginWithGoogle();
    } catch (error) {
      if (error instanceof Error) {
        this.notifications
          .open(error.message, {
            label: 'Ошибка регистрации WithGoogle',
            appearance: 'negative',
            autoClose: 5000,
          })
          .subscribe();
      }
    } finally {
      this.isLoading.set(false);
    }
  }

  protected async loginWithGithub() {
    this.isLoading.set(true);
    try {
      await this.authService.loginWithGithub();
    } catch (error) {
      if (error instanceof Error) {
        this.notifications
          .open(error.message, {
            label: 'Ошибка регистрации WithGithub',
            appearance: 'negative',
            autoClose: 5000,
          })
          .subscribe();
      }
    } finally {
      this.isLoading.set(false);
    }
  }

  protected async logout() {
    this.isLoading.set(true);
    try {
      await this.authService.logout();
    } catch (error) {
      if (error instanceof Error) {
        this.notifications
          .open(error.message, {
            label: 'Ошибка выхода',
            appearance: 'negative',
            autoClose: 5000,
          })
          .subscribe();
      }
    } finally {
      this.isLoading.set(false);
    }
  }
}
