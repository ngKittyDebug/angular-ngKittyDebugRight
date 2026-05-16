import { TuiRoot } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiCard } from '@taiga-ui/layout';
import { HeaderComponent } from 'src/ui/components/layout/header/header-component/header.component';

@Component({
  selector: 'ngKitty-app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiCard, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
