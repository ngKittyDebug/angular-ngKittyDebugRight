import { TestBed } from '@angular/core/testing';
import { provideMarkdown } from 'ngx-markdown';

import type { ComponentFixture } from '@angular/core/testing';
import { KoanFixture } from '@features/koans/fixtures/koan.fixture';
import { KoanReaderComponent } from './koan-reader.component';

describe('KoanReaderComponent', () => {
  let fixture: ComponentFixture<KoanReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoanReaderComponent],
      providers: [provideMarkdown()],
    }).compileComponents();

    fixture = TestBed.createComponent(KoanReaderComponent);
  });

  describe('Happy Path', () => {
    describe('Коан выбран', () => {
      it('должен отрендерить сегменты разных типов', () => {
        fixture.componentRef.setInput('koan', KoanFixture);
        fixture.detectChanges();

        const element = fixture.nativeElement as HTMLElement;

        expect(element.querySelector('.segment.heading')).toBeTruthy();
        expect(element.querySelector('.segment.source')).toBeTruthy();
        expect(element.querySelector('.segment.master')).toBeTruthy();
        expect(element.querySelector('.segment.student')).toBeTruthy();
        expect(element.querySelector('.segment.haiku')).toBeTruthy();
        expect(element.querySelector('.segment.question')).toBeTruthy();
        expect(element.querySelector('markdown')).toBeTruthy();
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
