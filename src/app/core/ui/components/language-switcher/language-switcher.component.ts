import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonSelect, TuiDataListWrapper, TuiSelect } from '@taiga-ui/kit';

@Component({
  selector: 'ngKitty-language-switcher',
  imports: [FormsModule, TuiButton, TuiButtonSelect, TuiDataListWrapper, TuiSelect, TuiTextfield],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent implements OnInit {
  private readonly transLocoService = inject(TranslocoService);

  public currentLang: string | null = null;
  public languages: string[] = [];
  protected value: string | null = null;

  public ngOnInit(): void {
    this.currentLang = this.transLocoService.getActiveLang();
    this.value = this.currentLang;
    const availableLangs = this.transLocoService.getAvailableLangs();

    this.languages = availableLangs.map((lang) => {
      return typeof lang === 'string' ? lang : lang.id;
    });
  }

  public onChangeLanguage(event: string): void {
    this.transLocoService.setActiveLang(event);
    this.currentLang = event;
  }
}
