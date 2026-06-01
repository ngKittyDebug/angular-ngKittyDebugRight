import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { expect } from 'vitest';
import { TuiDialogService, type TuiSizeS } from '@taiga-ui/core';
import { tuiDialogServiceMock } from '@shared/mocks/tui-dialog/tui-dialog.service.mock';
import { of } from 'rxjs';
import { TUI_CONFIRM } from '@taiga-ui/kit';

describe('ModalService', () => {
  let service: ModalService;
  const modalContentFixture = {
    content: 'aboba',
    size: 's' as TuiSizeS,
    heading: 'abobus',
    confirmLabel: 'abob',
    cancelLabel: 'pupupu',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: TuiDialogService, useValue: tuiDialogServiceMock }],
    });
    service = TestBed.inject(ModalService);
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Открытие модального окна', () => {
    it('должен вызывать метод диалог сервиса', () => {
      tuiDialogServiceMock.open.mockReturnValueOnce(of(true));

      service.openConfirmModal(
        modalContentFixture.content,
        modalContentFixture.size,
        modalContentFixture.heading,
        modalContentFixture.confirmLabel,
        modalContentFixture.cancelLabel
      );

      expect(tuiDialogServiceMock.open).toHaveBeenNthCalledWith(1, TUI_CONFIRM, {
        label: modalContentFixture.heading,
        size: modalContentFixture.size,
        data: {
          content: modalContentFixture.content,
          yes: modalContentFixture.confirmLabel,
          no: modalContentFixture.cancelLabel,
        },
      });
    });

    it('должен вернуть результат диалога', () => {
      const dialogResult$ = of(true);

      tuiDialogServiceMock.open.mockReturnValueOnce(dialogResult$);

      const result$ = service.openConfirmModal(
        modalContentFixture.content,
        modalContentFixture.size,
        modalContentFixture.heading,
        modalContentFixture.confirmLabel,
        modalContentFixture.cancelLabel
      );

      expect(result$).toBe(dialogResult$);
    });
  });
});
