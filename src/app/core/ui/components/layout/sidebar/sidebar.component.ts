import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';
import { NavigationItemComponent } from '@core/ui/components/layout/sidebar/navigation-item/navigation-item.component';
import { TranslocoModule } from '@jsverse/transloco';
import { inject } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { computed } from '@angular/core';

@Component({
  selector: 'ngKitty-sidebar',
  imports: [TranslocoModule, NavigationItemComponent, TuiAvatar, RouterLink, TuiButton, TuiIcon, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private readonly router = inject(Router);
  public readonly navigationItemList = input.required<NavigationItem[]>();
  public readonly isMobileOpen = input(false);
  public readonly filteredNavigationItems = computed<NavigationItem[]>(() => {
    const isAuth = this.authService.isAuthenticated();

    return this.navigationItemList().filter((item) => {
      if (isAuth && item.guestOnly) {
        return false;
      }

      return true;
    });
  });

  protected readonly authService = inject(AuthService);

  protected async onLogout(): Promise<void> {
    await this.authService.logout();
    await this.router.navigate(['/login']);
  }
  public readonly navItemClicked = output<void>();
}
