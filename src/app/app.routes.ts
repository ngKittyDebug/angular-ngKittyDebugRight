import type { Routes } from '@angular/router';
import { LayoutComponent } from '@core/ui/components/layout/layout.component';
import { provideTranslocoScope } from '@jsverse/transloco';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'register',
        loadComponent: () =>
          import('@features/registration/ui/register-page/register-page.component').then(
            (c) => c.RegisterPageComponent
          ),
        providers: [provideTranslocoScope('register')],
      },
      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component').then((c) => c.NotFoundComponent),
        providers: [provideTranslocoScope('not-found')],
      },
    ],
  },
];
