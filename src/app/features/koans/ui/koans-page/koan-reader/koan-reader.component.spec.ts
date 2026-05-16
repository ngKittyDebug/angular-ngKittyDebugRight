import { TestBed } from '@angular/core/testing';
import { MARKED_EXTENSIONS, provideMarkdown } from 'ngx-markdown';

import type { ComponentFixture } from '@angular/core/testing';
import { koanMarkedExtensions } from '@features/koans/koan-marked-extensions';
import { KoanFixture } from '@features/koans/data/mocks/koan.fixture';
import { KoanReaderComponent } from './koan-reader.component';

describe('KoanReaderComponent', () => {
  let fixture: ComponentFixture<KoanReaderComponent>;

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
  });

  describe('Happy Path', () => {
    describe('Коан выбран', () => {
      it('должен отрендерить сегменты с CSS-классами через marked extensions', async () => {
        fixture.componentRef.setInput('koan', KoanFixture);
        fixture.detectChanges();
        await new Promise<void>((resolve) => setTimeout(resolve, 0));

        const element = fixture.nativeElement as HTMLElement;

        expect(element.querySelector('.segment.master')).toBeTruthy();
        expect(element.querySelector('.segment.student')).toBeTruthy();
        expect(element.querySelector('figure.haiku')).toBeTruthy();
        expect(element.querySelector('.segment.question')).toBeTruthy();
        expect(element.querySelector('.segment.source')).toBeTruthy();
      });
    });
  });

  describe('Edge Cases', () => {
    describe('Коан не выбран', () => {
      it('должен показать подсказку выбрать коан', () => {
        fixture.componentRef.setInput('koan', null);
        fixture.detectChanges();

        const hint = (fixture.nativeElement as HTMLElement).querySelector('.reader-hint');

        expect(hint?.textContent).toContain('Выберите коан из списка');
      });
    });

    describe('Идёт загрузка', () => {
      it('должен показать индикатор загрузки', () => {
        fixture.componentRef.setInput('loading', true);
        fixture.detectChanges();

        const status = (fixture.nativeElement as HTMLElement).querySelector('.reader-status');

        expect(status?.textContent).toContain('Свиток разворачивается');
      });
    });
  });
});
