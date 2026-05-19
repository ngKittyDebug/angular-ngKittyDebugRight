import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { LanguageSwitcherComponent } from './language-switcher.component';
import { TranslocoService, TranslocoTestingModule } from '@jsverse/transloco';

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
      imports: [
        LanguageSwitcherComponent,
        TranslocoTestingModule.forRoot({
          langs: { en: {}, ru: {} },
          translocoConfig: {
            availableLangs: ['ru', 'en'],
            defaultLang: 'ru',
          },
        }),
      ],
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
      expect(mockTranslocoService.setActiveLang).toHaveBeenCalledWith(newLang);
      expect(component.currentLang).toBe(newLang);
    });

    it('должен быть инициализирован текущим языком из сервиса.', async () => {
      expect(mockTranslocoService.getActiveLang).toHaveBeenCalled();
    });

    it('должен получить список доступных языков', async () => {
      expect(mockTranslocoService.getAvailableLangs).toHaveBeenCalled();
    });
  });
});
