import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { TuiAutoColorPipe, TuiAvatar, TuiAvatarStack } from '@taiga-ui/kit';

@Component({
  selector: 'header-component',
  imports: [TuiTitle, TuiHeader, TuiButton, TuiIcon, TuiAutoColorPipe, TuiAvatar, TuiAvatarStack, TuiCardLarge],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly title = 'Cult Of The Holy Deploy';
  protected readonly subtitle = '>> "Machine Spirit is unstable"<<';

  protected readonly url = 'https://avatars.githubusercontent.com/u/70115541';
}
