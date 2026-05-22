import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiCardLarge, TuiCardMedium } from '@taiga-ui/layout';
import { TuiAppearance, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'ngKitty-profile',
  imports: [TuiAppearance, TuiCardMedium, TuiCardLarge, TuiAvatar, TuiTitle, TuiIcon],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
