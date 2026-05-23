import type { Routes } from '@angular/router';
import { LayoutComponent } from '@core/ui/components/layout/layout.component';
import { ProfileComponent } from '@core/ui/components/layout/profile/profile.component';
import { provideTranslocoScope } from '@jsverse/transloco';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'chronicle',
        loadComponent: () =>
          import('./core/ui/components/pages/chronicle/chronicle.component').then((c) => c.ChronicleComponent),
        providers: [provideTranslocoScope('chronicle')],
      },
      {
        path: 'login',
        loadComponent: () => import('./features/login/ui/login.component').then((c) => c.LoginComponent),
        providers: [provideTranslocoScope('login')],
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./core/ui/components/layout/profile/profile.component').then((c) => c.ProfileComponent),
        providers: [provideTranslocoScope('profile')],
      },

      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component').then((c) => c.NotFoundComponent),
        providers: [provideTranslocoScope('not-found')],
      },
    ],
  },
];
