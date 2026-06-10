import { Component, inject, signal } from '@angular/core';
import { EyeBlinkDirective } from './directives/eye-blink.directive';
import type { Quote } from './services/coder-quotes.service';
import { CoderQuotesService } from './services/coder-quotes.service';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'ngKitty-ghost-coder',
  imports: [EyeBlinkDirective],
  templateUrl: './ghost-coder.component.html',
  styleUrl: './ghost-coder.component.scss',
  host: {
    '(click)': 'onClick()',
  },
})
export class GhostCoderComponent {
  private readonly service = inject(CoderQuotesService);
  private readonly translocoService = inject(TranslocoService);
  protected quotes: Quote[] = [];
  protected readonly currentQuote = signal<string | null>(null);

  public async onClick() {
    const quotes = await this.service.getQuotes(this.translocoService.activeLang());
    const quote = this.service.getRandomQuote(quotes);

    this.currentQuote.set(quote.text);
  }
}
