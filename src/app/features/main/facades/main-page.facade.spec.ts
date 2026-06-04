import { TestBed } from '@angular/core/testing';

import { MainPageFacade } from './main-page.facade';
import { TarotService } from '@features/main/data/api/services/tarot.service';
import { tarotServiceMock } from '@features/main/data/api/services/tarot.service.mock';

describe('MainPageFacade', () => {
  let service: MainPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainPageFacade, { provide: TarotService, useValue: tarotServiceMock }],
    });
    service = TestBed.inject(MainPageFacade);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });
});
