import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctumComponent } from './sanctum.component';
import { SanctumPageFacade } from '@features/sanctum/facades/sanctum-page.facade';
import { sanctumPageFacadeMock } from '@features/sanctum/facades/sanctum-page.facade.mock';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';

describe('SanctumComponent', () => {
  let fixture: ComponentFixture<SanctumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanctumComponent, TranslocoTestingMock],
      providers: [{ provide: SanctumPageFacade, useValue: sanctumPageFacadeMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(SanctumComponent);
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
