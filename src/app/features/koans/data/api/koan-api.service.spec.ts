import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { KoanFixture, KoanListFixture } from '@features/koans/data/mocks/koan.fixture';
import { KoanApiService } from './koan-api.service';

import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';
import type { KoanModel } from '@features/koans/data/models/koan.model';

describe('KoanApiService', () => {
  let service: KoanApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KoanApiService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(KoanApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Happy Path', () => {
    describe('getRandomKoan', () => {
      it('должен запросить случайный коан', () => {
        let result: KoanModel | undefined;

        service.getRandomKoan().subscribe((koan) => (result = koan));
        httpMock.expectOne('/.netlify/functions/koan-random').flush(KoanFixture);

        expect(result).toEqual(KoanFixture);
      });

      it('должен передать exclude как query-параметр', () => {
        service.getRandomKoan('001-o-pustote-argumenta').subscribe();
        const request = httpMock.expectOne(
          (request_) =>
            request_.url === '/.netlify/functions/koan-random' &&
            request_.params.get('exclude') === '001-o-pustote-argumenta'
        );

        request.flush(KoanFixture);

        expect(request.request.method).toBe('GET');
      });
    });

    describe('getKoanList', () => {
      it('должен запросить список коанов', () => {
        let result: KoanListItemModel[] | undefined;

        service.getKoanList().subscribe((list) => (result = list));
        httpMock.expectOne('/.netlify/functions/koan-list').flush(KoanListFixture);

        expect(result).toEqual(KoanListFixture);
      });
    });

    describe('getKoan', () => {
      it('должен запросить коан по slug через query-параметр', () => {
        const slug = '001-o-pustote-argumenta';

        service.getKoan(slug).subscribe();
        const request = httpMock.expectOne(
          (request_) => request_.url === '/.netlify/functions/koan-get' && request_.params.get('slug') === slug
        );

        request.flush(KoanFixture);

        expect(request.request.method).toBe('GET');
      });
    });
  });

  describe('Edge Cases', () => {
    describe('getKoan кэш', () => {
      it('должен вернуть кэшированный коан без HTTP-запроса при повторном вызове', () => {
        const slug = '001-o-pustote-argumenta';
        let firstResult: KoanModel | undefined;
        let secondResult: KoanModel | undefined;

        service.getKoan(slug).subscribe((k) => (firstResult = k));
        httpMock
          .expectOne((request) => request.url === '/.netlify/functions/koan-get' && request.params.get('slug') === slug)
          .flush(KoanFixture);

        service.getKoan(slug).subscribe((k) => (secondResult = k));
        httpMock.expectNone('/.netlify/functions/koan-get');

        expect(firstResult).toEqual(KoanFixture);
        expect(secondResult).toEqual(KoanFixture);
      });
    });

    describe('getKoan со спецсимволами в slug', () => {
      it('должен закодировать slug в query-строке', () => {
        const slug = 'коан & вопрос';

        service.getKoan(slug).subscribe();
        const request = httpMock.expectOne(
          (request_) => request_.url === '/.netlify/functions/koan-get' && request_.params.get('slug') === slug
        );

        request.flush(KoanFixture);

        expect(request.request.urlWithParams).toContain('slug=');
        expect(request.request.urlWithParams).not.toContain(' & ');
      });
    });
  });
});
