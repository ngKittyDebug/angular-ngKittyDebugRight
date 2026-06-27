import type { ErrorHandler } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { TuiNotificationService } from '@taiga-ui/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly notificationService = inject(TuiNotificationService);

  public handleError(error: unknown): void {
    console.error(error);

    // const errorMessage = error.message as unknown as Error;

    // this.notificationService.open(errorMessage, {
    //   label: '',
    //   appearance: 'negative',
    //   autoClose: 5000,
    // });
  }
}
