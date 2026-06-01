import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';
import { NavigationItemComponent } from '@core/ui/components/layout/sidebar/navigation-item/navigation-item.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'ngKitty-sidebar',
  imports: [TranslocoModule, NavigationItemComponent, TuiAvatar, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public readonly navigationItemList = input.required<NavigationItem[]>();
  public readonly isMobileOpen = input(false);
  public readonly navItemClicked = output<void>();
}
