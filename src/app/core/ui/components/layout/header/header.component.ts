import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { LanguageSwitcherComponent } from '@core/ui/components/language-switcher/language-switcher.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngKitty-header',
  imports: [TranslocoPipe, TuiTitle, TuiHeader, TuiButton, LanguageSwitcherComponent, TuiIcon, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
