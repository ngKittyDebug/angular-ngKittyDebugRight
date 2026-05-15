import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

import type { KoanModel } from '@features/koans/data/models/koan.model';

@Component({
  selector: 'ngKitty-koan-widget',
  imports: [TuiButton],
  templateUrl: './koan-widget.component.html',
  styleUrl: './koan-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanWidgetComponent {
  public readonly koan = input<KoanModel | null>(null);
  public readonly loading = input<boolean>(false);
  public readonly next = output<void>();

  public readonly question = computed<string | null>(() => {
    const body = this.koan()?.body;

    if (!body) {
      return null;
    }

    const match = new RegExp(/<Question>(.*?)<\/Question>/s).exec(body);

    return match?.[1] ?? null;
  });

  protected readonly onNext = (): void => {
    this.next.emit();
  };
}
