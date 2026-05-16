import { readdir, readFile } from 'node:fs/promises';
import { vi } from 'vitest';

import koanRandom from '../koan-random';
import { RAW_KOAN_FIXTURE } from './koan-raw.fixture';

vi.mock('node:fs/promises');

describe('koan-random', () => {
  describe('Happy Path', () => {
    describe('Коаны существуют', () => {
      it('должен вернуть 200 и разобранный коан', async () => {
        vi.mocked(readdir).mockResolvedValue(['001-o-pustote-argumenta.mdx'] as never);
        vi.mocked(readFile).mockResolvedValue(RAW_KOAN_FIXTURE);

        const response = await koanRandom();
        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.slug).toBe('001-o-pustote-argumenta');
      });
    });
  });

  describe('Negative Cases', () => {
    describe('Коанов нет или чтение упало', () => {
      it('должен вернуть 404, если .mdx файлов нет', async () => {
        vi.mocked(readdir).mockResolvedValue([] as never);

        const response = await koanRandom();

        expect(response.status).toBe(404);
      });

      it('должен вернуть 500 при сбое чтения файла', async () => {
        vi.mocked(readdir).mockResolvedValue(['001-o-pustote-argumenta.mdx'] as never);
        vi.mocked(readFile).mockRejectedValue(new Error('disk error'));

        const response = await koanRandom();

        expect(response.status).toBe(500);
      });
    });
  });
});
