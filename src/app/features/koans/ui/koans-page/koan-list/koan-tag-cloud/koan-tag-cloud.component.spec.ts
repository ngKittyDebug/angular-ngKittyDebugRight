import { TestBed } from '@angular/core/testing';

import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { KoanTagCloudComponent } from './koan-tag-cloud.component';

import type { ComponentFixture } from '@angular/core/testing';

const tagPairs = (...names: string[]): (readonly [string, number])[] =>
  names.map((name, index): readonly [string, number] => [name, names.length - index]);

describe('KoanTagCloudComponent', () => {
  let fixture: ComponentFixture<KoanTagCloudComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoanTagCloudComponent, TranslocoTestingMock],
    }).compileComponents();

    fixture = TestBed.createComponent(KoanTagCloudComponent);
    element = fixture.nativeElement as HTMLElement;
  });

  describe('Happy Path', () => {
    it('должен излучить tagToggle при клике на чип тега', () => {
      fixture.componentRef.setInput('tagCounts', tagPairs('async', 'rxjs'));
      fixture.detectChanges();

      const emitted: string[] = [];

      fixture.componentInstance.tagToggle.subscribe((tag) => emitted.push(tag));

      element.querySelector<HTMLButtonElement>('.kl-tag')?.click();

      expect(emitted).toEqual(['async']);
    });

    it('должен подсветить активные теги', () => {
      fixture.componentRef.setInput('tagCounts', tagPairs('async', 'rxjs'));
      fixture.componentRef.setInput('activeTags', new Set(['async']));
      fixture.detectChanges();

      const active = element.querySelector('.kl-tag.is-on');

      expect(active?.textContent?.trim()).toBe('async');
    });
  });

  describe('Edge Cases', () => {
    it('должен ничего не рендерить при пустом списке тегов', () => {
      fixture.componentRef.setInput('tagCounts', []);
      fixture.detectChanges();

      expect(element.querySelector('.kl-section')).toBeNull();
    });

    it('должен скрыть кнопку «больше», если тегов меньше порога', () => {
      fixture.componentRef.setInput('tagCounts', tagPairs('a', 'b', 'c'));
      fixture.detectChanges();

      expect(element.querySelector('.kl-tag-more')).toBeNull();
    });

    it('должен показать +N и развернуть полный список по клику на «больше»', () => {
      const tags = Array.from({ length: 20 }, (_, index) => `t${index}`);

      fixture.componentRef.setInput('tagCounts', tagPairs(...tags));
      fixture.detectChanges();

      const more = element.querySelector<HTMLButtonElement>('.kl-tag-more');

      expect(more?.textContent?.trim()).toBe('+2');

      more?.click();
      fixture.detectChanges();

      const rendered = element.querySelectorAll('.kl-tag:not(.kl-tag-more)').length;

      expect(rendered).toBe(20);
    });
  });
});
