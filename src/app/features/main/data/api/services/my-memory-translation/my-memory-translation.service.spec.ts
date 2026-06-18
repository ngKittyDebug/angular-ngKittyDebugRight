import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { tarotResponseApiFixture } from '@features/main/data/api/fixtures/tarot-response-api.fixture';
import { MyMemoryTranslationService } from '@features/main/data/api/services/my-memory-translation/my-memory-translation.service';
import { Languages } from '@core/models/languages.model';

describe.skip('MyMemoryTranslationService', () => {
  let httpTestingController: HttpTestingController;
  let service: MyMemoryTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyMemoryTranslationService, provideHttpClient(), provideHttpClientTesting()],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MyMemoryTranslationService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('Выбран английский язык', () => {
    it('не должен отправлять запрос на перевод', () => {
      service.translateReading(tarotResponseApiFixture, Languages.EN).subscribe((reading) => {
        expect(reading).toBe(tarotResponseApiFixture);
      });

      httpTestingController.expectNone('https://api.mymemory.translated.net/get');
    });
  });

  describe('Выбран русский язык', () => {
    it('должен перевести расклад', () => {
      service.translateReading(tarotResponseApiFixture, Languages.RU).subscribe((reading) => {
        expect(reading.verdict_label).toBe('Proceed');
        expect(reading.verdict_text).toBe('Отправляй.');
        expect(reading.cards[0]?.position_label).toBe('Foundation');
        expect(reading.cards[0]?.name).toBe('Пайплайн');
        expect(reading.cards[0]?.narrative).toBe('Сборка зелёная.');
      });

      const requestList = httpTestingController.match(
        (request) => request.url === 'https://api.mymemory.translated.net/get'
      );

      expect(requestList).toHaveLength(3);

      for (const request of requestList) {
        expect(request.request.params.get('langpair')).toBe('en|ru');

        request.flush({
          responseData: {
            translatedText: getTranslatedText(request.request.params.get('q')),
            match: 1,
          },
          responseDetails: '',
          responseStatus: 200,
        });
      }
    });
  });
});

const TRANSLATED_TEXT_BY_SOURCE: Record<string, string> = {
  'Ship it.': 'Отправляй.',
  'The Pipeline': 'Пайплайн',
  'The build is green.': 'Сборка зелёная.',
};

function getTranslatedText(text: string | null): string {
  if (!text) {
    return '';
  }

  return TRANSLATED_TEXT_BY_SOURCE[text] ?? '';
}
