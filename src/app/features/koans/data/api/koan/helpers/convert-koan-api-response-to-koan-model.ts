import type { KoanApiResponse } from '@features/koans/data/api/koan/models/koan-api.model';
import type { KoanModel } from '@features/koans/data/models/koan.model';
import type { KoanBodyParserService } from '@features/koans/data/services/koan-body-parser.service';

export function convertKoanApiResponseToKoanModel(
  response: KoanApiResponse,
  bodyParser: KoanBodyParserService
): KoanModel {
  return {
    ...response.frontmatter,
    body: response.body,
    segments: bodyParser.parse(response.body),
  };
}
