import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import type { LoginForm } from './models/login-form.model';
import { EMAIL_PATTERN } from '@shared/patterns/email-pattern';
import { PASSWORD_PATTERN } from '@shared/patterns/password-pattern';
import { TuiButton, TuiIcon, TuiInput, TuiLabel, TuiTextfieldComponent, TuiTitle } from '@taiga-ui/core';
import { TuiPassword } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm } from '@taiga-ui/layout';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly loginForm = this.fb.nonNullable.group<LoginForm>({
    email: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
    password: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]),
  });
}
