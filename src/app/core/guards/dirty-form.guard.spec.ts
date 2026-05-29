import { TestBed } from '@angular/core/testing';
import type { CanDeactivateFn } from '@angular/router';
import { of } from 'rxjs';

import { dirtyFormGuard } from '@core/guards/dirty-form.guard';
import type { ComponentWithForm } from '@core/guards/models/component-with-form.model';
import { ModalService } from '@core/services/modal/modal.service';
import { modalServiceMock } from '@core/services/modal/modal.service.mock';
import { TranslocoTestingMock } from '@shared/mocks/transloco-testing/transloco-testing.mock';
import { describe } from 'vitest';
import { routerFixture } from '@shared/mocks/router/router.fixture';

describe('dirtyFormGuard', () => {
  const modalResultFixture$ = of(true);

  const executeGuard: CanDeactivateFn<ComponentWithForm> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => dirtyFormGuard(...guardParameters));

  beforeEach(() => {
    vi.clearAllMocks();

    TestBed.configureTestingModule({
      imports: [TranslocoTestingMock],
      providers: [{ provide: ModalService, useValue: modalServiceMock }],
    });
  });

  describe('Форма не изменена', () => {
    it('должен пропустить навигацию', () => {
      const componentMock = { form: { dirty: false } } as ComponentWithForm;

      expect(executeGuard(componentMock, {} as never, {} as never, {} as never)).toBe(true);
    });

    it('не должен открывать модальное окно', () => {
      const componentMock = { form: { dirty: false } } as ComponentWithForm;

      executeGuard(componentMock, {} as never, {} as never, {} as never);

      expect(modalServiceMock.openConfirmModal).not.toHaveBeenCalled();
    });
  });

  describe('Форма изменена', () => {
    const componentMock = { form: { dirty: true } } as ComponentWithForm;

    it('должен открыть модальное окно', () => {
      executeGuard(componentMock, {} as never, {} as never, {} as never);

      expect(modalServiceMock.openConfirmModal).toHaveBeenNthCalledWith(
        1,
        'modal.confirmation.content',
        'm',
        'modal.confirmation.heading'
      );
    });

    it('должен вернуть результат модального окна', () => {
      modalServiceMock.openConfirmModal.mockReturnValueOnce(modalResultFixture$);

      expect(
        executeGuard(
          componentMock,
          routerFixture.activatedRouteSnapshotFixture,
          routerFixture.routerStateFixture,
          routerFixture.routerStateFixture
        )
      ).toBe(modalResultFixture$);
    });
  });
});
