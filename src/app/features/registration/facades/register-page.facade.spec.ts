import { TestBed } from '@angular/core/testing';

import { RegisterPageFacade } from './register-page.facade';

describe('RegisterPageFacadeService', () => {
  let facade: RegisterPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterPageFacade],
    });
    facade = TestBed.inject(RegisterPageFacade);
  });

  it('должен инициализироваться', () => {
    expect(facade).toBeTruthy();
  });
});
