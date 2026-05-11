import { TuiButton, TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiCard } from '@taiga-ui/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiButton, TuiButton, TuiCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
