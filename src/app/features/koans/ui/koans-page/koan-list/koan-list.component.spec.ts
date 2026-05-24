import { TestBed } from '@angular/core/testing';
import { NEVER, of } from 'rxjs';
import { vi } from 'vitest';

import { KoanApiService } from '@features/koans/data/api/koan-api.service';
import { KoanApiServiceMock } from '@features/koans/data/api/koan-api.service.mock';
import { KoanCategoryService } from '@features/koans/data/api/koan-category.service';
import { KoanCategoryServiceMock } from '@features/koans/data/api/koan-category.service.mock';
import { KoansPersistenceService } from '@features/koans/data/services/koans-persistence.service';
import { KoansPersistenceServiceMock } from '@features/koans/data/services/koans-persistence.service.mock';
import { KoansStore } from '@features/koans/data/store/koans.store';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { KoanListComponent } from './koan-list.component';

import type { ComponentFixture } from '@angular/core/testing';
import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';
import type { KoanListItemModel } from '@features/koans/data/models/koan-list-item.model';

const KOAN_LIST: KoanListItemModel[] = [
  { number: 1, title: 'Async операция', slug: 'koan-1', category: 'JavaScript', tags: ['promises', 'async'] },
  { number: 2, title: 'О замыканиях', slug: 'koan-2', category: 'JavaScript', tags: ['closures'] },
  { number: 3, title: 'О сигналах', slug: 'koan-3', category: 'Angular', tags: ['signals'] },
];

const CATEGORIES: KoanCategoryMeta[] = [
  { id: 'JavaScript', label: 'JavaScript', kanji: '言' },
  { id: 'Angular', label: 'Angular', kanji: '骨' },
  { id: 'Философия', label: 'Философия', kanji: '道' },
];

