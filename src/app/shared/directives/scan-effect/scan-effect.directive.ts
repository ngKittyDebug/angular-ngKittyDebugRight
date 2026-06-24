import { Directive, input } from '@angular/core';

@Directive({
  selector: '[ngKittyScanEffect]',
  host: {
    class: 'scan-effect',
    '[class.is-scanning]': 'scanEnabled()',
    '[style.--scan-color]': 'scanColor()',
    '[style.--scan-duration]': 'scanDuration()',
    '[style.--scan-line-height]': 'scanLineHeight()',
    '[style.--scan-opacity]': 'scanOpacity()',
  },
})
export class ScanEffectDirective {
  public readonly scanColor = input<string>('var(--accent-primary)');
  public readonly scanDuration = input<string>('6s');
  public readonly scanLineHeight = input<string>('2px');
  public readonly scanOpacity = input<number>(0.55);
  public readonly scanEnabled = input<boolean>(true);
}
