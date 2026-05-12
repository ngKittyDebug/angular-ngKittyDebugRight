import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiMainComponent } from '@taiga-ui/layout';

@Component({
  selector: 'ngKitty-layout',
  imports: [RouterOutlet, TuiMainComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  // protected readonly navigationItemList = [
  //   {
  //     icon: '@tui.sparkles',
  //     label: 'Таро',
  //     url: '/t',
  //   },
  //   {
  //     icon: '@tui.scroll',
  //     label: 'Исповедь',
  //     url: '/i',
  //   },
  //   {
  //     icon: '@tui.flame',
  //     label: 'Руны CI/CD',
  //     url: '/r',
  //   },
  //   {
  //     icon: '@tui.sun',
  //     label: 'Гороскоп',
  //     url: '/g',
  //   },
  //   {
  //     icon: '@tui.book-open',
  //     label: 'Хроники',
  //     url: '/h',
  //   },
  // ] as const satisfies NavigationItem[];
}
