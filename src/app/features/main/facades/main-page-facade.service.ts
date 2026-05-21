import { inject, Injectable } from '@angular/core';
import { TarotService } from '@features/main/data/api/services/tarot.service';

@Injectable({
  providedIn: 'root',
})
export class MainPageFacade {
  private readonly tarotService = inject(TarotService);
}
