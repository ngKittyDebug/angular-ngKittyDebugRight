import {
  TUI_PLATFORM,
  tuiGetClosestFocusable,
  tuiGetFocused
} from "./chunk-KA6RXUAL.js";
import {
  WA_ANIMATION_FRAME,
  WA_IS_IOS,
  WA_WINDOW,
  coerceBooleanProperty,
  tuiContainsOrAfter,
  tuiCreateOptions,
  tuiInjectElement,
  tuiIsHTMLElement,
  tuiIsPresent,
  tuiPx,
  tuiZonefreeScheduler
} from "./chunk-YH3GNO5H.js";
import {
  Directive,
  ElementRef,
  Injectable,
  Renderer2,
  input,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineDirective,
  ɵɵlistener,
  ɵɵresolveWindow
} from "./chunk-UWXEFF5S.js";
import {
  takeUntilDestroyed
} from "./chunk-ETGSZUYA.js";
import {
  DOCUMENT,
  DestroyRef,
  InjectionToken,
  NgZone,
  inject,
  ɵɵdefineInjectable
} from "./chunk-6UR4NGDW.js";
import {
  EMPTY,
  Observable,
  filter,
  fromEvent,
  map,
  merge,
  race,
  shareReplay,
  skipWhile,
  startWith,
  take,
  throttleTime,
  timer
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
  constructor(el, options) {
    this.el = el;
    this.options = options;
  }
  get element() {
    return this.el.nativeElement.querySelector(this.options.query) ?? this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches(this.options.query);
  }
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, animationFrame$, zone, options) {
    super(el, options);
    this.animationFrame$ = animationFrame$;
    this.zone = zone;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: this.options.preventScroll
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, renderer, zone, win, options) {
    super(el, options);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: this.options.preventScroll
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      this.element.parentElement?.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect.height);
    fakeInput.style.width = tuiPx(rect.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect.top);
    fakeInput.style.left = tuiPx(rect.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return Number.parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
  delay: Number.NaN,
  // NaN = no delay/sync
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = new InjectionToken(ngDevMode ? "TUI_AUTOFOCUS_HANDLER" : "");
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, WA_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  useFactory: (el, animationFrame$, renderer, zone, win, isIos, options) => isIos ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
    this.autoFocus = input(void 0, {
      alias: "tuiAutoFocus",
      transform: coerceBooleanProperty
    });
  }
  ngAfterViewInit() {
    if (this.autoFocus()) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
    }
  }
  static {
    this.ɵfac = function TuiAutoFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoFocus)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAutoFocus,
      selectors: [["", "tuiAutoFocus", ""]],
      inputs: {
        autoFocus: [1, "tuiAutoFocus", "autoFocus"]
      },
      features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, null);
})();
var TuiSynchronousAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  setFocus() {
    this.element.focus({
      preventScroll: true
    });
  }
};

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var TuiFocusTrap = class _TuiFocusTrap {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.activeElement = null;
    this.initialized = false;
    Promise.resolve().then(() => {
      this.initialized = true;
      this.activeElement = tuiGetFocused(this.doc);
      this.el.focus();
    });
  }
  ngOnDestroy() {
    this.initialized = false;
    if (tuiIsHTMLElement(this.activeElement)) {
      this.activeElement.focus();
    }
  }
  onFocusIn(node) {
    const {
      firstElementChild
    } = this.el;
    if (!tuiContainsOrAfter(this.el, node) && firstElementChild) {
      tuiGetClosestFocusable({
        initial: firstElementChild,
        root: this.el
      })?.focus();
    }
  }
  static {
    this.ɵfac = function TuiFocusTrap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFocusTrap)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFocusTrap,
      selectors: [["", "tuiFocusTrap", ""]],
      hostAttrs: ["tabIndex", "0"],
      hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown", function TuiFocusTrap_pointerdown_HostBindingHandler($event) {
            return $event.currentTarget == null ? null : $event.currentTarget.removeAttribute("tabindex");
          })("focusin.zoneless", function TuiFocusTrap_focusin_zoneless_HostBindingHandler($event) {
            return ctx.initialized && ctx.onFocusIn($event.target);
          }, ɵɵresolveWindow);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(pointerdown)": '$event.currentTarget?.removeAttribute("tabindex")',
        "(window:focusin.zoneless)": "initialized && onFocusIn($event.target)"
      }
    }]
  }], () => [], null);
})();

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = input(inject(TUI_PLATFORM, {
      skipSelf: true
    }));
  }
  static {
    this.ɵfac = function TuiPlatform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPlatform)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPlatform,
      selectors: [["", "tuiPlatform", ""]],
      hostVars: 1,
      hostBindings: function TuiPlatform_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-platform", ctx.tuiPlatform());
        }
      },
      inputs: {
        tuiPlatform: [1, "tuiPlatform"]
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_PLATFORM,
        useFactory: () => inject(_TuiPlatform).tuiPlatform()
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
    type: Directive,
    args: [{
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        useFactory: () => inject(TuiPlatform).tuiPlatform()
      }],
      host: {
        "[attr.data-platform]": "tuiPlatform()"
      }
    }]
  }], null, null);
})();

