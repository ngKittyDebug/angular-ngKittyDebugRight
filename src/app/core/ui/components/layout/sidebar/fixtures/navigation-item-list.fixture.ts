import type { NavigationItem } from '@core/ui/components/layout/sidebar/models/navigation-item.model';

export const navigationItemList = [
  {
    icon: '@tui.sparkles',
    label: 'Таро',
    url: '/t',
  },
  {
    icon: '@tui.scroll',
    label: 'Исповедь',
    url: '/i',
  },
  {
    icon: '@tui.flame',
    label: 'Руны CI/CD',
    url: '/r',
  },
  {
    icon: '@tui.sun',
    label: 'Гороскоп',
    url: '/g',
  },
  {
    icon: '@tui.book-open',
    label: 'Хроники',
    url: '/h',
  },
] as const satisfies NavigationItem[];
