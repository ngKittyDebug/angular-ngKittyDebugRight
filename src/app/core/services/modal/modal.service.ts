import { inject, Injectable } from '@angular/core';
import { TuiDialogService, type TuiSizeL, type TuiSizeS } from '@taiga-ui/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly dialogs = inject(TuiDialogService);

  public openConfirmModal(content: PolymorpheusContent, size: TuiSizeS | TuiSizeL, label: string) {
    return this.dialogs.open<boolean>(content, {
      label,
      size,
    });
  }
}
