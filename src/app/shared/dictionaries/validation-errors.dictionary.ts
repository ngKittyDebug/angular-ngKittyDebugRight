import { marker } from '@jsverse/transloco-keys-manager/marker';

export const VALIDATION_ERRORS_DICT = {
  required: marker('validation_errors.required'),
  maxLength: marker('validation_errors.max_length'),
  minLength: marker('validation_errors.min_length'),
  emailPattern: marker('validation_errors.email_pattern'),
  passwordPattern: marker('validation_errors.password_pattern'),
  passwordConfirmation: marker('validation_errors.password_confirmation'),
} as const satisfies Record<string, string>;
