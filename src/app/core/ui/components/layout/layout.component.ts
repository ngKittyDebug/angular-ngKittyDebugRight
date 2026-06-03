import { afterNextRender, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { FooterComponent } from '@core/ui/components/layout/footer/footer.component';
import { SidebarComponent } from '@core/ui/components/layout/sidebar/sidebar.component';
import { LayoutService } from '@core/services/layout/layout.service';
import { NAVIGATION_ITEM_LIST } from '@core/ui/components/layout/constants/navigation-item-list.config';
import { HeaderComponent } from '@core/ui/components/layout/header/header.component';
import { TuiMainComponent } from '@taiga-ui/layout';

@Component({
  selector: 'ngKitty-layout',
  imports: [RouterOutlet, FooterComponent, SidebarComponent, TuiButton, TuiIcon, HeaderComponent, TuiMainComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  protected readonly layoutService = inject(LayoutService);
  protected readonly navigationItemList = NAVIGATION_ITEM_LIST;
  protected readonly isMobileNavOpen = this.layoutService.isMobileNavOpen;

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
}
