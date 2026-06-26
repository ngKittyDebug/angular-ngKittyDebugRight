import { TestBed } from '@angular/core/testing';

import { SanctumRitualService } from './sanctum-ritual.service';
import { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { sacredBranchJudgmentFixture } from '@features/sanctum/fixtures/sacred-branch-judgment.fixture';
import { sanctumSoundServiceMock } from '@features/sanctum/services/sanctum-sound.service.mock';
import { SanctumSoundService } from '@features/sanctum/services/sanctum-sound.service';

describe('SanctumRitualService', () => {
  let service: SanctumRitualService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanctumRitualService, { provide: SanctumSoundService, useValue: sanctumSoundServiceMock }],
    });

    service = TestBed.inject(SanctumRitualService);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Ритуал запущен', () => {
    it('должен переводить ritualSession в loading', () => {
      service.startRitual(sacredBranchJudgmentFixture.branchName, RitualIntent.MERGE, 0);
      TestBed.tick();

      expect(service.ritualSession.status()).toBe('loading');
      expect(service.isJudging()).toBe(true);
      expect(service.litanyLines()).toHaveLength(0);
      expect(service.judgment()).toBeNull();
    });
  });

  describe('Вердикт получен', () => {
    it('должен отражать вердикт из ritualSession', () => {
      service.ritualSession.set({
        litanyLines: sacredBranchJudgmentFixture.litany,
        judgment: sacredBranchJudgmentFixture,
      });

      expect(service.isJudging()).toBe(false);
      expect(service.litanyLines()).toEqual(sacredBranchJudgmentFixture.litany);
      expect(service.judgment()?.branchName).toBe(sacredBranchJudgmentFixture.branchName);
      expect(service.judgment()?.sanctity).toBe(BranchSanctity.SACRED);
      expect(service.judgment()?.omens).toHaveLength(3);
    });
  });
});
