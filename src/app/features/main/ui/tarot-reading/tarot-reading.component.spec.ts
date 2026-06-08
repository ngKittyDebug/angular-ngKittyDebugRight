import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { TarotReadingComponent } from './tarot-reading.component';
import { tarotResponseApiFixture } from '@features/main/data/api/fixtures/tarot-response-api.fixture';

describe('CardViewComponent', () => {
  let component: TarotReadingComponent;
  let fixture: ComponentFixture<TarotReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotReadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarotReadingComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tarotReading', tarotResponseApiFixture);
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });
});
