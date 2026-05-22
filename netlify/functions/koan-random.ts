import { getCachedKoanFiles, isValidLang, isValidSlug, readKoanFile, toKoanFileName } from './shared/koan-utilities';
import type { KoanLang } from './shared/koan-utilities';
import { isGETRequest, jsonError, jsonResponse } from './shared/http';

const RANDOM_CACHE_CONTROL = 'no-store';

const koanRandom = async (request: Request): Promise<Response> => {
  if (!isGETRequest(request)) {
    return jsonError(405, 'Method not allowed');
  }

  const parameters = new URL(request.url).searchParams;
  const exclude: Nullable<string> = parameters.get('exclude');
  const langParameter = parameters.get('lang') ?? 'ru';

  if (exclude && !isValidSlug(exclude)) {
    return jsonError(400, 'Invalid exclude parameter');
  }

  if (!isValidLang(langParameter)) {
    return jsonError(400, 'Invalid lang parameter');
  }

  const lang: KoanLang = langParameter;

  try {
    const files = await getCachedKoanFiles(lang);
    const pool = exclude ? files.filter((f) => f !== toKoanFileName(exclude)) : files;

    if (!pool.length) {
      return jsonError(404, 'No koans found');
    }

    const file = pool[Math.floor(Math.random() * pool.length)];
    const koan = await readKoanFile(file, lang);

    return jsonResponse(koan, RANDOM_CACHE_CONTROL);
  } catch (error) {
    console.error('koan-random failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanRandom;
