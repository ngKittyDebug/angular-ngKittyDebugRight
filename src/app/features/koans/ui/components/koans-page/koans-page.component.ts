import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import type { OnInit } from '@angular/core';

import { KoansStore } from '@features/koans/data/facades/koans.facade';
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
  protected readonly store = inject(KoansStore);

  public ngOnInit(): void {
    this.store.loadRandomKoan();
    this.store.loadKoanList();
  }

  protected readonly onKoanSelect = (slug: string): void => {
    this.store.selectKoan(slug);
  };

  protected readonly onNextKoan = (): void => {
    this.store.loadRandomKoan();
  };
}
