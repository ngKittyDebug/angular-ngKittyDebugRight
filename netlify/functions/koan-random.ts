import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getAllKoanFiles, getKoansDirectory, parseFrontmatter } from './shared/koan-utilities';
import { jsonError } from './shared/http';

const koanRandom = async (): Promise<Response> => {
  try {
    const koansDirectory = getKoansDirectory();
    const files = await getAllKoanFiles();

    if (!files.length) {
      return jsonError(404, 'No koans found');
    }

    const file = files[Math.floor(Math.random() * files.length)];
    const raw = await readFile(join(koansDirectory, file), 'utf-8');
    const { frontmatter, body } = parseFrontmatter(raw);

    return Response.json({ ...frontmatter, body });
  } catch (error) {
    console.error('koan-random failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanRandom;
