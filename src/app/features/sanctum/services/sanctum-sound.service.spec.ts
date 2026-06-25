import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { SanctumSoundPhase } from '@features/sanctum/data/models/sanctum-sound-phase.model';
import { SanctumSoundService } from '@features/sanctum/services/sanctum-sound.service';

describe('SanctumSoundService', () => {
  const audioContextCtor = vi.fn();

  beforeEach(() => {
    audioContextCtor.mockReset();

    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false }))
    );
    vi.stubGlobal('AudioContext', audioContextCtor);

    TestBed.configureTestingModule({
      providers: [SanctumSoundService],
    });
  });

  it('не должен создавать AudioContext при prefers-reduced-motion', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true }))
    );

    const service = TestBed.inject(SanctumSoundService);

    expect(() => service.play(SanctumSoundPhase.LITANY_TICK)).not.toThrow();
    expect(audioContextCtor).not.toHaveBeenCalled();
  });

  it('не должен падать, если Web Audio API недоступен', () => {
    vi.stubGlobal('AudioContext', undefined);

    const service = TestBed.inject(SanctumSoundService);

    expect(() => service.play(SanctumSoundPhase.RITUAL_START)).not.toThrow();
  });
});
