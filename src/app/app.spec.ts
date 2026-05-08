import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TuiRootComponentMock } from '@shared/mocks/tui-root.component.mock/tui-root.component.mock';
import { TuiRoot } from '@taiga-ui/core';

describe('App', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    TestBed.overrideComponent(App, {
      add: {
        imports: [TuiRootComponentMock],
      },
      remove: {
        imports: [TuiRoot],
      },
    });

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
