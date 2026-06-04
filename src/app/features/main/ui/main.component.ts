import { Component, inject } from '@angular/core';
import { CardComponent } from '@shared/ui/card/card.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { TuiButton } from '@taiga-ui/core';
import { MainPageFacade } from '@features/main/facades/main-page.facade';

@Component({
  selector: 'ngKitty-main',
  imports: [CardComponent, TranslocoPipe, TuiButton],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private readonly mainPageFacade = inject(MainPageFacade);
  // TODO переделать на резолвер
  protected readonly result = this.mainPageFacade.result;
  // TODO переделать на резолвер + ошибку
  protected readonly isLoading = this.mainPageFacade.isLoading;

  public onDrawCards() {
    this.mainPageFacade.loadTarot();
  }
}
