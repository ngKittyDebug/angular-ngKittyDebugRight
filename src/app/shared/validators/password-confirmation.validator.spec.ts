import type { FieldContext, SchemaPath, SchemaPathRules } from '@angular/forms/signals';
import { passwordConfirmationValidator } from '@shared/validators/password-confirmation.validator';
import { VALIDATION_ERRORS_DICT } from '@shared/dictionaries/validation-errors.dictionary';
import { describe } from 'vitest';

describe('passwordConfirmationValidator', () => {
  const passwordField = {} as SchemaPath<string, SchemaPathRules.Supported>;

  const createContext = (password: string, confirmation: string): FieldContext<string> => {
    return {
      value: () => confirmation,
      valueOf: () => password,
    } as unknown as FieldContext<string>;
  };

  const validate = passwordConfirmationValidator(passwordField);

  describe('Пароли совпадают', () => {
    it('должен возвращать undefined', () => {
      expect(validate(createContext('Test1234', 'Test1234'))).toBeNull();
    });
  });

  describe('Оба пароля пустые', () => {
    it('должен возвращать undefined', () => {
      expect(validate(createContext('', ''))).toBeNull();
    });
  });

  describe('Пароли не совпадают', () => {
    it('должен возвращать ошибку', () => {
      expect(validate(createContext('Test1234', 'Test12345'))).toEqual({
        kind: 'passwordConfirmation',
        message: VALIDATION_ERRORS_DICT.passwordConfirmation,
      });
    });
  });
});
