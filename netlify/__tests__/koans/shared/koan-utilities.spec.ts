import { readdir } from 'node:fs/promises';
import { vi } from 'vitest';

import { getAllKoanFiles, getKoansDirectory, parseFrontmatter } from '../../../functions/shared/koan-utilities';

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
    it('должен указывать на каталог public/koans', () => {
      const directory = getKoansDirectory();

      expect(directory.replace(/\\/g, '/').endsWith('/public/koans')).toBe(true);
    });
  });

  describe('getAllKoanFiles', () => {
    describe('Happy Path', () => {
      it('должен вернуть только .mdx файлы', async () => {
        vi.mocked(readdir).mockResolvedValue(['001.mdx', 'readme.txt', '002.mdx'] as never);

        const files = await getAllKoanFiles();

        expect(files).toEqual(['001.mdx', '002.mdx']);
      });
    });

    describe('Edge Cases', () => {
      it('должен вернуть пустой массив, если .mdx файлов нет', async () => {
        vi.mocked(readdir).mockResolvedValue(['readme.txt'] as never);

        const files = await getAllKoanFiles();

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
        it('должен вернуть пустой массив тегов при битом JSON', () => {
          const raw = '---\nnumber: 1\ntags: [broken\n---\n\nтело';

          const { frontmatter } = parseFrontmatter(raw);

          expect(frontmatter.tags).toEqual([]);
        });

        it('должен вернуть пустой массив тегов, если значение не массив', () => {
          const raw = '---\nnumber: 1\ntags: "одна-строка"\n---\n\nтело';

          const { frontmatter } = parseFrontmatter(raw);

          expect(frontmatter.tags).toEqual([]);
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
});
