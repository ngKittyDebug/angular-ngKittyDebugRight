import { TranslocoTestingModule } from '@jsverse/transloco';
import { Languages } from '@core/models/languages.model';

export const TranslocoTestingMock = TranslocoTestingModule.forRoot({
  langs: { en: {}, ru: {} },
  translocoConfig: {
    availableLangs: Object.values(Languages),
    defaultLang: Languages.RU,
  },
});
