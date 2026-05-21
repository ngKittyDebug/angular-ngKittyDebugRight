import type { Routes } from '@angular/router';
import { LayoutComponent } from '@core/ui/components/layout/layout.component';
import { provideTranslocoScope } from '@jsverse/transloco';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'shrift',
        loadComponent: () => import('./features/shrift/shrift.component').then((c) => c.ShriftComponent),
        providers: [provideTranslocoScope('shrift')],
      },
      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component').then((c) => c.NotFoundComponent),
        providers: [provideTranslocoScope('not-found')],
      },
    ],
  },
];
