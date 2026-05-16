import { readdir } from 'node:fs/promises';
import { vi } from 'vitest';

import { getAllKoanFiles, getKoansDirectory } from '../../../functions/koans/shared/utilities';

vi.mock('node:fs/promises');

describe('koans utilities', () => {
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
});
