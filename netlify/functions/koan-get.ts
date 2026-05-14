import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseFrontmatter } from './shared/koans/parse-frontmatter';
import { jsonError } from './shared/koans/http';
import { getAllKoanFiles, getKoansDirectory } from './shared/koans/utilities';

const SLUG_PATTERN = /^[0-9a-z-]+$/;

const koanGet = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return jsonError(400, 'Missing slug parameter');
  }

  if (!SLUG_PATTERN.test(slug)) {
    return jsonError(400, 'Invalid slug parameter');
  }

  try {
    const koansDirectory = getKoansDirectory();
    const files = await getAllKoanFiles();
    const fileName = files.find((f) => f === `${slug}.mdx`);

    if (!fileName) {
      return jsonError(404, 'Koan not found');
    }

    const raw = await readFile(join(koansDirectory, fileName), 'utf-8');
    const parsed = parseFrontmatter(raw);

    return Response.json(parsed);
  } catch (error) {
    console.error('koan-get failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanGet;
