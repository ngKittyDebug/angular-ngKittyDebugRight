import type { Routes } from '@angular/router';

import { KoansPageComponent } from '@features/koans/ui/components/koans-page/koans-page.component';
import { KoansFacade } from '@features/koans/data/facades/koans.facade';

export const KOANS_ROUTES: Routes = [
  {
    path: '',
    component: KoansPageComponent,
    providers: [KoansFacade],
  },
];
