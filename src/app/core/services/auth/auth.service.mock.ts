import type { Signal } from '@angular/core';
import type { MockedObject } from 'vitest';
import { vi } from 'vitest';

import type { AuthService } from '@core/services/auth/auth.service';
import type { CallbackResult, User } from '@netlify/identity';

export const authServiceMock = {
  user: vi.fn().mockReturnValue(null) as unknown as Signal<null | User>,
  isLoading: vi.fn().mockReturnValue(false) as unknown as Signal<boolean>,
  lastCallbackResult: vi.fn().mockReturnValue(null) as unknown as Signal<CallbackResult | null>,
  isAuthenticated: vi.fn().mockReturnValue(false) as unknown as Signal<boolean>,
  initialize: vi.fn().mockResolvedValue(undefined),
  loadUser: vi.fn().mockResolvedValue(null),
  login: vi.fn().mockResolvedValue(null),
  signup: vi.fn().mockResolvedValue(null),
  logout: vi.fn().mockResolvedValue(undefined),
  loginWithProvider: vi.fn(),
  loginWithGithub: vi.fn(),
  loginWithGoogle: vi.fn(),
  requestPasswordRecovery: vi.fn().mockResolvedValue(undefined),
} as const satisfies MockedObject<Partial<AuthService>>;
