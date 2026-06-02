import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ShriftItemComponent } from './shrift-item.component';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';

describe('ShriftItemComponent', () => {
  let component: ShriftItemComponent;
  let fixture: ComponentFixture<ShriftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShriftItemComponent, TranslocoTestingMock],
    }).compileComponents();

    fixture = TestBed.createComponent(ShriftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Компонент инициализирован', () => {
    it('должен инициализироваться', () => {
      expect(component).toBeTruthy();
    });
  });
});
