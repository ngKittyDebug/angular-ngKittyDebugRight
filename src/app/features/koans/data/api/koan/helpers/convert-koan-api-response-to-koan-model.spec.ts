import { KoanBodyParserServiceMock } from '@features/koans/data/services/koan-body-parser.service.mock';
import { KoanApiResponseFixture, KoanSegmentsFixture } from '@features/koans/fixtures/koan.fixture';
import { convertKoanApiResponseToKoanModel } from './convert-koan-api-response-to-koan-model';

import type { KoanBodyParserService } from '@features/koans/data/services/koan-body-parser.service';

describe('convertKoanApiResponseToKoanModel', () => {
  const bodyParser = KoanBodyParserServiceMock as unknown as KoanBodyParserService;

  describe('Happy Path', () => {
    describe('Ответ API получен', () => {
      it('должен собрать KoanModel из frontmatter, body и разобранных сегментов', () => {
        KoanBodyParserServiceMock.parse.mockReturnValue(KoanSegmentsFixture);

        const result = convertKoanApiResponseToKoanModel(KoanApiResponseFixture, bodyParser);

        expect(result).toEqual({
          ...KoanApiResponseFixture.frontmatter,
          body: KoanApiResponseFixture.body,
          segments: KoanSegmentsFixture,
        });
      });

      it('должен передать тело ответа в парсер ровно один раз', () => {
        KoanBodyParserServiceMock.parse.mockReturnValue(KoanSegmentsFixture);

        convertKoanApiResponseToKoanModel(KoanApiResponseFixture, bodyParser);

        expect(KoanBodyParserServiceMock.parse).toHaveBeenCalledTimes(1);
        expect(KoanBodyParserServiceMock.parse).toHaveBeenNthCalledWith(1, KoanApiResponseFixture.body);
      });
    });
  });
});
