import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getAllKoanFiles, getKoansDirectory, parseFrontmatter } from './shared/koan-utilities';
import { jsonError } from './shared/http';

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
    const { frontmatter, body } = parseFrontmatter(raw);

    return Response.json({ ...frontmatter, body });
  } catch (error) {
    console.error('koan-get failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanGet;
