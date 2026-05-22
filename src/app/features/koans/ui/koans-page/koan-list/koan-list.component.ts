import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';
import type { KoanGroup } from '@features/koans/data/models/koan-group.model';

const VISIBLE_TAG_COUNT = 18;
const OTHER_META = { label: 'Прочее', kanji: '他' } as const;

@Component({
  selector: 'ngKitty-koan-list',
  imports: [TranslocoModule],
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

  protected readonly tagsExpanded = signal(false);

  protected readonly visibleTags = computed(() => {
    const tags = this.tagCounts();

    return this.tagsExpanded() ? tags : tags.slice(0, VISIBLE_TAG_COUNT);
  });

  protected readonly hiddenTagCount = computed(() => Math.max(0, this.tagCounts().length - VISIBLE_TAG_COUNT));

  protected groupMeta(group: string): { label: string; kanji: string } {
    if (group === 'other') {
      return OTHER_META;
    }

    const meta = this.categories().find((c) => c.id === group);

    return meta ?? { label: group, kanji: '·' };
  }

  protected padNumber(n: number): string {
    return String(n).padStart(2, '0');
  }

  protected onSelect(slug: string): void {
    this.koanSelect.emit(slug);
  }

  protected onCategory(category: Nullable<string>): void {
    this.categoryToggle.emit(category);
  }

  protected onTag(tag: string): void {
    this.tagToggle.emit(tag);
  }

  protected toggleTagsExpanded(): void {
    this.tagsExpanded.update((v) => !v);
  }
}
