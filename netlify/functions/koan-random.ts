import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getAllKoanFiles, getKoansDirectory, parseFrontmatter } from './shared/koan-utilities';
import { isGETRequest, jsonError } from './shared/http';

const SLUG_PATTERN = /^[0-9a-z-]+$/;
const SLUG_MAX_LENGTH = 100;
const RANDOM_CACHE_CONTROL = 'no-store';

// Koan files are bundled with the deployment and not change at runtime, so the
// file list is cached for the lifetime of a warm function instance.
const cache: { files: string[] } = { files: [] };

const koanRandom = async (request: Request): Promise<Response> => {
  if (!isGETRequest(request)) {
    return jsonError(405, 'Method not allowed');
  }

  const url = new URL(request.url);
  const exclude: Nullable<string> = url.searchParams.get('exclude');

  if (exclude && (exclude.length > SLUG_MAX_LENGTH || !SLUG_PATTERN.test(exclude))) {
    return jsonError(400, 'Invalid exclude parameter');
  }

  try {
    const koansDirectory = getKoansDirectory();

    if (cache.files.length === 0) {
      cache.files = await getAllKoanFiles();
    }

    const pool = exclude ? cache.files.filter((f) => f !== `${exclude}.mdx`) : cache.files;

    if (!pool.length) {
      return jsonError(404, 'No koans found');
    }

    const file = pool[Math.floor(Math.random() * pool.length)];
    const raw = await readFile(join(koansDirectory, file), 'utf-8');
    const {
      frontmatter: { number, title, slug, category, tags, source },
      body,
    } = parseFrontmatter(raw);

    return Response.json(
      { number, title, slug, category, tags, source, body },
      {
        headers: { 'Cache-Control': RANDOM_CACHE_CONTROL },
      }
    );
  } catch (error) {
    console.error('koan-random failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanRandom;
