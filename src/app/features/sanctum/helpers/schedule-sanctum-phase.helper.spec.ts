import { describe, expect, it, vi } from 'vitest';

import { SanctumSoundPhase } from '@features/sanctum/data/models/sanctum-sound-phase.model';
import { scheduleSanctumPhase } from '@features/sanctum/helpers/schedule-sanctum-phase.helper';

describe('scheduleSanctumPhase', () => {
  it('должен планировать осцилляторы для фазы', () => {
    const start = vi.fn();
    const stop = vi.fn();
    const connect = vi.fn();
    const createOscillator = vi.fn(() => ({
      type: 'sine',
      frequency: { setValueAtTime: vi.fn() },
      detune: { setValueAtTime: vi.fn() },
      connect,
      start,
      stop,
    }));
    const createGain = vi.fn(() => ({
      gain: {
        setValueAtTime: vi.fn(),
        exponentialRampToValueAtTime: vi.fn(),
      },
      connect,
    }));

    const context = {
      currentTime: 0,
      createOscillator,
      createGain,
    } as unknown as AudioContext;

    const destination = { connect: vi.fn() } as unknown as AudioNode;

    scheduleSanctumPhase(context, destination, SanctumSoundPhase.RITUAL_START);

    expect(createOscillator).toHaveBeenCalled();
    expect(start).toHaveBeenCalled();
    expect(stop).toHaveBeenCalled();
  });
});
