import type { Routes } from '@angular/router';
import { LayoutComponent } from '@core/ui/components/layout/layout.component';
import { provideTranslocoScope } from '@jsverse/transloco';
import { RegisterPageFacade } from '@features/registration/facades/register-page.facade';
import { LoginPageFacade } from '@features/login/facades/login-page.facade';
import { authGuard } from '@core/guards/auth-guard';
import { dirtyFormGuard } from '@core/guards/dirty-form.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'profile',
        canMatch: [authGuard],
        loadComponent: () => import('./features/profile/profile.component').then((c) => c.ProfileComponent),
        providers: [provideTranslocoScope('profile')],
      },
      {
        path: 'chronicle',
        canMatch: [authGuard],
        loadComponent: () =>
          import('./core/ui/components/pages/chronicle/chronicle.component').then((c) => c.ChronicleComponent),
        providers: [provideTranslocoScope('chronicle')],
      },
      {
        path: 'login',
        loadComponent: () => import('./features/login/ui/login.component').then((c) => c.LoginComponent),
        providers: [provideTranslocoScope('login'), LoginPageFacade],
        canDeactivate: [dirtyFormGuard],
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@features/registration/ui/register-page/register-page.component').then(
            (c) => c.RegisterPageComponent
          ),
        providers: [provideTranslocoScope('register'), RegisterPageFacade],
        canDeactivate: [dirtyFormGuard],
      },
      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component').then((c) => c.NotFoundComponent),
        providers: [provideTranslocoScope('not-found')],
      },
    ],
  },
];
