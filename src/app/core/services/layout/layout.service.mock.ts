import type { Mocked } from 'vitest';
import { vi } from 'vitest';
import type { LayoutService } from '@core/services/layout/layout.service';
import type { Signal } from '@angular/core';

export const layoutServiceMock = {
  isMobileNavOpen: vi.fn().mockReturnValue(false) as unknown as Signal<boolean>,
  onToggleMobileNav: vi.fn(),
  onCloseMobileNav: vi.fn(),
  watchMobileNavMediaQuery: vi.fn(),
} as const satisfies Mocked<Partial<LayoutService>>;
