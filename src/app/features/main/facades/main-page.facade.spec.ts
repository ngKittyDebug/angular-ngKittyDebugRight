import { TestBed } from '@angular/core/testing';

import { MainPageFacade } from './main-page.facade';
import { TarotService } from '@features/main/data/api/services/tarot/tarot.service';
import { tarotServiceMock } from '@features/main/data/api/services/tarot/tarot.service.mock';
import { expect, vi } from 'vitest';
import { tarotResponseApiFixture } from '@features/main/data/api/fixtures/tarot-response-api.fixture';
import { throwError } from 'rxjs';

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

  describe('Загрузка таро', () => {
    it('должен начать загрузку', () => {
      const setSpy = vi.spyOn(service['_isLoading'], 'set');

      service.loadTarot();

      expect(setSpy).toHaveBeenNthCalledWith(1, true);
    });

    it('должен сбросить ошибку', () => {
      const setSpy = vi.spyOn(service['_error'], 'set');

      service.loadTarot();

      expect(setSpy).toHaveBeenNthCalledWith(1, null);
    });

    it('должен вызвать метод сервиса', () => {
      service.loadTarot();

      expect(tarotServiceMock.loadReading).toHaveBeenCalledTimes(1);
    });

    describe('Данные получены', () => {
      it('результат установлен в сигнал', () => {
        const setSpy = vi.spyOn(service['_result'], 'set');

        service.loadTarot();

        expect(setSpy).toHaveBeenNthCalledWith(1, tarotResponseApiFixture);
      });
    });

    describe('Получена ошибка', () => {
      it('ошибка установлена в сигнал', () => {
        tarotServiceMock.loadReading.mockReturnValueOnce(
          throwError(() => {
            return 'error';
          })
        );

        const setSpy = vi.spyOn(service['_error'], 'set');

        service.loadTarot();

        expect(setSpy).toHaveBeenNthCalledWith(2, 'Unknown error');
      });
    });

    it('должен завершить загрузку', () => {
      const setSpy = vi.spyOn(service['_isLoading'], 'set');

      service.loadTarot();

      expect(setSpy).toHaveBeenNthCalledWith(2, false);
    });
  });
});
