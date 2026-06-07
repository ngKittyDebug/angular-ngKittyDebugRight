import type { UserProfileService } from '@core/services/user-profile/user-profile.service';
import { userProfileFixture } from '@core/fixtures/user-profile.fixture';
import type { MockedObject } from 'vitest';
import { vi } from 'vitest';

export const userProfileServiceMock = {
  loadProfile: vi.fn().mockResolvedValue(userProfileFixture),
  createProfile: vi.fn().mockResolvedValue(undefined),
  ensureProviderProfile: vi.fn().mockResolvedValue(undefined),
} as const satisfies MockedObject<Partial<UserProfileService>>;

export const resetUserProfileServiceMock = (): void => {
  userProfileServiceMock.loadProfile.mockReset().mockResolvedValue(userProfileFixture);
  userProfileServiceMock.createProfile.mockReset().mockResolvedValue(undefined);
  userProfileServiceMock.ensureProviderProfile.mockReset().mockResolvedValue(undefined);
};
