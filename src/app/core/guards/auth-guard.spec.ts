import { TestBed } from '@angular/core/testing';
import { type CanActivateFn, Router } from '@angular/router';

import { authGuard } from './auth-guard';
import { AuthService } from '@core/services/auth/auth.service';
import { routerMock } from '@shared/mocks/router/router.mock';
import { authServiceMock } from '@shared/mocks/auth-guard/auth-guard.mock';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });
  });

  describe('Компонент инициализирован', () => {
    it('должен инициализироваться', () => {
      expect(executeGuard).toBeTruthy();
    });
  });

  describe('Пользователь авторизован', () => {
    it('должен пустить по требуемому маршруту', () => {
      authServiceMock.isAuthenticated.set(true);
      expect(executeGuard({} as any, {} as any)).toBe(true);
    });
  });

  describe('Пользователь не авторизован', () => {
    it('должен не пустить по требуемому маршруту и редиректнуть на стораницу логин', () => {
      authServiceMock.isAuthenticated.set(false);
      executeGuard({} as any, {} as any);
      expect(routerMock.createUrlTree).toHaveBeenNthCalledWith(1, ['/login']);
    });
  });
});
