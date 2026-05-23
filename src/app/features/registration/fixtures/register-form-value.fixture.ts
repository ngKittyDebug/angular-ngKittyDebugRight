import type { ExtractFormControl } from '@shared/models/extract-from-control.model';
import type { RegisterForm } from '@features/registration/models/register-form.model';

export const registerFormValidValueFixture = {
  name: 'John',
  email: 'john@wick.com',
  password: 'Aa888888',
  passwordConfirmation: 'Aa888888',
  dateOfBirth: new Date(2000, 0, 1),
} satisfies ExtractFormControl<RegisterForm>;
