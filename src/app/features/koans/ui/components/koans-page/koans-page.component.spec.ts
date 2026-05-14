import { TestBed } from '@angular/core/testing';
import { provideMarkdown } from 'ngx-markdown';
import { of } from 'rxjs';

import type { ComponentFixture } from '@angular/core/testing';
import { KoanApiService } from '@features/koans/data/api/koan/services/koan-api.service';
import { KoanApiServiceMock } from '@features/koans/data/api/koan/services/koan-api.service.mock';
import { KoansFacade } from '@features/koans/data/facades/koans.facade';
import { KoanFixture, KoanListFixture } from '@features/koans/fixtures/koan.fixture';
import { KoansPageComponent } from './koans-page.component';

describe('KoansPageComponent', () => {
  let fixture: ComponentFixture<KoansPageComponent>;

  beforeEach(async () => {
    KoanApiServiceMock.getRandomKoan.mockReturnValue(of(KoanFixture));
    KoanApiServiceMock.getKoanList.mockReturnValue(of(KoanListFixture));
    KoanApiServiceMock.getKoan.mockReturnValue(of(KoanFixture));

    await TestBed.configureTestingModule({
      imports: [KoansPageComponent],
      providers: [KoansFacade, { provide: KoanApiService, useValue: KoanApiServiceMock }, provideMarkdown()],
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

      it('должен выбрать коан при клике по пункту списка', () => {
        fixture.detectChanges();

        const firstItem = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.koan-list-button');

        firstItem?.click();

        expect(KoanApiServiceMock.getKoan).toHaveBeenCalledTimes(1);
        expect(KoanApiServiceMock.getKoan).toHaveBeenNthCalledWith(1, KoanListFixture[0].slug);
      });

      it('должен запросить новый случайный коан при клике «Следующий коан»', () => {
        fixture.detectChanges();

        const nextButton = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
          '.koan-widget-footer button'
        );

        nextButton?.click();

        expect(KoanApiServiceMock.getRandomKoan).toHaveBeenCalledTimes(2);
      });
    });
  });
});
