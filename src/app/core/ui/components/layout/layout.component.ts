import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { afterNextRender, Component, inject } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { FooterComponent } from '@core/ui/components/layout/footer/footer.component';
import { SidebarComponent } from '@core/ui/components/layout/sidebar/sidebar.component';
import { LayoutService } from '@core/services/layout/layout.service';
import { HeaderComponent } from '@core/ui/components/layout/header/header.component';
import { TuiMainComponent } from '@taiga-ui/layout';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'ngKitty-layout',
  imports: [
    RouterOutlet,
    FooterComponent,
    SidebarComponent,
    TuiButton,
    TuiIcon,
    HeaderComponent,
    TuiMainComponent,
    RouterLink,
    RouterLinkActive,
    TranslocoPipe,
    TuiAvatar,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  protected readonly layoutService = inject(LayoutService);
  protected readonly isMobileNavOpen = this.layoutService.isMobileNavOpen;
  protected readonly filteredNavigationItems = this.layoutService.filteredNavigationItems;
  protected readonly user = this.layoutService.user;

  constructor() {
    afterNextRender(() => {
      this.layoutService.watchMobileNavMediaQuery();
    });
  }

  public onCloseMobileNav() {
    this.layoutService.onCloseMobileNav();
  }

  public onToggleMobileNav() {
    this.layoutService.onToggleMobileNav();
  }

  public async onLogout() {
    await this.layoutService.logout();
  }
}
