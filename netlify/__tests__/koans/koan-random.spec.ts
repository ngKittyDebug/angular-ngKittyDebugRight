import { readdir, readFile } from 'node:fs/promises';
import { vi } from 'vitest';

import { RAW_KOAN_FIXTURE } from '../koan-raw.fixture';
import { mockKoanFiles } from '../readdir.mock';
import { noop } from 'rxjs';

vi.mock('node:fs/promises');

const buildRequest = (query = ''): Request => new Request(`https://example.com/.netlify/functions/koan-random${query}`);

// koan-random keeps a module-scope files cache, so each test imports a fresh module instance.
const importKoanRandom = async (): Promise<(request: Request) => Promise<Response>> => {
  vi.resetModules();
  const module = await import('../../functions/koan-random');

  return module.default;
};

describe('koan-random', () => {
  describe('Happy Path', () => {
    describe('Коаны существуют', () => {
      it('должен вернуть 200 и разобранный коан', async () => {
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        vi.mocked(readFile).mockResolvedValue(RAW_KOAN_FIXTURE);
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(buildRequest());
        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.slug).toBe('001-o-pustote-argumenta');
      });

      it('должен пробрасывать category, tags и source из frontmatter', async () => {
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        vi.mocked(readFile).mockResolvedValue(RAW_KOAN_FIXTURE);
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(buildRequest());
        const body = await response.json();

        expect(body).toMatchObject({
          category: 'javascript',
          tags: ['arguments', 'undefined'],
          source: 'Монастырь Мацуо-дэра',
        });
      });

      it('должен вернуть Cache-Control: no-store', async () => {
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        vi.mocked(readFile).mockResolvedValue(RAW_KOAN_FIXTURE);
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(buildRequest());

        expect(response.headers.get('Cache-Control')).toBe('no-store');
      });

      it('должен исключить текущий коан при наличии параметра exclude', async () => {
        mockKoanFiles(['001-o-pustote-argumenta.mdx', '002-b.mdx']);
        vi.mocked(readFile).mockResolvedValue(RAW_KOAN_FIXTURE);
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(buildRequest('?exclude=001-o-pustote-argumenta'));

        expect(response.status).toBe(200);
      });
    });
  });

  describe('Negative Cases', () => {
    describe('Коанов нет или чтение упало', () => {
      it('должен вернуть 404, если .mdx файлов нет', async () => {
        mockKoanFiles([]);
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(buildRequest());

        expect(response.status).toBe(404);
      });

      it('должен вернуть 404, если все коаны исключены через exclude', async () => {
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(buildRequest('?exclude=001-o-pustote-argumenta'));

        expect(response.status).toBe(404);
      });

      it('должен вернуть 500 при сбое чтения файла', async () => {
        vi.spyOn(console, 'error').mockImplementation(noop);
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        vi.mocked(readFile).mockRejectedValue(new Error('disk error'));
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(buildRequest());

        expect(response.status).toBe(500);
      });

      it('должен вернуть 400 при exclude с недопустимыми символами', async () => {
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(buildRequest('?exclude=../../etc/passwd'));

        expect(response.status).toBe(400);
        expect(readdir).not.toHaveBeenCalled();
      });

      it('должен вернуть 400 при слишком длинном exclude', async () => {
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(buildRequest(`?exclude=${'a'.repeat(101)}`));

        expect(response.status).toBe(400);
      });

      it('должен вернуть 405 при не-GET методе', async () => {
        const koanRandom = await importKoanRandom();

        const response = await koanRandom(
          new Request('https://example.com/.netlify/functions/koan-random', { method: 'POST' })
        );

        expect(response.status).toBe(405);
      });
    });
  });
});
