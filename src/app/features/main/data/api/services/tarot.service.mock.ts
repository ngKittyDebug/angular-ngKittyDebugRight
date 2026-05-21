import type { MockedObject } from 'vitest';
import type { TarotService } from '@features/main/data/api/services/tarot.service';

export const tarotServiceMock = {} as const satisfies MockedObject<Partial<TarotService>>;
