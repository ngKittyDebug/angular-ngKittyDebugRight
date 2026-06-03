const DEPLOY_TAROT_READING_URL = 'https://deploytarot.com/api/reading';
const CONTENT_TYPE_HEADER = 'content-type';
const JSON_CONTENT_TYPE = 'application/json';
const RETRY_AFTER_HEADER = 'retry-after';

const createJsonResponse = (body: unknown, init: ResponseInit): Response =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      [CONTENT_TYPE_HEADER]: JSON_CONTENT_TYPE,
      ...init.headers,
    },
  });

export default async (request: Request): Promise<Response> => {
  const requestUrl = new URL(request.url);
  const deployTarotUrl = new URL(DEPLOY_TAROT_READING_URL);
  const role = requestUrl.searchParams.get('role');
  const intent = requestUrl.searchParams.get('intent');

  if (role) {
    deployTarotUrl.searchParams.set('role', role);
  }

  if (intent) {
    deployTarotUrl.searchParams.set('intent', intent);
  }

  try {
    const response = await fetch(deployTarotUrl.toString());
    const body: unknown = await response.json();
    const retryAfter = response.headers.get(RETRY_AFTER_HEADER);
    const headers: HeadersInit = {};

    if (retryAfter) {
      headers[RETRY_AFTER_HEADER] = retryAfter;
    }

    return createJsonResponse(body, {
      status: response.status,
      headers,
    });
  } catch {
    return createJsonResponse(
      {
        message: 'Deploy Tarot API is temporarily unavailable.',
      },
      {
        status: 502,
      }
    );
  }
};
