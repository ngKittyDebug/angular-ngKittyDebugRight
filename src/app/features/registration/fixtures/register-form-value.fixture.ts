import type { RegisterFormGroup } from '@features/registration/models/register-form.model';
import type { ExtractFormControl } from '@shared/models/utility-types';

export const registerFormValidValueFixture = {
  name: 'John',
  email: 'john@wick.com',
  password: 'Aa888888',
  passwordConfirmation: 'Aa888888',
  dateOfBirth: new Date(2000, 0, 1),
} satisfies ExtractFormControl<RegisterFormGroup>;
