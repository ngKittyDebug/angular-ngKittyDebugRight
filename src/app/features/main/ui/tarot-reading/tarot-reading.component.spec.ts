import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { TarotReadingComponent } from './tarot-reading.component';

describe('CardViewComponent', () => {
  let component: TarotReadingComponent;
  let fixture: ComponentFixture<TarotReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotReadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarotReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
