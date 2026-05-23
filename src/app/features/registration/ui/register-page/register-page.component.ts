import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RegisterPageFacade } from '@features/registration/facades/register-page.facade';
import { TuiInputPin, TuiPassword } from '@taiga-ui/kit';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  TuiButton,
  TuiDateFormat,
  TuiIcon,
  TuiInputDirective,
  TuiLoader,
  tuiLoaderOptionsProvider,
} from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { FormField } from '@angular/forms/signals';
import { TuiCardLarge, TuiForm } from '@taiga-ui/layout';

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
    FormField,
    TuiCardLarge,
    TuiForm,
    TuiDateFormat,
  ],
  providers: [tuiLoaderOptionsProvider({ size: 'm' })],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  public readonly registerPageFacade = inject(RegisterPageFacade);
  public readonly form = this.registerPageFacade.registerForm;
  public readonly isLoading = this.registerPageFacade.isLoading;
}
