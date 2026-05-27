import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiAppearance, TuiIcon } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'ngKitty-profile',
  imports: [TuiAppearance, TuiCardLarge, TuiAvatar, TuiIcon, TranslocoPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
