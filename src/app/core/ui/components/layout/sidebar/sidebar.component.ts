import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';
import { NavigationItemComponent } from '@core/ui/components/layout/sidebar/navigation-item/navigation-item.component';
import { TranslocoModule } from '@jsverse/transloco';
import type { User } from '@netlify/identity';

@Component({
  selector: 'ngKitty-sidebar',
  imports: [TranslocoModule, NavigationItemComponent, TuiAvatar, RouterLink, TuiButton, TuiIcon, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public readonly navigationItemList = input.required<NavigationItem[]>();
  public readonly isMobileOpen = input(false);

  public readonly navItemClicked = output<void>();
  public readonly logoutClicked = output<void>();
  public readonly user = input<User | null>(null);
}
