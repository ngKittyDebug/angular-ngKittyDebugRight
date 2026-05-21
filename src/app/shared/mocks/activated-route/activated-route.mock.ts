import type { ActivatedRoute } from '@angular/router';
import type { MockedObject } from 'vitest';
import { of } from 'rxjs';

export const activatedRouteMock = {
  data: of({}),
  paramMap: of({
    get: vi.fn(() => {
      return null;
    }),
    getAll: vi.fn(() => {
      return [];
    }),
    has: vi.fn(() => {
      return false;
    }),
    keys: [],
  }),
} as const satisfies MockedObject<Pick<ActivatedRoute, 'data' | 'paramMap'>>;
