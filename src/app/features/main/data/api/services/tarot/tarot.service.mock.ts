import type { TarotService } from '@features/main/data/api/services/tarot/tarot.service';
import type { MockedObject } from 'vitest';
import { of } from 'rxjs';
import { tarotResponseApiFixture } from '@features/main/data/api/fixtures/tarot-response-api.fixture';
import { signal } from '@angular/core';
import { TarotIntent } from '@features/main/data/api/models/intent.model';
import { TarotRole } from '@features/main/data/api/models/role.model';

export const tarotServiceMock = {
  loadReading: vi.fn().mockReturnValue(of(tarotResponseApiFixture)),
  setIntent: vi.fn(),
  setRole: vi.fn(),
  intent: signal(TarotIntent.FULL_RELEASE).asReadonly(),
  role: signal(TarotRole.DEVOPS).asReadonly(),
} as const satisfies MockedObject<Partial<TarotService>>;
