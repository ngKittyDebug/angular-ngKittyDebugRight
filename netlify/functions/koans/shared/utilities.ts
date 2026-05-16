import { join } from 'node:path';
import { readdir } from 'node:fs/promises';

export const getKoansDirectory = () => join(process.cwd(), 'public', 'koans');

export const getAllKoanFiles = async (): Promise<string[]> => {
  const koansDirectory = getKoansDirectory();
  const allFiles = await readdir(koansDirectory);

  return allFiles.filter((f) => f.endsWith('.mdx'));
};
