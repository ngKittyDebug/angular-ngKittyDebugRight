import { inject, Service } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PASSWORD_PATTERN } from '@shared/patterns/password-pattern';
import { passwordConfirmationValidator } from '@shared/validators/password-confirmation.validator';
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '@shared/constants/password-length';
import type { ProfileSecurityFormGroup } from '@features/profile/data/models/profileSecurity.model';

@Service()
export class ProfileSecurityFormService {
  private readonly fb = inject(FormBuilder);
  public readonly registerForm = this.createFormInstance();

  private createFormInstance() {
    return this.fb.group<ProfileSecurityFormGroup>(
      {
        name: this.fb.nonNullable.control('', [Validators.required, Validators.maxLength(30)]),
        currentPassword: this.fb.nonNullable.control('', [
          Validators.required,
          Validators.minLength(PASSWORD_MIN_LENGTH),
          Validators.maxLength(PASSWORD_MAX_LENGTH),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
        newPassword: this.fb.nonNullable.control('', [
          Validators.required,
          Validators.minLength(PASSWORD_MIN_LENGTH),
          Validators.maxLength(PASSWORD_MAX_LENGTH),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
        newPasswordConfirmation: this.fb.nonNullable.control('', [
          Validators.required,
          Validators.minLength(PASSWORD_MIN_LENGTH),
          Validators.maxLength(PASSWORD_MAX_LENGTH),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
      },
      { validators: passwordConfirmationValidator('newPassword', 'newPasswordConfirmation') }
    );
  }
}
