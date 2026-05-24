import { TestBed } from '@angular/core/testing';
import { MARKED_EXTENSIONS, provideMarkdown } from 'ngx-markdown';
import { NEVER, of } from 'rxjs';
import { vi } from 'vitest';

import { KoanApiService } from '@features/koans/data/api/koan-api.service';
import { KoanApiServiceMock } from '@features/koans/data/api/koan-api.service.mock';
import { KoanCategoryService } from '@features/koans/data/api/koan-category.service';
import { KoanCategoryServiceMock } from '@features/koans/data/api/koan-category.service.mock';
import { KoanFixture } from '@features/koans/data/fixtures/koan.fixture';
import { KoanListFixture } from '@features/koans/data/fixtures/koan-list.fixture';
import { KoansPersistenceService } from '@features/koans/data/services/koans-persistence.service';
import { KoansPersistenceServiceMock } from '@features/koans/data/services/koans-persistence.service.mock';
import { KoansStore } from '@features/koans/data/store/koans.store';
import { koanMarkedExtensions } from '@features/koans/koan-marked-extensions';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { KoanReaderComponent } from './koan-reader.component';

import type { ComponentFixture } from '@angular/core/testing';

const CATEGORIES = [
  { id: 'javascript', label: 'JavaScript', kanji: '言' },
  { id: 'angular', label: 'Angular', kanji: '骨' },
  { id: 'philosophy', label: 'Философия', kanji: '道' },
];

