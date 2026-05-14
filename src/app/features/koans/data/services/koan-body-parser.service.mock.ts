import { vi } from 'vitest';

import type { MockedObject } from 'vitest';
import type { KoanBodyParserService } from './koan-body-parser.service';

export const KoanBodyParserServiceMock = {
  parse: vi.fn(),
} as const satisfies MockedObject<Partial<KoanBodyParserService>>;
