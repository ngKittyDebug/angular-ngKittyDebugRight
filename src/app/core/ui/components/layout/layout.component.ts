import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { FooterComponent } from '@core/ui/components/layout/footer/footer.component';
import { SidebarComponent } from '@core/ui/components/layout/sidebar/sidebar.component';
import { LayoutService } from '@core/services/layout/layout.service';
import { HeaderComponent } from '@core/ui/components/layout/header/header.component';
import { TuiMainComponent } from '@taiga-ui/layout';
import { LayoutFacade } from './facades/layout.facade';

@Component({
  selector: 'ngKitty-layout',
  imports: [RouterOutlet, FooterComponent, SidebarComponent, TuiButton, TuiIcon, HeaderComponent, TuiMainComponent],
  providers: [LayoutFacade],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  protected readonly layoutService = inject(LayoutService);
  protected readonly isMobileNavOpen = this.layoutService.isMobileNavOpen;
  protected readonly facade = inject(LayoutFacade);
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
