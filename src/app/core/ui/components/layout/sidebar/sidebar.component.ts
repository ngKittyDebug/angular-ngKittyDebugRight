import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TuiAsideComponent, TuiAsideItemDirective } from '@taiga-ui/layout';
import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';

@Component({
  selector: 'ngKitty-sidebar',
  imports: [TuiAsideComponent, TuiAsideItemDirective, TuiIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public readonly navigationItemList = input.required<NavigationItem[]>();
  public readonly isMobileOpen = input(false);
}
