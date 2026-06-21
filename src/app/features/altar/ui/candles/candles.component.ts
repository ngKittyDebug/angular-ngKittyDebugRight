import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiIcon } from '@taiga-ui/core';
import type { CdkDragDrop } from '@angular/cdk/drag-drop';
import { CdkDrag, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import type { Candle } from '@core/services/candles/models/candle.model';
import { CandleId } from '@core/services/candles/models/candle-id.model';

@Component({
  selector: 'ngKitty-candles',
  imports: [TuiIcon, TranslocoPipe, CdkDrag, CdkDropList],
  templateUrl: './candles.component.html',
  styleUrl: './candles.component.scss',
})
export class CandlesComponent {
  protected candleList: Omit<Candle, 'isLit' | 'count'>[] = [
    { id: CandleId.DEPLOY, purpose: 'altar.candles.purposes.deploy', icon: '@tui.rocket', color: '#00ffcc' },
    { id: CandleId.BUG, purpose: 'altar.candles.purposes.bug', icon: '@tui.bug', color: '#ff006e' },
    { id: CandleId.REVIEW, purpose: 'altar.candles.purposes.review', icon: '@tui.git-branch', color: '#9d4edd' },
    { id: CandleId.REFACTOR, purpose: 'altar.candles.purposes.refactor', icon: '@tui.code', color: '#ffaa00' },
    { id: CandleId.DATABASE, purpose: 'altar.candles.purposes.database', icon: '@tui.database', color: '#00ffcc' },
    { id: CandleId.LEGACY, purpose: 'altar.candles.purposes.legacy', icon: '@tui.terminal', color: '#9d4edd' },
  ];
  protected altarCandleList: Omit<Candle, 'isLit' | 'count'>[] = [];

  protected onDrop(event: CdkDragDrop<Omit<Candle, 'isLit' | 'count'>[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
