import { TestBed } from '@angular/core/testing';

import { KoanListFixture } from '@features/koans/data/mocks/koan.fixture';
import { KoansStore } from './koans.store';

import type { KoanListItemModel } from '@features/koans/data/models/koan.model';

const koanListWithMeta: KoanListItemModel[] = [
  { number: 1, title: 'Async операция', slug: 'koan-1', category: 'javascript', tags: ['promises', 'async'] },
  { number: 2, title: 'О замыканиях', slug: 'koan-2', category: 'javascript', tags: ['closures'] },
  { number: 3, title: 'Паттерны стора', slug: 'koan-3', category: 'patterns', tags: ['store', 'state'] },
];

describe('KoansStore', () => {
  let store: InstanceType<typeof KoansStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [KoansStore] });
    store = TestBed.inject(KoansStore);
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
      store.setCategory('patterns');

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
      const jsGroup = groups.find((g) => g.category === 'javascript');
      const patGroup = groups.find((g) => g.category === 'patterns');

      expect(jsGroup?.items).toHaveLength(2);
      expect(patGroup?.items).toHaveLength(1);
    });

    it('должен отражать изменения filteredList', () => {
      store.setKoanList(koanListWithMeta);
      store.setCategory('javascript');

      const groups = store.groupedList();

      expect(groups).toHaveLength(1);
      expect(groups[0].category).toBe('javascript');
      expect(groups[0].items).toHaveLength(2);
    });
  });
});
