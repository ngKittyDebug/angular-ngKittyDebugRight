import { TestBed } from '@angular/core/testing';
import { MARKED_EXTENSIONS, provideMarkdown } from 'ngx-markdown';
import { vi } from 'vitest';

import { koanMarkedExtensions } from '@features/koans/koan-marked-extensions';
import { KoanFixture } from '@features/koans/data/mocks/koan.fixture';
import { KoanReaderComponent } from './koan-reader.component';

import type { ComponentFixture } from '@angular/core/testing';

describe('KoanReaderComponent', () => {
  let component: KoanReaderComponent;
  let fixture: ComponentFixture<KoanReaderComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoanReaderComponent],
      providers: [
        provideMarkdown({
          markedExtensions: [{ provide: MARKED_EXTENSIONS, useValue: koanMarkedExtensions, multi: true }],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(KoanReaderComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
  });

  describe('Happy Path', () => {
    describe('Коан выбран', () => {
      beforeEach(() => {
        fixture.componentRef.setInput('koan', KoanFixture);
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

      it('должен отрендерить теги и эмитить tagClick при клике', () => {
        const spy = vi.fn();

        component.tagClick.subscribe(spy);

        const tags = [...element.querySelectorAll<HTMLButtonElement>('.kr-tag')];

        expect(tags.map((b) => b.textContent?.trim())).toEqual(['arguments', 'undefined', 'functions']);

        tags[1].click();

        expect(spy).toHaveBeenCalledWith('undefined');
      });
    });

    describe('Footer navigation', () => {
      beforeEach(() => {
        fixture.componentRef.setInput('koan', KoanFixture);
      });

      it('кнопки prev/next disabled когда hasPrev/hasNext = false', () => {
        fixture.detectChanges();

        const [previousButton, nextButton] = element.querySelectorAll<HTMLButtonElement>('.kr-foot-btn');

        expect(previousButton.disabled).toBe(true);
        expect(nextButton.disabled).toBe(true);
      });

      it('должен эмитить prev/next/share при кликах', () => {
        fixture.componentRef.setInput('hasPrev', true);
        fixture.componentRef.setInput('hasNext', true);
        fixture.detectChanges();

        const previousSpy = vi.fn();
        const nextSpy = vi.fn();
        const shareSpy = vi.fn();

        component.prev.subscribe(previousSpy);
        component.next.subscribe(nextSpy);
        component.share.subscribe(shareSpy);

        const [previousButton, nextButton] = element.querySelectorAll<HTMLButtonElement>('.kr-foot-btn');
        const shareButton = element.querySelector<HTMLButtonElement>('.kr-share-btn');

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
      fixture.componentRef.setInput('koan', null);
      fixture.detectChanges();

      const empty = element.querySelector('.kr-empty');

      expect(empty).toBeTruthy();
      expect(empty?.querySelector('.kr-empty-kanji')?.textContent).toBe('空');
      expect(empty?.textContent).toContain('Дай знак');
    });

    it('должен показать индикатор загрузки', () => {
      fixture.componentRef.setInput('loading', true);
      fixture.detectChanges();

      const status = element.querySelector('.kr-status');

      expect(status?.textContent).toContain('Свиток разворачивается');
    });
  });
});
