import { inject } from '@angular/core';
import { type CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

export const authGuard: CanActivateFn = () => {
  const isAuth = inject(AuthService);
  const router = inject(Router);

  return isAuth.isAuthenticated() ? true : router.createUrlTree(['/login']);
};
