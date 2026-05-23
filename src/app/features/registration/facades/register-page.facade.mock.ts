import type { MockedObject } from 'vitest';
import type { RegisterPageFacade } from '@features/registration/facades/register-page.facade';
import type { Signal } from '@angular/core';
import { registerFormFixture } from '@features/registration/fixtures/register-form.fixture';

export const registerPageFacadeMock = {
  signup: vi.fn().mockImplementation(() => Promise.resolve()),
  isLoading: vi.fn() as unknown as Signal<boolean>,
  registerForm: registerFormFixture,
} as const satisfies MockedObject<Partial<RegisterPageFacade>>;
