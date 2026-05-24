import { vi } from 'vitest';

import type { MockedObject } from 'vitest';
import type { KoanApiService } from './koan-api.service';

export const KoanApiServiceMock = {
  getRandomKoan: vi.fn(),
  getKoanList: vi.fn(),
  getKoan: vi.fn(),
  invalidate: vi.fn(),
} as const satisfies MockedObject<Pick<KoanApiService, 'getRandomKoan' | 'getKoanList' | 'getKoan' | 'invalidate'>>;
