import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseFrontmatter } from './shared/koans/parse-frontmatter';
import { getAllKoanFiles, getKoansDirectory } from './shared/koans/utilities';

const getKoan = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return Response.json({ error: 'Missing slug parameter' }, { status: 400 });
  }

  const koansDirectory = getKoansDirectory();
  const files = await getAllKoanFiles();
  const fileName = files.find((f) => f.includes(slug));

  if (!fileName) {
    return Response.json({ error: 'Koan not found' }, { status: 404 });
  }

  const raw = await readFile(join(koansDirectory, fileName), 'utf-8');
  const parsed = parseFrontmatter(raw);

  return Response.json(parsed);
};

export default getKoan;
