import { inject, Service } from '@angular/core';
import type { PreloadingStrategy, Route } from '@angular/router';
import type { Observable } from 'rxjs';
import { of } from 'rxjs';
import { AuthService } from '@core/services/auth/auth.service';
import type { PreloadFor } from '@core/services/preloading-strategy/models/preload-for.model';

@Service()
export class UserStateStrategy implements PreloadingStrategy {
  private readonly authService = inject(AuthService);

  public preload(route: Route, load: () => Observable<unknown>) {
    const isAuthenticated = this.authService.isAuthenticated();
    const preloadFor = route.data?.['preloadFor'] as unknown as PreloadFor;

    if (preloadFor === 'guest') {
      return isAuthenticated ? of(null) : load();
    }
    if (preloadFor === 'auth') {
      return isAuthenticated ? load() : of(null);
    }

    return of(null);
  }
}
