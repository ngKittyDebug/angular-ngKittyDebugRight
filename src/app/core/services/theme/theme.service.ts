import { Service, signal } from '@angular/core';
import { Theme } from '@core/models/theme.model';

@Service()
export class ThemeService {
  private readonly _theme = signal<Theme>(Theme.DARK);
  public readonly theme = this._theme.asReadonly();

  public toggleTheme() {
    this._theme.update((currentTheme) => {
      return currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    });
  }
}
