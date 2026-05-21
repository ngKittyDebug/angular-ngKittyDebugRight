import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ChronicleComponent } from './chronicle.component';

describe('ChroniclesComponent', () => {
  let component: ChronicleComponent;
  let fixture: ComponentFixture<ChronicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronicleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChronicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
