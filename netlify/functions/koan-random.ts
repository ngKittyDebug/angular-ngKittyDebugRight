import { getCachedKoanFiles, isValidSlug, readKoanFile, toKoanFileName } from './shared/koan-utilities';
import { isGETRequest, jsonError, jsonResponse } from './shared/http';

const RANDOM_CACHE_CONTROL = 'no-store';

const koanRandom = async (request: Request): Promise<Response> => {
  if (!isGETRequest(request)) {
    return jsonError(405, 'Method not allowed');
  }

  const exclude: Nullable<string> = new URL(request.url).searchParams.get('exclude');

  if (exclude && !isValidSlug(exclude)) {
    return jsonError(400, 'Invalid exclude parameter');
  }

  try {
    const files = await getCachedKoanFiles();
    const pool = exclude ? files.filter((f) => f !== toKoanFileName(exclude)) : files;

    if (!pool.length) {
      return jsonError(404, 'No koans found');
    }

    const file = pool[Math.floor(Math.random() * pool.length)];
    const koan = await readKoanFile(file);

    return jsonResponse(koan, RANDOM_CACHE_CONTROL);
  } catch (error) {
    console.error('koan-random failed', error);

    return jsonError(500, 'Internal error');
  }
};

export default koanRandom;
