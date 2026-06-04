import { Component, computed, input, output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'ngKitty-shrift-item',
  imports: [TuiButton, TranslocoPipe],
  templateUrl: './shrift-item.component.html',
  styleUrl: './shrift-item.component.scss',
})
export class ShriftItemComponent {
  public readonly severity = input<string>();
  public readonly status = input<string>();
  public readonly clicked = output<void>();

  protected readonly statusClass = computed(() => {
    return 'status ' + this.status();
  });

  protected readonly severityClass = computed(() => {
    return 'level ' + this.severity();
  });

  protected readonly statusTranslateKey = computed(() => {
    return 'shrift.status.' + this.status();
  });

  protected readonly severityTranslateKey = computed(() => {
    return 'shrift.severity.' + this.severity();
  });
}
