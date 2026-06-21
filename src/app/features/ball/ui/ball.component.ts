import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiIcon } from '@taiga-ui/core';
import { WisdomComponent } from './wisdom/wisdom.component';

@Component({
  selector: 'ngKitty-ball',
  imports: [TranslocoPipe, TuiIcon, WisdomComponent],
  templateUrl: './ball.component.html',
  styleUrl: './ball.component.scss',
})
export class BallComponent {}
