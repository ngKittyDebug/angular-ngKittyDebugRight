import type { MockedObject } from 'vitest';
import type { RegisterFormService } from '@features/registration/services/register-form.service';
import { registerFormFixture } from '@features/registration/fixtures/register-form.fixture';

export const registerFormServiceMock = {
  registerForm: registerFormFixture,
} as const satisfies MockedObject<Partial<RegisterFormService>>;
