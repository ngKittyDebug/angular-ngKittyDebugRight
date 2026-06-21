import { Component } from '@angular/core';
import type { Candle } from '@features/altar/models/candle.model';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'ngKitty-candles',
  imports: [TuiIcon, TranslocoPipe],
  templateUrl: './candles.component.html',
  styleUrl: './candles.component.scss',
})
export class CandlesComponent {
  protected readonly candleList: Omit<Candle, 'lit' | 'count'>[] = [
    { id: 'deploy', purpose: 'altar.candles.purposes.deploy', icon: '@tui.rocket', color: '#00ffcc' },
    { id: 'bug', purpose: 'altar.candles.purposes.bug', icon: '@tui.bug', color: '#ff006e' },
    { id: 'review', purpose: 'altar.candles.purposes.review', icon: '@tui.git-branch', color: '#9d4edd' },
    { id: 'refactor', purpose: 'altar.candles.purposes.refactor', icon: '@tui.code', color: '#ffaa00' },
    { id: 'database', purpose: 'altar.candles.purposes.database', icon: '@tui.database', color: '#00ffcc' },
    { id: 'legacy', purpose: 'altar.candles.purposes.legacy', icon: '@tui.terminal', color: '#9d4edd' },
  ];
}
