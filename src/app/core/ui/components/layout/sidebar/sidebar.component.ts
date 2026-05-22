import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';
import { NavigationItemComponent } from '@core/ui/components/layout/sidebar/navigation-item/navigation-item.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'ngKitty-sidebar',
<<<<<<< HEAD
  imports: [NavigationItemComponent, TuiAvatar, RouterLink, TranslocoModule],
=======
<<<<<<< HEAD
  imports: [TuiAsideComponent, TranslocoModule, NavigationItemComponent, TuiAvatar, RouterLink],
=======
  imports: [NavigationItemComponent, TuiAvatar, RouterLink, TranslocoModule],
>>>>>>> 05d96de (feat: add achevements section)
>>>>>>> 0ee8d8f (feat: add achevements section)
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public readonly navigationItemList = input.required<NavigationItem[]>();
  public readonly isMobileOpen = input(false);
}