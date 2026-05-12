import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { TuiRootComponentMock } from '@shared/mocks/tui-root.component.mock/tui-root.component.mock';
import { TuiRoot } from '@taiga-ui/core';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    TestBed.overrideComponent(HeaderComponent, {
      add: {
        imports: [TuiRootComponentMock],
      },
      remove: {
        imports: [TuiRoot],
      },
    });

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
