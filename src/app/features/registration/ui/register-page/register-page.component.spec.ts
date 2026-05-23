import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { RegisterPageComponent } from './register-page.component';
import { RegisterPageFacade } from '@features/registration/facades/register-page.facade';
import { registerPageFacadeMock } from '@features/registration/facades/register-page.facade.mock';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { ActivatedRoute } from '@angular/router';
import { activatedRouteMock } from '@shared/mocks/activated-route/activated-route.mock';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageComponent, TranslocoTestingMock],
      providers: [
        { provide: RegisterPageFacade, useValue: registerPageFacadeMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });
});
