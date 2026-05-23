import type { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import type { MockedObject } from 'vitest';

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
