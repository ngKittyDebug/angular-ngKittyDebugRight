import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseFrontmatter } from './shared/koans/parse-frontmatter';
import { jsonError } from './shared/koans/http';
import { getAllKoanFiles, getKoansDirectory } from './shared/koans/utilities';

interface KoanListItem {
  number: number;
  title: string;
  slug: string;
}

// Koan files are bundled with the deploy and never change at runtime, so the
// parsed list is cached for the lifetime of a warm function instance.
let cachedList: KoanListItem[] | null = null;

const koanList = async (): Promise<Response> => {
  if (cachedList) {
    return Response.json(cachedList);
  }

  try {
    const koansDirectory = getKoansDirectory();
    const files = await getAllKoanFiles();

    if (!files.length) {
      return jsonError(404, 'No koans found');
    }

    const list = await Promise.all(
      files.map((file) =>
        readFile(join(koansDirectory, file), 'utf-8').then((raw) => {
          const {
            frontmatter: { number, title, slug },
          } = parseFrontmatter(raw);

          return { number, title, slug };
        })
      )
    );

    cachedList = list.toSorted((a, b) => a.number - b.number);

    return Response.json(cachedList);
  } catch (error) {
    console.error('koan-list failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanList;
