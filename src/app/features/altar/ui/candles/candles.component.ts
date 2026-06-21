import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiIcon } from '@taiga-ui/core';
import type { CdkDragDrop } from '@angular/cdk/drag-drop';
import { CdkDrag, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import type { CandleType } from '@core/services/candles/models/candle-type.model';
import { CANDLE_TYPES_CONFIG } from '@core/services/candles/constants/candle-types.config';

@Component({
  selector: 'ngKitty-candles',
  imports: [TuiIcon, TranslocoPipe, CdkDrag, CdkDropList],
  templateUrl: './candles.component.html',
  styleUrl: './candles.component.scss',
})
export class CandlesComponent {
  protected candleList: CandleType[] = CANDLE_TYPES_CONFIG;
  protected altarCandleList: CandleType[] = [];

  protected onDrop(event: CdkDragDrop<CandleType[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
