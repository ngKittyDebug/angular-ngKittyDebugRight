import type { MockedObject } from 'vitest';
import { vi } from 'vitest';
import type { MainPageFacade } from '@features/main/facades/main-page.facade';
import { signal } from '@angular/core';
import { tarotResponseApiFixture } from '@features/main/data/api/fixtures/tarot-response-api.fixture';

export const mainPageFacadeMock = {
  result: signal(tarotResponseApiFixture),
  isLoading: signal(false),
  loadCardList: vi.fn(),
} as const satisfies MockedObject<Partial<MainPageFacade>>;
