import { Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonSelect, TuiDataListWrapper } from '@taiga-ui/kit';
import { Languages } from '@core/models/languages.model';
import { uiStateStore } from '@core/store/ui-state.store';

@Component({
  selector: 'ngKitty-language-switcher',
  imports: [FormsModule, TuiButton, TuiButtonSelect, TuiDataListWrapper, TuiTextfield],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  private readonly translocoService = inject(TranslocoService);
  private readonly uiStateStore = inject(uiStateStore);

  protected readonly languageList = this.translocoService
    .getAvailableLangs()
    .map((lang) => (typeof lang === 'string' ? lang : lang.id));

  protected readonly currentLang = this.uiStateStore.language;

  public onChangeLanguage(lang: string): void {
    if (!this.isLanguage(lang)) {
      return;
    }

    void this.uiStateStore.setLanguage(lang);
  }

  private isLanguage(lang: string): lang is Languages {
    return Object.values(Languages).includes(lang as Languages);
  }
}
