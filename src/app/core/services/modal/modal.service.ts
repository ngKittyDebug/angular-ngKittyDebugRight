import { inject, Injectable } from '@angular/core';
import { TuiDialogService, type TuiSizeL, type TuiSizeS } from '@taiga-ui/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly dialogs = inject(TuiDialogService);

  public openModal(content: PolymorpheusContent, size: TuiSizeS | TuiSizeL, label: string) {
    this.dialogs
      .open(content, {
        label,
        size,
      })
      .subscribe();
  }
}
