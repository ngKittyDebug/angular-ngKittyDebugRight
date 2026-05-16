export const KOAN_ERRORS = {
  network: 'Связь с монастырём прервана. Проверьте соединение.',
  notFound: 'Этого коана нет в свитках.',
  generic: 'Свиток недоступен. Мастер велит подождать и попробовать снова.',
} as const;

export function resolveKoanError(status: number): string {
  if (status === 0) {
    return KOAN_ERRORS.network;
  }
  if (status === 404) {
    return KOAN_ERRORS.notFound;
  }

  return KOAN_ERRORS.generic;
}
