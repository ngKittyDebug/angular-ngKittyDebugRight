import type { MockedObject } from 'vitest';
import { vi } from 'vitest';
import type { LayoutService } from '@core/services/layout/layout.service';
import type { Signal } from '@angular/core';
import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';
import type { User } from '@netlify/identity';

export const layoutServiceMock = {
  isMobileNavOpen: vi.fn().mockReturnValue(false) as unknown as Signal<boolean>,
  user: vi.fn().mockReturnValue(null) as unknown as Signal<User | null>,
  onToggleMobileNav: vi.fn(),
  onCloseMobileNav: vi.fn(),
  watchMobileNavMediaQuery: vi.fn(),
  filteredNavigationItems: vi.fn() as unknown as Signal<NavigationItem[]>,
  logout: vi.fn(),
} as const satisfies MockedObject<Partial<LayoutService>>;
