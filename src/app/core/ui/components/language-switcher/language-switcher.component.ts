import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonSelect, TuiDataListWrapper } from '@taiga-ui/kit';

@Component({
  selector: 'ngKitty-language-switcher',
  imports: [FormsModule, TuiButton, TuiButtonSelect, TuiDataListWrapper, TuiTextfield],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  private readonly translocoService = inject(TranslocoService);

  protected readonly languageList = this.translocoService
    .getAvailableLangs()
    .map((lang) => (typeof lang === 'string' ? lang : lang.id));

  protected readonly currentLang = this.translocoService.activeLang;

  public onChangeLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }
}
