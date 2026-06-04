import type { TarotService } from '@features/main/data/api/services/tarot.service';
import type { MockedObject } from 'vitest';
import { of } from 'rxjs';
import { tarotResponseApiFixture } from '@features/main/data/api/fixtures/tarot-response-api.fixture';

export const tarotServiceMock = {
  loadReading: vi.fn().mockReturnValue(of(tarotResponseApiFixture)),
  setIntent: vi.fn(),
  setRole: vi.fn(),
} as const satisfies MockedObject<Partial<TarotService>>;
