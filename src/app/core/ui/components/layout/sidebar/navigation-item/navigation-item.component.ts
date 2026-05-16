import type { OnChanges, SimpleChanges } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import type { NavigationItem } from '../../models/navigation-item.model';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ngKitty-navigation-item',
  imports: [TuiButton, TuiIcon],
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent implements OnChanges {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  @Input({ required: true }) public item!: NavigationItem;
  @Output() public readonly itemSelected = new EventEmitter<NavigationItem>();

  public isActive = false;

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.checkActive();
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.checkActive();
    }
  }

  public onClick(): void {
    this.itemSelected.emit(this.item);
    this.router.navigate([this.item.url]);
  }

  private checkActive(): void {
    if (!this.item?.url) {
      this.isActive = false;

      return;
    }

    this.isActive = this.router.url === this.item.url;
  }
}
