import { readdir, readFile } from 'node:fs/promises';
import { vi } from 'vitest';
import { buildRawKoan } from '../koan-raw.fixture';
import { noop } from 'rxjs';

vi.mock('node:fs/promises');

const GET = new Request('https://example.com/.netlify/functions/koan-list');

// koan-list keeps a module-scope cache, so each test imports a fresh module instance.
const importKoanList = async (): Promise<(request: Request) => Promise<Response>> => {
  vi.resetModules();
  const module = await import('../../functions/koan-list');

  return module.default;
};

describe('koan-list', () => {
  describe('Happy Path', () => {
    describe('Коаны существуют', () => {
      it('должен вернуть 200 и список, отсортированный по number', async () => {
        vi.mocked(readdir).mockResolvedValue(['002-b.mdx', '001-a.mdx'] as never);
        vi.mocked(readFile).mockImplementation((path) =>
          Promise.resolve(String(path).includes('002') ? buildRawKoan(2, '002-b') : buildRawKoan(1, '001-a'))
        );
        const koanList = await importKoanList();

        const response = await koanList(GET);
        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.map((item: { number: number }) => item.number)).toEqual([1, 2]);
      });

      it('должен вернуть Cache-Control: public, max-age=300, stale-while-revalidate=3600', async () => {
        vi.mocked(readdir).mockResolvedValue(['001-a.mdx'] as never);
        vi.mocked(readFile).mockResolvedValue(buildRawKoan(1, '001-a'));
        const koanList = await importKoanList();

        const response = await koanList(GET);

        expect(response.headers.get('Cache-Control')).toBe('public, max-age=300, stale-while-revalidate=3600');
      });

      it('должен кешировать список и не перечитывать файлы при повторном вызове', async () => {
        vi.mocked(readdir).mockResolvedValue(['001-a.mdx'] as never);
        vi.mocked(readFile).mockResolvedValue(buildRawKoan(1, '001-a'));
        const koanList = await importKoanList();

        await koanList(GET);
        await koanList(GET);

        expect(readFile).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Negative Cases', () => {
    describe('Коанов нет или чтение упало', () => {
      it('должен вернуть 404, если .mdx файлов нет', async () => {
        vi.mocked(readdir).mockResolvedValue([] as never);
        const koanList = await importKoanList();

        const response = await koanList(new Request('https://example.com/.netlify/functions/koan-list'));

        expect(response.status).toBe(404);
      });

      it('должен вернуть 500 при сбое чтения файла', async () => {
        vi.spyOn(console, 'error').mockImplementation(noop);
        vi.mocked(readdir).mockResolvedValue(['001-a.mdx'] as never);
        vi.mocked(readFile).mockRejectedValue(new Error('disk error'));
        const koanList = await importKoanList();

        const response = await koanList(new Request('https://example.com/.netlify/functions/koan-list'));

        expect(response.status).toBe(500);
      });

      it('должен вернуть 405 при не-GET методе', async () => {
        const koanList = await importKoanList();

        const response = await koanList(
          new Request('https://example.com/.netlify/functions/koan-list', { method: 'POST' })
        );

        expect(response.status).toBe(405);
      });
    });
  });
});
