import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TuiTitle, TuiHeader],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly title = signal('Cult Of The Holy Deploy');
  protected readonly subtitle = signal('>> "Machine Spirit is unstable"<<');

  protected readonly sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-l', 'body-m', 'body-s'] as const;
}
