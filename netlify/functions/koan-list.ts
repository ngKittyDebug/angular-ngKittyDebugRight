import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import {
  getAllKoanFiles,
  getKoansDirectory,
  isKoanFrontmatter,
  isValidLang,
  parseFrontmatter,
} from './shared/koan-utilities';
import type { KoanLang } from './shared/koan-utilities';
import { isGETRequest, jsonError, jsonResponse } from './shared/http';

interface KoanListItem {
  number: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
}

const LIST_CACHE_CONTROL = 'public, max-age=300, stale-while-revalidate=3600';

// Koan files are bundled with the deployment and not change at runtime, so the
// parsed list is cached per language for the lifetime of a warm function instance.
const cache: Partial<Record<KoanLang, KoanListItem[]>> = {};

const koanList = async (request: Request): Promise<Response> => {
  if (!isGETRequest(request)) {
    return jsonError(405, 'Method not allowed');
  }

  const langParameter = new URL(request.url).searchParams.get('lang') ?? 'ru';

  if (!isValidLang(langParameter)) {
    return jsonError(400, 'Invalid lang parameter');
  }

  const lang: KoanLang = langParameter;

  if (cache[lang]?.length) {
    return jsonResponse(cache[lang], LIST_CACHE_CONTROL);
  }

  try {
    const files = await getAllKoanFiles(lang);

    if (!files.length) {
      return jsonError(404, 'No koans found');
    }

    const list = await getKoanList(getKoansDirectory(lang), files);

    cache[lang] = list.toSorted(sortByKoanNumber);

    return jsonResponse(cache[lang], LIST_CACHE_CONTROL);
  } catch (error) {
    console.error('koan-list failed', error);

    return jsonError(500, 'Internal error');
  }
};

function sortByKoanNumber(a: KoanListItem, b: KoanListItem): number {
  return a.number - b.number;
}

function getKoanList(directory: string, files: string[]): Promise<KoanListItem[]> {
  return Promise.all(
    files.map((file) => readFile(join(directory, file), 'utf-8').then((raw) => parseFrontmatter(raw).frontmatter))
  ).then((entries) =>
    entries
      .filter(isKoanFrontmatter)
      .map(({ number, title, slug, category, tags }) => ({ number, title, slug, category, tags }))
  );
}

export default koanList;
