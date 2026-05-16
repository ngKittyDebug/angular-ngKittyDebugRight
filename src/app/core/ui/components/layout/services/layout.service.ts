import { afterNextRender, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { LAYOUT_MOBILE_MEDIA_QUERY } from '@core/ui/components/layout/constants/layout-mobile-media-query';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly _isMobileNavOpen = signal(false);
  public readonly isMobileNavOpen = this._isMobileNavOpen.asReadonly();

  constructor() {
    afterNextRender(() => {
      this.watchMobileNavMediaQuery();
    });
  }

  public onToggleMobileNav() {
    this._isMobileNavOpen.update((value) => !value);
  }

  public onCloseMobileNav() {
    this._isMobileNavOpen.set(false);
  }

  private watchMobileNavMediaQuery() {
    if (typeof globalThis.matchMedia === 'undefined') {
      return;
    }

    const mediaQueryList = globalThis.matchMedia(LAYOUT_MOBILE_MEDIA_QUERY);

    const closeNavOnDesktop = () => {
      if (!mediaQueryList.matches) {
        this._isMobileNavOpen.set(false);
      }
    };

    closeNavOnDesktop();
    mediaQueryList.addEventListener('change', closeNavOnDesktop);
    this.destroyRef.onDestroy(() => {
      mediaQueryList.removeEventListener('change', closeNavOnDesktop);
    });
  }
}
