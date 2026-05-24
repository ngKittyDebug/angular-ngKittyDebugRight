import { TestBed } from '@angular/core/testing';

import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { KoanCategoryFilterComponent } from './koan-category-filter.component';

import type { ComponentFixture } from '@angular/core/testing';
import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';

const CATEGORIES: KoanCategoryMeta[] = [
  { id: 'javascript', label: 'JavaScript', kanji: '言' },
  { id: 'angular', label: 'Angular', kanji: '骨' },
];

describe('KoanCategoryFilterComponent', () => {
  let fixture: ComponentFixture<KoanCategoryFilterComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoanCategoryFilterComponent, TranslocoTestingMock],
    }).compileComponents();

    fixture = TestBed.createComponent(KoanCategoryFilterComponent);
    element = fixture.nativeElement as HTMLElement;
  });

  describe('Happy Path', () => {
    describe('Категории и счётчики переданы', () => {
      beforeEach(() => {
        fixture.componentRef.setInput('categories', CATEGORIES);
        fixture.componentRef.setInput(
          'categoryCounts',
          new Map([
            ['javascript', 3],
            ['angular', 1],
          ])
        );
        fixture.componentRef.setInput('totalCount', 4);
        fixture.detectChanges();
      });

      it('должен показать только те категории, у которых есть счётчик', () => {
        const labels = [...element.querySelectorAll('.kl-cat-name')].map((node) => node.textContent?.trim());

        expect(labels).toContain('JavaScript');
        expect(labels).toContain('Все');
      });

      it('должен подсветить кнопку «Все», когда нет активной категории', () => {
        const all = [...element.querySelectorAll<HTMLButtonElement>('.kl-cat-btn')].at(-1);

        expect(all?.classList).toContain('is-on');
      });

      it('должен излучить categoryToggle с id категории по клику', () => {
        const emitted: Nullable<string>[] = [];

        fixture.componentInstance.categoryToggle.subscribe((value) => emitted.push(value));

        element.querySelector<HTMLButtonElement>('.kl-cat-btn')?.click();

        expect(emitted).toEqual(['javascript']);
      });

      it('должен излучить null при клике по «Все»', () => {
        const emitted: Nullable<string>[] = [];

        fixture.componentInstance.categoryToggle.subscribe((value) => emitted.push(value));

        [...element.querySelectorAll<HTMLButtonElement>('.kl-cat-btn')].at(-1)?.click();

        expect(emitted).toEqual([null]);
      });
    });
  });

  describe('Edge Cases', () => {
    it('должен скрыть категорию без счётчика', () => {
      fixture.componentRef.setInput('categories', CATEGORIES);
      fixture.componentRef.setInput('categoryCounts', new Map([['javascript', 3]]));
      fixture.detectChanges();

      const labels = [...element.querySelectorAll('.kl-cat-name')].map((node) => node.textContent?.trim());

      expect(labels).not.toContain('Angular');
    });
  });
});
