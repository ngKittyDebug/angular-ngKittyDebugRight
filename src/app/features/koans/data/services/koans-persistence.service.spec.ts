import { TestBed } from '@angular/core/testing';

import { KoansPersistenceService } from './koans-persistence.service';

describe('KoansPersistenceService', () => {
  let service: KoansPersistenceService;

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({});
    service = TestBed.inject(KoansPersistenceService);
  });

  describe('loadReadSet', () => {
    it('должен вернуть пустой Set если localStorage пуст', () => {
      expect(service.loadReadSet().size).toBe(0);
    });

    it('должен вернуть сохранённые slug при наличии данных', () => {
      localStorage.setItem('koan-read', JSON.stringify(['slug-1', 'slug-2']));

      const result = service.loadReadSet();

      expect(result.has('slug-1')).toBe(true);
      expect(result.has('slug-2')).toBe(true);
      expect(result.size).toBe(2);
    });

    it('должен вернуть пустой Set при невалидном JSON', () => {
      localStorage.setItem('koan-read', '{broken json');

      expect(service.loadReadSet().size).toBe(0);
    });
  });

  describe('saveReadSet / loadReadSet round-trip', () => {
    it('должен сохранить и восстановить Set', () => {
      const original = new Set(['koan-a', 'koan-b', 'koan-c']);

      service.saveReadSet(original);
      const restored = service.loadReadSet();

      expect(restored.size).toBe(3);
      expect(restored.has('koan-a')).toBe(true);
      expect(restored.has('koan-b')).toBe(true);
      expect(restored.has('koan-c')).toBe(true);
    });
  });
});
