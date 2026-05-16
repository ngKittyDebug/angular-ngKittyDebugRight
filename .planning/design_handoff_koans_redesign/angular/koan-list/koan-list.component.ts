import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

import type { KoanCategory, KoanListItemModel } from '@features/koans/data/models/koan.model';
import { KOAN_CATEGORIES } from '@features/koans/data/models/koan.model';

export interface KoanListGroup {
  category: KoanCategory | 'other';
  items: KoanListItemModel[];
}

@Component({
  selector: 'ngKitty-koan-list',
  templateUrl: './koan-list.component.html',
  styleUrl: './koan-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanListComponent {
  /** Categories with totals, used for the category filter rail. */
  public readonly categoryCounts = input<Map<KoanCategory, number>>(new Map());
  public readonly activeCategory = input<KoanCategory | null>(null);

  /** [tag, count][] — already sorted by frequency. */
  public readonly tagCounts = input<readonly (readonly [string, number])[]>([]);
  public readonly activeTags = input<readonly string[]>([]);

  /** Grouped filtered list (sidebar body). */
  public readonly groups = input<readonly KoanListGroup[]>([]);

  public readonly selectedSlug = input<string | null>(null);
  public readonly readSet = input<Set<string>>(new Set());

  public readonly totalCount = input<number>(0);
  public readonly filteredCount = input<number>(0);
  public readonly query = input<string>('');
  public readonly loading = input<boolean>(false);

  public readonly koanSelect = output<string>();
  public readonly categoryToggle = output<KoanCategory | null>();
  public readonly tagToggle = output<string>();

  protected readonly tagsExpanded = signal(false);
  protected readonly visibleTagCount = 18;
  protected readonly CATEGORY_META = KOAN_CATEGORIES;

  protected readonly visibleTags = computed(() => {
    const tags = this.tagCounts();
    return this.tagsExpanded() ? tags : tags.slice(0, this.visibleTagCount);
  });

  protected readonly hiddenTagCount = computed(() =>
    Math.max(0, this.tagCounts().length - this.visibleTagCount),
  );

  protected readonly activeTagSet = computed(() => new Set(this.activeTags()));

  protected categoryMeta(cat: KoanCategory | 'other'): { label: string; kanji: string } {
    if (cat === 'other') return { label: 'Прочее', kanji: '他' };
    return KOAN_CATEGORIES.find((c) => c.id === cat) ?? { label: cat, kanji: '·' };
  }

  protected padNumber(n: number): string {
    return String(n).padStart(2, '0');
  }

  protected onSelect(slug: string): void {
    this.koanSelect.emit(slug);
  }

  protected onCategory(cat: KoanCategory | null): void {
    this.categoryToggle.emit(cat);
  }

  protected onTag(tag: string): void {
    this.tagToggle.emit(tag);
  }

  protected toggleTagsExpanded(): void {
    this.tagsExpanded.update((v) => !v);
  }
}
