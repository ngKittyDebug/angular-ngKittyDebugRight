import { TestBed } from '@angular/core/testing';

import { LoginPageFacade } from './login-page.facade';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';

describe('LoginPageFacadeService', () => {
  let service: LoginPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TranslocoTestingMock] });
    service = TestBed.inject(LoginPageFacade);
  });

  describe('Компонент инициализирован', () => {
    it('должен инициализироваться', () => {
      expect(service).toBeTruthy();
    });
  });
});
