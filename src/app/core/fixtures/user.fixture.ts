import type { User } from '@netlify/identity';

export const userFixture = {
  id: 'user-1',
  email: 'dev@example.com',
  name: 'aboba',
  pictureUrl: 'aboba.png',
  provider: 'email',
} as const satisfies Partial<User>;
