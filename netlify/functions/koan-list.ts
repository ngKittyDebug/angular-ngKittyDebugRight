import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getAllKoanFiles, getKoansDirectory, parseFrontmatter } from './shared/koan-utilities';
import { jsonError } from './shared/http';

interface KoanListItem {
  number: number;
  title: string;
  slug: string;
  category?: string;
  tags?: string[];
}

// Koan files are bundled with the deployment and not change at runtime, so the
// parsed list is cached for the lifetime of a warm function instance.
const cache = {
  koanList: [],
} satisfies { koanList: Partial<KoanListItem>[] };

const koanList = async (request: Request): Promise<Response> => {
  if (request.method !== 'GET') {
    return jsonError(405, 'Method not allowed');
  }

  const LIST_CACHE_CONTROL = 'public, max-age=300, stale-while-revalidate=3600';

  if (cache.koanList.length > 0) {
    return Response.json(cache.koanList, { headers: { 'Cache-Control': LIST_CACHE_CONTROL } });
  }

  try {
    const files = await getAllKoanFiles();

    if (!files.length) {
      return jsonError(404, 'No koans found');
    }

    const list = await getKoanList(getKoansDirectory(), files);

    const koanList: Partial<KoanListItem>[] = list.toSorted(sortByKoanNumber);

    Object.assign(cache, { koanList });

    return Response.json(cache.koanList, { headers: { 'Cache-Control': LIST_CACHE_CONTROL } });
  } catch (error) {
    console.error('koan-list failed', error);

    return jsonError(500, 'Internal error');
  }
};

function sortByKoanNumber(a: Partial<KoanListItem>, b: Partial<KoanListItem>): number {
  return (a.number ?? Infinity) - (b.number ?? Infinity);
}

function getKoanList(directory: string, files: string[]) {
  return Promise.all(
    files.map((file) =>
      readFile(join(directory, file), 'utf-8').then((raw) => {
        const {
          frontmatter: { number, title, slug, category, tags },
        } = parseFrontmatter(raw);

        return { number, title, slug, category, tags };
      })
    )
  );
}

export default koanList;
