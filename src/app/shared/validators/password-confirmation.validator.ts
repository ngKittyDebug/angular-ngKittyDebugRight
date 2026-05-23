import type {
  FieldContext,
  FieldValidator,
  SchemaPath,
  SchemaPathRules,
  ValidationError,
} from '@angular/forms/signals';
import { VALIDATION_ERRORS_DICT } from '@shared/dictionaries/validation-errors.dictionary';

/* Валидатор signal forms: подтверждение пароля должно совпадать с полем password */
export const passwordConfirmationValidator = (
  passwordField: SchemaPath<string, SchemaPathRules.Supported>
): FieldValidator<string> => {
  return (context: FieldContext<string>): ValidationError.WithoutFieldTree | null => {
    if (context.valueOf(passwordField) === context.value()) {
      return null;
    }

    return {
      kind: 'passwordConfirmation',
      message: VALIDATION_ERRORS_DICT.passwordConfirmation,
    };
  };
};
