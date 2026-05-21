import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import type { LoginForm } from './models/login-form.model';
import { EMAIL_PATTERN } from '@shared/patterns/email-pattern';
import { PASSWORD_PATTERN } from '@shared/patterns/password-pattern';
import { TuiButton, TuiError, TuiIcon, TuiInput, TuiLabel, TuiTextfieldComponent, TuiTitle } from '@taiga-ui/core';
import { TuiPassword } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm } from '@taiga-ui/layout';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';
import type { LoginField } from './models/login-field.model';

@Component({
  selector: 'ngKitty-login',
  imports: [
    ReactiveFormsModule,
    TuiTextfieldComponent,
    TuiButton,
    TuiInput,
    TuiLabel,
    TuiTitle,
    TuiIcon,
    TuiPassword,
    TuiCardLarge,
    TuiForm,
    TranslocoModule,
    RouterLink,
    TuiError,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly translocoService = inject(TranslocoService);
  private readonly fb = inject(FormBuilder);
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
}
