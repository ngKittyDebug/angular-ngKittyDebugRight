import { TestBed } from '@angular/core/testing';

import { LoginFormService } from './login-form.service';

describe('LoginFormService', () => {
  let service: LoginFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormService);
  });

  describe('Компонент инициализирован', () => {
    it('должен инициализироваться', () => {
      expect(service).toBeTruthy();
    });
  });
});
