import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import type { ComponentFixture } from '@angular/core/testing';
import { KoanListFixture } from '@features/koans/fixtures/koan.fixture';
import { KoanListComponent } from './koan-list.component';

describe('KoanListComponent', () => {
  let component: KoanListComponent;
  let fixture: ComponentFixture<KoanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoanListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KoanListComponent);
    component = fixture.componentInstance;
  });

  describe('Happy Path', () => {
    describe('Список коанов получен', () => {
      it('должен отобразить все пункты списка', () => {
        fixture.componentRef.setInput('koanList', KoanListFixture);
        fixture.detectChanges();

        const buttons = (fixture.nativeElement as HTMLElement).querySelectorAll('.koan-list-button');

        expect(buttons.length).toBe(KoanListFixture.length);
      });

      it('должен эмитить slug при клике по пункту', () => {
        const selectSpy = vi.fn();

        component.koanSelect.subscribe(selectSpy);
        fixture.componentRef.setInput('koanList', KoanListFixture);
        fixture.detectChanges();

        const firstButton = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
          '.koan-list-button'
        );

        firstButton?.click();

        expect(selectSpy).toHaveBeenCalledTimes(1);
        expect(selectSpy).toHaveBeenNthCalledWith(1, KoanListFixture[0].slug);
      });

      it('должен пометить активный пункт через aria-current', () => {
        fixture.componentRef.setInput('koanList', KoanListFixture);
        fixture.componentRef.setInput('selectedSlug', KoanListFixture[1].slug);
        fixture.detectChanges();

        const activeButton = (fixture.nativeElement as HTMLElement).querySelector(
          '.koan-list-button[aria-current="true"]'
        );

        expect(activeButton?.textContent).toContain(KoanListFixture[1].title);
      });
    });
  });

  describe('Edge Cases', () => {
    describe('Список пуст', () => {
      it('должен показать сообщение об отсутствии коанов', () => {
        fixture.componentRef.setInput('koanList', []);
        fixture.detectChanges();

        const status = (fixture.nativeElement as HTMLElement).querySelector('.koan-list-status');

        expect(status?.textContent).toContain('Свитки не найдены');
      });
    });

    describe('Идёт загрузка', () => {
      it('должен показать индикатор загрузки', () => {
        fixture.componentRef.setInput('loading', true);
        fixture.detectChanges();

        const status = (fixture.nativeElement as HTMLElement).querySelector('.koan-list-status');

        expect(status?.textContent).toContain('Свитки разворачиваются');
      });
    });
  });
});
