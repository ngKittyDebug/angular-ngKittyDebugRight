import type { MockedObject } from 'vitest';
import type { Router } from '@angular/router';
import { of } from 'rxjs';

export const routerMock = {
  navigate: vi.fn().mockReturnValue(Promise.resolve(true)),
  navigateByUrl: vi.fn().mockReturnValue(Promise.resolve(true)),
  events: of(),
  url: '',
  createUrlTree: vi.fn(),
  serializeUrl: vi.fn().mockReturnValue(''),
} as const satisfies MockedObject<
  Pick<Router, 'navigate' | 'navigateByUrl' | 'events' | 'url' | 'createUrlTree' | 'serializeUrl'>
>;
