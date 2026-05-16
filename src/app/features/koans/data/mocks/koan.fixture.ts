import type { KoanListItemModel, KoanModel } from '@features/koans/data/models/koan.model';

export const KoanBodyFixture: string = [
  '# Коан №1 — «О пустоте аргумента»',
  '',
  '<Source>Из свитков монастыря Мацуо-дэра.</Source>',
  '',
  '```js',
  'function gate(a, b, c) {}',
  'gate(1)',
  '```',
  '',
  '<Master>Мастер: «Ворота не закрываются от того, что гостей пришло меньше.»</Master>',
  '',
  '<Student>Ученик: «Значит b и c — это undefined?»</Student>',
  '',
  '<Haiku>Ветер дует — три чаши на столе.</Haiku>',
  '',
  '<Question>С чем ты уйдёшь: чем отличается непереданный аргумент от undefined?</Question>',
].join('\n');

export const KoanFixture: KoanModel = {
  number: 1,
  title: 'О пустоте аргумента',
  slug: '001-o-pustote-argumenta',
  body: KoanBodyFixture,
};

export const KoanListFixture: KoanListItemModel[] = [
  { number: 1, title: 'О пустоте аргумента', slug: '001-o-pustote-argumenta' },
  { number: 2, title: 'О ленивом писце', slug: '002-o-lenivom-pisce' },
  { number: 3, title: 'О мёртвой зоне', slug: '003-o-mertvoi-zone' },
];
