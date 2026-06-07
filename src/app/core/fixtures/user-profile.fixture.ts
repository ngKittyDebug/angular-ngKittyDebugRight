import type { UserProfile } from '@core/services/user-profile/models/user-profile.model';

export const userProfileFixture = {
  uid: 'jV1w8fUKGfWX9HZh83sMJe66QT63',
  email: 'dev@example.com',
  displayName: 'abob',
  dateOfBirth: null,
  createdAt: 'server-timestamp',
  candles: 0,
  sins: 0,
} as const satisfies UserProfile;
