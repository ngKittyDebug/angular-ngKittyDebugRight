import type { MockedObject } from 'vitest';
import type { ModalService } from '@core/services/modal/modal.service';
import { of } from 'rxjs';

export const modalServiceMock = {
  openConfirmModal: vi.fn().mockReturnValue(of(false)),
} as const satisfies MockedObject<Partial<ModalService>>;
