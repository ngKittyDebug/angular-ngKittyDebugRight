import { marker } from '@jsverse/transloco-keys-manager/marker';

export const KOAN_ERRORS = {
  network: marker('koans.error-network'),
  notFound: marker('koans.error-not-found'),
  generic: marker('koans.error-generic'),
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
