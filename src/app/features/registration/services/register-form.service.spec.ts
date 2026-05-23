import { TestBed } from '@angular/core/testing';

import { RegisterFormService } from './register-form.service';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { expect, it } from 'vitest';

describe('RegisterFormService', () => {
  let service: RegisterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslocoTestingMock],
    });
    service = TestBed.inject(RegisterFormService);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Получение формы', () => {
    it('должен вернуть инстанс формы', () => {
      expect(service.registerForm).toEqual(service['_form']);
    });
  });
});
