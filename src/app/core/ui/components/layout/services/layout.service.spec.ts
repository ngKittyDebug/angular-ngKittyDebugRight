import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [LayoutService],
    });
    service = TestBed.inject(LayoutService);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('onToggleMobileNav', () => {
    it('должен открыть мобильную навигацию', () => {
      service.onToggleMobileNav();

      expect(service.isMobileNavOpen()).toBe(true);
    });

    it('должен закрыть мобильную навигацию после повторного вызова', () => {
      service.onToggleMobileNav();
      service.onToggleMobileNav();

      expect(service.isMobileNavOpen()).toBe(false);
    });
  });

  describe('onCloseMobileNav', () => {
    it('должен закрыть мобильную навигацию', () => {
      service.onToggleMobileNav();
      service.onCloseMobileNav();

      expect(service.isMobileNavOpen()).toBe(false);
    });
  });
});
