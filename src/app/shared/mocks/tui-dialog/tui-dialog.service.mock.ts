import type { MockedObject } from 'vitest';
import type { TuiDialogService } from '@taiga-ui/core';
import { of } from 'rxjs';

export const tuiDialogServiceMock = {
  open: vi.fn().mockReturnValue(of(null)),
} as const satisfies MockedObject<Partial<TuiDialogService>>;
