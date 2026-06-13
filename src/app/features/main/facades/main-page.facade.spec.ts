import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { of, throwError } from 'rxjs';
import { TranslocoService } from '@jsverse/transloco';

import { MainPageFacade } from './main-page.facade';
import { expect, vi } from 'vitest';
import { tarotResponseApiFixture } from '@features/main/data/api/fixtures/tarot-response-api.fixture';
import { MyMemoryTranslationService } from '@features/main/data/api/services/my-memory-translation.service';
import { TarotService } from '@features/main/data/api/services/tarot/tarot.service';
import { tarotServiceMock } from '@features/main/data/api/services/tarot/tarot.service.mock';

const translatedTarotResponseApiFixture = {
  ...tarotResponseApiFixture,
  verdict_text: 'Отправляй.',
};

const myMemoryTranslationServiceMock = {
  translateReading: vi.fn().mockReturnValue(of(translatedTarotResponseApiFixture)),
};

const translocoServiceMock = {
  activeLang: signal('ru'),
};

describe('MainPageFacade', () => {
  let service: MainPageFacade;

  beforeEach(() => {
    vi.clearAllMocks();
    translocoServiceMock.activeLang.set('ru');

    TestBed.configureTestingModule({
      providers: [
        MainPageFacade,
        { provide: MyMemoryTranslationService, useValue: myMemoryTranslationServiceMock },
        { provide: TarotService, useValue: tarotServiceMock },
        { provide: TranslocoService, useValue: translocoServiceMock },
      ],
    });
    service = TestBed.inject(MainPageFacade);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Загрузка таро', () => {
    it('должен начать загрузку', () => {
      const setSpy = vi.spyOn(service['_isTarotLoading'], 'set');

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

    it('должен переводить результат перед сохранением', () => {
      service.loadTarot();
      flushEffects();

      expect(service.result()).toBe(translatedTarotResponseApiFixture);
    });

    it('должен вызвать сервис перевода с активным языком', () => {
      service.loadTarot();
      flushEffects();

      expect(myMemoryTranslationServiceMock.translateReading).toHaveBeenNthCalledWith(1, tarotResponseApiFixture, 'ru');
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
      const setSpy = vi.spyOn(service['_isTarotLoading'], 'set');

      service.loadTarot();

      expect(setSpy).toHaveBeenNthCalledWith(2, false);
    });
  });

  it('должен переводить текущий расклад при смене языка приложения', () => {
    service.loadTarot();
    flushEffects();

    translocoServiceMock.activeLang.set('en');
    flushEffects();

    expect(myMemoryTranslationServiceMock.translateReading).toHaveBeenNthCalledWith(2, tarotResponseApiFixture, 'en');
  });
});

function flushEffects(): void {
  TestBed.tick();
}
