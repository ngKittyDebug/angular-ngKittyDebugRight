import type { MockedObject } from 'vitest';
import type { TuiNotificationService } from '@taiga-ui/core';
import { of } from 'rxjs';
import { vi } from 'vitest';

export const tuiNotificationServiceMock = {
  open: vi.fn().mockReturnValue(of(undefined)),
} as const satisfies MockedObject<Pick<TuiNotificationService, 'open'>>;
