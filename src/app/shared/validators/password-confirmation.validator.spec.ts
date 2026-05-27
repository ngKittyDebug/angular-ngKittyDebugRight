import { FormControl, UntypedFormGroup } from '@angular/forms';
import { VALIDATION_ERRORS_DICT } from '@shared/dictionaries/validation-errors.dictionary';
import { passwordConfirmationValidator } from '@shared/validators/password-confirmation.validator';

describe('passwordConfirmationValidator', () => {
  const formGroup: UntypedFormGroup = new UntypedFormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  const validator = passwordConfirmationValidator('password', 'confirmPassword');

  it('должен возвращать null, если оба поля password и confirmPassword равны null', () => {
    expect(validator(formGroup)).toBeNull();
  });

  it('должен возвращать ошибку в поле confirmPassword, если пароли не совпадают', () => {
    formGroup.controls['password'].setValue('Test1234');
    formGroup.controls['confirmPassword'].setValue('Test12345');

    validator(formGroup);

    expect(formGroup.controls['confirmPassword'].errors).toEqual({
      confirmPasswordError: VALIDATION_ERRORS_DICT.passwordConfirmation,
    });
  });

  it('должен возвращать null в поле confirmPassword, если пароли совпадают', () => {
    formGroup.controls['password'].setValue('Test1234');
    formGroup.controls['confirmPassword'].setValue('Test1234');

    validator(formGroup);

    expect(formGroup.controls['confirmPassword'].errors).toBeNull();
  });
});
