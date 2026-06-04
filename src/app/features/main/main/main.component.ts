import { Component, inject } from '@angular/core';
import { TarotService } from '@features/main/data/api/services/tarot.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ngKitty-main',
  imports: [JsonPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private readonly tarotService = inject(TarotService);
  public readonly result = toSignal(this.tarotService.loadReading());
}
