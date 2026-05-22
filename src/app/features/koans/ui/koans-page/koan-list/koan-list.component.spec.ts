import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { KoanListComponent } from './koan-list.component';

import type { ComponentFixture } from '@angular/core/testing';
import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';
import type { KoanGroup } from '@features/koans/data/models/koan-group.model';

const GROUPS: readonly KoanGroup[] = [
  {
    category: 'JavaScript',
    items: [
      { number: 1, title: 'Async операция', slug: 'koan-1', category: 'JavaScript' },
      { number: 2, title: 'О замыканиях', slug: 'koan-2', category: 'JavaScript' },
    ],
  },
  {
    category: 'Angular',
    items: [{ number: 3, title: 'О сигналах', slug: 'koan-3', category: 'Angular' }],
  },
];

const CATEGORY_COUNTS: ReadonlyMap<string, number> = new Map([
  ['JavaScript', 2],
  ['Angular', 1],
]);

const CATEGORIES: readonly KoanCategoryMeta[] = [
  { id: 'JavaScript', label: 'JavaScript', kanji: '言' },
  { id: 'Angular', label: 'Angular', kanji: '骨' },
  { id: 'Философия', label: 'Философия', kanji: '道' },
];

const TAG_COUNTS: readonly (readonly [string, number])[] = [
  ['promises', 3],
  ['signals', 2],
  ['closures', 1],
];

describe('KoanListComponent', () => {
  let component: KoanListComponent;
  let fixture: ComponentFixture<KoanListComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [KoanListComponent, TranslocoTestingMock] }).compileComponents();
    fixture = TestBed.createComponent(KoanListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
  });

  describe('Happy Path', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('groups', GROUPS);
      fixture.componentRef.setInput('categories', CATEGORIES);
      fixture.componentRef.setInput('categoryCounts', CATEGORY_COUNTS);
      fixture.componentRef.setInput('tagCounts', TAG_COUNTS);
      fixture.componentRef.setInput('totalCount', 3);
      fixture.componentRef.setInput('filteredCount', 3);
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

    it('должен отрендерить теги с count', () => {
      const tags = [...element.querySelectorAll('.kl-tag:not(.kl-tag-more)')].map((b) => b.textContent?.trim());

      expect(tags).toEqual(['promises', 'signals', 'closures']);
    });

    it('должен пометить активную категорию через is-on', () => {
      fixture.componentRef.setInput('activeCategory', 'Angular');
      fixture.detectChanges();

      const active = element.querySelector<HTMLButtonElement>('.kl-cat-btn.is-on');

      expect(active?.textContent).toContain('Angular');
    });

    it('должен пометить активные теги через is-on', () => {
      fixture.componentRef.setInput('activeTags', new Set(['promises']));
      fixture.detectChanges();

      const activeTag = element.querySelector<HTMLButtonElement>('.kl-tag.is-on');

      expect(activeTag?.textContent?.trim()).toBe('promises');
    });

    it('должен пометить выбранный slug через is-active и aria-current', () => {
      fixture.componentRef.setInput('selectedSlug', 'koan-2');
      fixture.detectChanges();

      const active = element.querySelector<HTMLButtonElement>('.kl-item.is-active[aria-current="true"]');

      expect(active?.querySelector('.kl-item-title')?.textContent).toContain('О замыканиях');
    });

    it('должен пометить прочитанные slug через is-read и aria-label на печати', () => {
      fixture.componentRef.setInput('readSet', new Set(['koan-1']));
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

    it('должен эмитить categoryToggle при клике по категории', () => {
      const spy = vi.fn();

      component.categoryToggle.subscribe(spy);

      element.querySelector<HTMLButtonElement>('.kl-cat-btn')?.click();

      expect(spy).toHaveBeenCalledWith('JavaScript');
    });

    it('должен эмитить categoryToggle с null при клике по «Все»', () => {
      const spy = vi.fn();

      component.categoryToggle.subscribe(spy);

      const allButton = [...element.querySelectorAll<HTMLButtonElement>('.kl-cat-btn')].at(-1);

      allButton?.click();

      expect(spy).toHaveBeenCalledWith(null);
    });

    it('должен эмитить tagToggle при клике по чипу', () => {
      const spy = vi.fn();

      component.tagToggle.subscribe(spy);

      element.querySelector<HTMLButtonElement>('.kl-tag')?.click();

      expect(spy).toHaveBeenCalledWith('promises');
    });

    it('должен подставлять номер с padStart до 2 знаков', () => {
      const first = element.querySelector('.kl-item-num');

      expect(first?.textContent).toBe('№01');
    });
  });

  describe('Edge Cases', () => {
    it('должен показать индикатор загрузки и скрыть список', () => {
      fixture.componentRef.setInput('loading', true);
      fixture.detectChanges();

      expect(element.querySelector('.kl-status')).toBeTruthy();
      expect(element.querySelector('.kl-list')).toBeNull();
    });

    it('должен показать пустое сообщение с query в кавычках, если filteredCount=0', () => {
      fixture.componentRef.setInput('groups', []);
      fixture.componentRef.setInput('categoryCounts', new Map());
      fixture.componentRef.setInput('tagCounts', []);
      fixture.componentRef.setInput('totalCount', 0);
      fixture.componentRef.setInput('filteredCount', 0);
      fixture.componentRef.setInput('query', 'xyz');
      fixture.detectChanges();

      const empty = element.querySelector('.kl-empty');

      expect(empty?.textContent).toContain('Ничего не найдено');
      expect(empty?.textContent).toContain('«xyz»');
    });

    it('должен показать кнопку +N если тегов больше VISIBLE_TAG_COUNT', () => {
      const manyTags: (readonly [string, number])[] = Array.from({ length: 25 }, (_, i) => [`t${i}`, 25 - i] as const);

      fixture.componentRef.setInput('tagCounts', manyTags);
      fixture.detectChanges();

      const moreButton = element.querySelector('.kl-tag-more');

      expect(moreButton?.textContent).toContain('+7');
    });
  });
});
