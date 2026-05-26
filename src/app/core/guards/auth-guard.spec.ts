import { TestBed } from '@angular/core/testing';
import type { CanActivateFn } from '@angular/router';

import { authGuard } from './auth-guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  describe('Компонент инициализирован', () => {
    it('должен инициализироваться', () => {
      expect(executeGuard).toBeTruthy();
    });
  });
});
