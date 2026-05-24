import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';

@Component({
  selector: 'ngKitty-koan-category-filter',
  imports: [TranslocoModule],
  templateUrl: './koan-category-filter.component.html',
  styleUrl: './koan-category-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanCategoryFilterComponent {
  public readonly categories = input<readonly KoanCategoryMeta[]>([]);
  public readonly categoryCounts = input<ReadonlyMap<string, number>>(new Map());
  public readonly activeCategory = input<Nullable<string>>(null);
  public readonly totalCount = input<number>(0);

  public readonly categoryToggle = output<Nullable<string>>();

  protected onCategory(category: Nullable<string>): void {
    this.categoryToggle.emit(category);
  }
}
