import type { KoanApiResponse } from '@features/koans/data/api/koan/models/koan-api.model';
import type { KoanListItemModel, KoanModel, KoanSegment } from '@features/koans/data/models/koan.model';

export const KoanBodyFixture: string = [
  '# Коан №1 — «О пустоте аргумента»',
  '',
  'Из свитков монастыря Мацуо-дэра.',
  '',
  '```js',
  'function gate(a, b, c) {}',
  'gate(1)',
  '```',
  '',
  'Мастер: «Ворота не закрываются от того, что гостей пришло меньше.»',
  '',
  'Ученик: «Значит b и c — это undefined?»',
  '',
  'Ветер дует — три чаши на столе.',
  '',
  'С чем ты уйдёшь: чем отличается непереданный аргумент от undefined?',
].join('\n');

export const KoanSegmentsFixture: KoanSegment[] = [
  { type: 'heading', text: 'Коан №1 — «О пустоте аргумента»' },
  { type: 'source', text: 'Из свитков монастыря Мацуо-дэра.' },
  { type: 'code', text: 'function gate(a, b, c) {}\ngate(1)', lang: 'js' },
  { type: 'master', text: 'Мастер: «Ворота не закрываются от того, что гостей пришло меньше.»' },
  { type: 'student', text: 'Ученик: «Значит b и c — это undefined?»' },
  { type: 'haiku', text: 'Ветер дует — три чаши на столе.' },
  { type: 'question', text: 'С чем ты уйдёшь: чем отличается непереданный аргумент от undefined?' },
];

export const KoanFixture: KoanModel = {
  number: 1,
  title: 'О пустоте аргумента',
  slug: '001-o-pustote-argumenta',
  category: 'javascript',
  tags: ['arguments', 'undefined', 'functions'],
  source: 'Монастырь Мацуо-дэра, 1174 г.',
  body: KoanBodyFixture,
  segments: KoanSegmentsFixture,
};

export const KoanApiResponseFixture: KoanApiResponse = {
  frontmatter: {
    number: KoanFixture.number,
    title: KoanFixture.title,
    slug: KoanFixture.slug,
    category: KoanFixture.category,
    tags: KoanFixture.tags,
    source: KoanFixture.source,
  },
  body: KoanBodyFixture,
};

export const KoanListFixture: KoanListItemModel[] = [
  { number: 1, title: 'О пустоте аргумента', slug: '001-o-pustote-argumenta' },
  { number: 2, title: 'О ленивом писце', slug: '002-o-lenivom-pisce' },
  { number: 3, title: 'О мёртвой зоне', slug: '003-o-mertvoi-zone' },
];
