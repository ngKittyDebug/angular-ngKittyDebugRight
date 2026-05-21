import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { TranslocoService } from '@jsverse/transloco';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { signal } from '@angular/core';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;

  const mockTranslocoService = {
    getActiveLang: vi.fn().mockReturnValue('ru'),
    getAvailableLangs: vi.fn().mockReturnValue(['ru', 'en']),
    setActiveLang: vi.fn(),
    activeLang: signal('ru'),
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

    it('должен получить список доступных языков', async () => {
      expect(mockTranslocoService.getAvailableLangs).toHaveBeenCalled();
    });
  });
});
