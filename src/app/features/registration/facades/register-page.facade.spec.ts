import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TuiNotificationService } from '@taiga-ui/core';
import { AuthService } from '@core/services/auth/auth.service';
import { authServiceMock } from '@core/services/auth/auth.service.mock';
import { registerFormValidValueFixture } from '@features/registration/fixtures/register-form-value.fixture';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { routerMock } from '@shared/mocks/router/router.mock';
import { tuiNotificationServiceMock } from '@shared/mocks/tui-notification/tui-notification.service.mock';
import { of } from 'rxjs';
import { vi } from 'vitest';

import { RegisterPageFacade } from './register-page.facade';

describe('RegisterPageFacade', () => {
  let facade: RegisterPageFacade;

  beforeEach(() => {
    authServiceMock.signup.mockReset().mockResolvedValue(null);
    routerMock.navigate.mockReset().mockReturnValue(Promise.resolve(true));
    tuiNotificationServiceMock.open.mockReset().mockReturnValue(of(undefined));

    TestBed.configureTestingModule({
      imports: [TranslocoTestingMock],
      providers: [
        RegisterPageFacade,
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: TuiNotificationService, useValue: tuiNotificationServiceMock },
      ],
    });

    facade = TestBed.inject(RegisterPageFacade);
    facade.registerForm.reset();
  });

  it('должен инициализироваться', () => {
    expect(facade).toBeTruthy();
  });

  describe('Регистрация', () => {
    describe('Форма валидна', () => {
      beforeEach(() => {
        facade.registerForm.setValue(registerFormValidValueFixture);
      });

      it('должен вызвать метод регистрации из сервиса', async () => {
        await facade.signup();

        expect(authServiceMock.signup).toHaveBeenNthCalledWith(1, 'john@wick.com', 'Aa888888', {
          full_name: 'John',
          date_of_birth: new Date(2000, 0, 1),
        });
      });

      it('должен показать уведомление об успешной регистрации', async () => {
        await facade.signup();

        expect(tuiNotificationServiceMock.open).toHaveBeenNthCalledWith(
          1,
          expect.any(String),
          expect.objectContaining({ appearance: 'positive', autoClose: 5000 })
        );
      });

      it('должен перенаправить на главную страницу', async () => {
        await facade.signup();

        expect(routerMock.navigate).toHaveBeenNthCalledWith(1, ['/']);
      });

      it('должен сбросить форму', async () => {
        const resetSpy = vi.spyOn(facade.registerForm, 'reset');

        await facade.signup();

        expect(resetSpy).toHaveBeenCalledTimes(1);
      });
    });

    describe('Форма не валидна', () => {
      it('не должен вызвать метод регистрации из сервиса', async () => {
        await facade.signup();

        expect(authServiceMock.signup).not.toHaveBeenCalled();
      });

      it('не должен показать уведомление', async () => {
        await facade.signup();

        expect(tuiNotificationServiceMock.open).not.toHaveBeenCalled();
      });

      it('не должен перенаправить на главную страницу', async () => {
        await facade.signup();

        expect(routerMock.navigate).not.toHaveBeenCalled();
      });
    });

    describe('Ошибка регистрации', () => {
      beforeEach(() => {
        facade.registerForm.setValue(registerFormValidValueFixture);
        authServiceMock.signup.mockRejectedValue(new Error('Signup failed'));
      });

      it('должен показать уведомление об ошибке', async () => {
        await facade.signup();

        expect(tuiNotificationServiceMock.open).toHaveBeenNthCalledWith(
          1,
          'Signup failed',
          expect.objectContaining({ appearance: 'negative', autoClose: 5000 })
        );
      });

      it('не должен перенаправить на главную страницу', async () => {
        await facade.signup();

        expect(routerMock.navigate).not.toHaveBeenCalled();
      });

      it('должен сбросить форму', async () => {
        const resetSpy = vi.spyOn(facade.registerForm, 'reset');

        await facade.signup();

        expect(resetSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
