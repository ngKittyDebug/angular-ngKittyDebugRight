import type { Routes } from '@angular/router';
import { LayoutComponent } from '@core/ui/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },
];
