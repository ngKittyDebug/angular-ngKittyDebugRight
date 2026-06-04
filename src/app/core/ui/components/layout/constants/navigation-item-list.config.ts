import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';
import { marker } from '@jsverse/transloco-keys-manager/marker';

export const NAVIGATION_ITEM_LIST = [
  {
    icon: '@tui.scroll',
    label: marker('navigation-items.shrift'),
    url: '/shrift',
    guestOnly: false,
  },
  {
    icon: '@tui.flame',
    label: marker('navigation-items.runes'),
    url: '/runes',
    guestOnly: false,
  },
  {
    icon: '@tui.sun',
    label: marker('navigation-items.horoscope'),
    url: '/horoscope',
    guestOnly: false,
  },
  {
    icon: '@tui.book-open',
    label: marker('navigation-items.chronicle'),
    url: '/chronicle',
    guestOnly: false,
  },
  {
    icon: '@tui.log-in',
    label: marker('navigation-items.login'),
    url: '/login',
    guestOnly: true,
  },
  {
    icon: '@tui.user-plus',
    label: marker('navigation-items.register'),
    url: '/register',
    guestOnly: true,
  },
] as const satisfies NavigationItem[];
