import { TuiButton, TuiRoot } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiCard } from '@taiga-ui/layout';
import { FooterComponent } from '@core/layout/footer/footer.component';

@Component({
  selector: 'ngKitty-app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiCard, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
