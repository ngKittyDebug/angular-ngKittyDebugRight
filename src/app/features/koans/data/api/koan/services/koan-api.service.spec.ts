import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { KoanBodyParserService } from '@features/koans/data/services/koan-body-parser.service';
import { KoanBodyParserServiceMock } from '@features/koans/data/services/koan-body-parser.service.mock';
import { KoanApiResponseFixture, KoanListFixture, KoanSegmentsFixture } from '@features/koans/fixtures/koan.fixture';
import { KoanApiService } from './koan-api.service';

import type { KoanListItemModel, KoanModel } from '@features/koans/data/models/koan.model';

describe('KoanApiService', () => {
  let service: KoanApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        KoanApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: KoanBodyParserService, useValue: KoanBodyParserServiceMock },
      ],
    });

    service = TestBed.inject(KoanApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Happy Path', () => {
    describe('getRandomKoan', () => {
      it('должен запросить случайный коан и собрать модель', () => {
        KoanBodyParserServiceMock.parse.mockReturnValue(KoanSegmentsFixture);
        let result: KoanModel | undefined;

        service.getRandomKoan().subscribe((koan) => (result = koan));
        const request = httpMock.expectOne('/.netlify/functions/koan-random');

        request.flush(KoanApiResponseFixture);

        expect(request.request.method).toBe('GET');
        expect(result).toEqual({
          ...KoanApiResponseFixture.frontmatter,
          body: KoanApiResponseFixture.body,
          segments: KoanSegmentsFixture,
        });
      });
    });

    describe('getKoanList', () => {
      it('должен запросить список коанов', () => {
        let result: KoanListItemModel[] | undefined;

        service.getKoanList().subscribe((list) => (result = list));
        const request = httpMock.expectOne('/.netlify/functions/koan-list');

        request.flush(KoanListFixture);

        expect(request.request.method).toBe('GET');
        expect(result).toEqual(KoanListFixture);
      });
    });

    describe('getKoan', () => {
      it('должен запросить коан по slug через query-параметр', () => {
        KoanBodyParserServiceMock.parse.mockReturnValue(KoanSegmentsFixture);
        const slug = '001-o-pustote-argumenta';

        service.getKoan(slug).subscribe();
        const request = httpMock.expectOne(
          (request_) => request_.url === '/.netlify/functions/koan-get' && request_.params.get('slug') === slug
        );

        request.flush(KoanApiResponseFixture);

        expect(request.request.method).toBe('GET');
      });
    });
  });

  describe('Edge Cases', () => {
    describe('getKoan со спецсимволами в slug', () => {
      it('должен закодировать slug в query-строке', () => {
        KoanBodyParserServiceMock.parse.mockReturnValue(KoanSegmentsFixture);
        const slug = 'коан & вопрос';

        service.getKoan(slug).subscribe();
        const request = httpMock.expectOne(
          (request_) => request_.url === '/.netlify/functions/koan-get' && request_.params.get('slug') === slug
        );

        request.flush(KoanApiResponseFixture);

        expect(request.request.urlWithParams).toContain('slug=');
        expect(request.request.urlWithParams).not.toContain(' & ');
      });
    });
  });
});
