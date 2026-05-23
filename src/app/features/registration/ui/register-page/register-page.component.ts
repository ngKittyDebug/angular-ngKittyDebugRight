import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RegisterPageFacade } from '@features/registration/facades/register-page.facade';
import { TuiInputPin, TuiPassword } from '@taiga-ui/kit';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  TuiButton,
  TuiErrorComponent,
  TuiIcon,
  TuiInputDirective,
  TuiLoader,
  tuiLoaderOptionsProvider,
} from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { TuiCardLarge, TuiForm } from '@taiga-ui/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { VALIDATION_ERRORS_DICT } from '@shared/dictionaries/validation-errors.dictionary';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngKitty-register-page',
  imports: [
    TuiInputPin,
    TranslocoPipe,
    TuiInputDirective,
    TuiPassword,
    TuiButton,
    TuiLoader,
    RouterLink,
    TuiIcon,
    TuiCardLarge,
    TuiForm,
    TuiErrorComponent,
    ReactiveFormsModule,
  ],
  providers: [tuiLoaderOptionsProvider({ size: 'm' })],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  protected readonly registerPageFacade = inject(RegisterPageFacade);
  protected readonly form = this.registerPageFacade.registerForm;
  protected readonly isLoading = this.registerPageFacade.isLoading;
  protected readonly validationErrors = VALIDATION_ERRORS_DICT;
}
