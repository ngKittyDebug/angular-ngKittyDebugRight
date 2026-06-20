import {
  TUI_DARK_MODE,
  TUI_SELECTION_STREAM,
  TUI_VIEWPORT,
  TuiScrollbar
} from "./chunk-SZ2IDNEI.js";
import {
  EVENT_MANAGER_PLUGINS,
  EventManagerPlugin,
  Meta,
  REMOVE_STYLES_ON_COMPONENT_DESTROY
} from "./chunk-BUQENQRY.js";
import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TUI_FONT_SIZE_HANDLER,
  TuiActiveZone,
  TuiObscured,
  TuiPortalService,
  TuiPortals,
  TuiVCR,
  tuiGetClosestFocusable,
  tuiGetFocused,
  tuiIsFocusable,
  tuiIsFocusedIn
} from "./chunk-KA6RXUAL.js";
import {
  CHAR_NO_BREAK_SPACE,
  CHAR_ZERO_WIDTH_SPACE,
  EMPTY_CLIENT_RECT,
  TUI_TRUE_HANDLER,
  TuiAnimated,
  WA_ANIMATION_FRAME,
  WA_IS_TOUCH,
  WA_IS_WEBKIT,
  WA_WINDOW,
  coerceArray,
  svgNodeFilter,
  tuiClamp,
  tuiCloseWatcher,
  tuiCreateOptions,
  tuiDirectiveBinding,
  tuiGenerateId,
  tuiGetActualTarget,
  tuiGetElementObscures,
  tuiIfMap,
  tuiInjectElement,
  tuiIsElement,
  tuiIsElementEditable,
  tuiIsHTMLElement,
  tuiIsPresent,
  tuiIsString,
  tuiIsTextNode,
  tuiIsTextfield,
  tuiPointToClientRect,
  tuiProvide,
  tuiPx,
  tuiSetSignal,
  tuiStopPropagation,
  tuiTypedFromEvent,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-YH3GNO5H.js";
import {
  isPlatformBrowser
} from "./chunk-WBUXHXP6.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Injectable,
  Optional,
  Self,
  SkipSelf,
  TemplateRef,
  ViewContainerRef,
  contentChild,
  input,
  model,
  provideAppInitializer,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UWXEFF5S.js";
import {
  outputFromObservable,
  takeUntilDestroyed,
  toObservable
} from "./chunk-ETGSZUYA.js";
import {
  DOCUMENT,
  DestroyRef,
  INJECTOR$1,
  InjectionToken,
  NgZone,
  PLATFORM_ID,
  computed,
  effect,
  forwardRef,
  inject,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-6UR4NGDW.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  combineLatest,
  delay,
  distinctUntilChanged,
  filter,
  finalize,
  fromEvent,
  map,
  merge,
  of,
  share,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  throttleTime
} from "./chunk-3NTDFDXB.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-classes.mjs
var TuiAccessor = class {
};
var TuiPositionAccessor = class extends TuiAccessor {
};
var TuiRectAccessor = class extends TuiAccessor {
};
function tuiProvideAccessor(provide, type, fallback) {
  return {
    provide,
    deps: [[new SkipSelf(), new Optional(), provide], fallback],
    useFactory: tuiFallbackAccessor(type)
  };
}
function tuiFallbackAccessor(type) {
  return (accessors, fallback) => accessors?.find?.((accessor) => accessor !== fallback && accessor.type === type) || Object.create(fallback, {
    type: {
      value: type
    }
  });
}
function tuiPositionAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiPositionAccessor, type, fallback);
}
function tuiRectAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiRectAccessor, type, fallback);
}
function tuiAsPositionAccessor(accessor) {
  return tuiProvide(TuiPositionAccessor, accessor, true);
}
function tuiAsRectAccessor(accessor) {
  return tuiProvide(TuiRectAccessor, accessor, true);
}
var TuiVehicle = class {
};
function tuiAsVehicle(vehicle) {
  return tuiProvide(TuiVehicle, vehicle, true);
}
var TuiDriver = class extends Observable {
};
function tuiAsDriver(driver) {
  return tuiProvide(TuiDriver, driver, true);
}
var TuiDriverDirective = class _TuiDriverDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.drivers = coerceArray(inject(TuiDriver, {
      self: true,
      optional: true
    }) || []);
    this.vehicles = coerceArray(inject(TuiVehicle, {
      self: true,
      optional: true
    }) || []);
  }
  ngAfterViewInit() {
    const vehicle = this.vehicles.find(({
      type
    }) => type === this.type);
    merge(...this.drivers.filter(({
      type
    }) => type === this.type)).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      vehicle?.toggle(value);
    });
  }
  static {
    this.ɵfac = function TuiDriverDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDriverDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDriverDirective
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDriverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-popup.mjs
var _c0 = ["*"];
var TuiPopupService = class _TuiPopupService extends TuiPortalService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopupService_BaseFactory;
      return function TuiPopupService_Factory(__ngFactoryType__) {
        return (ɵTuiPopupService_BaseFactory || (ɵTuiPopupService_BaseFactory = ɵɵgetInheritedFactory(_TuiPopupService)))(__ngFactoryType__ || _TuiPopupService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPopupService,
      factory: _TuiPopupService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiPopup = class _TuiPopup {
  constructor() {
    this.template = inject(TemplateRef);
    this.service = inject(TuiPopupService);
    this.show = input(false, {
      alias: "tuiPopup"
    });
  }
  ngOnChanges() {
    this.ref?.destroy();
    if (this.show()) {
      this.ref = this.service.add(this.template);
    }
  }
  ngOnDestroy() {
    this.ref?.destroy();
  }
  static {
    this.ɵfac = function TuiPopup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPopup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPopup,
      selectors: [["ng-template", "tuiPopup", ""]],
      inputs: {
        show: [1, "tuiPopup", "show"]
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopup, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiPopup]"
    }]
  }], null, null);
})();
var TuiPopups = class _TuiPopups extends TuiPortals {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopups_BaseFactory;
      return function TuiPopups_Factory(__ngFactoryType__) {
        return (ɵTuiPopups_BaseFactory || (ɵTuiPopups_BaseFactory = ɵɵgetInheritedFactory(_TuiPopups)))(__ngFactoryType__ || _TuiPopups);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPopups,
      selectors: [["tui-popups"]],
      features: [ɵɵProvidersFeature([tuiProvide(TuiPortalService, TuiPopupService)]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [["tuiVCR", ""]],
      template: function TuiPopups_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵelementContainer(1, 0);
        }
      },
      dependencies: [TuiVCR],
      styles: ['[_nghost-%COMP%]{position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:grid;grid-template-rows:repeat(14,min-content) 1fr;pointer-events:none;overflow:hidden;overflow-wrap:break-word;box-sizing:border-box;padding:env(safe-area-inset-top) env(safe-area-inset-left) env(safe-area-inset-bottom) env(safe-area-inset-right)}[_nghost-%COMP%]    >*{pointer-events:auto}[_nghost-%COMP%]:after{content:"";grid-row:15}'],
      changeDetection: 1
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopups, [{
    type: Component,
    args: [{
      selector: "tui-popups",
      imports: [TuiVCR],
      template: "<ng-content/><ng-container tuiVCR />",
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [tuiProvide(TuiPortalService, TuiPopupService)],
      styles: [':host{position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;display:grid;grid-template-rows:repeat(14,min-content) 1fr;pointer-events:none;overflow:hidden;overflow-wrap:break-word;box-sizing:border-box;padding:env(safe-area-inset-top) env(safe-area-inset-left) env(safe-area-inset-bottom) env(safe-area-inset-right)}:host ::ng-deep>*{pointer-events:auto}:host:after{content:"";grid-row:15}\n']
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-dom.mjs
function tuiCheckFixedPosition(element) {
  return !!element && (isFixed(element) || tuiCheckFixedPosition(element.parentElement));
}
function isFixed(element) {
  return element.ownerDocument.defaultView?.getComputedStyle(element).getPropertyValue("position") === "fixed";
}
function tuiGetViewportHeight({ document, innerHeight }) {
  return Math.max(document.documentElement.clientHeight || 0, innerHeight || 0);
}
function tuiGetViewportWidth({ document, innerWidth }) {
  return Math.max(document.documentElement.clientWidth || 0, innerWidth || 0);
}
function tuiGetWordRange(currentRange) {
  const range = currentRange.cloneRange();
  const { startContainer, startOffset, endContainer, endOffset } = range;
  const { ownerDocument } = startContainer;
  if (!ownerDocument) {
    return range;
  }
  const treeWalker = ownerDocument.createTreeWalker(ownerDocument.body, NodeFilter.SHOW_TEXT, svgNodeFilter);
  treeWalker.currentNode = startContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === startContainer ? textContent.slice(0, Math.max(0, startOffset + 1)) : textContent;
    const offset = Math.max(content.lastIndexOf(" "), content.lastIndexOf("\n"), content.lastIndexOf(CHAR_NO_BREAK_SPACE), content.lastIndexOf(CHAR_ZERO_WIDTH_SPACE)) + 1;
    range.setStart(container, 0);
    if (offset) {
      range.setStart(container, offset);
      break;
    }
  } while (treeWalker.previousNode());
  treeWalker.currentNode = endContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === endContainer ? textContent.slice(endOffset + 1) : textContent;
    const offset = [
      content.indexOf(" "),
      content.lastIndexOf("\n"),
      content.indexOf(CHAR_NO_BREAK_SPACE),
      content.indexOf(CHAR_ZERO_WIDTH_SPACE)
    ].reduce((result, item) => result === -1 || item === -1 ? Math.max(result, item) : Math.min(result, item), -1);
    range.setEnd(container, textContent.length);
    if (offset !== -1) {
      range.setEnd(container, offset + textContent.length - content.length);
      break;
    }
  } while (treeWalker.nextNode());
  return range;
}

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-services.mjs
var TuiPositionService = class _TuiPositionService extends Observable {
  constructor() {
    const animationFrame$ = inject(WA_ANIMATION_FRAME);
    const zone = inject(NgZone);
    super((subscriber) => animationFrame$.pipe(startWith(null), map(() => this.accessor.getPosition(this.el.getBoundingClientRect())), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT))).subscribe(subscriber));
    this.el = tuiInjectElement();
    this.accessor = inject(TuiPositionAccessor);
  }
  static {
    this.ɵfac = function TuiPositionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPositionService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPositionService,
      factory: _TuiPositionService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPositionService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiVisualViewportService = class _TuiVisualViewportService {
  constructor() {
    this.isWebkit = inject(WA_IS_WEBKIT);
    this.win = inject(WA_WINDOW);
  }
  // https://bugs.webkit.org/show_bug.cgi?id=207089
  correct(point) {
    return this.isWebkit ? [point[0] + (this.win.visualViewport?.offsetLeft ?? 0), point[1] + (this.win.visualViewport?.offsetTop ?? 0)] : point;
  }
  static {
    this.ɵfac = function TuiVisualViewportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewportService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiVisualViewportService,
      factory: _TuiVisualViewportService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+event-plugins@5.0_ca058eaf930e71be30842f90f2a8534a/node_modules/@taiga-ui/event-plugins/fesm2022/taiga-ui-event-plugins.mjs
var LongtapEvent = class extends CustomEvent {
  constructor(type, _a) {
    var _b = _a, {
      clientX,
      clientY
    } = _b, eventInitDict = __objRest(_b, [
      "clientX",
      "clientY"
    ]);
    super(type, __spreadProps(__spreadValues({}, eventInitDict), {
      detail: {
        clientX,
        clientY
      }
    }));
  }
};
var isIos = ({
  userAgent,
  maxTouchPoints
}) => /ipad|iphone|ipod/i.test(userAgent) || /^((?!chrome|android).)*safari/i.test(userAgent) && maxTouchPoints > 1;
var TAP_DELAY = 700;
var SAFE_NAVIGATOR = typeof navigator === "undefined" ? null : navigator;
var MOVE_THRESHOLD = 15;
var LongtapEventPlugin = class extends EventManagerPlugin {
  constructor() {
    super(...arguments);
    this.isIOS = !!SAFE_NAVIGATOR && isIos(SAFE_NAVIGATOR);
  }
  addEventListener(element, _event, handler) {
    const removeLongtapEventPolyfill = this.isIOS ? this.listenTouchEvents(element) : this.listenContextmenuEvent(element);
    element.addEventListener("longtap", handler);
    return () => {
      removeLongtapEventPolyfill();
      element.removeEventListener("longtap", handler);
    };
  }
  supports(event) {
    return event === "longtap";
  }
  listenContextmenuEvent(element) {
    return this.manager.addEventListener(element, "contextmenu.prevent.stop", ({
      clientX,
      clientY
    }) => {
      this.dispatchLongtapEvent(element, clientX, clientY);
    });
  }
  listenTouchEvents(element) {
    let longTapTimeout = null;
    let touchStartCoords = null;
    const reset = () => {
      clearTimeout(longTapTimeout);
      touchStartCoords = null;
      longTapTimeout = null;
    };
    const removeTouchstartListener = this.manager.addEventListener(element, "touchstart.zoneless.passive", ({
      touches
    }) => {
      const touch = touches[0];
      if (!touch) {
        return;
      }
      const {
        clientX,
        clientY
      } = touch;
      touchStartCoords = {
        clientX,
        clientY
      };
      longTapTimeout = setTimeout(() => {
        this.dispatchLongtapEvent(element, clientX, clientY);
        reset();
      }, TAP_DELAY);
    });
    const removeTouchmoveListener = this.manager.addEventListener(element, "touchmove.zoneless.passive", ({
      touches
    }) => {
      const touch = touches[0];
      if (!touch || !touchStartCoords) {
        return;
      }
      const {
        clientX,
        clientY
      } = touch;
      if (Math.hypot(clientX - touchStartCoords.clientX, clientY - touchStartCoords.clientY) <= MOVE_THRESHOLD) {
        return;
      }
      reset();
    });
    const removeTouchcancelListener = this.manager.addEventListener(element, "touchcancel.zoneless.passive", reset);
    const removeTouchendListener = this.manager.addEventListener(element, "touchend.zoneless.passive", reset);
    return () => {
      removeTouchstartListener();
      removeTouchmoveListener();
      removeTouchcancelListener();
      removeTouchendListener();
    };
  }
  dispatchLongtapEvent(element, clientX, clientY) {
    element.dispatchEvent(new LongtapEvent("longtap", {
      clientX,
      clientY,
      bubbles: false,
      cancelable: false,
      composed: false
    }));
  }
};
var TimedEventPlugin = class extends EventManagerPlugin {
  supports(event) {
    return this.regExp.test(event);
  }
  getDelay(event) {
    const match = this.regExp.exec(event);
    if (!match?.groups) {
      throw new Error(`Invalid event: ${event}`);
    }
    const {
      time,
      units
    } = match.groups;
    switch (units) {
      case "ms":
        return Number(time);
      case "s":
        return Number(time) * 1e3;
      default:
        throw new Error(`Invalid event: ${event}`);
    }
  }
  unwrap(event) {
    return event.replace(this.regExp, "");
  }
};
var DebounceEventPlugin = class extends TimedEventPlugin {
  constructor() {
    super(...arguments);
    this.regExp = /\.debounce~(?<time>\d+)(?<units>ms|s)/;
  }
  addEventListener(element, eventName, handler) {
    let timeout;
    const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handler(event);
      }, this.getDelay(eventName));
    });
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }
};
var AbstractEventPlugin = class _AbstractEventPlugin extends EventManagerPlugin {
  constructor() {
    super(inject(DOCUMENT));
  }
  supports(event) {
    return event.includes(this.modifier);
  }
  unwrap(event) {
    return event.split(".").filter((v) => !this.modifier.includes(v)).join(".");
  }
  static {
    this.ɵfac = function AbstractEventPlugin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractEventPlugin)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbstractEventPlugin,
      factory: _AbstractEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractEventPlugin, [{
    type: Injectable
  }], () => [], null);
})();
var GLOBAL_HANDLER = new InjectionToken(ngDevMode ? "[GLOBAL_HANDLER]: Global event target handler" : "", {
  factory: () => {
    const document = inject(DOCUMENT);
    return (name) => name.split(".").reduce((obj, prop) => obj?.[prop], document.defaultView);
  }
});
var GlobalEventPlugin = class _GlobalEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.handler = inject(GLOBAL_HANDLER);
    this.modifier = ">";
  }
  addEventListener(_, event, handler) {
    return this.manager.addEventListener(this.handler(event.split(">")[0]), event.split(">")?.[1] ?? "", handler);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGlobalEventPlugin_BaseFactory;
      return function GlobalEventPlugin_Factory(__ngFactoryType__) {
        return (ɵGlobalEventPlugin_BaseFactory || (ɵGlobalEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_GlobalEventPlugin)))(__ngFactoryType__ || _GlobalEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GlobalEventPlugin,
      factory: _GlobalEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var OptionsEventPlugin = class _OptionsEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "capture.once.passive";
  }
  supports(event) {
    return event.includes(".") && !this.unwrap(event).includes(".");
  }
  addEventListener(element, event, handler) {
    const unwrap = this.unwrap(event);
    const capture = event.includes(".capture");
    element.addEventListener(unwrap, handler, {
      capture,
      once: event.includes(".once"),
      passive: event.includes(".passive")
    });
    return () => element.removeEventListener(unwrap, handler, {
      capture
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOptionsEventPlugin_BaseFactory;
      return function OptionsEventPlugin_Factory(__ngFactoryType__) {
        return (ɵOptionsEventPlugin_BaseFactory || (ɵOptionsEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_OptionsEventPlugin)))(__ngFactoryType__ || _OptionsEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OptionsEventPlugin,
      factory: _OptionsEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionsEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var PreventEventPlugin = class _PreventEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".prevent";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.preventDefault();
      handler(event2);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPreventEventPlugin_BaseFactory;
      return function PreventEventPlugin_Factory(__ngFactoryType__) {
        return (ɵPreventEventPlugin_BaseFactory || (ɵPreventEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_PreventEventPlugin)))(__ngFactoryType__ || _PreventEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PreventEventPlugin,
      factory: _PreventEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var ResizePlugin = class _ResizePlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "resize";
  }
  supports(event) {
    return event === "resize";
  }
  addEventListener(element, event, handler) {
    if (typeof ResizeObserver === "undefined" || !(element instanceof Element)) {
      element.addEventListener(event, handler);
      return () => element.removeEventListener(event, handler);
    }
    const observer = new ResizeObserver(handler);
    observer.observe(element);
    return () => observer.disconnect();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵResizePlugin_BaseFactory;
      return function ResizePlugin_Factory(__ngFactoryType__) {
        return (ɵResizePlugin_BaseFactory || (ɵResizePlugin_BaseFactory = ɵɵgetInheritedFactory(_ResizePlugin)))(__ngFactoryType__ || _ResizePlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ResizePlugin,
      factory: _ResizePlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizePlugin, [{
    type: Injectable
  }], null, null);
})();
var SelfEventPlugin = class _SelfEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".self";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      if (event2.target === event2.currentTarget) {
        handler(event2);
      }
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSelfEventPlugin_BaseFactory;
      return function SelfEventPlugin_Factory(__ngFactoryType__) {
        return (ɵSelfEventPlugin_BaseFactory || (ɵSelfEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_SelfEventPlugin)))(__ngFactoryType__ || _SelfEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SelfEventPlugin,
      factory: _SelfEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelfEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var StopEventPlugin = class _StopEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".stop";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.stopPropagation();
      handler(event2);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵStopEventPlugin_BaseFactory;
      return function StopEventPlugin_Factory(__ngFactoryType__) {
        return (ɵStopEventPlugin_BaseFactory || (ɵStopEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_StopEventPlugin)))(__ngFactoryType__ || _StopEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StopEventPlugin,
      factory: _StopEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StopEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var ThrottleEventPlugin = class extends TimedEventPlugin {
  constructor() {
    super(...arguments);
    this.regExp = /\.throttle~(?<time>\d+)(?<units>ms|s)/;
  }
  addEventListener(element, eventName, handler) {
    let timeout;
    const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
      if (timeout !== void 0) {
        return;
      }
      handler(event);
      timeout = setTimeout(() => {
        timeout = void 0;
      }, this.getDelay(eventName));
    });
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }
};
var ZonelessPlugin = class _ZonelessPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".zoneless";
  }
  addEventListener(element, event, handler) {
    _ZonelessPlugin.ngZone = this.manager.getZone();
    return _ZonelessPlugin.ngZone?.runOutsideAngular(() => this.manager.addEventListener(element, this.unwrap(event), handler));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵZonelessPlugin_BaseFactory;
      return function ZonelessPlugin_Factory(__ngFactoryType__) {
        return (ɵZonelessPlugin_BaseFactory || (ɵZonelessPlugin_BaseFactory = ɵɵgetInheritedFactory(_ZonelessPlugin)))(__ngFactoryType__ || _ZonelessPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ZonelessPlugin,
      factory: _ZonelessPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonelessPlugin, [{
    type: Injectable
  }], null, null);
})();
var PLUGINS = [ZonelessPlugin, SelfEventPlugin, GlobalEventPlugin, OptionsEventPlugin, PreventEventPlugin, ResizePlugin, StopEventPlugin, LongtapEventPlugin, DebounceEventPlugin, ThrottleEventPlugin];
var NG_EVENT_PLUGINS = PLUGINS.map((useClass) => ({
  provide: EVENT_MANAGER_PLUGINS,
  multi: true,
  useClass
}));
function provideEventPlugins() {
  return NG_EVENT_PLUGINS;
}

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-miscellaneous.mjs
var TUI_FONT_OFFSET = new InjectionToken(ngDevMode ? "TUI_FONT_OFFSET" : "", { factory: () => signal(0) });
function tuiEnableFontScaling() {
  return {
    provide: TUI_FONT_SIZE_HANDLER,
    useFactory: () => {
      const offset = inject(TUI_FONT_OFFSET);
      const { documentElement } = inject(DOCUMENT);
      return (size) => {
        const current = tuiClamp(size, 17, 28) - 17;
        offset.set(current);
        return documentElement.style.setProperty("--tui-font-offset", tuiPx(current));
      };
    }
  };
}
var TUI_ANIMATIONS_DEFAULT_DURATION = 300;
function tuiGetDuration(speed) {
  return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}
var KEYS = [
  "Spacebar",
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Left",
  "Right",
  "End",
  "Home"
];
function tuiIsEditingKey(key = "") {
  return key.length === 1 || KEYS.includes(key);
}
function tuiIsObscured(el, exceptSelector = "tui-popups") {
  return !!tuiGetElementObscures(el)?.some((el2) => !el2.closest(exceptSelector));
}
function tuiOverrideOptions(override, fallback) {
  return (directive, options) => {
    const result = directive || __spreadValues({}, options || fallback);
    Object.keys(override).forEach((key) => {
      result[key] = override[key];
    });
    return result;
  };
}
var DEFAULT = {
  apis: "stable",
  fontScaling: true,
  scrollbars: "custom"
};
var TUI_OPTIONS = new InjectionToken(ngDevMode ? "TUI_OPTIONS" : "");
function provideTaiga(config = {}) {
  const options = __spreadValues(__spreadValues({}, DEFAULT), config);
  const providers = [
    {
      provide: REMOVE_STYLES_ON_COMPONENT_DESTROY,
      useValue: false
    },
    {
      provide: TUI_OPTIONS,
      useValue: options
    },
    provideEventPlugins(),
    provideAppInitializer(() => {
      const doc = inject(DOCUMENT);
      const meta = inject(Meta);
      const mode = inject(TUI_DARK_MODE);
      if (options.scrollbars === "custom") {
        doc.documentElement.classList.add("tui-zero-scrollbar");
      }
      if (tuiIsPresent(options.mode)) {
        mode.set(options.mode === "dark");
      }
      if (options.fontScaling && !meta.getTag('name="text-scale"')) {
        meta.addTag({ name: "text-scale", content: "scale" });
      }
      effect(() => {
        if (mode()) {
          doc.body.setAttribute("tuiTheme", "dark");
        } else {
          doc.body.removeAttribute("tuiTheme");
        }
      });
    })
  ];
  if (options.fontScaling) {
    providers.push(tuiEnableFontScaling());
  }
  return providers;
}
var SIZES = {
  xxs: 0,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
  xxl: 6
};
function tuiSizeBigger(size, biggerThanSize = "s") {
  return SIZES[size] > SIZES[biggerThanSize];
}

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-dropdown.mjs
var _c02 = (a0) => ({
  $implicit: a0
});
function TuiDropdownComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
var _c1 = ["tuiDropdownHost"];
var TuiDropdownDriver = class _TuiDropdownDriver extends BehaviorSubject {
  constructor() {
    super(false);
    this.type = "dropdown";
  }
  static {
    this.ɵfac = function TuiDropdownDriver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownDriver)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDropdownDriver,
      factory: _TuiDropdownDriver.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriver, [{
    type: Injectable
  }], () => [], null);
})();
var TuiDropdownDriverDirective = class _TuiDropdownDriverDirective extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "dropdown";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownDriverDirective_BaseFactory;
      return function TuiDropdownDriverDirective_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownDriverDirective_BaseFactory || (ɵTuiDropdownDriverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownDriverDirective)))(__ngFactoryType__ || _TuiDropdownDriverDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownDriverDirective,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriverDirective, [{
    type: Directive
  }], null, null);
})();
var TUI_DROPDOWN_DEFAULT_OPTIONS = {
  align: "start",
  direction: null,
  limitWidth: "auto",
  maxHeight: 400,
  minHeight: 80,
  offset: 4,
  appearance: ""
};
var TUI_DROPDOWN_OPTIONS = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_OPTIONS" : "", {
  factory: () => TUI_DROPDOWN_DEFAULT_OPTIONS
});
var tuiDropdownOptionsProvider = (override) => ({
  provide: TUI_DROPDOWN_OPTIONS,
  deps: [[new Optional(), new Self(), TuiDropdownOptionsDirective], [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS)
});
var TuiDropdownOptionsDirective = class _TuiDropdownOptionsDirective {
  constructor() {
    this.options = inject(TUI_DROPDOWN_OPTIONS, {
      skipSelf: true
    });
    this.align = this.options.align;
    this.appearance = this.options.appearance;
    this.direction = this.options.direction;
    this.limitWidth = this.options.limitWidth;
    this.minHeight = this.options.minHeight;
    this.maxHeight = this.options.maxHeight;
    this.offset = this.options.offset;
  }
  static {
    this.ɵfac = function TuiDropdownOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOptionsDirective,
      selectors: [["", "tuiDropdownAlign", ""], ["", "tuiDropdownAppearance", ""], ["", "tuiDropdownDirection", ""], ["", "tuiDropdownLimitWidth", ""], ["", "tuiDropdownMinHeight", ""], ["", "tuiDropdownMaxHeight", ""], ["", "tuiDropdownOffset", ""]],
      inputs: {
        align: [0, "tuiDropdownAlign", "align"],
        appearance: [0, "tuiDropdownAppearance", "appearance"],
        direction: [0, "tuiDropdownDirection", "direction"],
        limitWidth: [0, "tuiDropdownLimitWidth", "limitWidth"],
        minHeight: [0, "tuiDropdownMinHeight", "minHeight"],
        maxHeight: [0, "tuiDropdownMaxHeight", "maxHeight"],
        offset: [0, "tuiDropdownOffset", "offset"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_DROPDOWN_OPTIONS, _TuiDropdownOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOptionsDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]",
      inputs: ["align: tuiDropdownAlign", "appearance: tuiDropdownAppearance", "direction: tuiDropdownDirection", "limitWidth: tuiDropdownLimitWidth", "minHeight: tuiDropdownMinHeight", "maxHeight: tuiDropdownMaxHeight", "offset: tuiDropdownOffset"],
      providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)]
    }]
  }], null, null);
})();
var TuiDropdownPosition = class _TuiDropdownPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.el = tuiInjectElement();
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.direction = new Subject();
    this.type = "dropdown";
    this.accessor = tuiFallbackAccessor("dropdown")(inject(TuiRectAccessor, {
      optional: true
    }), {
      getClientRect: () => this.el.getBoundingClientRect()
    });
    this.tuiDropdownDirectionChange = outputFromObservable(this.direction.pipe(distinctUntilChanged()));
  }
  getPosition({
    width,
    height
  }) {
    if (!width && !height) {
      this.previous = void 0;
    }
    const hostRect = this.accessor.getClientRect();
    const viewportRect = this.viewport.getClientRect();
    const {
      minHeight,
      direction,
      offset,
      limitWidth
    } = this.options;
    const align = this.getAlign(this.options.align);
    const viewport = {
      top: viewportRect.top - offset,
      bottom: viewportRect.bottom + offset,
      right: viewportRect.right - offset,
      left: viewportRect.left + offset
    };
    const previous = this.previous || direction || "bottom";
    const available = {
      top: hostRect.top - 2 * offset - viewport.top,
      bottom: viewport.bottom - hostRect.bottom - 2 * offset
    };
    const rectWidth = limitWidth === "fixed" ? hostRect.width : width;
    const right = Math.max(hostRect.right - rectWidth, offset);
    const left = hostRect.left + width < viewport.right ? hostRect.left : right;
    const position = {
      top: hostRect.top - offset - height,
      bottom: hostRect.bottom + offset,
      right: Math.max(viewport.left, right),
      center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right ? hostRect.left + hostRect.width / 2 - width / 2 : right,
      left: Math.max(viewport.left, left)
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    if (available[previous] > minHeight && direction || available[previous] > height) {
      this.direction.next(previous);
      return [position[align], position[previous]];
    }
    this.previous = better;
    this.direction.next(better);
    return [position[align], position[better]];
  }
  getAlign(align) {
    const rtl = this.el.matches('[dir="rtl"] :scope');
    if (rtl && align === "start") {
      return "right";
    }
    if (rtl && align === "end") {
      return "left";
    }
    if (align === "center") {
      return "center";
    }
    return align === "end" ? "right" : "left";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownPosition_BaseFactory;
      return function TuiDropdownPosition_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownPosition_BaseFactory || (ɵTuiDropdownPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPosition)))(__ngFactoryType__ || _TuiDropdownPosition);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPosition,
      outputs: {
        tuiDropdownDirectionChange: "tuiDropdownDirectionChange"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPosition, [{
    type: Directive
  }], null, null);
})();
var MAX_WIDTH_GAP = 16;
var TuiDropdownComponent = class _TuiDropdownComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.accessor = inject(TuiRectAccessor);
    this.viewport = inject(TUI_VIEWPORT);
    this.vvs = inject(TuiVisualViewportService);
    this.styles$ = inject(TuiPositionService).pipe(takeWhile(() => this.directive.el.isConnected && !!this.directive.el.getBoundingClientRect().height), map((v) => this.position === "fixed" ? this.vvs.correct(v) : v), map((point) => this.getStyles(...point)), takeUntilDestroyed());
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.directive = inject(TuiDropdownDirective);
    this.context = inject(TUI_DROPDOWN_CONTEXT, {
      optional: true
    });
    this.darkMode = inject(TUI_DARK_MODE);
    this.position = this.directive.position;
    this.theme = computed((_ = this.darkMode()) => this.directive.el.closest("[tuiTheme]")?.getAttribute("tuiTheme"));
    this.close = () => this.directive.toggle(false);
  }
  ngAfterViewInit() {
    this.styles$.subscribe({
      next: (styles) => Object.assign(this.el.style, styles),
      complete: () => this.close?.()
    });
  }
  getStyles(x, y) {
    const {
      maxHeight,
      minHeight,
      offset,
      limitWidth
    } = this.options;
    const parent = this.el.offsetParent?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
    const {
      left = 0,
      top = 0
    } = this.position === "fixed" ? {} : parent;
    const rect = this.accessor.getClientRect();
    const viewport = this.viewport.getClientRect();
    const zoom = this.directive.el.currentCSSZoom || 1;
    const above = rect.top - viewport.top - 2 * offset;
    const below = viewport.top + viewport.height - y - offset;
    const available = y > rect.bottom ? below : above;
    const height = this.el.getBoundingClientRect().right <= rect.left || x >= rect.right ? maxHeight : tuiClamp(available, minHeight, maxHeight);
    y -= top;
    x -= left;
    return {
      position: this.position,
      top: tuiPx(Math.round(Math.max(y, offset - top) / zoom)),
      left: tuiPx(Math.round(x / zoom)),
      maxHeight: tuiPx(Math.round(height / zoom)),
      width: limitWidth === "fixed" ? tuiPx(Math.round(rect.width / zoom)) : "",
      minWidth: limitWidth === "min" ? tuiPx(Math.round(rect.width / zoom)) : "",
      maxWidth: tuiPx(Math.round(viewport.width / zoom) - MAX_WIDTH_GAP)
    };
  }
  static {
    this.ɵfac = function TuiDropdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDropdownComponent,
      selectors: [["tui-dropdown"]],
      hostVars: 2,
      hostBindings: function TuiDropdownComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.options.appearance)("tuiTheme", ctx.theme());
        }
      },
      features: [ɵɵProvidersFeature([TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", forwardRef(() => TuiDropdownDirective))]), ɵɵHostDirectivesFeature([TuiActiveZone, TuiAnimated])],
      decls: 2,
      vars: 4,
      consts: [[1, "t-scroll"], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"]],
      template: function TuiDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-scrollbar", 0);
          ɵɵtemplate(1, TuiDropdownComponent_div_1_Template, 2, 1, "div", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.directive.content())("polymorpheusOutletContext", ɵɵpureFunction1(2, _c02, ctx.close));
        }
      },
      dependencies: [PolymorpheusOutlet, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}[_nghost-%COMP%]:has(tui-data-list[data-size=l]){border-radius:var(--tui-radius-l)}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide;pointer-events:none}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-inline-size:calc(100% + 2px);inline-size:max-content;overscroll-behavior:none;margin:-1px}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"],
      changeDetection: 1
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownComponent, [{
    type: Component,
    args: [{
      selector: "tui-dropdown",
      imports: [PolymorpheusOutlet, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", forwardRef(() => TuiDropdownDirective))],
      hostDirectives: [TuiActiveZone, TuiAnimated],
      host: {
        "[attr.data-appearance]": "options.appearance",
        "[attr.tuiTheme]": "theme()"
      },
      template: '<tui-scrollbar class="t-scroll">\n    <div\n        *polymorpheusOutlet="directive.content() as text; context: {$implicit: close}"\n        class="t-primitive"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n',
      styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;isolation:isolate;pointer-events:auto;--tui-from: translateY(-1rem)}:host:has(tui-data-list[data-size=l]){border-radius:var(--tui-radius-l)}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide;pointer-events:none}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:calc(100% + 2px);inline-size:max-content;overscroll-behavior:none;margin:-1px}.t-primitive{padding:1rem}\n"]
    }]
  }], null, null);
})();
var TUI_DROPDOWN_COMPONENT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_COMPONENT" : "", {
  factory: () => TuiDropdownComponent
});
var TUI_DROPDOWN_CONTEXT = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_CONTEXT" : "");
var TUI_DROPDOWN_HOST = new InjectionToken(ngDevMode ? "TUI_DROPDOWN_HOST" : "");
var TuiDropdownA11y = class _TuiDropdownA11y {
  constructor() {
    this.id = tuiGenerateId();
    this.host = inject(TUI_DROPDOWN_HOST);
    this.dropdown = inject(TuiDropdownDirective);
    this.tuiDropdownRole = input("listbox");
    this.sync = effect(() => {
      const content = this.dropdown.content();
      const dropdown = this.dropdown.ref();
      const host = this.host.nativeElement;
      host.setAttribute("aria-expanded", String(!!dropdown));
      host.setAttribute("aria-controls", this.id);
      host.setAttribute("aria-haspopup", untracked(this.tuiDropdownRole));
      dropdown?.location.nativeElement.setAttribute("id", this.id);
      dropdown?.location.nativeElement.setAttribute("role", this.tuiDropdownRole());
      if (content) {
        return;
      }
      host.removeAttribute("aria-expanded");
      host.removeAttribute("aria-controls");
      host.removeAttribute("aria-haspopup");
    });
  }
  static {
    this.ɵfac = function TuiDropdownA11y_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownA11y)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownA11y,
      selectors: [["", "tuiDropdownA11y", ""]],
      inputs: {
        tuiDropdownRole: [1, "tuiDropdownRole"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownA11y, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownA11y]"
    }]
  }], null, null);
})();
var TuiDropdownDirective = class _TuiDropdownDirective {
  constructor() {
    this.refresh$ = new Subject();
    this.service = inject(TuiPopupService);
    this.cdr = inject(ChangeDetectorRef);
    this.drivers = coerceArray(inject(TuiDropdownDriver, {
      self: true,
      optional: true
    }));
    this.sub = this.refresh$.pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed()).subscribe(() => {
      this.ref()?.changeDetectorRef.detectChanges();
      this.ref()?.changeDetectorRef.markForCheck();
    });
    this.autoClose = effect(() => {
      if (!this.content()) {
        this.toggle(false);
      }
    });
    this.ref = signal(null);
    this.el = tuiInjectElement();
    this.type = "dropdown";
    this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR$1));
    this.content = input(null, {
      alias: "tuiDropdown",
      transform: (content) => content instanceof TemplateRef ? new PolymorpheusTemplate(content, this.cdr) : content
    });
  }
  get position() {
    return tuiCheckFixedPosition(this.el) ? "fixed" : "absolute";
  }
  ngAfterViewChecked() {
    if (this.ref()) {
      this.refresh$.next();
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    const ref = this.ref();
    if (show && this.content() && !ref) {
      this.ref.set(this.service.add(this.component));
    } else if (!show && ref) {
      this.ref.set(null);
      ref.destroy();
    }
    this.drivers.forEach((driver) => driver?.next(show));
  }
  static {
    this.ɵfac = function TuiDropdownDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownDirective,
      selectors: [["", "tuiDropdown", "", 5, "ng-container", 5, "ng-template"]],
      hostVars: 2,
      hostBindings: function TuiDropdownDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("tui-dropdown-open", ctx.ref());
        }
      },
      inputs: {
        content: [1, "tuiDropdown", "content"]
      },
      exportAs: ["tuiDropdown"],
      features: [ɵɵProvidersFeature([tuiAsVehicle(_TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)]), ɵɵHostDirectivesFeature([TuiDropdownDriverDirective, {
        directive: TuiDropdownA11y,
        inputs: ["tuiDropdownRole", "tuiDropdownRole"]
      }, {
        directive: TuiDropdownPosition,
        outputs: ["tuiDropdownDirectionChange", "tuiDropdownDirectionChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown]:not(ng-container):not(ng-template)",
      providers: [tuiAsVehicle(TuiDropdownDirective), tuiProvide(TUI_DROPDOWN_HOST, ElementRef)],
      exportAs: "tuiDropdown",
      hostDirectives: [TuiDropdownDriverDirective, {
        directive: TuiDropdownA11y,
        inputs: ["tuiDropdownRole"]
      }, {
        directive: TuiDropdownPosition,
        outputs: ["tuiDropdownDirectionChange"]
      }],
      host: {
        "[class.tui-dropdown-open]": "ref()"
      }
    }]
  }], null, null);
})();
var TuiDropdownClose = class _TuiDropdownClose {
  constructor() {
    this.el = tuiInjectElement();
    this.ref = inject(TuiDropdownDirective).ref;
    this.open = inject(TuiDropdownOpen);
    this.obscured = inject(TuiObscured);
    this.activeZone = inject(TuiActiveZone);
    this.tuiDropdownClose = outputFromObservable(merge(
      inject(TuiDropdownDriver).pipe(tuiIfMap(() => merge(tuiCloseWatcher(), this.obscured.tuiObscured$.pipe(filter(Boolean)), this.activeZone.tuiActiveZoneChange.pipe(filter((a) => !a)), tuiTypedFromEvent(this.el, "focusin").pipe(filter((event) => !this.open.nativeElement.contains(tuiGetActualTarget(event)) || !this.ref()))))),
      // @ts-ignore
      typeof CloseWatcher === "undefined" ? tuiTypedFromEvent(inject(DOCUMENT), "keydown", {
        capture: true
      }).pipe(filter(({
        key
      }) => key === "Escape" && this.open.open() && !this.ref()?.location.nativeElement?.nextElementSibling), tuiStopPropagation()) : EMPTY
    ));
  }
  static {
    this.ɵfac = function TuiDropdownClose_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownClose)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownClose,
      outputs: {
        tuiDropdownClose: "tuiDropdownClose"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownClose, [{
    type: Directive
  }], null, null);
})();
var TuiDropdownOpen = class _TuiDropdownOpen {
  constructor() {
    this.dropdownHost = contentChild("tuiDropdownHost", {
      descendants: true,
      read: ElementRef
    });
    this.directive = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.obscured = inject(TuiObscured);
    this.driver = inject(TuiDropdownDriver);
    this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
    this.enabled = input(true, {
      alias: "tuiDropdownEnabled"
    });
    this.open = model(false, {
      alias: "tuiDropdownOpen"
    });
    this.driveEffect = effect(() => this.drive(this.open()));
    this.syncSub = this.driver.pipe(filter((open) => open !== this.open()), takeUntilDestroyed()).subscribe((open) => this.update(open));
    this.keydownSub = tuiTypedFromEvent(inject(DOCUMENT), "keydown").pipe(takeUntilDestroyed()).subscribe((event) => this.onKeydown(event));
  }
  get nativeElement() {
    const initial = this.dropdownHost()?.nativeElement || this.el;
    const focusable = tuiIsFocusable(initial) ? initial : tuiGetClosestFocusable({
      initial,
      root: this.el
    });
    return this.dropdownHost()?.nativeElement || focusable || this.el;
  }
  toggle(open) {
    if (this.focused && !open) {
      this.nativeElement.focus({
        preventScroll: true
      });
    }
    this.update(open);
  }
  onClick(target) {
    if (!this.editable && this.nativeElement.contains(target)) {
      this.update(!this.open());
    }
  }
  onArrow(event, up) {
    if (!tuiIsElement(event.target) || !this.nativeElement.contains(event.target) || !this.enabled() || !this.directive.content()) {
      return;
    }
    event.preventDefault();
    this.focusDropdown(up);
  }
  get editable() {
    return tuiIsElementEditable(this.nativeElement);
  }
  get focused() {
    return tuiIsFocusedIn(this.nativeElement) || tuiIsFocusedIn(this.dropdown());
  }
  onKeydown(event) {
    const target = tuiGetActualTarget(event);
    if (!event.defaultPrevented && tuiIsEditingKey(event.key) && this.editable && this.focused && tuiIsHTMLElement(target) && !tuiIsElementEditable(target)) {
      this.nativeElement.focus({
        preventScroll: true
      });
    }
  }
  update(open) {
    if (open && !this.enabled()) {
      return this.drive();
    }
    this.open.set(open);
    this.drive();
  }
  drive(open = this.open() && this.enabled()) {
    tuiSetSignal(this.obscured.tuiObscuredEnabled, open);
    this.driver.next(open);
  }
  focusDropdown(previous) {
    const root = this.dropdown();
    if (!root) {
      this.update(true);
      return;
    }
    const doc = this.el.ownerDocument;
    const child = root.appendChild(doc.createElement("div"));
    const initial = previous ? child : root;
    const focusable = tuiGetClosestFocusable({
      initial,
      previous,
      root
    });
    child.remove();
    focusable?.focus();
  }
  static {
    this.ɵfac = function TuiDropdownOpen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOpen)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOpen,
      selectors: [["", "tuiDropdown", "", "tuiDropdownAuto", ""], ["", "tuiDropdown", "", "tuiDropdownOpen", ""], ["", "tuiDropdown", "", "tuiDropdownOpenChange", ""]],
      contentQueries: function TuiDropdownOpen_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.dropdownHost, _c1, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostBindings: function TuiDropdownOpen_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiDropdownOpen_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          })("keydown.arrowDown", function TuiDropdownOpen_keydown_arrowDown_HostBindingHandler($event) {
            return ctx.onArrow($event, false);
          })("keydown.arrowUp", function TuiDropdownOpen_keydown_arrowUp_HostBindingHandler($event) {
            return ctx.onArrow($event, true);
          })("tuiActiveZoneChange", function TuiDropdownOpen_tuiActiveZoneChange_HostBindingHandler() {
            return 0;
          })("tuiDropdownClose", function TuiDropdownOpen_tuiDropdownClose_HostBindingHandler() {
            return ctx.toggle(false);
          });
        }
      },
      inputs: {
        enabled: [1, "tuiDropdownEnabled", "enabled"],
        open: [1, "tuiDropdownOpen", "open"]
      },
      outputs: {
        open: "tuiDropdownOpenChange"
      },
      features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiProvide(TUI_DROPDOWN_HOST, _TuiDropdownOpen)]), ɵɵHostDirectivesFeature([TuiObscured, {
        directive: TuiDropdownClose,
        outputs: ["tuiDropdownClose", "tuiDropdownClose"]
      }, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpen, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown][tuiDropdownAuto],[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiProvide(TUI_DROPDOWN_HOST, TuiDropdownOpen)],
      hostDirectives: [TuiObscured, {
        directive: TuiDropdownClose,
        outputs: ["tuiDropdownClose"]
      }, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange"]
      }],
      host: {
        "(click)": "onClick($event.target)",
        "(keydown.arrowDown)": "onArrow($event, false)",
        "(keydown.arrowUp)": "onArrow($event, true)",
        // TODO: Necessary because startWith(false) + distinctUntilChanged() in TuiActiveZone, think of better solution
        "(tuiActiveZoneChange)": "0",
        "(tuiDropdownClose)": "toggle(false)"
      }
    }]
  }], null, null);
})();
function tuiDropdown(value) {
  return tuiDirectiveBinding(TuiDropdownDirective, "content", value, {});
}
function tuiDropdownEnabled(value) {
  return tuiDirectiveBinding(TuiDropdownOpen, "enabled", value, {});
}
var TuiDropdownContent = class _TuiDropdownContent {
  constructor() {
    this.directive = inject(TuiDropdownDirective);
    tuiSetSignal(this.directive.content, inject(TemplateRef));
    if (isPlatformBrowser(inject(PLATFORM_ID)) && this.directive.el.matches(":focus-within")) {
      this.directive.toggle(true);
    }
  }
  ngOnDestroy() {
    tuiSetSignal(this.directive.content, null);
  }
  static {
    this.ɵfac = function TuiDropdownContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownContent,
      selectors: [["ng-template", "tuiDropdown", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiDropdown]"
    }]
  }], () => [], null);
})();
var TuiDropdownContext = class _TuiDropdownContext extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.isTouch = inject(WA_IS_TOUCH);
    this.currentRect = EMPTY_CLIENT_RECT;
    this.userSelect = computed(() => this.isTouch() ? "none" : null);
    this.activeZone = inject(TuiActiveZone);
    this.driver = inject(TuiDropdownDriver);
    this.doc = inject(DOCUMENT);
    this.sub = merge(tuiTypedFromEvent(this.doc, "pointerdown"), tuiTypedFromEvent(this.doc, "keydown").pipe(filter(({
      key
    }) => key === "Escape")), tuiTypedFromEvent(this.doc, "contextmenu", {
      capture: true
    })).pipe(filter((event) => this.driver.value && !this.activeZone.contains(tuiGetActualTarget(event))), tuiZoneOptimized(), takeUntilDestroyed()).subscribe(() => {
      this.driver.next(false);
      this.currentRect = EMPTY_CLIENT_RECT;
    });
    this.type = "dropdown";
  }
  getClientRect() {
    return this.currentRect;
  }
  onContextMenu(x, y) {
    this.currentRect = tuiPointToClientRect(x, y);
    this.driver.next(true);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownContext_BaseFactory;
      return function TuiDropdownContext_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownContext_BaseFactory || (ɵTuiDropdownContext_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownContext)))(__ngFactoryType__ || _TuiDropdownContext);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownContext,
      selectors: [["", "tuiDropdownContext", ""]],
      hostVars: 6,
      hostBindings: function TuiDropdownContext_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("longtap", function TuiDropdownContext_longtap_HostBindingHandler($event) {
            return ctx.onContextMenu($event.detail.clientX, $event.detail.clientY);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("-webkit-touch-callout", ctx.userSelect())("-webkit-user-select", ctx.userSelect())("user-select", ctx.userSelect());
        }
      },
      features: [ɵɵProvidersFeature([TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(_TuiDropdownContext)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContext, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownContext]",
      providers: [TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(TuiDropdownContext)],
      host: {
        "[style.-webkit-touch-callout]": "userSelect()",
        "[style.-webkit-user-select]": "userSelect()",
        "[style.user-select]": "userSelect()",
        "(longtap)": "onContextMenu($event.detail.clientX, $event.detail.clientY)"
      }
    }]
  }], null, null);
})();
var TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
  showDelay: 200,
  hideDelay: 500
};
var [TUI_DROPDOWN_HOVER_OPTIONS, tuiDropdownHoverOptionsProvider] = tuiCreateOptions(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
var TuiDropdownHover = class _TuiDropdownHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.dropdownHost = contentChild("tuiDropdownHost", {
      descendants: true,
      read: ElementRef
    });
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
    this.activeZone = inject(TuiActiveZone);
    this.open = inject(TuiDropdownOpen, {
      optional: true
    });
    this.stream$ = merge(
      /**
       * Dropdown can be removed not only via click/touch –
       * swipe on mobile devices removes dropdown sheet without triggering new mouseover / mouseout events.
       */
      toObservable(inject(TuiDropdownDirective).ref).pipe(filter((x) => !x && this.hovered()), switchMap(() => tuiTypedFromEvent(this.doc, "pointerdown").pipe(map(tuiGetActualTarget), delay(this.tuiDropdownHideDelay()), startWith(null), takeUntil(fromEvent(this.doc, "mouseover"))))),
      tuiTypedFromEvent(this.doc, "mouseover").pipe(map(tuiGetActualTarget)),
      tuiTypedFromEvent(this.doc, "mouseout").pipe(map((e) => e.relatedTarget))
    ).pipe(map((element) => tuiIsElement(element) && this.isHovered(element)), distinctUntilChanged(), switchMap((v) => of(v).pipe(delay(v ? this.tuiDropdownShowDelay() : this.tuiDropdownHideDelay()), takeUntil(this.open ? fromEvent(this.el, "pointerdown") : EMPTY))), tuiZoneOptimized(), tap((hovered) => {
      this.hovered.set(hovered);
      this.open?.toggle(hovered);
    }), share());
    this.hovered = signal(false);
    this.tuiDropdownShowDelay = input(this.options.showDelay);
    this.tuiDropdownHideDelay = input(this.options.hideDelay);
    this.type = "dropdown";
  }
  onClick(event) {
    if (this.hovered() && this.open) {
      event.preventDefault();
    }
  }
  isHovered(element) {
    const host = this.dropdownHost()?.nativeElement || this.el;
    const hovered = host.contains(element);
    const child = !this.el.contains(element) && this.activeZone.contains(element);
    return hovered || child;
  }
  static {
    this.ɵfac = function TuiDropdownHover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownHover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownHover,
      selectors: [["", "tuiDropdownHover", ""]],
      contentQueries: function TuiDropdownHover_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.dropdownHost, _c1, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostBindings: function TuiDropdownHover_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.capture", function TuiDropdownHover_click_capture_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        tuiDropdownShowDelay: [1, "tuiDropdownShowDelay"],
        tuiDropdownHideDelay: [1, "tuiDropdownHideDelay"]
      },
      features: [ɵɵProvidersFeature([TuiActiveZone, tuiAsDriver(_TuiDropdownHover)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHover, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownHover]",
      providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
      host: {
        "(click.capture)": "onClick($event)"
      }
    }]
  }], () => [], null);
})();
var TuiDropdownFixed = class _TuiDropdownFixed {
  constructor() {
    const override = tuiOverrideOptions({
      limitWidth: "fixed"
    }, TUI_DROPDOWN_DEFAULT_OPTIONS);
    override(inject(TUI_DROPDOWN_OPTIONS, {
      self: true,
      optional: true
    }), null);
  }
  static {
    this.ɵfac = function TuiDropdownFixed_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownFixed)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownFixed,
      features: [ɵɵProvidersFeature([tuiDropdownOptionsProvider({})])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownFixed, [{
    type: Directive,
    args: [{
      providers: [tuiDropdownOptionsProvider({})]
    }]
  }], () => [], null);
})();
var TuiDropdownAuto = class _TuiDropdownAuto {
  constructor() {
    inject(TUI_DROPDOWN_OPTIONS).limitWidth = "auto";
  }
  static {
    this.ɵfac = function TuiDropdownAuto_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownAuto)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownAuto
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownAuto, [{
    type: Directive
  }], () => [], null);
})();
var TuiDropdownManual = class _TuiDropdownManual {
  constructor() {
    this.driver = inject(TuiDropdownDriver);
    this.tuiDropdownManual = input(false);
  }
  ngOnChanges() {
    this.driver.next(!!this.tuiDropdownManual());
  }
  static {
    this.ɵfac = function TuiDropdownManual_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownManual)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownManual,
      selectors: [["", "tuiDropdownManual", ""]],
      inputs: {
        tuiDropdownManual: [1, "tuiDropdownManual"]
      },
      features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownManual, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownManual]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]
    }]
  }], null, null);
})();
var TuiDropdownPositionSided = class _TuiDropdownPositionSided extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.vertical = inject(TuiDropdownPosition);
    this.previous = this.options.direction || "bottom";
    this.tuiDropdownSided = input("");
    this.tuiDropdownSidedOffset = input(4);
    this.type = "dropdown";
  }
  getPosition(rect) {
    if (this.tuiDropdownSided() === false) {
      return this.vertical.getPosition(rect);
    }
    const {
      height,
      width
    } = rect;
    const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
    const viewport = this.viewport.getClientRect();
    const {
      direction,
      offset
    } = this.options;
    const adjusted = this.vertical.getAlign(this.options.align);
    const align = adjusted === "center" ? "left" : adjusted;
    const available = {
      top: hostRect.bottom - viewport.top,
      left: hostRect.left - offset - viewport.left,
      right: viewport.right - hostRect.right - offset,
      bottom: viewport.bottom - hostRect.top
    };
    const position = {
      top: hostRect.bottom - height + this.tuiDropdownSidedOffset() + 1,
      // 1 for border
      left: hostRect.left - width - offset,
      right: hostRect.right + offset,
      bottom: hostRect.top - this.tuiDropdownSidedOffset() - 1
      // 1 for border
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    const maxLeft = available.left > available.right ? position.left : position.right;
    const left = available[align] > width ? position[align] : maxLeft;
    if (available[this.previous] > height && direction || this.previous === better) {
      this.vertical.direction.next(this.previous);
      return [left, position[this.previous]];
    }
    this.previous = better;
    this.vertical.direction.next(better);
    return [left, position[better]];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownPositionSided_BaseFactory;
      return function TuiDropdownPositionSided_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownPositionSided_BaseFactory || (ɵTuiDropdownPositionSided_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPositionSided)))(__ngFactoryType__ || _TuiDropdownPositionSided);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPositionSided,
      selectors: [["", "tuiDropdownSided", ""]],
      inputs: {
        tuiDropdownSided: [1, "tuiDropdownSided"],
        tuiDropdownSidedOffset: [1, "tuiDropdownSidedOffset"]
      },
      features: [ɵɵProvidersFeature([TuiDropdownPosition, tuiAsPositionAccessor(_TuiDropdownPositionSided)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionSided, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownSided]",
      providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)]
    }]
  }], null, null);
})();
var TuiDropdownSelection = class _TuiDropdownSelection extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.vcr = inject(ViewContainerRef);
    this.dropdown = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.handler = computed((visible = this.tuiDropdownSelection()) => tuiIsString(visible) ? TUI_TRUE_HANDLER : visible);
    this.stream$ = combineLatest([toObservable(this.handler), inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), filter((range) => this.isValid(range)), distinctUntilChanged((x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset && x.commonAncestorContainer === y.commonAncestorContainer)), merge(fromEvent(this.el, "scroll", {
      passive: true,
      capture: true
    })).pipe(throttleTime(16, void 0, {
      leading: false,
      trailing: true
    }), startWith(0))]).pipe(tap(([, range]) => {
      this.range = this.el.contains(range.commonAncestorContainer) && tuiIsTextNode(range.commonAncestorContainer) ? range : this.range;
    }), map(([handler, range]) => {
      const contained = this.el.contains(range.commonAncestorContainer);
      const valid = contained && handler(this.range);
      const visible = valid || this.inDropdown(range);
      const active = tuiGetFocused(this.doc);
      const textfield = active && tuiIsTextfield(active) && this.el.contains(active);
      return visible && textfield ? this.isCaretVisible(this.range) : visible;
    }));
    this.range = isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {};
    this.type = "dropdown";
    this.tuiDropdownSelection = input("");
    this.tuiDropdownSelectionPosition = input("selection");
  }
  getClientRect() {
    switch (this.tuiDropdownSelectionPosition()) {
      case "tag": {
        const {
          commonAncestorContainer
        } = this.range;
        const element = tuiIsElement(commonAncestorContainer) ? commonAncestorContainer : commonAncestorContainer.parentNode;
        return element && tuiIsElement(element) ? element.getBoundingClientRect() : EMPTY_CLIENT_RECT;
      }
      case "word":
        return tuiGetWordRange(this.range).getBoundingClientRect();
      default:
        return this.range.getBoundingClientRect();
    }
  }
  ngOnDestroy() {
    if (this.ghost) {
      this.ghostHost.removeChild(this.ghost);
    }
  }
  get ghostHost() {
    return this.el.querySelector("tui-textfield .t-ghost") || this.el;
  }
  getRange() {
    const active = tuiGetFocused(this.doc);
    const selection = this.doc.getSelection();
    const range = active && tuiIsTextfield(active) && this.el.contains(active) ? this.veryVerySadInputFix(active) : selection?.rangeCount && selection.getRangeAt(0) || this.range;
    return range.cloneRange();
  }
  /**
   * Check if given range is at least partially inside dropdown
   */
  inDropdown(range) {
    const {
      startContainer,
      endContainer
    } = range;
    const inDropdown = this.boxContains(range.commonAncestorContainer);
    const hostToDropdown = this.boxContains(endContainer) && this.el.contains(startContainer);
    const dropdownToHost = this.boxContains(startContainer) && this.el.contains(endContainer);
    return inDropdown || hostToDropdown || dropdownToHost;
  }
  /**
   * Check if Node is inside dropdown
   */
  boxContains(node) {
    return !!this.dropdown.ref()?.location.nativeElement.contains(node);
  }
  /**
   * Check if range is not inside tui-textfield's DOM elements
   */
  isValid(range) {
    return !this.el.contains(range.commonAncestorContainer) || !this.el.closest("tui-textfield") || range.intersectsNode(this.ghost || this.el);
  }
  veryVerySadInputFix(element) {
    const {
      ghost = this.initGhost(this.ghostHost)
    } = this;
    const {
      top,
      left,
      width,
      height
    } = this.ghostHost.getBoundingClientRect();
    const {
      selectionStart,
      selectionEnd,
      value
    } = element;
    const range = this.doc.createRange();
    const hostRect = this.ghostHost.getBoundingClientRect();
    ghost.style.top = tuiPx(top - hostRect.top);
    ghost.style.left = tuiPx(left - hostRect.left);
    ghost.style.width = tuiPx(width);
    ghost.style.height = tuiPx(height);
    ghost.textContent = `${CHAR_ZERO_WIDTH_SPACE}${value}${CHAR_NO_BREAK_SPACE}`;
    range.setStart(ghost.firstChild, selectionStart || 0);
    range.setEnd(ghost.firstChild, selectionEnd || 0);
    return range;
  }
  /**
   * Create an invisible DIV styled exactly like input/textarea element inside directive
   */
  initGhost(element) {
    const ghost = this.doc.createElement("div");
    const {
      font,
      letterSpacing,
      textTransform,
      padding,
      borderTop
    } = getComputedStyle(element);
    ghost.style.position = "absolute";
    ghost.style.pointerEvents = "none";
    ghost.style.opacity = "0";
    ghost.style.whiteSpace = "pre-wrap";
    ghost.style.boxSizing = "border-box";
    ghost.style.borderTop = borderTop;
    ghost.style.font = font;
    ghost.style.letterSpacing = letterSpacing;
    ghost.style.textTransform = textTransform;
    ghost.style.padding = padding;
    this.ghostHost.appendChild(ghost);
    this.ghost = ghost;
    return ghost;
  }
  isCaretVisible(range) {
    const caret = range.getBoundingClientRect();
    const host = this.ghostHost.getBoundingClientRect();
    const styles = getComputedStyle(this.ghostHost);
    const fontSize = Number.parseFloat(styles.fontSize) || 16;
    const lineHeight = Number.parseFloat(styles.lineHeight) || fontSize * 1.2;
    const visibleTop = Math.max(caret.top, host.top);
    const visibleBottom = Math.min(caret.bottom, host.bottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const threshold = lineHeight * 0.5;
    return visibleHeight >= threshold;
  }
  static {
    this.ɵfac = function TuiDropdownSelection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownSelection)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownSelection,
      selectors: [["", "tuiDropdownSelection", ""]],
      inputs: {
        tuiDropdownSelection: [1, "tuiDropdownSelection"],
        tuiDropdownSelectionPosition: [1, "tuiDropdownSelectionPosition"]
      },
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiDropdownSelection), tuiAsRectAccessor(_TuiDropdownSelection)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownSelection, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownSelection]",
      providers: [tuiAsDriver(TuiDropdownSelection), tuiAsRectAccessor(TuiDropdownSelection)]
    }]
  }], () => [], null);
})();
var TuiWithDropdownOpen = class _TuiWithDropdownOpen {
  static {
    this.ɵfac = function TuiWithDropdownOpen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithDropdownOpen)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithDropdownOpen,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen", "open", "tuiDropdownEnabled", "tuiDropdownEnabled"],
        outputs: ["tuiDropdownOpenChange", "openChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithDropdownOpen, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen: open", "tuiDropdownEnabled"],
        outputs: ["tuiDropdownOpenChange: openChange"]
      }]
    }]
  }], null, null);
})();
var TuiDropdown = [TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownA11y, TuiDropdownOpen, TuiDropdownManual, TuiDropdownHover, TuiDropdownContent, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection];

