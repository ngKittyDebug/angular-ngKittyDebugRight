import { computed, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { NAVIGATION_ITEM_LIST } from '@core/ui/components/layout/constants/navigation-item-list.config';

@Injectable()
export class LayoutFacade {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public readonly filteredNavigationItems = computed(() => {
    const isAuth = this.authService.isAuthenticated();

    return NAVIGATION_ITEM_LIST.filter((item) => {
      return !(isAuth && item.guestOnly);
    });
  });

  public readonly user = this.authService.user;

  public async logout(): Promise<void> {
    await this.authService.logout();
    await this.router.navigate(['/login']);
  }
}
