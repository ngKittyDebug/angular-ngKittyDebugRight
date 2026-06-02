import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShriftPageFacade } from '@features/shrift/facades/shrift-page.facade';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiButton, TuiRadio, TuiTextfieldComponent } from '@taiga-ui/core';
import { TuiBlock, TuiFade, TuiTextarea } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm } from '@taiga-ui/layout';

@Component({
  selector: 'ngKitty-confess',
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiCardLarge,
    TuiForm,
    TuiTextfieldComponent,
    TuiTextarea,
    TranslocoPipe,
    TuiBlock,
    TuiFade,
    TuiRadio,
  ],
  templateUrl: './confess.component.html',
  styleUrl: './confess.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfessComponent {
  public shriftFacade = inject(ShriftPageFacade);
  public confessForm = this.shriftFacade.confessForm;
}
