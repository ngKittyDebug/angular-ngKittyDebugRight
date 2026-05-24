import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';
import { NavigationItemComponent } from '@core/ui/components/layout/sidebar/navigation-item/navigation-item.component';
import { TranslocoModule } from '@jsverse/transloco';
import { AuthService } from '@core/services/auth/auth.service';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'ngKitty-sidebar',
  imports: [NavigationItemComponent, TranslocoModule, TuiButton],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public readonly navigationItemList = input.required<NavigationItem[]>();
  public readonly isMobileOpen = input(false);
  protected readonly authService = inject(AuthService);
}
