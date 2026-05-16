import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { LayoutService } from '@core/ui/components/layout/services/layout.service';
import { layoutServiceMock } from '@core/ui/components/layout/services/layout.service.mock';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
      providers: [{ provide: LayoutService, useValue: layoutServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });

  describe('Переключение открытия сайдбара', () => {
    it('должен вызывать метод сервиса', () => {
      component.onToggleMobileNav();

      expect(layoutServiceMock.onToggleMobileNav).toHaveBeenCalledTimes(1);
    });
  });

  describe('Закрытие сайдбара', () => {
    it('должен вызывать метод сервиса', () => {
      component.onCloseMobileNav();

      expect(layoutServiceMock.onCloseMobileNav).toHaveBeenCalledTimes(1);
    });
  });
});
