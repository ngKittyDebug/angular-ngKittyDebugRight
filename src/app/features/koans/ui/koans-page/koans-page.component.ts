import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KoansFacade } from '@features/koans/data/facades/koans.facade';
import { KoanWidgetComponent } from './koan-widget/koan-widget.component';
import { KoanListComponent } from './koan-list/koan-list.component';
import { KoanReaderComponent } from './koan-reader/koan-reader.component';

@Component({
  selector: 'ngKitty-koans-page',
  imports: [KoanWidgetComponent, KoanListComponent, KoanReaderComponent],
  templateUrl: './koans-page.component.html',
  styleUrl: './koans-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoansPageComponent implements OnInit {
  private readonly router = inject(Router);
  protected readonly store = inject(KoansFacade);
  protected readonly slug = input<string | null>(null);
  protected readonly listOpen = signal(true);

  constructor() {
    effect(() => {
      const slug = this.slug();

      if (slug) {
        this.store.selectKoan(slug);
        this.listOpen.set(false);
      }
    });
  }

  public ngOnInit(): void {
    this.store.loadRandomKoan(null);
    this.store.loadKoanList();
  }

  protected readonly onKoanSelect = (slug: string): void => {
    this.listOpen.set(false);
    void this.router.navigate(['/koans', slug]);
  };

  protected readonly onToggleList = (): void => {
    this.listOpen.update((open) => !open);
  };

  protected readonly onNextKoan = (): void => {
    this.store.loadRandomKoan(this.store.randomKoan()?.slug ?? null);
  };
}
