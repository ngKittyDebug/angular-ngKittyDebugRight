import { KoanBodyFixture } from '@features/koans/data/fixtures/koan-body.fixture';

import type { KoanModel } from '@features/koans/data/models/koan.model';

export const KoanFixture: KoanModel = {
  number: 1,
  title: 'О пустоте аргумента',
  slug: '001-o-pustote-argumenta',
  body: KoanBodyFixture,
  category: 'javascript',
  tags: ['arguments', 'undefined', 'functions'],
  source: 'Монастырь Мацуо-дэра, 1174 г.',
};
