import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { formatKoanNumber } from '@features/koans/data/utils/format-koan-number';

import type { KoanCategoryMeta } from '@features/koans/data/models/koan-category.model';
import type { KoanGroup } from '@features/koans/data/models/koan-group.model';

const OTHER_KANJI = '他';

interface GroupMeta {
  label: string;
  kanji: string;
}

@Component({
  selector: 'ngKitty-koan-group-list',
  imports: [TranslocoModule],
  templateUrl: './koan-group-list.component.html',
  styleUrl: './koan-group-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanGroupListComponent {
  private readonly transloco = inject(TranslocoService);
  private readonly otherLabel = toSignal(this.transloco.selectTranslate<string>('koans.category-other'), {
    initialValue: '',
  });

  public readonly groups = input<readonly KoanGroup[]>([]);
  public readonly categories = input<readonly KoanCategoryMeta[]>([]);
  public readonly readSet = input<ReadonlySet<string>>(new Set());
  public readonly selectedSlug = input<Nullable<string>>(null);
  public readonly filteredCount = input<number>(0);
  public readonly query = input<string>('');

  public readonly koanSelect = output<string>();

  protected groupMeta(group: string): GroupMeta {
    if (group === 'other') {
      return { label: this.otherLabel(), kanji: OTHER_KANJI };
    }

    const meta = this.categories().find((c) => c.id === group);

    return meta ?? { label: group, kanji: '·' };
  }

  protected padNumber(n: number): string {
    return formatKoanNumber(n, 2);
  }

  protected onSelect(slug: string): void {
    this.koanSelect.emit(slug);
  }
}
