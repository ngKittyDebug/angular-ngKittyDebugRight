export interface Profile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Statistics {
  confesses: number;
  candles: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  unlocked: boolean;
}

export interface AchievementsInfo {
  total: number;
  unlocked: number;
  achievements: Achievement[];
}

export interface Zodiac {
  sign: string;
  description: string;
  icon: string;
}
export interface ProfileData {
  profile: Profile;
  statistics: Statistics;
  achievements: Achievement[];
  zodiac: Zodiac;
}
