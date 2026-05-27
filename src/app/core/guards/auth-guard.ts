import { inject } from '@angular/core';
import { type CanMatchFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

export const authGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated() ? true : router.createUrlTree(['/login']);
};
