import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import type { NavigationItem } from '../../models/navigation-item.model';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'ngKitty-navigation-item',
  imports: [TuiButton, TuiIcon],
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent {
  private readonly router = inject(Router);

  @Input({ required: true }) public item!: NavigationItem;
  @Output() public readonly itemSelected = new EventEmitter<NavigationItem>();

  public isActive = false;
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.checkActive();
    });

    this.checkActive();
  }

  public onClick(): void {
    this.itemSelected.emit(this.item);
    this.router.navigate([this.item.url]);
  }

  private checkActive(): void {
    this.isActive = this.router.isActive(this.item.url, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
