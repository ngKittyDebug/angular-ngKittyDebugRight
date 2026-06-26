import type { MockedObject } from 'vitest';

import { sanctumFormFixture } from '@features/sanctum/fixtures/sanctum-form.fixture';
import type { SanctumFormService } from '@features/sanctum/services/sanctum-form.service';

export const sanctumFormServiceMock = {
  sanctumForm: sanctumFormFixture,
} as const satisfies MockedObject<Partial<SanctumFormService>>;
