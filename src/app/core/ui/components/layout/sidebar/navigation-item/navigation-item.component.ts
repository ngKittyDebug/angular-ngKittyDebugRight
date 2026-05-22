import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { NavigationItem } from '../../models/navigation-item.model';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'ngKitty-navigation-item',
  imports: [TuiButton, TuiIcon, RouterLink, RouterLinkActive, TranslocoModule],
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent {
  public readonly item = input.required<NavigationItem>();
  public readonly itemSelected = output<NavigationItem>();

  public onClick(): void {
    this.itemSelected.emit(this.item());
  }
}
