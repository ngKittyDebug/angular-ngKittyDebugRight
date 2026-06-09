import { Component } from '@angular/core';
import { EyeBlinkDirective } from './directives/eye-blink.directive';

@Component({
  selector: 'ngKitty-ghost-coder',
  imports: [EyeBlinkDirective],
  templateUrl: './ghost-coder.component.html',
  styleUrl: './ghost-coder.component.scss',
})
export class GhostCoderComponent {}
