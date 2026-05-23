import { Injectable, signal } from '@angular/core';
import type { RegisterForm } from '@features/registration/models/register-form.model';
import { VALIDATION_ERRORS_DICT } from '@shared/dictionaries/validation-errors.dictionary';
import { EMAIL_PATTERN } from '@shared/patterns/email-pattern';
import { PASSWORD_PATTERN } from '@shared/patterns/password-pattern';
import { passwordConfirmationValidator } from '@shared/validators/password-confirmation.validator';
import { form, maxLength, minLength, pattern, required, validate } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {
  private readonly formSignal = signal<RegisterForm>({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    dateOfBirth: new Date().toISOString(),
  });

  public form = form(this.formSignal, ({ name, email, password, passwordConfirmation, dateOfBirth }) => {
    required(name, { message: VALIDATION_ERRORS_DICT.required });
    maxLength(name, 30, { message: VALIDATION_ERRORS_DICT.maxLength });
    required(email, { message: VALIDATION_ERRORS_DICT.required });
    pattern(email, EMAIL_PATTERN, { message: VALIDATION_ERRORS_DICT.emailPattern });
    required(password, { message: VALIDATION_ERRORS_DICT.required });
    pattern(password, PASSWORD_PATTERN, { message: VALIDATION_ERRORS_DICT.passwordPattern });
    minLength(password, 8, { message: VALIDATION_ERRORS_DICT.minLength });
    maxLength(password, 15, { message: VALIDATION_ERRORS_DICT.maxLength });
    required(passwordConfirmation, { message: VALIDATION_ERRORS_DICT.required });
    pattern(passwordConfirmation, PASSWORD_PATTERN, { message: VALIDATION_ERRORS_DICT.passwordPattern });
    minLength(passwordConfirmation, 8, { message: VALIDATION_ERRORS_DICT.minLength });
    maxLength(passwordConfirmation, 15, { message: VALIDATION_ERRORS_DICT.maxLength });
    validate(passwordConfirmation, passwordConfirmationValidator(password));
    required(dateOfBirth, { message: VALIDATION_ERRORS_DICT.required });
  });
}
