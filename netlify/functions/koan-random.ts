import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getAllKoanFiles, getKoansDirectory, parseFrontmatter } from './shared/koan-utilities';
import { jsonError } from './shared/http';

// Koan files are bundled with the deployment and do not change at runtime.
let filesCache: string[] | null = null;

const koanRandom = async (request: Request): Promise<Response> => {
  if (request.method !== 'GET') {
    return jsonError(405, 'Method not allowed');
  }

  const url = new URL(request.url);
  const exclude = url.searchParams.get('exclude');

  try {
    const koansDirectory = getKoansDirectory();
    const files = filesCache ?? (filesCache = await getAllKoanFiles());
    const pool = exclude ? files.filter((f) => f !== `${exclude}.mdx`) : files;

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
        headers: { 'Cache-Control': 'no-store' },
      }
    );
  } catch (error) {
    console.error('koan-random failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanRandom;