// node_modules/.pnpm/@ng-web-apis+screen-orienta_55634db713f80153c314b26b2fcdfa03/node_modules/@ng-web-apis/screen-orientation/fesm2022/ng-web-apis-screen-orientation.mjs
var WaScreenOrientationService = class _WaScreenOrientationService extends Observable {
  win = inject(WA_WINDOW);
  screen = this.win.screen;
  // SSR
  stream$ = (this.screen ? fromEvent(this.screen.orientation, "change").pipe(startWith(null), map(() => (
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
     * The type read-only property of the ScreenOrientation interface returns the document's current orientation type,
     * one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".
     *
     * Browser compatibility:
     * Safari 16.4+, Chrome 38+, Firefox 43+
     */
    this.win.screen.orientation.type
  ))) : fromEvent(this.win, "orientationchange").pipe(startWith(null), map(() => {
    const angle = parseInt(this.win.orientation, 10);
    switch (angle) {
      case -90:
        return "landscape-secondary";
      case 180:
        return "portrait-secondary";
      case 90:
        return "landscape-primary";
      case 0:
      default:
        return "portrait-primary";
    }
  }))).pipe(shareReplay({
    bufferSize: 1,
    refCount: true
  }));
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static ɵfac = function WaScreenOrientationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaScreenOrientationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaScreenOrientationService,
    factory: _WaScreenOrientationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaScreenOrientationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var WaViewportService = class _WaViewportService extends Observable {
  visualViewport = inject(WA_WINDOW).visualViewport;
  stream$ = this.visualViewport ? merge(fromEvent(this.visualViewport, "resize"), fromEvent(this.visualViewport, "scroll"), fromEvent(this.visualViewport, "scrollend")).pipe(startWith(null), map(() => this.visualViewport), filter(Boolean), shareReplay({
    bufferSize: 1,
    refCount: true
  })) : EMPTY;
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static ɵfac = function WaViewportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaViewportService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaViewportService,
    factory: _WaViewportService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-visual-viewport.mjs
var TuiVisualViewport = class _TuiVisualViewport {
  constructor() {
    this.w = inject(WA_WINDOW);
    this.style = tuiInjectElement().style;
    this.minInnerHeight = Infinity;
    this.$ = inject(WaViewportService).pipe(takeUntilDestroyed()).subscribe(({
      offsetLeft,
      offsetTop,
      height,
      width,
      scale
    }) => {
      this.minInnerHeight = Math.min(this.minInnerHeight, this.w.innerHeight);
      this.style.setProperty("--tui-viewport-x", tuiPx(offsetLeft));
      this.style.setProperty("--tui-viewport-y", tuiPx(offsetTop));
      this.style.setProperty("--tui-viewport-height", tuiPx(height));
      this.style.setProperty("--tui-viewport-width", tuiPx(width));
      this.style.setProperty("--tui-viewport-scale", String(scale));
      this.style.setProperty("--tui-viewport-vh", tuiPx(this.w.innerHeight / 100));
      this.style.setProperty("--tui-viewport-vw", tuiPx(this.w.innerWidth / 100));
      this.style.setProperty("--tui-viewport-svh", tuiPx(this.minInnerHeight / 100));
    });
  }
  static {
    this.ɵfac = function TuiVisualViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewport)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiVisualViewport,
      selectors: [["", "tuiVisualViewport", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewport, [{
    type: Directive,
    args: [{
      selector: "[tuiVisualViewport]"
    }]
  }], null, null);
})();

export {
  AbstractTuiAutofocusHandler,
  TuiDefaultAutofocusHandler,
  TuiIosAutofocusHandler,
  TUI_AUTOFOCUS_OPTIONS,
  tuiAutoFocusOptionsProvider,
  TUI_AUTOFOCUS_HANDLER,
  TUI_AUTOFOCUS_PROVIDERS,
  TuiAutoFocus,
  TuiSynchronousAutofocusHandler,
  TuiFocusTrap,
  TuiPlatform,
  TuiVisualViewport
};
//# sourceMappingURL=chunk-PDUC7KTW.js.map
