import { type AbstractControl, isFormGroup, type ValidationErrors, type ValidatorFn } from '@angular/forms';
import { VALIDATION_ERRORS_DICT } from '@shared/dictionaries/validation-errors.dictionary';

/* Валидатор для подтверждения правильности введенного пароля */
export const passwordConfirmationValidator = (controlName: string, matchingControlName: string): ValidatorFn => {
  return (abstractControl: AbstractControl): ValidationErrors | null => {
    if (!isFormGroup(abstractControl)) {
      return null;
    }

    const control = abstractControl.controls[controlName];
    const matchingControl = abstractControl.controls[matchingControlName];

    if (control.value === null && matchingControl.value === null) {
      return null;
    }

    const otherErrors = Object.fromEntries(
      Object.entries(matchingControl.errors ?? {}).filter(([key]) => key !== 'confirmPasswordError')
    );
    const hasOtherErrors = Object.keys(otherErrors).length > 0;

    if (control.value === matchingControl.value) {
      matchingControl.setErrors(hasOtherErrors ? otherErrors : null);
    } else {
      matchingControl.setErrors({
        ...otherErrors,
        confirmPasswordError: VALIDATION_ERRORS_DICT.passwordConfirmation,
      });
    }

    return null;
  };
};
