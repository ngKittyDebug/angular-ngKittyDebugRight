import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

import { KoanCategoryFilterComponent } from './koan-category-filter/koan-category-filter.component';
import { KoanGroupListComponent } from './koan-group-list/koan-group-list.component';
import { KoanTagCloudComponent } from './koan-tag-cloud/koan-tag-cloud.component';

import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';
import type { KoanGroup } from '@features/koans/data/models/koan-group.model';

@Component({
  selector: 'ngKitty-koan-list',
  imports: [TranslocoModule, KoanCategoryFilterComponent, KoanTagCloudComponent, KoanGroupListComponent],
  templateUrl: './koan-list.component.html',
  styleUrl: './koan-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanListComponent {
  public readonly groups = input<readonly KoanGroup[]>([]);
  public readonly categories = input<readonly KoanCategoryMeta[]>([]);
  public readonly categoryCounts = input<ReadonlyMap<string, number>>(new Map());
  public readonly activeCategory = input<Nullable<string>>(null);
  public readonly tagCounts = input<readonly (readonly [string, number])[]>([]);
  public readonly activeTags = input<ReadonlySet<string>>(new Set());
  public readonly selectedSlug = input<Nullable<string>>(null);
  public readonly readSet = input<ReadonlySet<string>>(new Set());
  public readonly totalCount = input<number>(0);
  public readonly filteredCount = input<number>(0);
  public readonly query = input<string>('');
  public readonly loading = input<boolean>(false);

  public readonly koanSelect = output<string>();
  public readonly categoryToggle = output<Nullable<string>>();
  public readonly tagToggle = output<string>();
}
