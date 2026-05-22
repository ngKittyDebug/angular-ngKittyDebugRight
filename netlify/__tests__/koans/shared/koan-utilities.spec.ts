import { vi } from 'vitest';

import { mockKoanFiles } from '../../readdir.mock';
import {
  assertIsKoanFrontmatter,
  getAllKoanFiles,
  getKoansDirectory,
  parseFrontmatter,
} from '../../../functions/shared/koan-utilities';

vi.mock('node:fs/promises');

const RAW_KOAN = [
  '---',
  'number: 1',
  'title: "О пустоте аргумента"',
  'slug: "001-o-pustote-argumenta"',
  'category: "javascript"',
  'tags: ["arguments", "undefined"]',
  'source: "Монастырь Мацуо-дэра"',
  '---',
  '',
  '# Заголовок',
  '',
  'Тело коана.',
].join('\n');

describe('koan utilities', () => {
  describe('getKoansDirectory', () => {
    it('должен указывать на каталог public/koans/ru для lang=ru', () => {
      const directory = getKoansDirectory('ru');

      expect(directory.replace(/\\/g, '/').endsWith('/public/koans/ru')).toBe(true);
    });

    it('должен указывать на каталог public/koans/en для lang=en', () => {
      const directory = getKoansDirectory('en');

      expect(directory.replace(/\\/g, '/').endsWith('/public/koans/en')).toBe(true);
    });
  });

  describe('getAllKoanFiles', () => {
    describe('Happy Path', () => {
      it('должен вернуть только .mdx файлы', async () => {
        mockKoanFiles(['001.mdx', 'readme.txt', '002.mdx']);

        const files = await getAllKoanFiles('ru');

        expect(files).toEqual(['001.mdx', '002.mdx']);
      });
    });

    describe('Edge Cases', () => {
      it('должен вернуть пустой массив, если .mdx файлов нет', async () => {
        mockKoanFiles(['readme.txt']);

        const files = await getAllKoanFiles('ru');

        expect(files).toEqual([]);
      });
    });
  });

  describe('parseFrontmatter', () => {
    describe('Happy Path', () => {
      describe('Frontmatter и тело присутствуют', () => {
        it('должен разобрать frontmatter в типизированный объект', () => {
          const { frontmatter } = parseFrontmatter(RAW_KOAN);

          expect(frontmatter).toMatchObject({
            number: 1,
            title: 'О пустоте аргумента',
            slug: '001-o-pustote-argumenta',
            category: 'javascript',
            tags: ['arguments', 'undefined'],
            source: 'Монастырь Мацуо-дэра',
          });
        });

        it('должен вернуть тело без блока frontmatter', () => {
          const { body } = parseFrontmatter(RAW_KOAN);

          expect(body).toBe('# Заголовок\n\nТело коана.');
        });
      });
    });

    describe('Edge Cases', () => {
      describe('Некорректные данные frontmatter', () => {
        it('должен вернуть пустой frontmatter при невалидном YAML', () => {
          const raw = '---\nnumber: 1\ntags: [broken\n---\n\nтело';

          const { frontmatter } = parseFrontmatter(raw);

          expect(frontmatter).toEqual({});
        });

        it('должен вернуть строку в tags, если значение не массив', () => {
          const raw = '---\nnumber: 1\ntags: "одна-строка"\n---\n\nтело';

          const { frontmatter } = parseFrontmatter(raw);

          expect(frontmatter.tags).toBe('одна-строка');
        });
      });

      describe('Frontmatter отсутствует', () => {
        it('должен вернуть пустой frontmatter без разделителей ---', () => {
          const raw = '# Просто текст без frontmatter';

          const { frontmatter } = parseFrontmatter(raw);

          expect(frontmatter).toEqual({});
        });
      });
    });
  });

  describe('assertIsKoanFrontmatter', () => {
    const validFrontmatter = {
      number: 1,
      title: 'Заголовок',
      slug: '001-slug',
      category: 'javascript',
      tags: ['a', 'b'],
      source: 'Источник',
    };

    describe('Happy Path', () => {
      it('не должен бросать на полном корректном frontmatter', () => {
        expect(() => assertIsKoanFrontmatter(validFrontmatter)).not.toThrow();
      });
    });

    describe('Negative Cases', () => {
      it('должен бросить, если number не конечное число', () => {
        expect(() => assertIsKoanFrontmatter({ ...validFrontmatter, number: Number.NaN })).toThrow();
      });

      it('должен бросить при отсутствии обязательного строкового поля', () => {
        expect(() => assertIsKoanFrontmatter({ ...validFrontmatter, source: undefined })).toThrow();
      });

      it('должен бросить, если tags не массив', () => {
        expect(() => assertIsKoanFrontmatter({ ...validFrontmatter, tags: undefined })).toThrow();
      });
    });
  });
});
