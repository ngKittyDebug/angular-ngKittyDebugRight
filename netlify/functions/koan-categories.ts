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

interface KoanCategoryItem {
  id: string;
  kanji: string;
}

const CATEGORIES_CACHE_CONTROL = 'public, max-age=3600, stale-while-revalidate=86400';

const cachedCategories: Partial<Record<KoanLang, KoanCategoryItem[]>> = {};

const koanCategories = async (request: Request): Promise<Response> => {
  if (!isGETRequest(request)) {
    return jsonError(405, 'Method not allowed');
  }

  const langParameter = new URL(request.url).searchParams.get('lang') ?? 'ru';

  if (!isValidLang(langParameter)) {
    return jsonError(400, 'Invalid lang parameter');
  }

  const lang: KoanLang = langParameter;

  if (cachedCategories[lang]) {
    return jsonResponse(cachedCategories[lang], CATEGORIES_CACHE_CONTROL);
  }

  try {
    const files = await getAllKoanFiles(lang);

    if (!files.length) {
      return jsonError(404, 'No koans found');
    }

    cachedCategories[lang] = await extractCategories(getKoansDirectory(lang), files);

    return jsonResponse(cachedCategories[lang], CATEGORIES_CACHE_CONTROL);
  } catch (error) {
    console.error('koan-categories failed', error);

    return jsonError(500, 'Internal error');
  }
};

async function extractCategories(directory: string, files: string[]): Promise<KoanCategoryItem[]> {
  const frontmatters = await Promise.all(
    files.map((file) => readFile(join(directory, file), 'utf-8').then((raw) => parseFrontmatter(raw).frontmatter))
  );

  const seen = new Map<string, string>();

  for (const fm of frontmatters) {
    if (isKoanFrontmatter(fm) && !seen.has(fm.category)) {
      seen.set(fm.category, fm.kanji ?? '·');
    }
  }

  return [...seen.entries()].map(([id, kanji]) => ({ id, kanji }));
}

export default koanCategories;
