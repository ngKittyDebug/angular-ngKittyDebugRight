/**
 * t(register.validation_errors.required, register.validation_errors.max_length, register.validation_errors.min_length, register.validation_errors.email_pattern, register.validation_errors.password_pattern)
 */

export const VALIDATION_ERRORS_DICT = {
  required: 'register.validation_errors.required',
  maxLength: 'register.validation_errors.max_length',
  minLength: 'register.validation_errors.min_length',
  emailPattern: 'register.validation_errors.email_pattern',
  passwordPattern: 'register.validation_errors.password_pattern',
} as const satisfies Record<string, string>;
