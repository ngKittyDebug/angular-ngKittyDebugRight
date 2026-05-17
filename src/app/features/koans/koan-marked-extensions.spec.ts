import { marked, Marked } from 'marked';

import { koanHeadingExtension, koanMarkedExtensions } from './koan-marked-extensions';

function render(source: string): string {
  return new Marked(koanMarkedExtensions, koanHeadingExtension).parse(source) as string;
}

describe('koanMarkedExtensions', () => {
  describe('block tags', () => {
    it.each([
      ['Master', 'master', 'Мастер ударил палкой.'],
      ['Student', 'student', 'Ученик задумался.'],
      ['Source', 'source', 'Из свитков монастыря.'],
      ['Action', 'action', 'Мастер промолчал.'],
      ['Haiku', 'haiku', 'Ветер дует — три чаши.'],
    ])('должен обернуть <%s> в <p class="segment %s">', (tag, cssClass, text) => {
      const html = render(`<${tag}>${text}</${tag}>`);

      expect(html).toContain(`<p class="segment ${cssClass}">`);
      expect(html).toContain(text);
    });

    it('Haiku больше не оборачивается в <figure> (после редизайна)', () => {
      const html = render('<Haiku>Тишина.</Haiku>');

      expect(html).not.toContain('<figure');
      expect(html).not.toContain('<figcaption');
    });
  });

  describe('Question с печатью 問', () => {
    it('должен префиксировать содержимое aria-hidden span с кандзи 問', () => {
      const html = render('<Question>Что есть «нет»?</Question>');

      expect(html).toContain('<p class="segment question">');
      expect(html).toContain('<span class="question-mark" aria-hidden="true">問</span>');
      expect(html).toContain('Что есть «нет»?');
    });

    it('печать должна идти перед текстом', () => {
      const html = render('<Question>Вопрос.</Question>');
      const sealIndex = html.indexOf('問');
      const textIndex = html.indexOf('Вопрос.');

      expect(sealIndex).toBeGreaterThan(-1);
      expect(textIndex).toBeGreaterThan(sealIndex);
    });
  });

  describe('inline-санитизация', () => {
    it('должен срезать опасные теги внутри сегмента', () => {
      const html = render('<Master>safe<script>alert(1)</script></Master>');

      expect(html).not.toContain('<script');
      expect(html).toContain('safe');
    });
  });
});

describe('koanHeadingExtension', () => {
  it('должен сдвигать уровни заголовков вниз на один (h1 → h2)', () => {
    const html = marked.use(koanHeadingExtension).parse('# Заголовок') as string;

    expect(html).toContain('<h2>Заголовок</h2>');
    expect(html).not.toContain('<h1>');
  });
});
