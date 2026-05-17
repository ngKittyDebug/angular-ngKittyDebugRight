import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { MARKED_EXTENSIONS, provideMarkdown } from 'ngx-markdown';
import { of } from 'rxjs';
import { vi } from 'vitest';

import { KoanApiService } from '@features/koans/data/api/koan-api.service';
import { KoanApiServiceMock } from '@features/koans/data/api/koan-api.service.mock';
import { KoansFacade } from '@features/koans/data/facades/koans.facade';
import { KoansPersistenceService } from '@features/koans/data/services/koans-persistence.service';
import { KoansPersistenceServiceMock } from '@features/koans/data/services/koans-persistence.service.mock';
import { KoansStore } from '@features/koans/data/store/koans.store';
import { koanHeadingExtension, koanMarkedExtensions } from '@features/koans/koan-marked-extensions';
import { KoanFixture, KoanListFixture } from '@features/koans/data/mocks/koan.fixture';
import { KoansPageComponent } from './koans-page.component';

import type { ComponentFixture } from '@angular/core/testing';

describe('KoansPageComponent', () => {
  let fixture: ComponentFixture<KoansPageComponent>;
  let element: HTMLElement;
  let navigateSpy: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    KoanApiServiceMock.getRandomKoan.mockReturnValue(of(KoanFixture));
    KoanApiServiceMock.getKoanList.mockReturnValue(of(KoanListFixture));
    KoanApiServiceMock.getKoan.mockReturnValue(of(KoanFixture));

    await TestBed.configureTestingModule({
      imports: [KoansPageComponent],
      providers: [
        provideRouter([]),
        KoansStore,
        KoansFacade,
        { provide: KoanApiService, useValue: KoanApiServiceMock },
        { provide: KoansPersistenceService, useValue: KoansPersistenceServiceMock },
        provideMarkdown({
          markedExtensions: [
            { provide: MARKED_EXTENSIONS, useValue: koanMarkedExtensions, multi: true },
            { provide: MARKED_EXTENSIONS, useValue: koanHeadingExtension, multi: true },
          ],
        }),
      ],
    }).compileComponents();

    const router = TestBed.inject(Router);

    navigateSpy = vi.fn().mockResolvedValue(true);
    router.navigate = navigateSpy as unknown as Router['navigate'];

    fixture = TestBed.createComponent(KoansPageComponent);
    element = fixture.nativeElement as HTMLElement;
  });

  describe('Happy Path', () => {
    describe('Инициализация', () => {
      it('должен загрузить список коанов и НЕ дёрнуть randomKoan на init', () => {
        fixture.detectChanges();

        expect(KoanApiServiceMock.getKoanList).toHaveBeenCalledTimes(1);
        expect(KoanApiServiceMock.getRandomKoan).not.toHaveBeenCalled();
      });

      it('должен выставить data-koan-theme на host через store.koanTheme()', () => {
        fixture.detectChanges();

        const host = fixture.debugElement.nativeElement as HTMLElement;

        expect(host.getAttribute('data-koan-theme')).toBe('sumi');
        expect(host.classList).toContain('koans-page');
      });

      it('должен выбрать коан при подаче slug через input', () => {
        fixture.componentRef.setInput('slug', KoanFixture.slug);
        fixture.detectChanges();

        expect(KoanApiServiceMock.getKoan).toHaveBeenCalledWith(KoanFixture.slug);
      });
    });

    describe('Header', () => {
      beforeEach(() => fixture.detectChanges());

      it('должен показать enso-логотип и кандзи 公案 в шапке', () => {
        expect(element.querySelector('.kp-enso')).toBeTruthy();
        expect(element.querySelector('.kp-brand-kanji')?.textContent).toBe('公案');
      });

      it('должен прокинуть значение search в store.setQuery', () => {
        const input = element.querySelector<HTMLInputElement>('.kp-search');

        if (!input) {
          throw new Error('search input not found');
        }

        input.value = 'async';
        input.dispatchEvent(new Event('input'));

        const store = TestBed.inject(KoansFacade);

        expect(store.query()).toBe('async');
      });

      it('должен переключить тему по клику на icon-кнопку и сохранить через persistence', () => {
        const themeButton = element.querySelector<HTMLButtonElement>('.kp-icon-btn');

        themeButton?.click();
        fixture.detectChanges();

        const host = fixture.debugElement.nativeElement as HTMLElement;

        expect(host.getAttribute('data-koan-theme')).toBe('washi');
        expect(KoansPersistenceServiceMock.saveTheme).toHaveBeenCalledWith('washi');
      });

      it('кнопка «Дай знак» должна навигировать на случайный slug из filteredList', () => {
        const randomButton = element.querySelector<HTMLButtonElement>('.kp-sign-btn');

        randomButton?.click();

        expect(navigateSpy).toHaveBeenCalledTimes(1);
        const [path, slug] = navigateSpy.mock.calls[0][0] as [string, string];

        expect(path).toBe('/koans');
        expect(KoanListFixture.map((k) => k.slug)).toContain(slug);
      });
    });

    describe('Sidebar interaction', () => {
      beforeEach(() => fixture.detectChanges());

      it('должен навигировать к коану при клике по пункту списка', () => {
        const firstItem = element.querySelector<HTMLButtonElement>('.kl-item');

        firstItem?.click();

        expect(navigateSpy).toHaveBeenCalledWith(['/koans', KoanListFixture[0].slug]);
      });

      it('должен свернуть sidebar при выборе коана', () => {
        const firstItem = element.querySelector<HTMLButtonElement>('.kl-item');

        firstItem?.click();
        fixture.detectChanges();

        const nav = element.querySelector('#koans-nav');

        expect(nav?.classList).toContain('kp-sidebar--collapsed');
      });
    });
  });

  describe('Keyboard navigation', () => {
    it('Arrow Right должна навигировать к следующему коану из filteredList', () => {
      fixture.componentRef.setInput('slug', KoanListFixture[0].slug);
      fixture.detectChanges();

      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });

      window.dispatchEvent(event);

      expect(navigateSpy).toHaveBeenCalledWith(['/koans', KoanListFixture[1].slug]);
    });

    it('должна игнорировать клавиши при фокусе в INPUT', () => {
      fixture.detectChanges();

      const input = element.querySelector<HTMLInputElement>('.kp-search');

      input?.focus();
      const event = new KeyboardEvent('keydown', { key: 'r' });

      input?.dispatchEvent(event);

      expect(navigateSpy).not.toHaveBeenCalled();
    });
  });

  describe('Auto-mark read', () => {
    it('должен пометить выбранный коан как прочитанный через 2.5s dwell', () => {
      vi.useFakeTimers();
      try {
        fixture.detectChanges();
        fixture.componentRef.setInput('slug', KoanFixture.slug);
        fixture.detectChanges();

        vi.advanceTimersByTime(2500);

        const store = TestBed.inject(KoansFacade);

        expect(store.readSet().has(KoanFixture.slug)).toBe(true);
        expect(KoansPersistenceServiceMock.saveReadSet).toHaveBeenCalled();
      } finally {
        vi.useRealTimers();
      }
    });
  });
});
