import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { of, Subject, throwError } from 'rxjs';
import { vi } from 'vitest';

import { KoanApiService } from '@features/koans/data/api/koan-api.service';
import { KoanApiServiceMock } from '@features/koans/data/api/koan-api.service.mock';
import { KoanCategoryService } from '@features/koans/data/api/koan-category.service';
import { KoanCategoryServiceMock } from '@features/koans/data/api/koan-category.service.mock';
import { KoanFixture } from '@features/koans/data/fixtures/koan.fixture';
import { KoanListFixture } from '@features/koans/data/fixtures/koan-list.fixture';
import { KoansPersistenceService } from '@features/koans/data/services/koans-persistence.service';
import { KoansPersistenceServiceMock } from '@features/koans/data/services/koans-persistence.service.mock';
import { KoansStore } from './koans.store';

import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';
import type { KoanModel } from '@features/koans/data/models/koan.model';

const koanListWithMeta: KoanListItemModel[] = [
  { number: 1, title: 'Async операция', slug: 'koan-1', category: 'JavaScript', tags: ['promises', 'async'] },
  { number: 2, title: 'О замыканиях', slug: 'koan-2', category: 'JavaScript', tags: ['closures'] },
  { number: 3, title: 'О сигналах', slug: 'koan-3', category: 'Angular', tags: ['signals', 'state'] },
];

