import { computed, Injectable, signal } from '@angular/core';
import { PROFILE_MOCK } from '../data//fixtures/profile.fixture';
import type { AchievementInfo, Profile, ProfileData, Statistics, Zodiac } from '../data/models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileFacade {
  private readonly state = signal<ProfileData>(PROFILE_MOCK);

  private readonly profile = computed<Profile>(() => this.state().profile);

  private readonly statistics = computed<Statistics>(() => this.state().statistics);

  private readonly achievementInfo = computed<AchievementInfo>(() => this.state().achievementInfo);

  private readonly zodiac = computed<Zodiac>(() => this.state().zodiac);

  private readonly achievementsCount = computed(() => this.achievementInfo().achievements.length);

  private readonly unlockedAchievementsCount = computed(
    () => this.achievementInfo().achievements.filter((achievement) => achievement.unlocked).length
  );

  private readonly achievementProgress = computed(() => ({
    unlocked: this.unlockedAchievementsCount(),
    total: this.achievementsCount(),
  }));
}
