import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { ShriftPageFacade } from './shrift-page.facade';
import { ConfessFormService } from '../services/confess-form.service';
import { ConfessService } from '@core/services/confess/confess.service';
import { confessServiceMock, resetConfessServiceMock } from '@core/services/confess/confess.service.mock';

describe('ShriftPageFacade', () => {
  let facade: ShriftPageFacade;

  beforeEach(() => {
    resetConfessServiceMock();

    TestBed.configureTestingModule({
      providers: [ShriftPageFacade, ConfessFormService, { provide: ConfessService, useValue: confessServiceMock }],
    });
    facade = TestBed.inject(ShriftPageFacade);
    facade.confessForm.reset();
  });

  it('должен инициализироваться', () => {
    expect(facade).toBeTruthy();
  });

  it('должен загрузить грехи при создании', () => {
    expect(confessServiceMock.loadSins).toHaveBeenCalledTimes(1);
  });

  describe('Отправка исповеди', () => {
    it('не должен вызывать addSin при невалидной форме', async () => {
      await facade.onSubmit();

      expect(confessServiceMock.addSin).not.toHaveBeenCalled();
    });

    it('должен добавить грех и сбросить форму', async () => {
      facade.confessForm.setValue({ text: 'Skipped unit tests', severity: 'critical' });

      await facade.onSubmit();

      expect(confessServiceMock.addSin).toHaveBeenNthCalledWith(1, 'Skipped unit tests', 'critical');
      expect(facade.confessForm.pristine).toBe(true);
    });

    it('должен обработать ошибку добавления без падения', async () => {
      confessServiceMock.addSin.mockRejectedValue(new Error('Firestore error'));
      facade.confessForm.setValue({ text: 'Broken build', severity: 'medium' });
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

      await facade.onSubmit();

      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('Удаление греха', () => {
    it('должен делегировать удаление в ConfessService', () => {
      facade.onDelete('sin-1');

      expect(confessServiceMock.deleteSin).toHaveBeenNthCalledWith(1, 'sin-1');
    });
  });
});
