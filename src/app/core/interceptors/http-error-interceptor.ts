import type { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TuiNotificationService } from '@taiga-ui/core';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (request, next) => {
  const notificationService = inject(TuiNotificationService);

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      notificationService.open(error.error?.message, {
        label: '',
        appearance: 'negative',
        autoClose: 5000,
      });

      return throwError(() => error);
    })
  );
};
