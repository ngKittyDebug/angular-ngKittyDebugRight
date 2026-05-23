import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PASSWORD_PATTERN } from '@shared/patterns/password-pattern';
import { EMAIL_PATTERN } from '@shared/patterns/email-pattern';
import { passwordConfirmationValidator } from '@shared/validators/password-confirmation.validator';
import type { RegisterForm } from '@features/registration/models/register-form.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {
  private readonly fb = inject(FormBuilder);
  private readonly _form = this.createFormInstance();

  public get registerForm() {
    return this._form;
  }

  private createFormInstance() {
    return this.fb.group<RegisterForm>(
      {
        name: this.fb.nonNullable.control('', [Validators.required, Validators.maxLength(30)]),
        email: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
        password: this.fb.nonNullable.control('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
        passwordConfirmation: this.fb.nonNullable.control('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
        dateOfBirth: this.fb.control(null, [Validators.required]),
      },
      { validators: passwordConfirmationValidator('password', 'passwordConfirmation') }
    );
  }
}
