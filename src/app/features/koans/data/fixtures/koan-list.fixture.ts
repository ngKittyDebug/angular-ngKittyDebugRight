import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';

export const KoanListFixture: KoanListItemModel[] = [
  {
    number: 1,
    title: 'О пустоте аргумента',
    slug: '001-o-pustote-argumenta',
    category: 'javascript',
    tags: ['arguments', 'undefined'],
  },
  {
    number: 2,
    title: 'О ленивом писце',
    slug: '002-o-lenivom-pisce',
    category: 'angular',
    tags: ['change-detection', 'zone'],
  },
  {
    number: 3,
    title: 'О мёртвой зоне',
    slug: '003-o-mertvoi-zone',
    category: 'philosophy',
    tags: ['void', 'silence'],
  },
];
