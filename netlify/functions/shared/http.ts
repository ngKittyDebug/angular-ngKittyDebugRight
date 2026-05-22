export function jsonError(status: number, message: string): Response {
  return Response.json({ error: message }, { status });
}

export function jsonResponse(data: unknown, cacheControl: string): Response {
  return Response.json(data, { headers: { 'Cache-Control': cacheControl } });
}

export const isGETRequest = (request: Request): boolean => request.method === 'GET';
