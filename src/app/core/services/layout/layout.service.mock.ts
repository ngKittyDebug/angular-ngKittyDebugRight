import type { MockedObject } from 'vitest';
import { vi } from 'vitest';
import type { LayoutService } from '@core/services/layout/layout.service';
import type { Signal } from '@angular/core';
import type { UserProfile } from '@core/services/user-profile/models/user-profile.model';

export const layoutServiceMock = {
  isMobileNavOpen: vi.fn().mockReturnValue(false) as unknown as Signal<boolean>,
  user: vi.fn().mockReturnValue(null) as unknown as Signal<UserProfile | null>,
  onToggleMobileNav: vi.fn(),
  onCloseMobileNav: vi.fn(),
  watchMobileNavMediaQuery: vi.fn(),
  logout: vi.fn(),
} as const satisfies MockedObject<Partial<LayoutService>>;
