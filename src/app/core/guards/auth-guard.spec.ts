import { TestBed } from '@angular/core/testing';
import { type CanMatchFn, Router } from '@angular/router';

import { authGuard } from './auth-guard';
import { AuthService } from '@core/services/auth/auth.service';
import { routerMock } from '@shared/mocks/router/router.mock';
import { authServiceMock } from '@core/services/auth/auth.service.mock';
import type { MockedFunction } from 'vitest';
import { RouterFixtures } from '@shared/mocks/router/fixtures';

describe('authGuard', () => {
  const isAuthenticatedMock = authServiceMock.isAuthenticated as unknown as MockedFunction<() => boolean>;

  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });
  });

  it('должен инициализироваться', () => {
    expect(executeGuard).toBeTruthy();
  });

  describe('Пользователь авторизован', () => {
    it('должен пустить по требуемому маршруту', () => {
      isAuthenticatedMock.mockResolvedValue(true);
      expect(executeGuard(RouterFixtures.route, RouterFixtures.segments)).toBe(true);
    });
  });

  describe('Пользователь не авторизован', () => {
    it('должен не пустить по требуемому маршруту и редиректнуть на стораницу логин', () => {
      isAuthenticatedMock.mockReturnValue(false);
      executeGuard(RouterFixtures.route, RouterFixtures.segments);
      expect(routerMock.createUrlTree).toHaveBeenNthCalledWith(1, ['/login']);
    });
  });
});
