import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseFrontmatter } from './shared/koans/parse-frontmatter';
import { getAllKoanFiles, getKoansDirectory } from './shared/koans/utilities';

const randomKoan = async (): Promise<Response> => {
  const koansDirectory = getKoansDirectory();
  const files = await getAllKoanFiles();
  const file = files[Math.floor(Math.random() * files.length)];
  const raw = await readFile(join(koansDirectory, file), 'utf-8');
  const parsed = parseFrontmatter(raw);

  return Response.json(parsed);
};

export default randomKoan;
