import { TestBed } from '@angular/core/testing';
import { of, Subject, throwError } from 'rxjs';

import { KoanApiService } from '@features/koans/data/api/koan/services/koan-api.service';
import { KoanApiServiceMock } from '@features/koans/data/api/koan/services/koan-api.service.mock';
import { KoanFixture, KoanListFixture } from '@features/koans/fixtures/koan.fixture';
import { KoansFacade } from './koans.facade';

import type { KoanModel } from '@features/koans/data/models/koan.model';

describe('KoansFacade', () => {
  let facade: InstanceType<typeof KoansFacade>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KoansFacade, { provide: KoanApiService, useValue: KoanApiServiceMock }],
    });

    facade = TestBed.inject(KoansFacade);
  });

  describe('Happy Path', () => {
    describe('loadRandomKoan', () => {
      it('должен загрузить случайный коан и снять флаг загрузки', () => {
        KoanApiServiceMock.getRandomKoan.mockReturnValue(of(KoanFixture));

        facade.loadRandomKoan();

        expect(facade.randomKoan()).toEqual(KoanFixture);
        expect(facade.loadingRandom()).toBe(false);
        expect(facade.error()).toBeNull();
      });
    });

    describe('loadKoanList', () => {
      it('должен загрузить список коанов', () => {
        KoanApiServiceMock.getKoanList.mockReturnValue(of(KoanListFixture));

        facade.loadKoanList();

        expect(facade.koanList()).toEqual(KoanListFixture);
        expect(facade.loadingList()).toBe(false);
      });
    });

    describe('selectKoan', () => {
      it('должен загрузить выбранный коан', () => {
        KoanApiServiceMock.getKoan.mockReturnValue(of(KoanFixture));

        facade.selectKoan(KoanFixture.slug);

        expect(facade.selectedKoan()).toEqual(KoanFixture);
        expect(facade.loadingSelected()).toBe(false);
      });
    });
  });

  describe('Negative Cases', () => {
    describe('Запрос завершился ошибкой', () => {
      it('должен выставить error и снять loadingRandom при сбое loadRandomKoan', () => {
        KoanApiServiceMock.getRandomKoan.mockReturnValue(throwError(() => new Error('fail')));

        facade.loadRandomKoan();

        expect(facade.error()).not.toBeNull();
        expect(facade.loadingRandom()).toBe(false);
        expect(facade.randomKoan()).toBeNull();
      });

      it('должен выставить error при сбое loadKoanList', () => {
        KoanApiServiceMock.getKoanList.mockReturnValue(throwError(() => new Error('fail')));

        facade.loadKoanList();

        expect(facade.error()).not.toBeNull();
        expect(facade.loadingList()).toBe(false);
      });

      it('должен выставить error при сбое selectKoan', () => {
        KoanApiServiceMock.getKoan.mockReturnValue(throwError(() => new Error('fail')));

        facade.selectKoan('any-slug');

        expect(facade.error()).not.toBeNull();
        expect(facade.loadingSelected()).toBe(false);
      });
    });
  });

  describe('Edge Cases', () => {
    describe('Повторный selectKoan до завершения предыдущего', () => {
      it('должен применить результат только последнего запроса (switchMap)', () => {
        const firstResponse = new Subject<KoanModel>();
        const secondResponse = new Subject<KoanModel>();
        const secondKoan: KoanModel = { ...KoanFixture, slug: 'second-koan' };

        KoanApiServiceMock.getKoan.mockReturnValueOnce(firstResponse).mockReturnValueOnce(secondResponse);

        facade.selectKoan('first-koan');
        facade.selectKoan('second-koan');
        secondResponse.next(secondKoan);
        firstResponse.next(KoanFixture);

        expect(facade.selectedKoan()).toEqual(secondKoan);
      });
    });
  });
});
