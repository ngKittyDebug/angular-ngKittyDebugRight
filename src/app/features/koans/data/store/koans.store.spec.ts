import { TestBed } from '@angular/core/testing';

import { KoanListFixture } from '@features/koans/data/fixtures/koan-list.fixture';
import { KoansStore } from './koans.store';

import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';

const koanListWithMeta: KoanListItemModel[] = [
  { number: 1, title: 'Async операция', slug: 'koan-1', category: 'javascript', tags: ['promises', 'async'] },
  { number: 2, title: 'О замыканиях', slug: 'koan-2', category: 'javascript', tags: ['closures'] },
  { number: 3, title: 'О сигналах', slug: 'koan-3', category: 'angular', tags: ['signals', 'state'] },
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
      store.setCategory('angular');

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
      const ngGroup = groups.find((g) => g.category === 'angular');

      expect(jsGroup?.items).toHaveLength(2);
      expect(ngGroup?.items).toHaveLength(1);
    });

    it('должен отражать изменения filteredList', () => {
      store.setKoanList(koanListWithMeta);
      store.setCategory('javascript');

      const groups = store.groupedList();

      expect(groups).toHaveLength(1);
      expect(groups[0].category).toBe('javascript');
      expect(groups[0].items).toHaveLength(2);
    });

    it('должен сохранять порядок KOAN_CATEGORIES (javascript → angular → philosophy)', () => {
      store.setKoanList([
        { number: 1, title: 'A', slug: 'a', category: 'philosophy' },
        { number: 2, title: 'B', slug: 'b', category: 'javascript' },
        { number: 3, title: 'C', slug: 'c', category: 'angular' },
      ]);

      expect(store.groupedList().map((g) => g.category)).toEqual(['javascript', 'angular', 'philosophy']);
    });

    it('должен сложить коаны без category в группу "other" в конце', () => {
      store.setKoanList([
        { number: 1, title: 'A', slug: 'a', category: 'javascript' },
        { number: 2, title: 'B', slug: 'b' },
      ]);

      const groups = store.groupedList();

      expect(groups.map((g) => g.category)).toEqual(['javascript', 'other']);
      expect(groups[1].items[0].slug).toBe('b');
    });
  });

  describe('categoryCounts', () => {
    it('должен считать коаны по каждой категории, игнорируя items без category', () => {
      store.setKoanList([...koanListWithMeta, { number: 4, title: 'X', slug: 'x' }]);

      const counts = store.categoryCounts();

      expect(counts.get('javascript')).toBe(2);
      expect(counts.get('angular')).toBe(1);
      expect(counts.get('philosophy')).toBeUndefined();
      expect(counts.size).toBe(2);
    });

    it('должен опираться на полный koanList, а не на filteredList', () => {
      store.setKoanList(koanListWithMeta);
      store.setCategory('javascript');

      expect(store.categoryCounts().get('angular')).toBe(1);
    });
  });

  describe('tagCounts', () => {
    it('должен агрегировать теги и сортировать по частоте, затем алфавитно', () => {
      store.setKoanList([
        { number: 1, title: 'A', slug: 'a', category: 'javascript', tags: ['promises', 'async'] },
        { number: 2, title: 'B', slug: 'b', category: 'javascript', tags: ['promises'] },
        { number: 3, title: 'C', slug: 'c', category: 'angular', tags: ['signals'] },
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
      store.toggleCategory('javascript');
      expect(store.activeCategory()).toBe('javascript');

      store.toggleCategory('javascript');
      expect(store.activeCategory()).toBeNull();
    });

    it('должен переключиться на другую категорию без промежуточного сброса', () => {
      store.toggleCategory('javascript');
      store.toggleCategory('angular');

      expect(store.activeCategory()).toBe('angular');
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
});
