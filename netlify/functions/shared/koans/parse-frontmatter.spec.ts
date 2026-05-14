import { parseFrontmatter } from './parse-frontmatter';

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

describe('parseFrontmatter', () => {
  describe('Happy Path', () => {
    describe('Frontmatter и тело присутствуют', () => {
      it('должен разобрать frontmatter в типизированный объект', () => {
        const { frontmatter } = parseFrontmatter(RAW_KOAN);

        expect(frontmatter).toEqual({
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
