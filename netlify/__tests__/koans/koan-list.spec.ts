import { readdir, readFile } from 'node:fs/promises';
import { vi } from 'vitest';
import { buildRawKoan } from '../koan-raw.fixture';

vi.mock('node:fs/promises');

// koan-list keeps a module-scope cache, so each test imports a fresh module instance.
const importKoanList = async (): Promise<() => Promise<Response>> => {
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

        const response = await koanList();
        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.map((item: { number: number }) => item.number)).toEqual([1, 2]);
      });

      it('должен кешировать список и не перечитывать файлы при повторном вызове', async () => {
        vi.mocked(readdir).mockResolvedValue(['001-a.mdx'] as never);
        vi.mocked(readFile).mockResolvedValue(buildRawKoan(1, '001-a'));
        const koanList = await importKoanList();

        await koanList();
        await koanList();

        expect(readFile).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Negative Cases', () => {
    describe('Коанов нет или чтение упало', () => {
      it('должен вернуть 404, если .mdx файлов нет', async () => {
        vi.mocked(readdir).mockResolvedValue([] as never);
        const koanList = await importKoanList();

        const response = await koanList();

        expect(response.status).toBe(404);
      });

      it('должен вернуть 500 при сбое чтения файла', async () => {
        vi.mocked(readdir).mockResolvedValue(['001-a.mdx'] as never);
        vi.mocked(readFile).mockRejectedValue(new Error('disk error'));
        const koanList = await importKoanList();

        const response = await koanList();

        expect(response.status).toBe(500);
      });
    });
  });
});