describe('KoanReaderComponent', () => {
  let component: KoanReaderComponent;
  let fixture: ComponentFixture<KoanReaderComponent>;
  let element: HTMLElement;
  let store: InstanceType<typeof KoansStore>;

  beforeEach(async () => {
    KoanApiServiceMock.getKoan.mockReset().mockReturnValue(of(KoanFixture));
    KoanApiServiceMock.getKoanList.mockReset().mockReturnValue(of(KoanListFixture));
    KoanCategoryServiceMock.getCategories.mockReset().mockReturnValue(of(CATEGORIES));
    KoansPersistenceServiceMock.loadReadSet.mockReset().mockReturnValue(new Set<string>());

    await TestBed.configureTestingModule({
      imports: [KoanReaderComponent, TranslocoTestingMock],
      providers: [
        KoansStore,
        { provide: KoanApiService, useValue: KoanApiServiceMock },
        { provide: KoanCategoryService, useValue: KoanCategoryServiceMock },
        { provide: KoansPersistenceService, useValue: KoansPersistenceServiceMock },
        provideMarkdown({
          markedExtensions: [{ provide: MARKED_EXTENSIONS, useValue: koanMarkedExtensions, multi: true }],
        }),
      ],
    }).compileComponents();

    store = TestBed.inject(KoansStore);
    fixture = TestBed.createComponent(KoanReaderComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
  });

  describe('Happy Path', () => {
    describe('Коан выбран', () => {
      beforeEach(() => {
        store.loadCategories();
        store.selectKoan(KoanFixture.slug);
        fixture.detectChanges();
      });

      it('должен отрендерить сегменты с CSS-классами через marked extensions', async () => {
        await new Promise<void>((resolve) => setTimeout(resolve, 0));

        expect(element.querySelector('.segment.master')).toBeTruthy();
        expect(element.querySelector('.segment.student')).toBeTruthy();
        expect(element.querySelector('.segment.haiku')).toBeTruthy();
        expect(element.querySelector('.segment.question')).toBeTruthy();
        expect(element.querySelector('.segment.question .question-mark')?.textContent).toBe('問');
        expect(element.querySelector('.segment.source')).toBeTruthy();
      });

      it('должен показать meta-шапку с 公案, номером и категорией', () => {
        const meta = element.querySelector('.kr-meta');

        expect(meta?.textContent).toContain('公案');
        expect(meta?.textContent).toContain('№001');
        expect(meta?.textContent).toContain('JavaScript');
      });

      it('должен показать title в h1.kr-title', () => {
        const title = element.querySelector('#kr-title.kr-title');

        expect(title?.textContent).toContain(KoanFixture.title);
      });

      it('должен показать source с em-dash префиксом', () => {
        const source = element.querySelector('.kr-source-head');

        expect(source?.textContent).toContain('—');
        expect(source?.textContent).toContain('Монастырь Мацуо-дэра');
      });

      it('должен отрендерить теги и вызвать store.toggleTag при клике', () => {
        const tags = [...element.querySelectorAll<HTMLButtonElement>('.kr-tag')];

        expect(tags.map((b) => b.textContent?.trim())).toEqual(['arguments', 'undefined', 'functions']);

        tags[1].click();

        expect(store.activeTags().has('undefined')).toBe(true);
      });
    });

    describe('Footer navigation', () => {
      it('кнопки prev/next disabled когда коан вне filteredList', () => {
        store.selectKoan(KoanFixture.slug);
        fixture.detectChanges();

        const [previousButton, nextButton] = element.querySelectorAll<HTMLButtonElement>('.kr-foot-nav button');

        expect(previousButton.disabled).toBe(true);
        expect(nextButton.disabled).toBe(true);
      });

      it('кнопки prev/next должны быть активны для среднего коана из списка', () => {
        const middle = KoanListFixture[1];

        KoanApiServiceMock.getKoan.mockReturnValue(of({ ...KoanFixture, slug: middle.slug }));
        store.loadKoanList();
        store.selectKoan(middle.slug);
        fixture.detectChanges();

        const [previousButton, nextButton] = element.querySelectorAll<HTMLButtonElement>('.kr-foot-nav button');

        expect(previousButton.disabled).toBe(false);
        expect(nextButton.disabled).toBe(false);
      });

      it('должен эмитить prev/next/share при кликах', () => {
        const middle = KoanListFixture[1];

        KoanApiServiceMock.getKoan.mockReturnValue(of({ ...KoanFixture, slug: middle.slug }));
        store.loadKoanList();
        store.selectKoan(middle.slug);
        fixture.detectChanges();

        const previousSpy = vi.fn();
        const nextSpy = vi.fn();
        const shareSpy = vi.fn();

        component.prev.subscribe(previousSpy);
        component.next.subscribe(nextSpy);
        component.share.subscribe(shareSpy);

        const [previousButton, nextButton] = element.querySelectorAll<HTMLButtonElement>('.kr-foot-nav button');
        const shareButton = element.querySelector<HTMLButtonElement>('.kr-foot > button');

        previousButton.click();
        nextButton.click();
        shareButton?.click();

        expect(previousSpy).toHaveBeenCalledTimes(1);
        expect(nextSpy).toHaveBeenCalledTimes(1);
        expect(shareSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Edge Cases', () => {
    it('должен показать пустое состояние с кандзи 空, если коан не выбран', () => {
      fixture.detectChanges();

      const empty = element.querySelector('.kr-empty');

      expect(empty).toBeTruthy();
      expect(empty?.querySelector('.kr-empty-kanji')?.textContent).toBe('空');
    });

    it('не должен показывать индикатор загрузки мгновенно', () => {
      vi.useFakeTimers();

      KoanApiServiceMock.getKoan.mockReturnValue(NEVER);
      store.selectKoan('any-slug');
      fixture.detectChanges();

      expect(element.querySelector('.kr-status')).toBeNull();

      vi.useRealTimers();
    });

    it('должен показать индикатор загрузки после 300мс', () => {
      vi.useFakeTimers();

      KoanApiServiceMock.getKoan.mockReturnValue(NEVER);
      store.selectKoan('any-slug');
      fixture.detectChanges();

      vi.advanceTimersByTime(300);
      fixture.detectChanges();

      const status = element.querySelector('.kr-status');

      expect(status?.textContent).toContain('Свиток разворачивается');

      vi.useRealTimers();
    });
  });
});
