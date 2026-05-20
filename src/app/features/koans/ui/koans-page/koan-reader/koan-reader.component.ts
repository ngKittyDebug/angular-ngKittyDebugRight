import { ChangeDetectionStrategy, Component, effect, input, output, viewChild } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

import { KOAN_CATEGORIES } from '@features/koans/data/models/koan-category.model';

import type { ElementRef } from '@angular/core';
import type { KoanCategory } from '@features/koans/data/models/koan-category.model';
import type { KoanModel } from '@features/koans/data/models/koan.model';

@Component({
  selector: 'ngKitty-koan-reader',
  imports: [MarkdownComponent],
  templateUrl: './koan-reader.component.html',
  styleUrl: './koan-reader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanReaderComponent {
  private readonly regionRef = viewChild<ElementRef<HTMLElement>>('readerRegion');

  public readonly koan = input<KoanModel | null>(null);
  public readonly loading = input<boolean>(false);
  public readonly hasPrev = input<boolean>(false);
  public readonly hasNext = input<boolean>(false);

  public readonly tagClick = output<string>();
  public readonly prev = output<void>();
  public readonly next = output<void>();
  public readonly share = output<void>();

  constructor() {
    effect(() => {
      this.koan();
      this.regionRef()?.nativeElement.scrollTo?.({ top: 0, behavior: 'instant' });
    });
  }

  protected categoryLabel(id: KoanCategory | undefined): string | null {
    if (!id) {
      return null;
    }

    return KOAN_CATEGORIES.find((c) => c.id === id)?.label ?? id;
  }

  protected padNumber(n: number): string {
    return String(n).padStart(3, '0');
  }

  protected onTag(tag: string): void {
    this.tagClick.emit(tag);
  }

  protected onPrev(): void {
    this.prev.emit();
  }

  protected onNext(): void {
    this.next.emit();
  }

  protected onShare(): void {
    this.share.emit();
  }
}
