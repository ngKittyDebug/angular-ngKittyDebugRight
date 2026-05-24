import { TestBed } from '@angular/core/testing';

import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { KoanGroupListComponent } from './koan-group-list.component';

import type { ComponentFixture } from '@angular/core/testing';
import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';
import type { KoanGroup } from '@features/koans/data/models/koan-group.model';

const CATEGORIES: KoanCategoryMeta[] = [
  { id: 'javascript', label: 'JavaScript', kanji: '言' },
  { id: 'angular', label: 'Angular', kanji: '骨' },
];

const GROUPS: KoanGroup[] = [
  {
    category: 'javascript',
    items: [
      { number: 1, title: 'О пустоте аргумента', slug: '001-arg', category: 'javascript' },
      { number: 2, title: 'О замыканиях', slug: '002-closure', category: 'javascript' },
    ],
  },
  {
    category: 'other',
    items: [{ number: 3, title: 'Без раздела', slug: '003-other', category: 'other' }],
  },
];

describe('KoanGroupListComponent', () => {
  let fixture: ComponentFixture<KoanGroupListComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoanGroupListComponent, TranslocoTestingMock],
    }).compileComponents();

    fixture = TestBed.createComponent(KoanGroupListComponent);
    element = fixture.nativeElement as HTMLElement;
  });

  describe('Happy Path', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('groups', GROUPS);
      fixture.componentRef.setInput('categories', CATEGORIES);
      fixture.componentRef.setInput('filteredCount', 3);
      fixture.detectChanges();
    });

    it('должен отрисовать сгруппированный список со счётчиком', () => {
      const items = element.querySelectorAll('.kl-item-title');

      expect(items).toHaveLength(3);
      expect(element.textContent).toContain('巻 · 3');
    });

    it('должен использовать локализованную метку для группы «other»', () => {
      const headings = [...element.querySelectorAll('.kl-group-head')].map((node) => node.textContent ?? '');
      const otherHead = headings.find((text) => text.includes('他'));

      expect(otherHead?.trim()).toContain('Прочее');
    });

    it('должен подсветить активный коан и излучить koanSelect по клику', () => {
      fixture.componentRef.setInput('selectedSlug', '002-closure');
      fixture.detectChanges();

      const active = element.querySelector('.kl-item.is-active');

      expect(active?.querySelector('.kl-item-title')?.textContent).toContain('О замыканиях');

      const emitted: string[] = [];

      fixture.componentInstance.koanSelect.subscribe((slug) => emitted.push(slug));

      element.querySelector<HTMLButtonElement>('.kl-item')?.click();

      expect(emitted).toEqual(['001-arg']);
    });

    it('должен пометить прочитанные коаны через .is-read', () => {
      fixture.componentRef.setInput('readSet', new Set(['001-arg']));
      fixture.detectChanges();

      const read = element.querySelectorAll('.kl-item.is-read');

      expect(read).toHaveLength(1);
    });

    it('должен форматировать номер коана с ведущими нулями (ширина 2)', () => {
      const firstNumber = element.querySelector('.kl-item-num');

      expect(firstNumber?.textContent?.trim()).toBe('№01');
    });
  });

  describe('Empty State', () => {
    it('должен показать сообщение «ничего не найдено» при пустом filteredCount', () => {
      fixture.componentRef.setInput('groups', []);
      fixture.componentRef.setInput('filteredCount', 0);
      fixture.detectChanges();

      const empty = element.querySelector('.kl-empty');

      expect(empty?.textContent).toContain('Ничего не найдено');
    });

    it('должен дополнить сообщение поисковым запросом', () => {
      fixture.componentRef.setInput('groups', []);
      fixture.componentRef.setInput('filteredCount', 0);
      fixture.componentRef.setInput('query', 'async');
      fixture.detectChanges();

      expect(element.querySelector('.kl-empty')?.textContent).toContain('async');
    });
  });
});
