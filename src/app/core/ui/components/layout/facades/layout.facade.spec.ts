import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TuiNotificationService } from '@taiga-ui/core';
import { AuthService } from '@core/services/auth/auth.service';
import { authServiceMock } from '@core/services/auth/auth.service.mock';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { routerMock } from '@shared/mocks/router/router.mock';
import { tuiNotificationServiceMock } from '@shared/mocks/tui-notification/tui-notification.service.mock';
import { of } from 'rxjs';
import { LayoutFacade } from './layout.facade';

describe('LayoutFacade', () => {
  let facade: LayoutFacade;

  beforeEach(() => {
    authServiceMock.signup.mockReset().mockResolvedValue(null);
    routerMock.navigate.mockReset().mockReturnValue(Promise.resolve(true));
    tuiNotificationServiceMock.open.mockReset().mockReturnValue(of(undefined));

    TestBed.configureTestingModule({
      imports: [TranslocoTestingMock],
      providers: [
        LayoutFacade,
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: TuiNotificationService, useValue: tuiNotificationServiceMock },
      ],
    });

    facade = TestBed.inject(LayoutFacade);
  });

  it('должен инициализироваться', () => {
    expect(facade).toBeTruthy();
  });
});
