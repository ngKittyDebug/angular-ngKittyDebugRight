import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RegisterPageFacade } from '@features/registration/facades/register-page.facade';
import { TuiInputDate, tuiInputDateOptionsProvider, TuiPassword } from '@taiga-ui/kit';
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
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '@shared/constants/password-length';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngKitty-register-page',
  imports: [
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
    ...TuiInputDate,
  ],
  providers: [
    tuiLoaderOptionsProvider({ size: 'm' }),
    tuiInputDateOptionsProvider({
      valueTransformer: {
        fromControlValue: (value: Date | null): TuiDay | null => value && TuiDay.fromUtcNativeDate(value),
        toControlValue: (value: TuiDay | null): Date | null => value?.toUtcNativeDate() || null,
      },
    }),
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  private readonly registerPageFacade = inject(RegisterPageFacade);
  public readonly form = this.registerPageFacade.registerForm;
  protected readonly isLoading = this.registerPageFacade.isLoading;
  protected readonly validationErrors = VALIDATION_ERRORS_DICT;
  protected readonly passwordHints = {
    minLength: PASSWORD_MIN_LENGTH,
    maxLength: PASSWORD_MAX_LENGTH,
  } as const;

  protected onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    void this.registerPageFacade.signup();
  }
}
