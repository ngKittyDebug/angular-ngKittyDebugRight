import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutService],
    });
    service = TestBed.inject(LayoutService);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Переключение открытия сайдбара', () => {
    it('должен переключить флаг открытия мобильной навигации в true', () => {
      service.onToggleMobileNav();

      expect(service.isMobileNavOpen()).toBe(true);
    });

    it('должен переключить флаг открытия мобильной навигации в false', () => {
      service.onToggleMobileNav();
      service.onToggleMobileNav();

      expect(service.isMobileNavOpen()).toBe(false);
    });
  });

  describe('Закрытие сайдбара', () => {
    it('должен сбросить флаг открытия мобильной навигации в false', () => {
      service.onToggleMobileNav();
      service.onCloseMobileNav();

      expect(service.isMobileNavOpen()).toBe(false);
    });
  });
});
