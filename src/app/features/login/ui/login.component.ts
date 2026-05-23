import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiButton,
  TuiError,
  TuiIcon,
  TuiInput,
  TuiLabel,
  TuiLoader,
  tuiLoaderOptionsProvider,
  TuiTextfieldComponent,
} from '@taiga-ui/core';
import { TuiPassword } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm } from '@taiga-ui/layout';
import { TranslocoModule } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';
import { LoginPageFacade } from '../facades/login-page.facade';

@Component({
  selector: 'ngKitty-login',
  imports: [
    ReactiveFormsModule,
    TuiTextfieldComponent,
    TuiButton,
    TuiInput,
    TuiLabel,
    TuiIcon,
    TuiPassword,
    TuiCardLarge,
    TuiForm,
    TranslocoModule,
    RouterLink,
    TuiError,
    TuiLoader,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginPageFacade, tuiLoaderOptionsProvider({ size: 's' })],
})
export class LoginComponent {
  protected readonly facade = inject(LoginPageFacade);
}
