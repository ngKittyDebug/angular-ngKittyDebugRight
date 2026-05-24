import type { MockedObject } from 'vitest';
import type { RegisterPageFacade } from '@features/registration/facades/register-page.facade';
import { signal } from '@angular/core';
import { registerFormFixture } from '@features/registration/fixtures/register-form.fixture';

export const registerPageFacadeMock = {
  signup: vi.fn().mockImplementation(() => Promise.resolve()),
  isLoading: signal(false).asReadonly(),
  registerForm: registerFormFixture,
} as const satisfies MockedObject<Partial<RegisterPageFacade>>;
