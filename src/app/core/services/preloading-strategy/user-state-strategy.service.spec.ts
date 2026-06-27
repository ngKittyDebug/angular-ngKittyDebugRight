import { TestBed } from '@angular/core/testing';

import { UserStateStrategy } from './user-state-strategy.service';
import { AuthService } from '@core/services/auth/auth.service';
import { authServiceMock } from '@core/services/auth/auth.service.mock';

describe('UserStateStrategyService', () => {
  let service: UserStateStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    });
    service = TestBed.inject(UserStateStrategy);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });
});
