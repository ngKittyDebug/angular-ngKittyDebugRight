import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { LoginPageFacade } from '@features/login/facades/login-page.facade';
import { ActivatedRoute } from '@angular/router';
import { activatedRouteMock } from '@shared/mocks/activated-route/activated-route.mock';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, TranslocoTestingMock],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }, LoginPageFacade],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Компонент инициализирован', () => {
    it('должен инициализироваться', () => {
      expect(component).toBeTruthy();
    });
  });
});
