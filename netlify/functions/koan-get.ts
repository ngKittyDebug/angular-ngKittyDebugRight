import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getAllKoanFiles, getKoansDirectory, parseFrontmatter } from './shared/koan-utilities';
import { isGETRequest, jsonError } from './shared/http';

const SLUG_PATTERN = /^[0-9a-z-]+$/;
const SLUG_MAX_LENGTH = 100;
const KOAN_CACHE_CONTROL = 'public, max-age=3600, immutable';

// Koan files are bundled with the deployment and not change at runtime, so the
// file list is cached for the lifetime of a warm function instance.
const cache: { files: string[] } = { files: [] };

const koanGet = async (request: Request): Promise<Response> => {
  if (!isGETRequest(request)) {
    return jsonError(405, 'Method not allowed');
  }

  const url = new URL(request.url);
  const slug: Nullable<string> = url.searchParams.get('slug');

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

    if (cache.files.length === 0) {
      cache.files = await getAllKoanFiles();
    }

    const fileName = cache.files.find((f) => f === `${slug}.mdx`);

    if (!fileName) {
      return jsonError(404, 'Koan not found');
    }

    const raw = await readFile(join(koansDirectory, fileName), 'utf-8');
    const {
      frontmatter: { number, title, slug: koanSlug, category, tags, source },
      body,
    } = parseFrontmatter(raw);

    return Response.json(
      { number, title, slug: koanSlug, category, tags, source, body },
      {
        headers: { 'Cache-Control': KOAN_CACHE_CONTROL },
      }
    );
  } catch (error) {
    console.error('koan-get failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanGet;
