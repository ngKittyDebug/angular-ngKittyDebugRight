import type { MockedObject } from 'vitest';
import type { MainPageFacade } from '@features/main/facades/main-page-facade.service';

export const mainPageFacadeMock = {} as const satisfies MockedObject<Partial<MainPageFacade>>;