describe('KoansStore', () => {
  let store: InstanceType<typeof KoansStore>;

  beforeEach(() => {
    KoanApiServiceMock.getRandomKoan.mockReset();
    KoanApiServiceMock.getKoanList.mockReset();
    KoanApiServiceMock.getKoan.mockReset();
    KoanCategoryServiceMock.getCategories.mockReset();
    KoansPersistenceServiceMock.loadReadSet.mockReset().mockReturnValue(new Set<string>());
    KoansPersistenceServiceMock.saveReadSet.mockReset();

    TestBed.configureTestingModule({
      providers: [
        KoansStore,
        { provide: KoanApiService, useValue: KoanApiServiceMock },
        { provide: KoanCategoryService, useValue: KoanCategoryServiceMock },
        { provide: KoansPersistenceService, useValue: KoansPersistenceServiceMock },
      ],
    });
    store = TestBed.inject(KoansStore);
  });

  describe('Initialization (withHooks.onInit)', () => {
    it('должен загрузить readSet из persistence при создании store', () => {
      expect(KoansPersistenceServiceMock.loadReadSet).toHaveBeenCalledTimes(1);
    });
  });

  describe('filteredList', () => {
    it('должен вернуть весь список при пустых фильтрах', () => {
      store.setKoanList(KoanListFixture);

      expect(store.filteredList()).toEqual(KoanListFixture);
    });

    it('должен фильтровать по query (поиск по title)', () => {
      store.setKoanList(koanListWithMeta);
      store.setQuery('async');

      expect(store.filteredList()).toHaveLength(1);
      expect(store.filteredList()[0].slug).toBe('koan-1');
    });

    it('должен фильтровать по activeCategory', () => {
      store.setKoanList(koanListWithMeta);
      store.toggleCategory('Angular');

      expect(store.filteredList()).toHaveLength(1);
      expect(store.filteredList()[0].slug).toBe('koan-3');
    });

    it('должен фильтровать по activeTags', () => {
      store.setKoanList(koanListWithMeta);
      store.toggleTag('closures');

      expect(store.filteredList()).toHaveLength(1);
      expect(store.filteredList()[0].slug).toBe('koan-2');
    });

    it('должен вернуть пустой массив при несовпадении query', () => {
      store.setKoanList(koanListWithMeta);
      store.setQuery('несуществующий коан xyz');

      expect(store.filteredList()).toHaveLength(0);
    });
  });

  describe('groupedList', () => {
    it('должен сгруппировать коаны по category', () => {
      store.setKoanList(koanListWithMeta);

      const groups = store.groupedList();

      expect(groups).toHaveLength(2);
      const jsGroup = groups.find((g) => g.category === 'JavaScript');
      const ngGroup = groups.find((g) => g.category === 'Angular');

      expect(jsGroup?.items).toHaveLength(2);
      expect(ngGroup?.items).toHaveLength(1);
    });

    it('должен отражать изменения filteredList', () => {
      store.setKoanList(koanListWithMeta);
      store.toggleCategory('JavaScript');

      const groups = store.groupedList();

      expect(groups).toHaveLength(1);
      expect(groups[0].category).toBe('JavaScript');
      expect(groups[0].items).toHaveLength(2);
    });

    it('должен сохранять порядок categories из store (javascript → angular → philosophy)', () => {
      store.setCategories([
        { id: 'JavaScript', label: 'JavaScript', kanji: '言' },
        { id: 'Angular', label: 'Angular', kanji: '骨' },
        { id: 'Философия', label: 'Философия', kanji: '道' },
      ]);
      store.setKoanList([
        { number: 1, title: 'A', slug: 'a', category: 'Философия' },
        { number: 2, title: 'B', slug: 'b', category: 'JavaScript' },
        { number: 3, title: 'C', slug: 'c', category: 'Angular' },
      ]);

      expect(store.groupedList().map((g) => g.category)).toEqual(['JavaScript', 'Angular', 'Философия']);
    });

    it('должен использовать порядок вхождения если categories пусты', () => {
      store.setKoanList([
        { number: 1, title: 'A', slug: 'a', category: 'Философия' },
        { number: 2, title: 'B', slug: 'b', category: 'JavaScript' },
      ]);

      expect(store.groupedList().map((g) => g.category)).toEqual(['Философия', 'JavaScript']);
    });

    it('должен сохранить порядок "other" после остальных категорий', () => {
      store.setKoanList([
        { number: 1, title: 'A', slug: 'a', category: 'JavaScript' },
        { number: 2, title: 'B', slug: 'b', category: 'other' },
      ]);

      const groups = store.groupedList();

      expect(groups.map((g) => g.category)).toEqual(['JavaScript', 'other']);
      expect(groups[1].items[0].slug).toBe('b');
    });
  });

  describe('categoryCounts', () => {
    it('должен считать коаны по каждой категории', () => {
      store.setKoanList(koanListWithMeta);

      const counts = store.categoryCounts();

      expect(counts.get('JavaScript')).toBe(2);
      expect(counts.get('Angular')).toBe(1);
      expect(counts.size).toBe(2);
    });

    it('должен опираться на полный koanList, а не на filteredList', () => {
      store.setKoanList(koanListWithMeta);
      store.toggleCategory('JavaScript');

      expect(store.categoryCounts().get('Angular')).toBe(1);
    });
  });

  describe('tagCounts', () => {
    it('должен агрегировать теги и сортировать по частоте, затем алфавитно', () => {
      store.setKoanList([
        { number: 1, title: 'A', slug: 'a', category: 'JavaScript', tags: ['promises', 'async'] },
        { number: 2, title: 'B', slug: 'b', category: 'JavaScript', tags: ['promises'] },
        { number: 3, title: 'C', slug: 'c', category: 'Angular', tags: ['signals'] },
      ]);

      expect(store.tagCounts()).toEqual([
        ['promises', 2],
        ['async', 1],
        ['signals', 1],
      ]);
    });
  });

  describe('toggleCategory', () => {
    it('должен установить категорию при первом вызове и сбросить при повторном с тем же значением', () => {
      store.toggleCategory('JavaScript');
      expect(store.activeCategory()).toBe('JavaScript');

      store.toggleCategory('JavaScript');
      expect(store.activeCategory()).toBeNull();
    });

    it('должен переключиться на другую категорию без промежуточного сброса', () => {
      store.toggleCategory('JavaScript');
      store.toggleCategory('Angular');

      expect(store.activeCategory()).toBe('Angular');
    });
  });

  describe('clearTags', () => {
    it('должен сбросить activeTags в пустой Set', () => {
      store.toggleTag('a');
      store.toggleTag('b');
      store.clearTags();

      expect(store.activeTags().size).toBe(0);
    });
  });

  describe('markRead', () => {
    it('должен добавить slug в readSet и сохранить через persistence', () => {
      store.markRead('koan-1');

      expect(store.readSet().has('koan-1')).toBe(true);
      expect(KoansPersistenceServiceMock.saveReadSet).toHaveBeenCalledTimes(1);
      const saved = KoansPersistenceServiceMock.saveReadSet.mock.calls[0][0] as ReadonlySet<string>;

      expect(saved.has('koan-1')).toBe(true);
    });
  });

  describe('loadRandomKoan', () => {
    it('должен загрузить случайный коан и снять флаг загрузки', () => {
      KoanApiServiceMock.getRandomKoan.mockReturnValue(of(KoanFixture));

      store.loadRandomKoan(null);

      expect(store.randomKoan()).toEqual(KoanFixture);
      expect(store.loadingRandom()).toBe(false);
      expect(store.error()).toBeNull();
    });

    it('должен передать exclude в api при наличии текущего коана', () => {
      KoanApiServiceMock.getRandomKoan.mockReturnValue(of(KoanFixture));

      store.loadRandomKoan(KoanFixture.slug);

      expect(KoanApiServiceMock.getRandomKoan).toHaveBeenCalledTimes(1);
      expect(KoanApiServiceMock.getRandomKoan).toHaveBeenNthCalledWith(1, KoanFixture.slug);
    });

    it('должен выставить error и снять loadingRandom при сбое', () => {
      KoanApiServiceMock.getRandomKoan.mockReturnValue(throwError(() => new HttpErrorResponse({ status: 500 })));

      store.loadRandomKoan(null);

      expect(store.error()).toBe('koans.error-generic');
      expect(store.loadingRandom()).toBe(false);
      expect(store.randomKoan()).toBeNull();
    });

    it('должен выставить error-network при status === 0', () => {
      KoanApiServiceMock.getRandomKoan.mockReturnValue(throwError(() => new HttpErrorResponse({ status: 0 })));

      store.loadRandomKoan(null);

      expect(store.error()).toBe('koans.error-network');
    });
  });

  describe('loadKoanList', () => {
    it('должен загрузить список коанов', () => {
      KoanApiServiceMock.getKoanList.mockReturnValue(of(KoanListFixture));

      store.loadKoanList();

      expect(store.koanList()).toEqual(KoanListFixture);
      expect(store.loadingList()).toBe(false);
    });

    it('должен выставить error при сбое', () => {
      KoanApiServiceMock.getKoanList.mockReturnValue(throwError(() => new HttpErrorResponse({ status: 500 })));

      store.loadKoanList();

      expect(store.error()).toBe('koans.error-generic');
      expect(store.loadingList()).toBe(false);
    });
  });

  describe('selectKoan', () => {
    it('должен загрузить выбранный коан', () => {
      KoanApiServiceMock.getKoan.mockReturnValue(of(KoanFixture));

      store.selectKoan(KoanFixture.slug);

      expect(store.selectedKoan()).toEqual(KoanFixture);
      expect(store.loadingSelected()).toBe(false);
    });

    it('должен применить результат только последнего запроса (switchMap)', () => {
      const firstResponse = new Subject<KoanModel>();
      const secondResponse = new Subject<KoanModel>();
      const secondKoan: KoanModel = { ...KoanFixture, slug: 'second-koan' };

      KoanApiServiceMock.getKoan.mockReturnValueOnce(firstResponse).mockReturnValueOnce(secondResponse);

      store.selectKoan('first-koan');
      store.selectKoan('second-koan');
      secondResponse.next(secondKoan);
      firstResponse.next(KoanFixture);

      expect(store.selectedKoan()).toEqual(secondKoan);
    });

    it('должен выставить error-not-found при status === 404', () => {
      KoanApiServiceMock.getKoan.mockReturnValue(throwError(() => new HttpErrorResponse({ status: 404 })));

      store.selectKoan('any-slug');

      expect(store.error()).toBe('koans.error-not-found');
      expect(store.loadingSelected()).toBe(false);
    });
  });

  describe('loadCategories', () => {
    it('должен загрузить категории и снять флаг', () => {
      const categories = [
        { id: 'JavaScript', label: 'JavaScript', kanji: '言' },
        { id: 'Angular', label: 'Angular', kanji: '骨' },
      ];

      KoanCategoryServiceMock.getCategories.mockReturnValue(of(categories));

      store.loadCategories();

      expect(store.categories()).toEqual(categories);
      expect(store.loadingCategories()).toBe(false);
    });

    it('должен выставить error при сбое', () => {
      KoanCategoryServiceMock.getCategories.mockReturnValue(throwError(() => new HttpErrorResponse({ status: 500 })));

      store.loadCategories();

      expect(store.error()).toBe('koans.error-generic');
      expect(store.loadingCategories()).toBe(false);
    });
  });

  describe('pickRandomFromFiltered', () => {
    beforeEach(() => {
      KoanApiServiceMock.getKoanList.mockReturnValue(of(KoanListFixture));
      store.loadKoanList();
    });

    it('должен вернуть slug случайного коана из отфильтрованных', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0);

      expect(store.pickRandomFromFiltered()).toBe(KoanListFixture[0].slug);
    });

    it('должен исключить текущий коан и вернуть другого', () => {
      KoanApiServiceMock.getKoan.mockReturnValue(of({ ...KoanFixture, slug: KoanListFixture[0].slug }));
      store.selectKoan(KoanListFixture[0].slug);
      vi.spyOn(Math, 'random').mockReturnValue(0);

      expect(store.pickRandomFromFiltered()).toBe(KoanListFixture[1].slug);
    });

    it('должен вернуть null, если отфильтрованный список пуст', () => {
      KoanApiServiceMock.getKoanList.mockReturnValue(of([]));
      store.loadKoanList();

      expect(store.pickRandomFromFiltered()).toBeNull();
    });
  });

  describe('pickNeighbor', () => {
    beforeEach(() => {
      KoanApiServiceMock.getKoanList.mockReturnValue(of(KoanListFixture));
      KoanApiServiceMock.getKoan.mockReturnValue(of({ ...KoanFixture, slug: KoanListFixture[1].slug }));
      store.loadKoanList();
      store.selectKoan(KoanListFixture[1].slug);
    });

    it('должен вернуть предыдущий slug', () => {
      expect(store.pickNeighbor(-1)).toBe(KoanListFixture[0].slug);
    });

    it('должен вернуть следующий slug', () => {
      expect(store.pickNeighbor(1)).toBe(KoanListFixture[2].slug);
    });

    it('должен вернуть null если нет выбранного коана', () => {
      store.clearSelectedKoan();

      expect(store.pickNeighbor(1)).toBeNull();
    });
  });

  describe('navigation computed', () => {
    beforeEach(() => {
      KoanApiServiceMock.getKoanList.mockReturnValue(of(KoanListFixture));
      store.loadKoanList();
    });

    it('selectedSlug отражает selectedKoan.slug', () => {
      expect(store.selectedSlug()).toBeNull();

      KoanApiServiceMock.getKoan.mockReturnValue(of(KoanFixture));
      store.selectKoan(KoanFixture.slug);

      expect(store.selectedSlug()).toBe(KoanFixture.slug);
    });

    it('hasPrev=false для первого, true для следующих', () => {
      KoanApiServiceMock.getKoan.mockReturnValue(of({ ...KoanFixture, slug: KoanListFixture[0].slug }));
      store.selectKoan(KoanListFixture[0].slug);

      expect(store.hasPrev()).toBe(false);

      KoanApiServiceMock.getKoan.mockReturnValue(of({ ...KoanFixture, slug: KoanListFixture[1].slug }));
      store.selectKoan(KoanListFixture[1].slug);

      expect(store.hasPrev()).toBe(true);
    });

    it('hasNext=false для последнего', () => {
      const last = KoanListFixture.at(-1)!;

      KoanApiServiceMock.getKoan.mockReturnValue(of({ ...KoanFixture, slug: last.slug }));
      store.selectKoan(last.slug);

      expect(store.hasNext()).toBe(false);
    });
  });
});
