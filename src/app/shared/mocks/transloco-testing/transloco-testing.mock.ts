import { TranslocoTestingModule } from '@jsverse/transloco';

import en from '../../../../../public/i18n/en.json';
import ru from '../../../../../public/i18n/ru.json';

export const TranslocoTestingMock = TranslocoTestingModule.forRoot({
  langs: { en, ru },
  translocoConfig: {
    availableLangs: ['ru', 'en'],
    defaultLang: 'ru',
  },
});
