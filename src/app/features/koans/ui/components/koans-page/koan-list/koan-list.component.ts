import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import type { KoanListItemModel } from '@features/koans/data/models/koan.model';

@Component({
  selector: 'ngKitty-koan-list',
  templateUrl: './koan-list.component.html',
  styleUrl: './koan-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanListComponent {
  public readonly koanList = input<KoanListItemModel[]>([]);
  public readonly selectedSlug = input<string | null>(null);
  public readonly koanSelect = output<string>();

  protected readonly onSelect = (slug: string): void => {
    this.koanSelect.emit(slug);
  };
}
