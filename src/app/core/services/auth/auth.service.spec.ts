import { TestBed } from '@angular/core/testing';

import { userFixture } from '@core/fixtures/user.fixture';
import { netlifyIdentityMock, resetNetlifyIdentityMock } from '@core/services/auth/mocks/netlify-identity.mock';

import { vi } from 'vitest';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  const emailFixture = 'dev@example.com';
  const passwordFixture = 'password';
  const providerFixture = 'github';
  let service: AuthService;

  beforeEach(() => {
    resetNetlifyIdentityMock();

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Инициализация сессии', () => {
    describe('Обработка OAuth-callback', () => {
      it('должен вызвать метод колбек авторизации нетлифая', async () => {
        netlifyIdentityMock.handleAuthCallback.mockResolvedValue({
          type: 'oauth',
          user: userFixture,
        });
        netlifyIdentityMock.getUser.mockResolvedValue(userFixture);

        await service.initialize();

        expect(netlifyIdentityMock.handleAuthCallback).toHaveBeenCalledTimes(1);
      });

      it('должен вызвать колбек для гидрации сессии', async () => {
        netlifyIdentityMock.handleAuthCallback.mockResolvedValue({
          type: 'oauth',
          user: userFixture,
        });
        netlifyIdentityMock.getUser.mockResolvedValue(userFixture);

        await service.initialize();

        expect(netlifyIdentityMock.hydrateSession).toHaveBeenCalledTimes(1);
      });

      it('должен подписаться на изменения авторизации', async () => {
        netlifyIdentityMock.handleAuthCallback.mockResolvedValue({
          type: 'oauth',
          user: userFixture,
        });
        netlifyIdentityMock.getUser.mockResolvedValue(userFixture);

        await service.initialize();

        expect(netlifyIdentityMock.onAuthChange).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Вход по email и паролю', () => {
    beforeEach(() => {
      netlifyIdentityMock.login.mockResolvedValue(userFixture);
    });

    it('должен начать загрузку ', async () => {
      const isLoadingSetSpy = vi.spyOn(service['_isLoading'], 'set');

      await service.login(emailFixture, passwordFixture);

      expect(isLoadingSetSpy).toHaveBeenNthCalledWith(1, true);
    });

    it('должен сохранить пользователя после успешного входа', async () => {
      await service.login(emailFixture, passwordFixture);

      expect(service.user()).toEqual(userFixture);
    });

    it('должен завершить загрузку ', async () => {
      const isLoadingSetSpy = vi.spyOn(service['_isLoading'], 'set');

      await service.login(emailFixture, passwordFixture);

      expect(isLoadingSetSpy).toHaveBeenNthCalledWith(2, false);
    });
  });

  describe('Регистрация по email и паролю', () => {
    const signupDataFixture = { full_name: 'Dev User' } as const;

    beforeEach(() => {
      netlifyIdentityMock.signup.mockResolvedValue(userFixture);
    });

    it('должен начать загрузку', async () => {
      const isLoadingSetSpy = vi.spyOn(service['_isLoading'], 'set');

      await service.signup(emailFixture, passwordFixture);

      expect(isLoadingSetSpy).toHaveBeenNthCalledWith(1, true);
    });

    it('должен вызвать метод signup нетлифая с переданными данными', async () => {
      await service.signup(emailFixture, passwordFixture, signupDataFixture);

      expect(netlifyIdentityMock.signup).toHaveBeenNthCalledWith(1, emailFixture, passwordFixture, signupDataFixture);
    });

    it('должен сохранить пользователя после успешной регистрации', async () => {
      await service.signup(emailFixture, passwordFixture);

      expect(service.user()).toEqual(userFixture);
    });

    it('должен завершить загрузку', async () => {
      const isLoadingSetSpy = vi.spyOn(service['_isLoading'], 'set');

      await service.signup(emailFixture, passwordFixture);

      expect(isLoadingSetSpy).toHaveBeenNthCalledWith(2, false);
    });
  });

  describe('Выход из аккаунта', () => {
    beforeEach(() => {
      netlifyIdentityMock.login.mockResolvedValue(userFixture);
    });

    it('должен начать загрузку ', async () => {
      const isLoadingSetSpy = vi.spyOn(service['_isLoading'], 'set');

      await service.login(emailFixture, passwordFixture);
      await service.logout();

      expect(isLoadingSetSpy).toHaveBeenNthCalledWith(1, true);
    });

    it('должен вызвать метод логаут нетлифая', async () => {
      await service.login(emailFixture, passwordFixture);

      await service.logout();

      expect(netlifyIdentityMock.logout).toHaveBeenCalledTimes(1);
    });

    it('должен сбросить пользователя после выхода', async () => {
      await service.login(emailFixture, passwordFixture);

      await service.logout();

      expect(service.user()).toBeNull();
    });

    it('должен завершить загрузку ', async () => {
      const isLoadingSetSpy = vi.spyOn(service['_isLoading'], 'set');

      await service.login(emailFixture, passwordFixture);
      await service.logout();

      expect(isLoadingSetSpy).toHaveBeenNthCalledWith(2, false);
    });
  });

  describe('Восстановление пароля', () => {
    beforeEach(() => {
      netlifyIdentityMock.requestPasswordRecovery.mockResolvedValue(undefined);
    });

    it('должен вызвать метод requestPasswordRecovery нетлифая с переданным email', async () => {
      await service.requestPasswordRecovery(emailFixture);

      expect(netlifyIdentityMock.requestPasswordRecovery).toHaveBeenNthCalledWith(1, emailFixture);
    });
  });

  describe('OAuth-вход', () => {
    it('должен перенаправить на GitHub OAuth', () => {
      service.loginWithGithub();

      expect(netlifyIdentityMock.oauthLogin).toHaveBeenNthCalledWith(1, providerFixture);
    });

    it('должен перенаправить на Google OAuth', () => {
      service.loginWithGoogle();

      expect(netlifyIdentityMock.oauthLogin).toHaveBeenNthCalledWith(1, 'google');
    });

    it('должен перенаправить на страницу входа переданного провайдера', () => {
      service.loginWithProvider(providerFixture);

      expect(netlifyIdentityMock.oauthLogin).toHaveBeenNthCalledWith(1, providerFixture);
    });
  });
});
