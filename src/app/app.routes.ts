import type { Routes } from '@angular/router';
import { LayoutComponent } from '@core/ui/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'chronicles',
        loadComponent: () =>
          import('./core/ui/components/pages/chronicles/chronicles.component').then((c) => c.ChroniclesComponent),
      },

      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component').then((c) => c.NotFoundComponent),
      },
    ],
  },
];
