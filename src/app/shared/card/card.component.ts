import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiSurface } from '@taiga-ui/layout';

@Component({
  selector: 'ngKitty-card',
  imports: [TuiCardLarge, TuiIcon, TuiSurface, TuiTitle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  public readonly title = input<string>();
  public readonly subtitle = input<string>();
  public readonly decryption = input<string>();
  public readonly icon = input<string>();
}
