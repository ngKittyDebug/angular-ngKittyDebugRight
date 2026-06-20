import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { AltarComponent } from './altar.component';

describe('AltarComponent', () => {
  let component: AltarComponent;
  let fixture: ComponentFixture<AltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
