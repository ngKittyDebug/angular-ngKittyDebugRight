import { Component } from '@angular/core';
import type { Candle } from '@features/altar/models/candle.model';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiIcon } from '@taiga-ui/core';
import type { CdkDragDrop } from '@angular/cdk/drag-drop';
import { CdkDrag, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ngKitty-candles',
  imports: [TuiIcon, TranslocoPipe, CdkDrag, CdkDropList],
  templateUrl: './candles.component.html',
  styleUrl: './candles.component.scss',
})
export class CandlesComponent {
  protected candleList: Omit<Candle, 'lit' | 'count'>[] = [
    { id: 'deploy', purpose: 'altar.candles.purposes.deploy', icon: '@tui.rocket', color: '#00ffcc' },
    { id: 'bug', purpose: 'altar.candles.purposes.bug', icon: '@tui.bug', color: '#ff006e' },
    { id: 'review', purpose: 'altar.candles.purposes.review', icon: '@tui.git-branch', color: '#9d4edd' },
    { id: 'refactor', purpose: 'altar.candles.purposes.refactor', icon: '@tui.code', color: '#ffaa00' },
    { id: 'database', purpose: 'altar.candles.purposes.database', icon: '@tui.database', color: '#00ffcc' },
    { id: 'legacy', purpose: 'altar.candles.purposes.legacy', icon: '@tui.terminal', color: '#9d4edd' },
  ];
  protected altarCandleList: Omit<Candle, 'lit' | 'count'>[] = [];

  protected onDrop(event: CdkDragDrop<Omit<Candle, 'lit' | 'count'>[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
