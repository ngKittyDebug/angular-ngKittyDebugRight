import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { SanctumPageFacade } from './sanctum-page.facade';
import { CandlesService } from '@core/services/candles/candles.service';
import { candlesServiceMock } from '@core/services/candles/candles.service.mock';
import {
  RITUAL_LITANY_LINE_DELAY_MS,
  RITUAL_VERDICT_REVEAL_DELAY_MS,
} from '@features/sanctum/constants/ritual-timing.config';
import { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { analyzeBranchName } from '@features/sanctum/helpers/analyze-branch-name.helper';
import { SanctumFormService } from '@features/sanctum/services/sanctum-form.service';
import { SanctumSoundService } from '@features/sanctum/services/sanctum-sound.service';

describe('SanctumPageFacade', () => {
  let facade: SanctumPageFacade;
  const sanctumSoundMock = { play: vi.fn() };

  beforeEach(() => {
    sanctumSoundMock.play.mockReset();

    TestBed.configureTestingModule({
      providers: [
        SanctumPageFacade,
        SanctumFormService,
        { provide: CandlesService, useValue: candlesServiceMock },
        { provide: SanctumSoundService, useValue: sanctumSoundMock },
      ],
    });

    facade = TestBed.inject(SanctumPageFacade);
  });

  it('должен инициализироваться', () => {
    expect(facade).toBeTruthy();
  });

  it('должен выносить вердикт после ритуальной литании', () => {
    vi.useFakeTimers();

    facade.sanctumForm.setValue({
      branch: 'feat/sanctum-branch-blessing',
      ritualIntent: RitualIntent.MERGE,
    });

    const ritual = analyzeBranchName('feat/sanctum-branch-blessing', 0, RitualIntent.MERGE, 0);
    const ritualDurationMs = ritual.litany.length * RITUAL_LITANY_LINE_DELAY_MS + RITUAL_VERDICT_REVEAL_DELAY_MS;

    facade.invokeJudgment();
    expect(facade.isJudging()).toBe(true);
    expect(facade.litanyLines()).toHaveLength(0);

    vi.advanceTimersByTime(ritualDurationMs);

    const judgment = facade.judgment();

    expect(facade.isJudging()).toBe(false);
    expect(facade.litanyLines()).toHaveLength(ritual.litany.length);
    expect(judgment?.branchName).toBe('feat/sanctum-branch-blessing');
    expect(judgment?.sanctity).toBe(BranchSanctity.SACRED);
    expect(judgment?.omens).toHaveLength(3);

    vi.useRealTimers();
  });
});
