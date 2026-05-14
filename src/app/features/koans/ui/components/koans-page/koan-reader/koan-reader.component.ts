import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

import type { KoanModel } from '@features/koans/data/models/koan.model';

@Component({
  selector: 'ngKitty-koan-reader',
  imports: [MarkdownComponent],
  templateUrl: './koan-reader.component.html',
  styleUrl: './koan-reader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanReaderComponent {
  public readonly koan = input<KoanModel | null>(null);
}
