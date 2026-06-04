import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { TarotService } from '@features/main/data/api/services/tarot.service';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { tarotServiceMock } from '@features/main/data/api/services/tarot.service.mock';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: TarotService, useValue: tarotServiceMock }],
      imports: [MainComponent, TranslocoTestingMock],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });
});
