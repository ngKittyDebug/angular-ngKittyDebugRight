const EN_ROBOT_VOICE_HINTS = [
  'zarvox',
  'boing',
  'cellos',
  'trinoids',
  'fred',
  'robot',
  'synthetic',
  'compact',
] as const;

const LANG_VOICE_HINTS: Record<string, readonly string[]> = {
  ru: ['milena compact', 'milena', 'irina', 'google русский', 'anna', 'katya'],
  en: ['zarvox', 'samantha', 'victoria', 'karen', 'daniel', 'compact'],
};

const RU_MALE_VOICE_HINTS = ['yuri', 'pavel', 'male'] as const;

const SYNTHETIC_VOICE_HINTS = ['compact', 'synthetic', 'mobile'] as const;

export function resolveDigitalPriestLangTag(lang: string): string {
  const langPrefix = lang.split('-')[0].toLowerCase();

  if (langPrefix === 'ru') {
    return 'ru-RU';
  }

  if (langPrefix === 'en') {
    return 'en-US';
  }

  return lang;
}

export function pickDigitalPriestVoice(
  voices: readonly SpeechSynthesisVoice[],
  lang: string
): SpeechSynthesisVoice | null {
  if (!voices.length) {
    return null;
  }

  const langPrefix = lang.split('-')[0].toLowerCase();
  const langVoices = filterVoicesByLang(voices, langPrefix);

  if (langVoices.length) {
    return pickBestLangVoice(langVoices, langPrefix);
  }

  return voices[0] ?? null;
}

export function isVoiceMatchingLang(voice: SpeechSynthesisVoice, lang: string): boolean {
  const langPrefix = lang.split('-')[0].toLowerCase();

  return voice.lang.toLowerCase().startsWith(langPrefix);
}

function filterVoicesByLang(voices: readonly SpeechSynthesisVoice[], langPrefix: string): SpeechSynthesisVoice[] {
  return voices.filter((voice) => voice.lang.toLowerCase().startsWith(langPrefix));
}

function pickBestLangVoice(voices: readonly SpeechSynthesisVoice[], langPrefix: string): SpeechSynthesisVoice {
  const hints = LANG_VOICE_HINTS[langPrefix] ?? [langPrefix];

  return [...voices].sort(
    (left, right) => scoreLangVoice(right, hints, langPrefix) - scoreLangVoice(left, hints, langPrefix)
  )[0];
}

function scoreLangVoice(voice: SpeechSynthesisVoice, hints: readonly string[], langPrefix: string): number {
  const normalizedName = voice.name.toLowerCase();
  let score = 0;

  if (voice.localService) {
    score += 5;
  }

  for (const hint of hints) {
    if (normalizedName.includes(hint)) {
      if (hint === 'milena compact' || hint === 'milena') {
        score += 16;
      } else if (hint === 'zarvox') {
        score += 14;
      } else {
        score += 8;
      }
    }
  }

  if (langPrefix === 'ru') {
    for (const hint of RU_MALE_VOICE_HINTS) {
      if (normalizedName.includes(hint)) {
        score -= 12;
      }
    }
  }

  for (const hint of SYNTHETIC_VOICE_HINTS) {
    if (normalizedName.includes(hint)) {
      score += 3;
    }
  }

  if (langPrefix === 'en') {
    for (const hint of EN_ROBOT_VOICE_HINTS) {
      if (normalizedName.includes(hint)) {
        score += 6;
      }
    }
  }

  if (normalizedName.includes('premium') || normalizedName.includes('enhanced') || normalizedName.includes('natural')) {
    score -= 8;
  }

  return score;
}
