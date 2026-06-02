import { computed, inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export type ZodiacSign =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly authService = inject(AuthService);

  public readonly zodiacSign = computed(() => {
    const user = this.authService.user();

    const birthDate = user?.userMetadata?.['date_of_birth'];

    if (typeof birthDate !== 'string') {
      return null;
    }

    return this.getZodiacSign(new Date(birthDate));
  });

  private getZodiacSign(date: Date): ZodiacSign {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const zodiacRanges = [
      { sign: 'capricorn', month: 1, day: 19 },
      { sign: 'aquarius', month: 2, day: 18 },
      { sign: 'pisces', month: 3, day: 20 },
      { sign: 'aries', month: 4, day: 19 },
      { sign: 'taurus', month: 5, day: 20 },
      { sign: 'gemini', month: 6, day: 20 },
      { sign: 'cancer', month: 7, day: 22 },
      { sign: 'leo', month: 8, day: 22 },
      { sign: 'virgo', month: 9, day: 22 },
      { sign: 'libra', month: 10, day: 22 },
      { sign: 'scorpio', month: 11, day: 21 },
      { sign: 'sagittarius', month: 12, day: 21 },
    ] as const;

    const zodiac = zodiacRanges.find((item) => month < item.month || (month === item.month && day <= item.day));

    return zodiac?.sign ?? 'capricorn';
  }
}
