import type { MockedObject } from 'vitest';
import { vi } from 'vitest';

import type { SanctumSoundService } from '@features/sanctum/services/sanctum-sound.service';

export const sanctumSoundServiceMock = {
  play: vi.fn(),
} as const satisfies MockedObject<Partial<SanctumSoundService>>;
