import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiMainComponent } from '@taiga-ui/layout';
import { FooterComponent } from '@core/ui/components/layout/footer/footer.component';
import { SidebarComponent } from '@core/ui/components/layout/sidebar/sidebar.component';
import { LayoutService } from '@core/services/layout/layout.service';
import { NAVIGATION_ITEM_LIST } from '@core/ui/components/layout/constants/navigation-item-list.config';

@Component({
  selector: 'ngKitty-layout',
  imports: [RouterOutlet, TuiMainComponent, FooterComponent, SidebarComponent, TuiButton, TuiIcon],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  protected readonly layoutService = inject(LayoutService);
  protected readonly navigationItemList = NAVIGATION_ITEM_LIST;
  protected isMobileNavOpen = this.layoutService.isMobileNavOpen;

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
