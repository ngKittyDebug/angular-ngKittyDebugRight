import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MARKED_EXTENSIONS, provideMarkdown } from 'ngx-markdown';
import { of } from 'rxjs';
import { vi } from 'vitest';

import type { ComponentFixture } from '@angular/core/testing';
import { KoanApiService } from '@features/koans/data/api/koan-api.service';
import { KoanApiServiceMock } from '@features/koans/data/api/koan-api.service.mock';
import { KoansFacade } from '@features/koans/data/facades/koans.facade';
import { KoansPersistenceService } from '@features/koans/data/services/koans-persistence.service';
import { KoansPersistenceServiceMock } from '@features/koans/data/services/koans-persistence.service.mock';
import { KoansStore } from '@features/koans/data/store/koans.store';
import { koanHeadingExtension, koanMarkedExtensions } from '@features/koans/koan-marked-extensions';
import { KoanFixture, KoanListFixture } from '@features/koans/data/mocks/koan.fixture';
import { KoansPageComponent } from './koans-page.component';

const RouterMock = {
  navigate: vi.fn(),
} as const;

describe('KoansPageComponent', () => {
  let fixture: ComponentFixture<KoansPageComponent>;

  beforeEach(async () => {
    KoanApiServiceMock.getRandomKoan.mockReturnValue(of(KoanFixture));
    KoanApiServiceMock.getKoanList.mockReturnValue(of(KoanListFixture));
    KoanApiServiceMock.getKoan.mockReturnValue(of(KoanFixture));

    await TestBed.configureTestingModule({
      imports: [KoansPageComponent],
      providers: [
        KoansStore,
        KoansFacade,
        { provide: KoanApiService, useValue: KoanApiServiceMock },
        { provide: KoansPersistenceService, useValue: KoansPersistenceServiceMock },
        { provide: Router, useValue: RouterMock },
        provideMarkdown({
          markedExtensions: [
            { provide: MARKED_EXTENSIONS, useValue: koanMarkedExtensions, multi: true },
            { provide: MARKED_EXTENSIONS, useValue: koanHeadingExtension, multi: true },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(KoansPageComponent);
  });

  describe('Happy Path', () => {
    describe('Страница инициализирована', () => {
      it('должен загрузить случайный коан и список при инициализации', () => {
        fixture.detectChanges();

        expect(KoanApiServiceMock.getRandomKoan).toHaveBeenCalledTimes(1);
        expect(KoanApiServiceMock.getKoanList).toHaveBeenCalledTimes(1);
      });

      it('должен навигировать к коану при клике по пункту списка', () => {
        fixture.detectChanges();

        const firstItem = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.koan-list-button');

        firstItem?.click();

        expect(RouterMock.navigate).toHaveBeenCalledTimes(1);
        expect(RouterMock.navigate).toHaveBeenNthCalledWith(1, ['/koans', KoanListFixture[0].slug]);
      });

      it('должен выбрать коан при установке slug через input', () => {
        KoanApiServiceMock.getKoan.mockReturnValue(of(KoanFixture));
        fixture.componentRef.setInput('slug', KoanFixture.slug);
        fixture.detectChanges();

        expect(KoanApiServiceMock.getKoan).toHaveBeenCalledTimes(1);
        expect(KoanApiServiceMock.getKoan).toHaveBeenNthCalledWith(1, KoanFixture.slug);
      });

      it('должен запросить новый случайный коан при клике «Следующий коан»', () => {
        fixture.detectChanges();

        const nextButton = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
          '.koan-widget-footer button'
        );

        nextButton?.click();

        expect(KoanApiServiceMock.getRandomKoan).toHaveBeenCalledTimes(2);
      });

      it('должен свернуть список при выборе коана из списка', () => {
        fixture.detectChanges();

        const firstItem = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.koan-list-button');

        firstItem?.click();
        fixture.detectChanges();

        const nav = (fixture.nativeElement as HTMLElement).querySelector('#koans-nav');

        expect(nav?.classList).toContain('koans-list--collapsed');
      });

      it('должен свернуть список при установке slug через input', () => {
        fixture.componentRef.setInput('slug', KoanFixture.slug);
        fixture.detectChanges();

        const nav = (fixture.nativeElement as HTMLElement).querySelector('#koans-nav');

        expect(nav?.classList).toContain('koans-list--collapsed');
      });

      it('должен переключить видимость списка по кнопке-тогглу', () => {
        fixture.detectChanges();

        const toggle = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.list-toggle');

        toggle?.click();
        fixture.detectChanges();

        const nav = (fixture.nativeElement as HTMLElement).querySelector('#koans-nav');

        expect(nav?.classList).toContain('koans-list--collapsed');

        toggle?.click();
        fixture.detectChanges();

        expect(nav?.classList).not.toContain('koans-list--collapsed');
      });
    });
  });
});
