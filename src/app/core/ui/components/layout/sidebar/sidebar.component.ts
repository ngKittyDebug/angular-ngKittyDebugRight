import { Component, input, output } from '@angular/core';
import { NavigationItemComponent } from '@core/ui/components/layout/sidebar/navigation-item/navigation-item.component';
import type { NavigationItem } from '@core/ui/components/layout/models/navigation-item.model';
import { TranslocoPipe } from '@jsverse/transloco';
import { GhostCoderComponent } from '../../ghost-coder/ghost-coder.component';

@Component({
  selector: 'ngKitty-sidebar',
  imports: [NavigationItemComponent, TranslocoPipe, GhostCoderComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public readonly navigationItemList = input.required<NavigationItem[]>();
  public readonly isMobileOpen = input(false);
  public readonly navItemClicked = output<void>();
}
