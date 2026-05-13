import { TuiButton, TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiCard } from '@taiga-ui/layout';
import { HeaderComponent } from 'src/ui/components/header-component/header.component';

@Component({
  selector: 'ngKitty-app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiCard, HeaderComponent],
import { FooterComponent } from '@core/layout/footer/footer.component';

@Component({
  selector: 'ngKitty-app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiCard, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
