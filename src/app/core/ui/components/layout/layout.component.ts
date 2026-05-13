import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiMainComponent } from '@taiga-ui/layout';
import { FooterComponent } from '@core/ui/components/layout/footer/footer.component';
import { SidebarComponent } from '@core/ui/components/layout/sidebar/sidebar.component';
import { navigationItemListConfig } from '@core/ui/components/layout/sidebar/constants/navigation-item-list.config';

@Component({
  selector: 'ngKitty-layout',
  imports: [RouterOutlet, TuiMainComponent, FooterComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  protected readonly navigationItemList = navigationItemListConfig;
}
