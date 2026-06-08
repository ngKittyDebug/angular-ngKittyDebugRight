import { Component, input } from '@angular/core';
import { CardComponent } from '@shared/ui/card/card.component';
import type { TarotResponseApi } from '@features/main/data/api/models/deploy-tarot-response-api.model';
import { TuiIcon } from '@taiga-ui/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'ngKitty-tarot-reading',
  imports: [CardComponent, TuiIcon, TranslocoPipe],
  templateUrl: './tarot-reading.component.html',
  styleUrl: './tarot-reading.component.scss',
})
export class TarotReadingComponent {
  public readonly tarotReading = input.required<TarotResponseApi | null>();
}
