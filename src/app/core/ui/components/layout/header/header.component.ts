import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { LanguageSwitcherComponent } from '@core/ui/components/language-switcher/language-switcher.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngKitty-header',
  imports: [TuiTitle, TuiHeader, TuiButton, LanguageSwitcherComponent, TuiIcon, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly title = 'Cult Of The Holy Deploy';
  protected readonly subtitle = '>> "Machine Spirit is unstable"<<';
  protected readonly url = 'https://avatars.githubusercontent.com/u/70115541';
}
