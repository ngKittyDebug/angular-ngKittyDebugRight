import { ChangeDetectionStrategy, Component, effect, input, viewChild } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

import type { ElementRef } from '@angular/core';
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

  constructor() {
    effect(() => {
      const koan = this.koan();
      const region = this.regionRef()?.nativeElement;

      if (koan && region) {
        region.focus();
      }
    });
  }
}
