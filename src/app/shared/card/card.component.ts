import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'ngKitty-card',
  imports: [TuiIcon, TuiButton],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  public readonly icon = input<string>();
  public readonly title = input<string>();
  public readonly subtitle = input<string>();
  public readonly decryption = input<string>();
  public readonly buttonLabel = input<string>();
  public readonly badge = input<string>();

  public readonly buttonClick = output<void>();
}
