import { readFile } from 'node:fs/promises';
import { vi } from 'vitest';
import { buildRawKoan } from '../koan-raw.fixture';
import { mockKoanFiles } from '../readdir.mock';
import { noop } from 'rxjs';

vi.mock('node:fs/promises');

const GET = new Request('https://example.com/.netlify/functions/koan-categories');

const importKoanCategories = async (): Promise<(request: Request) => Promise<Response>> => {
  vi.resetModules();
  const module = await import('../../functions/koan-categories');

  return module.default;
};

describe('koan-categories', () => {
  describe('Happy Path', () => {
    it('должен вернуть 200 и уникальные категории с кандзи', async () => {
      mockKoanFiles(['001-a.mdx', '002-b.mdx', '003-c.mdx']);
      vi.mocked(readFile).mockImplementation((path) => {
        const p = String(path);

        if (p.includes('001')) {
          return Promise.resolve(buildRawKoan(1, '001-a', 'А', 'JavaScript', '"言"'));
        }
        if (p.includes('002')) {
          return Promise.resolve(buildRawKoan(2, '002-b', 'Б', 'Angular', '"骨"'));
        }

        return Promise.resolve(buildRawKoan(3, '003-c', 'В', 'JavaScript', '"言"'));
      });
      const koanCategories = await importKoanCategories();

      const response = await koanCategories(GET);
      const body = await response.json();

      expect(response.status).toBe(200);
      expect(body).toHaveLength(2);
      expect(body).toContainEqual({ id: 'JavaScript', kanji: '言' });
      expect(body).toContainEqual({ id: 'Angular', kanji: '骨' });
    });

    it('должен вернуть "·" для категории без кандзи', async () => {
      mockKoanFiles(['001-a.mdx']);
      vi.mocked(readFile).mockResolvedValue(buildRawKoan(1, '001-a', 'А', 'unknown', null));
      const koanCategories = await importKoanCategories();

      const response = await koanCategories(GET);
      const body = await response.json();

      expect(body[0]).toEqual({ id: 'unknown', kanji: '·' });
    });

    it('должен вернуть Cache-Control с max-age=3600', async () => {
      mockKoanFiles(['001-a.mdx']);
      vi.mocked(readFile).mockResolvedValue(buildRawKoan(1, '001-a'));
      const koanCategories = await importKoanCategories();

      const response = await koanCategories(GET);

      expect(response.headers.get('Cache-Control')).toBe('public, max-age=3600, stale-while-revalidate=86400');
    });

    it('должен кешировать результат и не перечитывать файлы при повторном вызове', async () => {
      mockKoanFiles(['001-a.mdx']);
      vi.mocked(readFile).mockResolvedValue(buildRawKoan(1, '001-a'));
      const koanCategories = await importKoanCategories();

      await koanCategories(GET);
      await koanCategories(GET);

      expect(readFile).toHaveBeenCalledTimes(1);
    });
  });

  describe('Negative Cases', () => {
    it('должен вернуть 404, если .mdx файлов нет', async () => {
      mockKoanFiles([]);
      const koanCategories = await importKoanCategories();

      const response = await koanCategories(GET);

      expect(response.status).toBe(404);
    });

    it('должен вернуть 500 при сбое чтения файла', async () => {
      vi.spyOn(console, 'error').mockImplementation(noop);
      mockKoanFiles(['001-a.mdx']);
      vi.mocked(readFile).mockRejectedValue(new Error('disk error'));
      const koanCategories = await importKoanCategories();

      const response = await koanCategories(GET);

      expect(response.status).toBe(500);
    });

    it('должен вернуть 405 при не-GET методе', async () => {
      const koanCategories = await importKoanCategories();

      const response = await koanCategories(
        new Request('https://example.com/.netlify/functions/koan-categories', { method: 'POST' })
      );

      expect(response.status).toBe(405);
    });
  });
});
