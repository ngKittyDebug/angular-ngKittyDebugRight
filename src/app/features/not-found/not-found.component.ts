import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'ngKitty-not-found',
  imports: [TuiButton, TuiIcon],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  private readonly router = inject(Router);

  protected onClick() {
    this.router.navigate(['/']);
  }
}
