import { TuiButton, TuiRoot } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiCard } from '@taiga-ui/layout';

@Component({
  selector: 'ngKitty-app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiButton, TuiCard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
