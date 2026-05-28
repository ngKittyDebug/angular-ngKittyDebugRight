import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShriftItemComponent } from './components/shrift-item/shrift-item.component';
import { SINS } from './mocs/sins-data';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ConfessComponent } from './components/confess/confess.component';
import type { Sin } from './models/sin.model';

@Component({
  selector: 'ngKitty-shrift',
  imports: [ShriftItemComponent, ConfessComponent, TranslocoPipe],
  templateUrl: './shrift.component.html',
  styleUrl: './shrift.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShriftComponent {
  protected readonly sinsData: Sin[] = SINS;
  protected readonly translocoService = inject(TranslocoService);
}
