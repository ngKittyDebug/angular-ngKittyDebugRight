import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngKitty-koan-divider',
  standalone: true,
  template: `<span aria-hidden="true">☯</span>`,
  styleUrl: './koan-divider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'separator',
    'aria-orientation': 'horizontal',
  },
})
export class KoanDividerComponent {}