export {
  TuiAccessor,
  TuiPositionAccessor,
  TuiRectAccessor,
  tuiProvideAccessor,
  tuiFallbackAccessor,
  tuiPositionAccessorFor,
  tuiRectAccessorFor,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  TuiVehicle,
  tuiAsVehicle,
  TuiDriver,
  tuiAsDriver,
  TuiDriverDirective,
  TuiPopupService,
  TuiPopup,
  TuiPopups,
  tuiCheckFixedPosition,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  TuiPositionService,
  TuiVisualViewportService,
  TUI_FONT_OFFSET,
  tuiEnableFontScaling,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  tuiGetDuration,
  tuiIsEditingKey,
  tuiIsObscured,
  tuiOverrideOptions,
  TUI_OPTIONS,
  provideTaiga,
  tuiSizeBigger,
  TuiDropdownDriver,
  TuiDropdownDriverDirective,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  tuiDropdownOptionsProvider,
  TuiDropdownOptionsDirective,
  TuiDropdownPosition,
  TuiDropdownComponent,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_CONTEXT,
  TUI_DROPDOWN_HOST,
  TuiDropdownA11y,
  TuiDropdownDirective,
  TuiDropdownClose,
  TuiDropdownOpen,
  tuiDropdown,
  tuiDropdownEnabled,
  TuiDropdownContent,
  TuiDropdownContext,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  tuiDropdownHoverOptionsProvider,
  TuiDropdownHover,
  TuiDropdownFixed,
  TuiDropdownAuto,
  TuiDropdownManual,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiWithDropdownOpen,
  TuiDropdown
};
//# sourceMappingURL=chunk-5C76XODH.js.map
