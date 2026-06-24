import {
  afterNextRender,
  computed,
  DestroyRef,
  Directive,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
  RendererStyleFlags2,
  signal,
} from '@angular/core';

const SCAN_STYLE_ID = 'ngKitty-scan-effect-styles';
const SCAN_OVERLAY_CLASS = 'ngKitty-scan-overlay';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const SCAN_STYLES = `
.ngKitty-scan-host {
  position: relative;
}

.${SCAN_OVERLAY_CLASS} {
  position: absolute;
  inset: 0;
  z-index: 5;
  overflow: hidden;
  pointer-events: none;
  opacity: var(--scan-opacity, 0.55);
  background-image: repeating-linear-gradient(
    to bottom,
    color-mix(in srgb, var(--scan-color, currentColor) 7%, transparent) 0,
    color-mix(in srgb, var(--scan-color, currentColor) 7%, transparent) 1px,
    transparent 1px,
    transparent 4px
  );
}

.${SCAN_OVERLAY_CLASS}::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -10%;
  height: var(--scan-line-height, 2px);
  background: linear-gradient(
    90deg,
    transparent,
    color-mix(in srgb, var(--scan-color, currentColor) 85%, transparent),
    transparent
  );
  box-shadow:
    0 0 12px color-mix(in srgb, var(--scan-color, currentColor) 70%, transparent),
    0 0 4px color-mix(in srgb, var(--scan-color, currentColor) 90%, transparent);
  opacity: 0;
}

.ngKitty-scan-active > .${SCAN_OVERLAY_CLASS}::before {
  opacity: 1;
  animation: ngKitty-scan-sweep var(--scan-duration, 6s) linear infinite;
}

@keyframes ngKitty-scan-sweep {
  0% {
    top: -10%;
  }

  100% {
    top: 110%;
  }
}
`;

@Directive({
  selector: '[ngKittyScanEffect]',
  host: {
    '[class.ngKitty-scan-host]': 'true',
    '[class.ngKitty-scan-active]': 'isAnimating()',
  },
})
export class ScanEffectDirective {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);
  private readonly elementRef = inject(ElementRef);
  private readonly prefersReducedMotion = signal(false);
  private overlayElement: HTMLElement | null = null;
  public readonly scanColor = input<string>('var(--accent-primary)');
  public readonly scanDuration = input<string>('6s');
  public readonly scanLineHeight = input<string>('2px');
  public readonly scanOpacity = input<number>(0.55);
  public readonly scanEnabled = input<boolean>(true);
  public readonly isAnimating = computed(() => this.scanEnabled() && !this.prefersReducedMotion());

  constructor() {
    this.watchReducedMotion();

    effect(() => {
      const host = this.elementRef.nativeElement as HTMLElement;

      this.renderer.setStyle(host, '--scan-color', this.scanColor(), RendererStyleFlags2.DashCase);
      this.renderer.setStyle(host, '--scan-duration', this.scanDuration(), RendererStyleFlags2.DashCase);
      this.renderer.setStyle(host, '--scan-line-height', this.scanLineHeight(), RendererStyleFlags2.DashCase);
      this.renderer.setStyle(host, '--scan-opacity', String(this.scanOpacity()), RendererStyleFlags2.DashCase);
    });

    afterNextRender(() => {
      this.injectStylesOnce();
      this.createOverlay();
    });
  }

  private watchReducedMotion() {
    const view = this.document.defaultView;

    if (typeof view?.matchMedia !== 'function') {
      return;
    }

    const mediaQueryList = view.matchMedia(REDUCED_MOTION_QUERY);

    this.prefersReducedMotion.set(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => this.prefersReducedMotion.set(event.matches);

    mediaQueryList.addEventListener('change', listener);
    this.destroyRef.onDestroy(() => mediaQueryList.removeEventListener('change', listener));
  }

  private injectStylesOnce() {
    if (this.document.getElementById(SCAN_STYLE_ID)) {
      return;
    }

    const style = this.renderer.createElement('style') as HTMLStyleElement;

    this.renderer.setAttribute(style, 'id', SCAN_STYLE_ID);
    this.renderer.setProperty(style, 'textContent', SCAN_STYLES);
    this.renderer.appendChild(this.document.head, style);
  }

  private createOverlay() {
    const host = this.elementRef.nativeElement as HTMLElement;
    const overlay = this.renderer.createElement('span') as HTMLElement;

    this.renderer.addClass(overlay, SCAN_OVERLAY_CLASS);
    this.renderer.setAttribute(overlay, 'aria-hidden', 'true');
    this.renderer.appendChild(host, overlay);
    this.overlayElement = overlay;

    this.destroyRef.onDestroy(() => {
      if (this.overlayElement) {
        this.renderer.removeChild(host, this.overlayElement);
        this.overlayElement = null;
      }
    });
  }
}
