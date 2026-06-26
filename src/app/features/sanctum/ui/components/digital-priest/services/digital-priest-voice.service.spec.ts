import { TestBed } from '@angular/core/testing';
import { TranslocoService } from '@jsverse/transloco';
import { vi } from 'vitest';

import { DigitalPriestMood } from '@features/sanctum/data/models/digital-priest-mood.model';
import { DigitalPriestVoiceService } from '@features/sanctum/ui/components/digital-priest/services/digital-priest-voice.service';

describe('DigitalPriestVoiceService', () => {
  const translocoMock = {
    translate: vi.fn((key: string) => key),
    getActiveLang: vi.fn(() => 'ru'),
  };

  beforeEach(() => {
    translocoMock.translate.mockReset();
    translocoMock.getActiveLang.mockReset();
    translocoMock.translate.mockImplementation((key: string) => key);
    translocoMock.getActiveLang.mockReturnValue('ru');

    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false }))
    );
    vi.stubGlobal('speechSynthesis', undefined);

    TestBed.configureTestingModule({
      providers: [DigitalPriestVoiceService, { provide: TranslocoService, useValue: translocoMock }],
    });
  });

  it('не должен озвучивать при prefers-reduced-motion', async () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true }))
    );

    const service = TestBed.inject(DigitalPriestVoiceService);

    await service.speakQuote('Заткнись!', DigitalPriestMood.IDLE);

    expect(translocoMock.translate).not.toHaveBeenCalled();
  });

  it('не должен падать без Web Speech API', async () => {
    const service = TestBed.inject(DigitalPriestVoiceService);

    await expect(service.speakQuote('Заткнись!', DigitalPriestMood.IDLE)).resolves.toBeUndefined();
  });
});
