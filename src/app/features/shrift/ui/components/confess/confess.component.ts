import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShriftPageFacade } from '@features/shrift/facades/shrift-page.facade';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiButton, TuiGroup, TuiRadio } from '@taiga-ui/core';
import { TuiBlock, TuiDataListWrapper, TuiFade, TuiSelect, TuiTextarea } from '@taiga-ui/kit';

@Component({
  selector: 'ngKitty-confess',
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiTextarea,
    TranslocoPipe,
    FormsModule,
    TuiDataListWrapper,
    TuiSelect,
    TuiBlock,
    TuiFade,
    TuiGroup,
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
