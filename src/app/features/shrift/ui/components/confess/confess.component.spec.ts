import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ConfessComponent } from './confess.component';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { ShriftPageFacade } from '@features/shrift/facades/shrift-page.facade';
import { ConfessFormService } from '@features/shrift/services/confess-form.service';

describe('ConfessComponent', () => {
  let component: ConfessComponent;
  let fixture: ComponentFixture<ConfessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfessComponent, TranslocoTestingMock],
      providers: [ShriftPageFacade, ConfessFormService],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Компонент инициализирован', () => {
    it('должен инициализироваться', () => {
      expect(component).toBeTruthy();
    });
  });
});
