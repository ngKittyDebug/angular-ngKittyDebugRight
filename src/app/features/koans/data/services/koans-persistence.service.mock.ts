import { vi } from 'vitest';

import type { MockedObject } from 'vitest';
import type { KoansPersistenceService } from './koans-persistence.service';

export const KoansPersistenceServiceMock = {
  loadReadSet: vi.fn().mockReturnValue(new Set<string>()),
  saveReadSet: vi.fn(),
  loadTheme: vi.fn().mockReturnValue('sumi' as const),
  saveTheme: vi.fn(),
} as const satisfies MockedObject<Partial<KoansPersistenceService>>;
