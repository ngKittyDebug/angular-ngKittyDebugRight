import { TestBed } from '@angular/core/testing';

import { KoanListFixture } from '@features/koans/data/fixtures/koan-list.fixture';
import { KoansStore } from './koans.store';

import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';

const koanListWithMeta: KoanListItemModel[] = [
  { number: 1, title: 'Async операция', slug: 'koan-1', category: 'JavaScript', tags: ['promises', 'async'] },
  { number: 2, title: 'О замыканиях', slug: 'koan-2', category: 'JavaScript', tags: ['closures'] },
  { number: 3, title: 'О сигналах', slug: 'koan-3', category: 'Angular', tags: ['signals', 'state'] },
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
      store.setCategory('Angular');

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
      store.setCategory('JavaScript');

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

    it('должен сложить коаны без category в группу "other" в конце', () => {
      store.setKoanList([
        { number: 1, title: 'A', slug: 'a', category: 'JavaScript' },
        { number: 2, title: 'B', slug: 'b' },
      ]);

      const groups = store.groupedList();

      expect(groups.map((g) => g.category)).toEqual(['JavaScript', 'other']);
      expect(groups[1].items[0].slug).toBe('b');
    });
  });

  describe('categoryCounts', () => {
    it('должен считать коаны по каждой категории, игнорируя items без category', () => {
      store.setKoanList([...koanListWithMeta, { number: 4, title: 'X', slug: 'x' }]);

      const counts = store.categoryCounts();

      expect(counts.get('JavaScript')).toBe(2);
      expect(counts.get('Angular')).toBe(1);
      expect(counts.get('Философия')).toBeUndefined();
      expect(counts.size).toBe(2);
    });

    it('должен опираться на полный koanList, а не на filteredList', () => {
      store.setKoanList(koanListWithMeta);
      store.setCategory('JavaScript');

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
});
