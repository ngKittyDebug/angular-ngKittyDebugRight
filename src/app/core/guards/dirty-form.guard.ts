import { type CanDeactivateFn } from '@angular/router';
import type { ComponentWithForm } from '@core/guards/models/component-with-form.model';
import { inject } from '@angular/core';
import { ModalService } from '@core/services/modal/modal.service';
import { marker } from '@jsverse/transloco-keys-manager/marker';

export const dirtyFormGuard: CanDeactivateFn<ComponentWithForm> = (component) => {
  const modalService = inject(ModalService);

  if (!component.form.dirty) {
    return true;
  }

  return modalService.openConfirmModal(marker('modal.confirmation.content'), 's', marker('modal.confirmation.heading'));
};
