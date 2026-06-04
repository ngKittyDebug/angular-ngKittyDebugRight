import { TestBed } from '@angular/core/testing';

import { MainPageFacade } from './main-page.facade';
import { TarotService } from '@features/main/data/api/services/tarot.service';
import { tarotServiceMock } from '@features/main/data/api/services/tarot.service.mock';
import { TarotRole } from '@features/main/data/api/models/role.model';
import { expect } from 'vitest';
import { TarotIntent } from '@features/main/data/api/models/intent.model';

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

  describe('Установление роли', () => {
    it('должен вызывать метод сервиса', () => {
      service.setRole(TarotRole.AI_AGENT);

      expect(tarotServiceMock.setRole).toHaveBeenNthCalledWith(1, TarotRole.AI_AGENT);
    });
  });

  describe('Установление намерения', () => {
    it('должен вызывать метод сервиса', () => {
      service.setIntent(TarotIntent.IPO);

      expect(tarotServiceMock.setIntent).toHaveBeenNthCalledWith(1, TarotIntent.IPO);
    });
  });
});
