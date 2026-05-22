import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';
import { marker } from '@jsverse/transloco-keys-manager/marker';

export const NAVIGATION_ITEM_LIST = [
  {
    icon: '@tui.sparkles',
    label: marker('navigation-items.tarot'),
    url: '/tarot',
  },
  {
    icon: '@tui.scroll',
    label: marker('navigation-items.shrift'),
    url: '/shrift',
  },
  {
    icon: '@tui.flame',
    label: marker('navigation-items.runes'),
    url: '/runes',
  },
  {
    icon: '@tui.sun',
    label: marker('navigation-items.horoscope'),
    url: '/horoscope',
  },
  {
    icon: '@tui.book-open',
    label: marker('navigation-items.chronicle'),
    url: '/chronicle',
  },
  {
    icon: '@tui.infinity',
    label: 'Коаны',
    url: '/koans',
  },
] as const satisfies NavigationItem[];
