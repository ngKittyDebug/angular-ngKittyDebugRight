import { DigitalPriestMood } from '@features/sanctum/data/models/digital-priest-mood.model';
import type { DigitalPriestVoiceProfile } from '@features/sanctum/ui/components/digital-priest/data/models/digital-priest-voice-profile.model';

const EN_PROFILES: Record<DigitalPriestMood, DigitalPriestVoiceProfile> = {
  [DigitalPriestMood.IDLE]: {
    pitch: 0.52,
    rate: 1.02,
    volume: 0.96,
    wordPauseMs: 0,
    phrasePauseMs: 35,
    pitchJitter: 0.01,
    rateJitter: 0.012,
  },
  [DigitalPriestMood.PREACHING]: {
    pitch: 0.5,
    rate: 1.06,
    volume: 0.98,
    wordPauseMs: 0,
    phrasePauseMs: 28,
    pitchJitter: 0.008,
    rateJitter: 0.01,
  },
  [DigitalPriestMood.BLESSING]: {
    pitch: 0.55,
    rate: 0.98,
    volume: 0.92,
    wordPauseMs: 0,
    phrasePauseMs: 40,
    pitchJitter: 0.008,
    rateJitter: 0.008,
  },
  [DigitalPriestMood.DAMNING]: {
    pitch: 0.48,
    rate: 1.08,
    volume: 1,
    wordPauseMs: 0,
    phrasePauseMs: 22,
    pitchJitter: 0.012,
    rateJitter: 0.014,
  },
};

const RU_PROFILES: Record<DigitalPriestMood, DigitalPriestVoiceProfile> = {
  [DigitalPriestMood.IDLE]: {
    pitch: 0.72,
    rate: 0.94,
    volume: 0.97,
    wordPauseMs: 0,
    phrasePauseMs: 20,
    pitchJitter: 0.003,
    rateJitter: 0.005,
  },
  [DigitalPriestMood.PREACHING]: {
    pitch: 0.7,
    rate: 0.96,
    volume: 0.98,
    wordPauseMs: 0,
    phrasePauseMs: 16,
    pitchJitter: 0.002,
    rateJitter: 0.004,
  },
  [DigitalPriestMood.BLESSING]: {
    pitch: 0.74,
    rate: 0.9,
    volume: 0.94,
    wordPauseMs: 0,
    phrasePauseMs: 24,
    pitchJitter: 0.002,
    rateJitter: 0.003,
  },
  [DigitalPriestMood.DAMNING]: {
    pitch: 0.66,
    rate: 0.98,
    volume: 1,
    wordPauseMs: 0,
    phrasePauseMs: 12,
    pitchJitter: 0.004,
    rateJitter: 0.006,
  },
};

export function resolveDigitalPriestVoiceProfile(mood: DigitalPriestMood, lang = 'ru'): DigitalPriestVoiceProfile {
  const langPrefix = lang.split('-')[0].toLowerCase();

  if (langPrefix === 'ru') {
    return RU_PROFILES[mood];
  }

  return EN_PROFILES[mood];
}
