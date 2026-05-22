import { getCachedKoanFiles, isValidSlug, readKoanFile, toKoanFileName } from './shared/koan-utilities';
import { isGETRequest, jsonError, jsonResponse } from './shared/http';

const KOAN_CACHE_CONTROL = 'public, max-age=3600, immutable';

const koanGet = async (request: Request): Promise<Response> => {
  if (!isGETRequest(request)) {
    return jsonError(405, 'Method not allowed');
  }

  const slug: Nullable<string> = new URL(request.url).searchParams.get('slug');

  if (!slug) {
    return jsonError(400, 'Missing slug parameter');
  }

  if (!isValidSlug(slug)) {
    return jsonError(400, 'Invalid slug parameter');
  }

  try {
    const files = await getCachedKoanFiles();
    const file = files.find((f) => f === toKoanFileName(slug));

    if (!file) {
      return jsonError(404, 'Koan not found');
    }

    const koan = await readKoanFile(file);

    return jsonResponse(koan, KOAN_CACHE_CONTROL);
  } catch (error) {
    console.error('koan-get failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanGet;
