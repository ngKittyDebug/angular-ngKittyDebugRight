import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { expect } from 'vitest';
import { TuiDialogService } from '@taiga-ui/core';
import { tuiDialogServiceMock } from '@shared/mocks/tui-dialog/tui-dialog.service.mock';

describe('ModalService', () => {
  let service: ModalService;

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
      service.openModal('content', 's', 'zopaOsla');

      expect(tuiDialogServiceMock.open).toHaveBeenNthCalledWith(1, 'content', {
        label: 'zopaOsla',
        size: 's',
      });
    });
  });
});
