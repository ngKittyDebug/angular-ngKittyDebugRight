import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import type { ComponentFixture } from '@angular/core/testing';
import { KoanFixture } from '@features/koans/data/mocks/koan.fixture';
import { KoanWidgetComponent } from './koan-widget.component';

describe('KoanWidgetComponent', () => {
  let component: KoanWidgetComponent;
  let fixture: ComponentFixture<KoanWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoanWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KoanWidgetComponent);
    component = fixture.componentInstance;
  });

  describe('Happy Path', () => {
    describe('Коан дня получен', () => {
      it('должен отобразить question из тела коана', () => {
        fixture.componentRef.setInput('koan', KoanFixture);
        fixture.detectChanges();

        const questions = (fixture.nativeElement as HTMLElement).querySelectorAll('.koan-widget-question');

        expect(questions.length).toBe(1);
      });

      it('должен эмитить next при клике по кнопке', () => {
        const nextSpy = vi.fn();

        component.next.subscribe(nextSpy);
        fixture.componentRef.setInput('koan', KoanFixture);
        fixture.detectChanges();

        const button = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
          '.koan-widget-footer button'
        );

        button?.click();

        expect(nextSpy).toHaveBeenCalledTimes(1);
      });

      it('должен блокировать кнопку во время загрузки', () => {
        fixture.componentRef.setInput('koan', KoanFixture);
        fixture.componentRef.setInput('loading', true);
        fixture.detectChanges();

        const button = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
          '.koan-widget-footer button'
        );

        expect(button?.disabled).toBe(true);
      });
    });
  });

  describe('Edge Cases', () => {
    describe('Идёт загрузка без коана', () => {
      it('должен показать индикатор загрузки', () => {
        fixture.componentRef.setInput('loading', true);
        fixture.detectChanges();

        const loading = (fixture.nativeElement as HTMLElement).querySelector('.koan-widget-loading');

        expect(loading?.textContent).toContain('Мастер выбирает свиток');
      });
    });
  });
});
