import { TestBed } from '@angular/core/testing';

import { KoanBodyParserService } from './koan-body-parser.service';

describe('KoanBodyParserService', () => {
  let service: KoanBodyParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoanBodyParserService);
  });

  describe('Happy Path', () => {
    describe('Тело коана разобрано', () => {
      it('должен пометить абзац до блока кода как source', () => {
        const body = 'Из свитков монастыря.';

        const segments = service.parse(body);

        expect(segments).toEqual([{ type: 'source', text: 'Из свитков монастыря.' }]);
      });

      it('должен разобрать заголовок как heading', () => {
        const body = '# Коан №1';

        const segments = service.parse(body);

        expect(segments).toEqual([{ type: 'heading', text: 'Коан №1' }]);
      });

      it('должен разобрать блок кода с указанным языком', () => {
        const body = '```ts\nconst x = 1;\n```';

        const segments = service.parse(body);

        expect(segments).toEqual([{ type: 'code', text: 'const x = 1;', lang: 'ts' }]);
      });

      it('должен пометить реплику мастера после кода как master', () => {
        const body = '```js\nx\n```\n\nМастер: молчание.';

        const segments = service.parse(body);

        expect(segments[1]).toEqual({ type: 'master', text: 'Мастер: молчание.' });
      });

      it('должен пометить реплику ученика после кода как student', () => {
        const body = '```js\nx\n```\n\nУченик: вопрос?';

        const segments = service.parse(body);

        expect(segments[1]).toEqual({ type: 'student', text: 'Ученик: вопрос?' });
      });

      it('должен повысить предыдущий абзац до haiku при появлении вопроса', () => {
        const body = '```js\nx\n```\n\nВетер дует.\n\nС чем ты уйдёшь: почему?';

        const segments = service.parse(body);

        expect(segments).toEqual([
          { type: 'code', text: 'x', lang: 'js' },
          { type: 'haiku', text: 'Ветер дует.' },
          { type: 'question', text: 'С чем ты уйдёшь: почему?' },
        ]);
      });

      it('должен пометить прочий абзац после кода как action', () => {
        const body = '```js\nx\n```\n\nМастер ударил его палкой.';

        const segments = service.parse(body);

        expect(segments[1]).toEqual({ type: 'action', text: 'Мастер ударил его палкой.' });
      });
    });
  });

  describe('Edge Cases', () => {
    describe('Граничные данные', () => {
      it('должен вернуть пустой массив для пустого тела', () => {
        const body = '';

        const segments = service.parse(body);

        expect(segments).toEqual([]);
      });

      it('должен подставить js как язык по умолчанию для блока кода без языка', () => {
        const body = '```\nplain code\n```';

        const segments = service.parse(body);

        expect(segments).toEqual([{ type: 'code', text: 'plain code', lang: 'js' }]);
      });
    });
  });
});
