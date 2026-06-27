import { TestBed } from '@angular/core/testing';

import { ProfileFacade } from './profile.facade';
import { PROFILE_MOCK } from '../data/fixtures/profile.fixture';
import { userProfileFixture } from '@core/fixtures/user-profile.fixture';
import { UserProfileService } from '@core/services/user-profile/user-profile.service';
import {
  resetUserProfileServiceMock,
  userProfileServiceMock,
} from '@core/services/user-profile/user-profile.service.mock';
import { CandlesService } from '@core/services/candles/candles.service';
import {
  candlesServiceMock,
  resetCandlesServiceMock,
  setCandlesServiceMockCounts,
} from '@core/services/candles/candles.service.mock';
import { ConfessService } from '@core/services/confess/confess.service';
import {
  confessServiceMock,
  resetConfessServiceMock,
  setConfessServiceMockSins,
} from '@core/services/confess/confess.service.mock';
import { createEmptyCandleCounts } from '@core/services/candles/helpers/create-empty-candle-counts.helper';
import type { Mock } from 'vitest';

describe('ProfileFacade', () => {
  let facade: ProfileFacade;

  beforeEach(() => {
    resetUserProfileServiceMock();
    resetCandlesServiceMock();
    resetConfessServiceMock();
    (userProfileServiceMock.user as unknown as Mock).mockReturnValue(userProfileFixture);

    TestBed.configureTestingModule({
      providers: [
        ProfileFacade,
        { provide: UserProfileService, useValue: userProfileServiceMock },
        { provide: CandlesService, useValue: candlesServiceMock },
        { provide: ConfessService, useValue: confessServiceMock },
      ],
    });
    facade = TestBed.inject(ProfileFacade);
  });

  it('должен инициализироваться', () => {
    expect(facade).toBeTruthy();
  });

  describe('Профиль', () => {
    it('должен вернуть null без пользователя', () => {
      (userProfileServiceMock.user as unknown as Mock).mockReturnValue(null);

      expect(facade.profile()).toBeNull();
    });

    it('должен собрать профиль из UserProfileService', () => {
      expect(facade.profile()).toEqual({
        id: userProfileFixture.uid,
        name: userProfileFixture.displayName,
        email: userProfileFixture.email,
        avatarUrl: PROFILE_MOCK.profile.avatarUrl,
        dateOfBirth: String(userProfileFixture.dateOfBirth),
        candles: userProfileFixture.candles,
        sins: userProfileFixture.sins,
        metadata: {
          creationTime: String(userProfileFixture.createdAt),
          lastSignInTime: '',
        },
      });
    });

    it('должен подставить Anonymous при отсутствии displayName', () => {
      (userProfileServiceMock.user as unknown as Mock).mockReturnValue({
        ...userProfileFixture,
        displayName: null,
      });

      expect(facade.profile()?.name).toBe('Anonymous');
    });
  });

  describe('Статистика', () => {
    it('должен посчитать количество свечей и исповедей', () => {
      setCandlesServiceMockCounts({ ...createEmptyCandleCounts(), deploy: 2, bug: 1 });
      setConfessServiceMockSins([
        { uid: '1', text: 'Sin', severity: 'low', status: 'none' },
        { uid: '2', text: 'Sin 2', severity: 'critical', status: 'full' },
      ]);

      expect(facade.statistics()).toEqual({ candles: 3, confesses: 2 });
    });
  });

  describe('Знак зодиака', () => {
    it('должен вернуть Unknown без даты рождения', () => {
      (userProfileServiceMock.user as unknown as Mock).mockReturnValue({
        ...userProfileFixture,
        dateOfBirth: null,
      });

      expect(facade.zodiac()).toEqual({
        sign: 'Unknown',
        description: 'Нет данных о дате рождения',
        icon: 'assets/star.svg',
      });
    });

    it('должен определить знак Овен', () => {
      (userProfileServiceMock.user as unknown as Mock).mockReturnValue({
        ...userProfileFixture,
        dateOfBirth: '2020-03-25',
      });

      expect(facade.zodiac().sign).toBe('Овен');
    });

    it('должен определить знак Телец', () => {
      (userProfileServiceMock.user as unknown as Mock).mockReturnValue({
        ...userProfileFixture,
        dateOfBirth: '2020-04-25',
      });

      expect(facade.zodiac().sign).toBe('Телец');
    });
  });

  describe('Достижения', () => {
    it('должен вернуть данные достижений из state', () => {
      expect(facade.achievementInfo()).toEqual(PROFILE_MOCK.achievementInfo);
    });

    it('должен посчитать прогресс достижений', () => {
      expect(facade.achievementsCount()).toBe(5);
      expect(facade.unlockedAchievementsCount()).toBe(0);
      expect(facade.achievementProgress()).toEqual({ unlocked: 0, total: 5 });
    });
  });
});
