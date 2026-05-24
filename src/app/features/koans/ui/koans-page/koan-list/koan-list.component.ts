import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

import { KoansStore } from '@features/koans/data/store/koans.store';
import { KoanCategoryFilterComponent } from './koan-category-filter/koan-category-filter.component';
import { KoanGroupListComponent } from './koan-group-list/koan-group-list.component';
import { KoanTagCloudComponent } from './koan-tag-cloud/koan-tag-cloud.component';

@Component({
  selector: 'ngKitty-koan-list',
  imports: [TranslocoModule, KoanCategoryFilterComponent, KoanTagCloudComponent, KoanGroupListComponent],
  templateUrl: './koan-list.component.html',
  styleUrl: './koan-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanListComponent {
  public readonly koanSelect = output<string>();

  protected readonly store = inject(KoansStore);

  protected onCategoryToggle(category: Nullable<string>): void {
    this.store.toggleCategory(category);
  }

  protected onTagToggle(tag: string): void {
    this.store.toggleTag(tag);
  }
}
