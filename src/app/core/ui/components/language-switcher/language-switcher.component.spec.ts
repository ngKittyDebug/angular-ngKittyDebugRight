import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { TranslocoService } from '@jsverse/transloco';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { LanguageSwitcherComponent } from './language-switcher.component';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;

  const mockTranslocoService = {
    getActiveLang: vi.fn().mockReturnValue('ru'),
    getAvailableLangs: vi.fn().mockReturnValue(['ru', 'en']),
    setActiveLang: vi.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent, TranslocoTestingMock],
      providers: [{ provide: TranslocoService, useValue: mockTranslocoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Компонент инициализирован', () => {
    it('должен инициализироваться', () => {
      expect(component).toBeTruthy();
    });

    it('должен измениться язык', () => {
      const newLang = 'en';

      component.onChangeLanguage(newLang);
      fixture.detectChanges();

      const button: HTMLButtonElement | null = fixture.nativeElement.querySelector('button');

      expect(mockTranslocoService.setActiveLang).toHaveBeenNthCalledWith(1, newLang);
      expect(button?.textContent).toContain(newLang);
    });

    it('должен быть инициализирован текущим языком из сервиса.', async () => {
      expect(mockTranslocoService.getActiveLang).toHaveBeenCalled();
    });

    it('должен получить список доступных языков', async () => {
      expect(mockTranslocoService.getAvailableLangs).toHaveBeenCalled();
    });
  });
});
