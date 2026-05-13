import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiAutoColorPipe, TuiAvatar, TuiAvatarStack } from '@taiga-ui/kit';
import { TuiCardMedium } from '@taiga-ui/layout';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [TuiTitle, TuiHeader, TuiButton, TuiIcon, TuiAutoColorPipe, TuiAvatar, TuiAvatarStack, TuiCardMedium],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly title = 'Cult Of The Holy Deploy';
  protected readonly subtitle = '>> "Machine Spirit is unstable"<<';

  protected readonly url = 'https://avatars.githubusercontent.com/u/70115541';
}
