import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { CandlesComponent } from './candles.component';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';

describe('CandlesComponent', () => {
  let component: CandlesComponent;
  let fixture: ComponentFixture<CandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandlesComponent, TranslocoTestingMock],
    }).compileComponents();

    fixture = TestBed.createComponent(CandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });
});
