import { HttpErrorResponse } from '@angular/common/http';
import { FirebaseError } from 'firebase/app';

export const toErrorMessage = (error: unknown) => {
  if (error instanceof HttpErrorResponse) {
    return (error.error?.message as string) ?? (error.message as string);
  }

  if (error instanceof FirebaseError) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unknown error';
};
