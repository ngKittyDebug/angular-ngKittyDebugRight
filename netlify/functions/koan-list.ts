import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getAllKoanFiles, getKoansDirectory, parseFrontmatter } from './shared/koan-utilities';
import { jsonError } from './shared/http';

interface KoanListItem {
  number: number;
  title: string;
  slug: string;
}

// Koan files are bundled with the deployment and not change at runtime, so the
// parsed list is cached for the lifetime of a warm function instance.
const cache = {
  koanList: [],
} satisfies { koanList: Partial<KoanListItem>[] };

const koanList = async (): Promise<Response> => {
  if (cache.koanList.length > 0) {
    return Response.json(cache.koanList);
  }

  try {
    const files = await getAllKoanFiles();

    if (!files.length) {
      return jsonError(404, 'No koans found');
    }

    const list = await getKoanList(getKoansDirectory(), files);

    const koanList: Partial<KoanListItem>[] = list.toSorted(sortByKoanNumber);

    Object.assign(cache, { koanList });

    return Response.json(cache.koanList);
  } catch (error) {
    console.error('koan-list failed', error);

    return jsonError(500, 'Internal error');
  }
};

function sortByKoanNumber(a, b) {
  if (Object.hasOwn(a, 'number') && Object.hasOwn(b, 'number')) {
    return a.number - b.number;
  }

  return 0;
}

function getKoanList(directory: string, files: string[]) {
  return Promise.all(
    files.map((file) =>
      readFile(join(directory, file), 'utf-8').then((raw) => {
        const {
          frontmatter: { number, title, slug },
        } = parseFrontmatter(raw);

        return { number, title, slug };
      })
    )
  );
}

export default koanList;
