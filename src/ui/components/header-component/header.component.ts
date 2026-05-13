import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [TuiTitle, TuiHeader, TuiButton, TuiIcon, TuiAvatar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly title = 'Cult Of The Holy Deploy';
  protected readonly subtitle = '>> "Machine Spirit is unstable"<<';

  protected readonly sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-l', 'body-m', 'body-s'] as const;
}
