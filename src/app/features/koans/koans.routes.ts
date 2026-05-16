import type { Routes } from '@angular/router';
import { MARKED_EXTENSIONS, provideMarkdown } from 'ngx-markdown';

import { KoansPageComponent } from '@features/koans/ui/koans-page/koans-page.component';
import { KoansFacade } from '@features/koans/data/facades/koans.facade';
import { KoansStore } from '@features/koans/data/store/koans.store';
import { koanHeadingExtension, koanMarkedExtensions } from '@features/koans/koan-marked-extensions';

const koansProviders = [
  KoansStore,
  KoansFacade,
  provideMarkdown({
    markedExtensions: [
      { provide: MARKED_EXTENSIONS, useValue: koanMarkedExtensions, multi: true },
      { provide: MARKED_EXTENSIONS, useValue: koanHeadingExtension, multi: true },
    ],
  }),
];

export const KOANS_ROUTES: Routes = [
  {
    path: '',
    component: KoansPageComponent,
    providers: koansProviders,
  },
  {
    path: ':slug',
    component: KoansPageComponent,
    providers: koansProviders,
  },
];
