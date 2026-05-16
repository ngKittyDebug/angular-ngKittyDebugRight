import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getAllKoanFiles, getKoansDirectory, parseFrontmatter } from './shared/koan-utilities';
import { jsonError } from './shared/http';

const SLUG_PATTERN = /^[0-9a-z-]+$/;
const SLUG_MAX_LENGTH = 100;

// Koan files are bundled with the deployment and do not change at runtime.
let filesCache: string[] | null = null;

const koanGet = async (request: Request): Promise<Response> => {
  if (request.method !== 'GET') {
    return jsonError(405, 'Method not allowed');
  }

  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return jsonError(400, 'Missing slug parameter');
  }

  if (slug.length > SLUG_MAX_LENGTH) {
    return jsonError(400, 'Slug too long');
  }

  if (!SLUG_PATTERN.test(slug)) {
    return jsonError(400, 'Invalid slug parameter');
  }

  try {
    const koansDirectory = getKoansDirectory();
    const files = filesCache ?? (filesCache = await getAllKoanFiles());
    const fileName = files.find((f) => f === `${slug}.mdx`);

    if (!fileName) {
      return jsonError(404, 'Koan not found');
    }

    const raw = await readFile(join(koansDirectory, fileName), 'utf-8');
    const {
      frontmatter: { number, title, slug: koanSlug },
      body,
    } = parseFrontmatter(raw);

    return Response.json(
      { number, title, slug: koanSlug, body },
      {
        headers: { 'Cache-Control': 'public, max-age=3600, immutable' },
      }
    );
  } catch (error) {
    console.error('koan-get failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanGet;
