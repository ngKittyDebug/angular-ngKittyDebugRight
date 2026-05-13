import type { NavigationItem } from '@core/ui/components/layout/sidebar/models/navigation-item.model';

export const navigationItemListConfig = [
  {
    icon: '@tui.sparkles',
    label: 'Таро',
    url: '/tarot',
  },
  {
    icon: '@tui.scroll',
    label: 'Исповедь',
    url: '/shrift',
  },
  {
    icon: '@tui.flame',
    label: 'Руны CI/CD',
    url: '/runes',
  },
  {
    icon: '@tui.sun',
    label: 'Гороскоп',
    url: '/horoscope',
  },
  {
    icon: '@tui.book-open',
    label: 'Хроники',
    url: '/chronicle',
  },
] as const satisfies NavigationItem[];
