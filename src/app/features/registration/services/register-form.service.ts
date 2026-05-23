import { Injectable, signal } from '@angular/core';
import type { RegisterForm } from '@features/registration/models/register-form.model';
import { VALIDATION_ERRORS_DICT } from '@features/registration/dictionaries/validation-errors.dictionary';
import { form, maxLength, minLength, pattern, required } from '@angular/forms/signals';

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
    // TODO переиспользовать паттерн из логина shared/patterns email-pattern
    pattern(email, / /, { message: VALIDATION_ERRORS_DICT.emailPattern });
    required(password, { message: VALIDATION_ERRORS_DICT.required });
    // TODO переиспользовать паттерн из логина shared/patterns password-pattern.ts
    pattern(password, / /, { message: VALIDATION_ERRORS_DICT.passwordPattern });
    minLength(password, 5, { message: VALIDATION_ERRORS_DICT.minLength });
    maxLength(password, 15, { message: VALIDATION_ERRORS_DICT.maxLength });
    required(passwordConfirmation, { message: VALIDATION_ERRORS_DICT.required });
    // TODO переиспользовать паттерн из логина shared/patterns password-pattern.ts
    pattern(passwordConfirmation, / /, { message: VALIDATION_ERRORS_DICT.passwordPattern });
    minLength(passwordConfirmation, 5, { message: VALIDATION_ERRORS_DICT.minLength });
    maxLength(passwordConfirmation, 15, { message: VALIDATION_ERRORS_DICT.maxLength });
    required(dateOfBirth, { message: VALIDATION_ERRORS_DICT.required });
  });
}
