import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { TuiButton } from '@taiga-ui/core';

import type { KoanModel } from '@features/koans/data/models/koan.model';

@Component({
  selector: 'ngKitty-koan-widget',
  imports: [MarkdownComponent, TuiButton],
  templateUrl: './koan-widget.component.html',
  styleUrl: './koan-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanWidgetComponent {
  public readonly koan = input<KoanModel | null>(null);
  public readonly loading = input<boolean>(false);
  public readonly next = output<void>();

  protected readonly onNext = (): void => {
    this.next.emit();
  };
}
