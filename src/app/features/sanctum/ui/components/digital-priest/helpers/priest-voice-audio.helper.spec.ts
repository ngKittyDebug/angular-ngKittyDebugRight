import { vi } from 'vitest';

import { createPriestVoiceAudioBus, schedulePriestDigitalTick, startPriestVoiceBed } from './priest-voice-audio.helper';

describe('priestVoiceAudio', () => {
  it('должен создавать android carrier и мягкий тик', () => {
    const oscillators: { start: ReturnType<typeof vi.fn>; stop: ReturnType<typeof vi.fn> }[] = [];
    const context = {
      currentTime: 0,
      destination: {},
      createGain: () => ({
        gain: {
          value: 0,
          setValueAtTime: vi.fn(),
          exponentialRampToValueAtTime: vi.fn(),
          cancelScheduledValues: vi.fn(),
        },
        connect: vi.fn(),
      }),
      createBiquadFilter: () => ({
        type: 'lowpass',
        frequency: { value: 0 },
        Q: { value: 0 },
        connect: vi.fn(),
      }),
      createDelay: () => ({ delayTime: { value: 0 }, connect: vi.fn() }),
      createOscillator: () => {
        const oscillator = {
          type: 'sine',
          frequency: { setValueAtTime: vi.fn() },
          detune: { setValueAtTime: vi.fn() },
          connect: vi.fn(),
          start: vi.fn(),
          stop: vi.fn(),
        };

        oscillators.push(oscillator);

        return oscillator;
      },
    } as unknown as AudioContext;

    const destination = createPriestVoiceAudioBus(context);
    const bed = startPriestVoiceBed(context, destination);

    expect(oscillators.length).toBeGreaterThan(0);
    expect(bed.stop).toBeTypeOf('function');

    schedulePriestDigitalTick(context, destination);

    expect(oscillators.length).toBeGreaterThan(3);
  });
});
