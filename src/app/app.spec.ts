import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TuiRoot } from '@taiga-ui/core';
import { TuiRootComponentMock } from '@shared/mocks/tui-root.component.mock/tui-root.component.mock';

describe('App', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    TestBed.overrideComponent(App, {
      remove: {
        imports: [TuiRoot],
      },
      add: { imports: [TuiRootComponentMock] },
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
