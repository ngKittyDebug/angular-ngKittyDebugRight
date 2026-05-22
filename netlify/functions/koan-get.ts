import { getCachedKoanFiles, isValidLang, isValidSlug, readKoanFile, toKoanFileName } from './shared/koan-utilities';
import type { KoanLang } from './shared/koan-utilities';
import { isGETRequest, jsonError, jsonResponse } from './shared/http';

const KOAN_CACHE_CONTROL = 'public, max-age=3600, immutable';

const koanGet = async (request: Request): Promise<Response> => {
  if (!isGETRequest(request)) {
    return jsonError(405, 'Method not allowed');
  }

  const parameters = new URL(request.url).searchParams;
  const slug: Nullable<string> = parameters.get('slug');
  const langParameter = parameters.get('lang') ?? 'ru';

  if (!slug) {
    return jsonError(400, 'Missing slug parameter');
  }

  if (!isValidSlug(slug)) {
    return jsonError(400, 'Invalid slug parameter');
  }

  if (!isValidLang(langParameter)) {
    return jsonError(400, 'Invalid lang parameter');
  }

  const lang: KoanLang = langParameter;

  try {
    const files = await getCachedKoanFiles(lang);
    const file = files.find((f) => f === toKoanFileName(slug));

    if (!file) {
      return jsonError(404, 'Koan not found');
    }

    const koan = await readKoanFile(file, lang);

    return jsonResponse(koan, KOAN_CACHE_CONTROL);
  } catch (error) {
    console.error('koan-get failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanGet;
