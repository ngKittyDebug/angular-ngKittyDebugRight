import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ShriftComponent } from './shrift.component';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { ConfessFormService } from '../services/confess-form.service';
import { ShriftPageFacade } from '../facades/shrift-page.facade';

describe('ShriftComponent', () => {
  let component: ShriftComponent;
  let fixture: ComponentFixture<ShriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShriftComponent, TranslocoTestingMock],
      providers: [ShriftPageFacade, ConfessFormService],
    }).compileComponents();

    fixture = TestBed.createComponent(ShriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Компонент инициализирован', () => {
    it('должен инициализироваться', () => {
      expect(component).toBeTruthy();
    });
  });
});
