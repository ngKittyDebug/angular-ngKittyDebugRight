import { TestBed } from '@angular/core/testing';

import { MainPageFacade } from './main-page-facade.service';

describe('MainPageFacadeService', () => {
  let service: MainPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPageFacade);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });
});
