import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

const VISIBLE_TAG_COUNT = 18;

@Component({
  selector: 'ngKitty-koan-tag-cloud',
  imports: [TranslocoModule],
  templateUrl: './koan-tag-cloud.component.html',
  styleUrl: './koan-tag-cloud.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanTagCloudComponent {
  public readonly tagCounts = input<readonly (readonly [string, number])[]>([]);
  public readonly activeTags = input<ReadonlySet<string>>(new Set());

  public readonly tagToggle = output<string>();

  protected readonly tagsExpanded = signal(false);

  protected readonly visibleTags = computed(() => {
    const tags = this.tagCounts();

    return this.tagsExpanded() ? tags : tags.slice(0, VISIBLE_TAG_COUNT);
  });

  protected readonly hiddenTagCount = computed(() => Math.max(0, this.tagCounts().length - VISIBLE_TAG_COUNT));

  protected onTag(tag: string): void {
    this.tagToggle.emit(tag);
  }

  protected toggleTagsExpanded(): void {
    this.tagsExpanded.update((v) => !v);
  }
}
