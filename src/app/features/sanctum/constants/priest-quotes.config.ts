import { marker } from '@jsverse/transloco-keys-manager/marker';
import { DigitalPriestMood } from '@features/sanctum/ui/components/digital-priest/data/models/digital-priest-mood.model';

export const PRIEST_LOW_SPIRIT_THRESHOLD = 30;
export const PRIEST_LOW_SPIRIT_CHANCE = 0.45;

export const PRIEST_BUSY_QUOTES = [
  marker('sanctum.priest.quotes.busy.0'),
  marker('sanctum.priest.quotes.busy.1'),
] as const;

export const PRIEST_LOW_SPIRIT_QUOTES = [
  marker('sanctum.priest.quotes.low_spirit.0'),
  marker('sanctum.priest.quotes.low_spirit.1'),
] as const;

export const PRIEST_MOOD_QUOTES = {
  [DigitalPriestMood.IDLE]: [
    marker('sanctum.priest.quotes.idle.0'),
    marker('sanctum.priest.quotes.idle.1'),
    marker('sanctum.priest.quotes.idle.2'),
  ],
  [DigitalPriestMood.PREACHING]: [
    marker('sanctum.priest.quotes.preaching.0'),
    marker('sanctum.priest.quotes.preaching.1'),
    marker('sanctum.priest.quotes.preaching.2'),
  ],
  [DigitalPriestMood.BLESSING]: [
    marker('sanctum.priest.quotes.blessing.0'),
    marker('sanctum.priest.quotes.blessing.1'),
    marker('sanctum.priest.quotes.blessing.2'),
  ],
  [DigitalPriestMood.DAMNING]: [
    marker('sanctum.priest.quotes.damning.0'),
    marker('sanctum.priest.quotes.damning.1'),
    marker('sanctum.priest.quotes.damning.2'),
  ],
} satisfies Record<DigitalPriestMood, readonly string[]>;
