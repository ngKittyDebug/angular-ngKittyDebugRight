import { inject, Service } from '@angular/core';
import { TuiDialogService, type TuiSizeL, type TuiSizeS } from '@taiga-ui/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { TUI_CONFIRM } from '@taiga-ui/kit';

@Service()
export class ModalService {
  private readonly dialogs = inject(TuiDialogService);

  public openConfirmModal(
    content: PolymorpheusContent,
    size: TuiSizeS | TuiSizeL,
    label: string,
    confirmLabel: string,
    cancelLabel: string
  ) {
    return this.dialogs.open<boolean>(TUI_CONFIRM, {
      label,
      size,
      data: { content, yes: confirmLabel, no: cancelLabel },
    });
  }
}
