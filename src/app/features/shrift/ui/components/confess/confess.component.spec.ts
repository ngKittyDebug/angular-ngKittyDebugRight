import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ConfessComponent } from './confess.component';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';

describe('ConfessComponent', () => {
  let component: ConfessComponent;
  let fixture: ComponentFixture<ConfessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfessComponent, TranslocoTestingMock],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
