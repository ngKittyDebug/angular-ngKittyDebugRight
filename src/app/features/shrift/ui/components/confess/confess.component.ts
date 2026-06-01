import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiButton } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper, TuiSelect, TuiTextarea } from '@taiga-ui/kit';

@Component({
  selector: 'ngKitty-confess',
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiTextarea,
    TranslocoPipe,
    FormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
  ],
  templateUrl: './confess.component.html',
  styleUrl: './confess.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfessComponent {
  protected control = new FormControl('rf.cm d cdjb[ uht[f[');
  protected severities = ['critical', 'medium', 'low'];
  protected value = 'critical';
}
