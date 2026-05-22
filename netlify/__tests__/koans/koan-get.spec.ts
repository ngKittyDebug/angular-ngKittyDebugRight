import { readFile } from 'node:fs/promises';
import { vi } from 'vitest';

import { RAW_KOAN_FIXTURE } from '../koan-raw.fixture';
import { mockKoanFiles } from '../readdir.mock';
import { noop } from 'rxjs';

vi.mock('node:fs/promises');

const buildRequest = (query = ''): Request => new Request(`https://example.com/.netlify/functions/koan-get${query}`);

// koan-get keeps a module-scope files cache, so each test imports a fresh module instance.
const importKoanGet = async (): Promise<(request: Request) => Promise<Response>> => {
  vi.resetModules();
  const module = await import('../../functions/koan-get');

  return module.default;
};

describe('koan-get', () => {
  describe('Happy Path', () => {
    describe('Slug валиден и коан существует', () => {
      it('должен вернуть 200 и разобранный коан', async () => {
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        vi.mocked(readFile).mockResolvedValue(RAW_KOAN_FIXTURE);
        const koanGet = await importKoanGet();

        const response = await koanGet(buildRequest('?slug=001-o-pustote-argumenta'));
        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.slug).toBe('001-o-pustote-argumenta');
      });

      it('должен пробрасывать category, tags и source из frontmatter', async () => {
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        vi.mocked(readFile).mockResolvedValue(RAW_KOAN_FIXTURE);
        const koanGet = await importKoanGet();

        const response = await koanGet(buildRequest('?slug=001-o-pustote-argumenta'));
        const body = await response.json();

        expect(body).toMatchObject({
          category: 'JavaScript',
          tags: ['arguments', 'undefined'],
          source: 'Монастырь Мацуо-дэра',
        });
      });

      it('должен вернуть Cache-Control: public, max-age=3600, immutable', async () => {
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        vi.mocked(readFile).mockResolvedValue(RAW_KOAN_FIXTURE);
        const koanGet = await importKoanGet();

        const response = await koanGet(buildRequest('?slug=001-o-pustote-argumenta'));

        expect(response.headers.get('Cache-Control')).toBe('public, max-age=3600, immutable');
      });
    });
  });

  describe('Negative Cases', () => {
    describe('Некорректный запрос', () => {
      it('должен вернуть 400, если slug не передан', async () => {
        const koanGet = await importKoanGet();

        const response = await koanGet(buildRequest());

        expect(response.status).toBe(400);
      });

      it('должен вернуть 400 при недопустимом формате slug', async () => {
        const koanGet = await importKoanGet();

        const response = await koanGet(buildRequest('?slug=bad%20slug'));

        expect(response.status).toBe(400);
      });

      it('должен вернуть 400 если slug превышает 100 символов', async () => {
        const koanGet = await importKoanGet();
        const longSlug = 'a'.repeat(101);

        const response = await koanGet(buildRequest(`?slug=${longSlug}`));

        expect(response.status).toBe(400);
      });

      it('должен вернуть 404, если коан не найден', async () => {
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        const koanGet = await importKoanGet();

        const response = await koanGet(buildRequest('?slug=999-nesushchestvuet'));

        expect(response.status).toBe(404);
      });

      it('должен вернуть 500 при сбое чтения файла', async () => {
        vi.spyOn(console, 'error').mockImplementation(noop);
        mockKoanFiles(['001-o-pustote-argumenta.mdx']);
        vi.mocked(readFile).mockRejectedValue(new Error('disk error'));
        const koanGet = await importKoanGet();

        const response = await koanGet(buildRequest('?slug=001-o-pustote-argumenta'));

        expect(response.status).toBe(500);
      });

      it('должен вернуть 405 при не-GET методе', async () => {
        const koanGet = await importKoanGet();

        const response = await koanGet(
          new Request('https://example.com/.netlify/functions/koan-get?slug=001-o-pustote-argumenta', {
            method: 'POST',
          })
        );

        expect(response.status).toBe(405);
      });
    });
  });
});
