import { TestBed } from '@angular/core/testing';

import { RegisterPageFacade } from './register-page.facade';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';

describe('RegisterPageFacadeService', () => {
  let facade: RegisterPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslocoTestingMock],
      providers: [RegisterPageFacade],
    });
    facade = TestBed.inject(RegisterPageFacade);
  });

  it('должен инициализироваться', () => {
    expect(facade).toBeTruthy();
  });
});
