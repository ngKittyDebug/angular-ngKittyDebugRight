import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ShriftComponent } from './shrift.component';

describe('ShriftComponent', () => {
  let component: ShriftComponent;
  let fixture: ComponentFixture<ShriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShriftComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
