import type { Routes } from '@angular/router';
import { LayoutComponent } from '@core/ui/components/layout/layout.component';
import { ProfileComponent } from '@core/ui/components/layout/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },

      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component').then((c) => c.NotFoundComponent),
      },
    ],
  },
];
