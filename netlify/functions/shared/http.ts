export function jsonError(status: number, message: string): Response {
  return Response.json({ error: message }, { status });
}

export const isGETRequest = (request: Request): boolean => request.method === 'GET';
