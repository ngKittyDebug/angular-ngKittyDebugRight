import { readdir, readFile } from 'node:fs/promises';
import { vi } from 'vitest';

import koanGet from '../koan-get';
import { RAW_KOAN_FIXTURE } from './koan-raw.fixture';

vi.mock('node:fs/promises');

const buildRequest = (query = ''): Request => new Request(`https://example.com/.netlify/functions/koan-get${query}`);

describe('koan-get', () => {
  describe('Happy Path', () => {
    describe('Slug валиден и коан существует', () => {
      it('должен вернуть 200 и разобранный коан', async () => {
        vi.mocked(readdir).mockResolvedValue(['001-o-pustote-argumenta.mdx'] as never);
        vi.mocked(readFile).mockResolvedValue(RAW_KOAN_FIXTURE);

        const response = await koanGet(buildRequest('?slug=001-o-pustote-argumenta'));
        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.slug).toBe('001-o-pustote-argumenta');
      });
    });
  });

  describe('Negative Cases', () => {
    describe('Некорректный запрос', () => {
      it('должен вернуть 400, если slug не передан', async () => {
        const response = await koanGet(buildRequest());

        expect(response.status).toBe(400);
      });

      it('должен вернуть 400 при недопустимом формате slug', async () => {
        const response = await koanGet(buildRequest('?slug=bad%20slug'));

        expect(response.status).toBe(400);
      });

      it('должен вернуть 404, если коан не найден', async () => {
        vi.mocked(readdir).mockResolvedValue(['001-o-pustote-argumenta.mdx'] as never);

        const response = await koanGet(buildRequest('?slug=999-nesushchestvuet'));

        expect(response.status).toBe(404);
      });

      it('должен вернуть 500 при сбое чтения файла', async () => {
        vi.mocked(readdir).mockResolvedValue(['001-o-pustote-argumenta.mdx'] as never);
        vi.mocked(readFile).mockRejectedValue(new Error('disk error'));

        const response = await koanGet(buildRequest('?slug=001-o-pustote-argumenta'));

        expect(response.status).toBe(500);
      });
    });
  });
});