describe('KoanListComponent', () => {
  let component: KoanListComponent;
  let fixture: ComponentFixture<KoanListComponent>;
  let element: HTMLElement;
  let store: InstanceType<typeof KoansStore>;

  beforeEach(async () => {
    KoanApiServiceMock.getKoanList.mockReset().mockReturnValue(of(KOAN_LIST));
    KoanApiServiceMock.getKoan.mockReset();
    KoanCategoryServiceMock.getCategories.mockReset().mockReturnValue(of(CATEGORIES));
    KoansPersistenceServiceMock.loadReadSet.mockReset().mockReturnValue(new Set<string>());
    KoansPersistenceServiceMock.saveReadSet.mockReset();

    await TestBed.configureTestingModule({
      imports: [KoanListComponent, TranslocoTestingMock],
      providers: [
        KoansStore,
        { provide: KoanApiService, useValue: KoanApiServiceMock },
        { provide: KoanCategoryService, useValue: KoanCategoryServiceMock },
        { provide: KoansPersistenceService, useValue: KoansPersistenceServiceMock },
      ],
    }).compileComponents();

    store = TestBed.inject(KoansStore);
    fixture = TestBed.createComponent(KoanListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
  });

  describe('Happy Path', () => {
    beforeEach(() => {
      store.loadCategories();
      store.loadKoanList();
      fixture.detectChanges();
    });

    it('должен отрисовать все koan items из всех групп', () => {
      expect(element.querySelectorAll('.kl-item')).toHaveLength(3);
    });

    it('должен показать заголовок группы с кандзи и подписью', () => {
      const headings = [...element.querySelectorAll('.kl-group-head')].map((h) => h.textContent ?? '');

      expect(headings.some((t) => t.includes('言') && t.includes('JavaScript'))).toBe(true);
      expect(headings.some((t) => t.includes('骨') && t.includes('Angular'))).toBe(true);
    });

    it('должен отрендерить категории, у которых есть count > 0', () => {
      const labels = [...element.querySelectorAll('.kl-cat-name')].map((s) => s.textContent?.trim());

      expect(labels).toContain('JavaScript');
      expect(labels).toContain('Angular');
      expect(labels).toContain('Все');
      expect(labels).not.toContain('Философия');
    });

    it('должен отрендерить теги в порядке частоты', () => {
      const tags = [...element.querySelectorAll('.kl-tag:not(.kl-tag-more)')].map((b) => b.textContent?.trim());

      expect(tags).toEqual(['async', 'closures', 'promises', 'signals']);
    });

    it('должен пометить активную категорию через is-on после toggleCategory', () => {
      store.toggleCategory('Angular');
      fixture.detectChanges();

      const active = element.querySelector<HTMLButtonElement>('.kl-cat-btn.is-on');

      expect(active?.textContent).toContain('Angular');
    });

    it('должен пометить активные теги через is-on после toggleTag', () => {
      store.toggleTag('promises');
      fixture.detectChanges();

      const activeTag = element.querySelector<HTMLButtonElement>('.kl-tag.is-on');

      expect(activeTag?.textContent?.trim()).toBe('promises');
    });

    it('должен пометить выбранный slug через is-active и aria-current', () => {
      KoanApiServiceMock.getKoan.mockReturnValue(of({ ...KOAN_LIST[1], body: '', source: '' }));
      store.selectKoan('koan-2');
      fixture.detectChanges();

      const active = element.querySelector<HTMLButtonElement>('.kl-item.is-active[aria-current="true"]');

      expect(active?.querySelector('.kl-item-title')?.textContent).toContain('О замыканиях');
    });

    it('должен пометить прочитанные slug через is-read и aria-label на печати', () => {
      store.markRead('koan-1');
      fixture.detectChanges();

      const read = element.querySelector<HTMLButtonElement>('.kl-item.is-read');

      expect(read?.querySelector('.kl-item-seal')?.getAttribute('aria-label')).toBe('прочитано');
    });

    it('должен эмитить koanSelect при клике', () => {
      const spy = vi.fn();

      component.koanSelect.subscribe(spy);

      element.querySelector<HTMLButtonElement>('.kl-item')?.click();

      expect(spy).toHaveBeenCalledWith('koan-1');
    });

    it('должен вызвать store.toggleCategory при клике по категории', () => {
      element.querySelector<HTMLButtonElement>('.kl-cat-btn')?.click();

      expect(store.activeCategory()).toBe('JavaScript');
    });

    it('должен сбросить категорию при клике по «Все»', () => {
      store.toggleCategory('JavaScript');
      fixture.detectChanges();

      const allButton = [...element.querySelectorAll<HTMLButtonElement>('.kl-cat-btn')].at(-1);

      allButton?.click();

      expect(store.activeCategory()).toBeNull();
    });

    it('должен вызвать store.toggleTag при клике по чипу', () => {
      element.querySelector<HTMLButtonElement>('.kl-tag')?.click();

      expect(store.activeTags().size).toBe(1);
    });

    it('должен подставлять номер с padStart до 2 знаков', () => {
      const first = element.querySelector('.kl-item-num');

      expect(first?.textContent).toBe('№01');
    });
  });

  describe('Edge Cases', () => {
    it('должен показать индикатор загрузки и скрыть список', () => {
      KoanApiServiceMock.getKoanList.mockReturnValue(NEVER);
      store.loadKoanList();
      fixture.detectChanges();

      expect(element.querySelector('.kl-status')).toBeTruthy();
      expect(element.querySelector('.kl-list')).toBeNull();
    });

    it('должен показать пустое сообщение с query в кавычках, если filteredCount=0', () => {
      store.loadKoanList();
      store.setQuery('xyz');
      fixture.detectChanges();

      const empty = element.querySelector('.kl-empty');

      expect(empty?.textContent).toContain('Ничего не найдено');
      expect(empty?.textContent).toContain('«xyz»');
    });

    it('должен показать кнопку +N если тегов больше VISIBLE_TAG_COUNT', () => {
      const manyTaggedItems: KoanListItemModel[] = Array.from({ length: 25 }, (_, i) => ({
        number: i + 1,
        title: `Item ${i}`,
        slug: `item-${i}`,
        category: 'JavaScript',
        tags: [`t${i}`],
      }));

      KoanApiServiceMock.getKoanList.mockReturnValue(of(manyTaggedItems));
      store.loadKoanList();
      fixture.detectChanges();

      const moreButton = element.querySelector('.kl-tag-more');

      expect(moreButton?.textContent).toContain('+7');
    });
  });
});
