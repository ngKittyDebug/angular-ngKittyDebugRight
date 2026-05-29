import { type CanDeactivateFn } from '@angular/router';
import type { ComponentWithForm } from '@core/guards/models/component-with-form.model';
import { inject } from '@angular/core';
import { ModalService } from '@core/services/modal/modal.service';
import { marker } from '@jsverse/transloco-keys-manager/marker';
import { TranslocoService } from '@jsverse/transloco';

export const dirtyFormGuard: CanDeactivateFn<ComponentWithForm> = (component) => {
  const modalService = inject(ModalService);
  const translocoService = inject(TranslocoService);

  if (!component.form.dirty) {
    return true;
  }

  return modalService.openConfirmModal(
    translocoService.translate(marker('modal.confirmation.content')),
    'm',
    translocoService.translate(marker('modal.confirmation.heading'))
  );
};
