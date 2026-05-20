import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing.mock/transloco-testing.mock';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslocoTestingMock],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
