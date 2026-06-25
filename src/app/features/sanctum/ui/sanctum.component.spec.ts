import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { SanctumComponent } from './sanctum.component';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { SanctumPageFacade } from '@features/sanctum/facades/sanctum-page.facade';
import { CandlesService } from '@core/services/candles/candles.service';
import { candlesServiceMock } from '@core/services/candles/candles.service.mock';
import { SanctumFormService } from '@features/sanctum/services/sanctum-form.service';
import { SanctumSoundService } from '@features/sanctum/services/sanctum-sound.service';

describe('SanctumComponent', () => {
  let fixture: ComponentFixture<SanctumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanctumComponent, TranslocoTestingMock],
      providers: [
        SanctumPageFacade,
        SanctumFormService,
        { provide: CandlesService, useValue: candlesServiceMock },
        { provide: SanctumSoundService, useValue: { play: vi.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SanctumComponent);
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
