import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'ngKitty-shrift-item',
  imports: [TuiButton, TranslocoPipe],
  templateUrl: './shrift-item.component.html',
  styleUrl: './shrift-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShriftItemComponent {
  public readonly text = input<string>();
  public readonly severity = input<string>();
  public readonly status = input<string>();
  public readonly clicked = output<void>();
}
