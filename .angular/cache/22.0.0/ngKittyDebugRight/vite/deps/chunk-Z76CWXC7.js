import {
  tuiDistanceBetweenTouches,
  tuiInjectElement,
  tuiIsPresent,
  tuiPreventDefault,
  tuiTypedFromEvent
} from "./chunk-YH3GNO5H.js";
import {
  Directive,
  Injectable,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵstyleProp
} from "./chunk-UWXEFF5S.js";
import {
  outputFromObservable
} from "./chunk-ETGSZUYA.js";
import {
  DOCUMENT,
  InjectionToken,
  inject,
  ɵɵdefineInjectable
} from "./chunk-6UR4NGDW.js";
import {
  Observable,
  filter,
  map,
  merge,
  pairwise,
  repeat,
  scan,
  switchMap,
  takeUntil
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-pan.mjs
var TuiPanService = class _TuiPanService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const doc = inject(DOCUMENT);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }), tuiTypedFromEvent(el, "mousedown")).pipe(switchMap(() => merge(tuiTypedFromEvent(doc, "touchmove", {
      passive: true
    }).pipe(filter(({
      touches
    }) => touches.length < 2), map(({
      touches
    }) => touches[0])), tuiTypedFromEvent(doc, "mousemove"))), pairwise(), map(([first, second]) => {
      const deltaX = (second?.clientX ?? 0) - (first?.clientX ?? 0);
      const deltaY = (second?.clientY ?? 0) - (first?.clientY ?? 0);
      return [deltaX, deltaY];
    }), takeUntil(merge(tuiTypedFromEvent(doc, "touchend"), tuiTypedFromEvent(doc, "mouseup"))), repeat()).subscribe(subscriber));
  }
  static {
    this.ɵfac = function TuiPanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPanService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPanService,
      factory: _TuiPanService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiPan = class _TuiPan {
  constructor() {
    this.tuiPan = outputFromObservable(inject(TuiPanService));
  }
  static {
    this.ɵfac = function TuiPan_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPan)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPan,
      selectors: [["", "tuiPan", ""]],
      outputs: {
        tuiPan: "tuiPan"
      },
      features: [ɵɵProvidersFeature([TuiPanService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPan, [{
    type: Directive,
    args: [{
      selector: "[tuiPan]",
      providers: [TuiPanService]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-swipe.mjs
var TUI_SWIPE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_SWIPE_OPTIONS" : "", {
  factory: () => ({
    timeout: 500,
    threshold: 30
  })
});
var TuiSwipeService = class _TuiSwipeService extends Observable {
  constructor() {
    const doc = inject(DOCUMENT);
    const el = tuiInjectElement();
    const {
      timeout,
      threshold
    } = inject(TUI_SWIPE_OPTIONS);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }), tuiTypedFromEvent(doc, "touchend")).pipe(pairwise(), filter(([first, second]) => !!first.touches.length && first.touches[0]?.identifier === second.changedTouches[0]?.identifier), map(([start, end]) => {
      const startX = start.touches[0]?.clientX ?? 0;
      const startY = start.touches[0]?.clientY ?? 0;
      const endX = end.changedTouches[0]?.clientX ?? 0;
      const endY = end.changedTouches[0]?.clientY ?? 0;
      const distanceX = startX - endX;
      const distanceY = startY - endY;
      const duration = end.timeStamp - start.timeStamp;
      return (Math.abs(distanceX) > threshold || Math.abs(distanceY) > threshold) && duration < timeout ? {
        direction: tuiGetSwipeDirection(distanceX, distanceY),
        events: [start, end]
      } : null;
    }), filter(tuiIsPresent)).subscribe(subscriber));
  }
  static {
    this.ɵfac = function TuiSwipeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwipeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiSwipeService,
      factory: _TuiSwipeService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeService, [{
    type: Injectable
  }], () => [], null);
})();
function tuiGetSwipeDirection(deltaX, deltaY) {
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    return deltaY > 0 ? "top" : "bottom";
  }
  return deltaX > 0 ? "left" : "right";
}
var TuiSwipe = class _TuiSwipe {
  constructor() {
    this.tuiSwipe = outputFromObservable(inject(TuiSwipeService));
  }
  static {
    this.ɵfac = function TuiSwipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwipe)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSwipe,
      selectors: [["", "tuiSwipe", ""]],
      outputs: {
        tuiSwipe: "tuiSwipe"
      },
      features: [ɵɵProvidersFeature([TuiSwipeService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipe, [{
    type: Directive,
    args: [{
      selector: "[tuiSwipe]",
      providers: [TuiSwipeService]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-zoom.mjs
var TUI_ZOOM_OPTIONS = new InjectionToken(ngDevMode ? "TUI_ZOOM_OPTIONS" : "", {
  factory: () => ({
    wheelSensitivity: 0.01
  })
});
var TOUCH_SENSITIVITY = 0.01;
var TuiZoomService = class _TuiZoomService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const {
      wheelSensitivity
    } = inject(TUI_ZOOM_OPTIONS);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }).pipe(filter(({
      touches
    }) => touches.length > 1), switchMap((startEvent) => tuiTypedFromEvent(el, "touchmove", {
      passive: true
    }).pipe(tuiPreventDefault(), scan((prev, event) => {
      const distance = tuiDistanceBetweenTouches(event);
      return {
        event,
        distance,
        delta: (distance - prev.distance) * TOUCH_SENSITIVITY
      };
    }, {
      event: startEvent,
      distance: tuiDistanceBetweenTouches(startEvent),
      delta: 0
    }), map(({
      event,
      delta
    }) => {
      const clientX = ((event.touches[0]?.clientX ?? 0) + (event.touches[1]?.clientX ?? 0)) / 2;
      const clientY = ((event.touches[0]?.clientY ?? 0) + (event.touches[1]?.clientY ?? 0)) / 2;
      return {
        clientX,
        clientY,
        delta,
        event
      };
    }), takeUntil(tuiTypedFromEvent(el, "touchend"))))), tuiTypedFromEvent(el, "wheel", {
      passive: false
    }).pipe(tuiPreventDefault(), map((wheel) => ({
      clientX: wheel.clientX,
      clientY: wheel.clientY,
      delta: -wheel.deltaY * wheelSensitivity,
      event: wheel
    })))).subscribe(subscriber));
  }
  static {
    this.ɵfac = function TuiZoomService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiZoomService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiZoomService,
      factory: _TuiZoomService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiZoom = class _TuiZoom {
  constructor() {
    this.tuiZoom = inject(TuiZoomService);
  }
  static {
    this.ɵfac = function TuiZoom_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiZoom)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiZoom,
      selectors: [["", "tuiZoom", ""]],
      hostVars: 2,
      hostBindings: function TuiZoom_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("touch-action", "none");
        }
      },
      outputs: {
        tuiZoom: "tuiZoom"
      },
      features: [ɵɵProvidersFeature([TuiZoomService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoom, [{
    type: Directive,
    args: [{
      selector: "[tuiZoom]",
      outputs: ["tuiZoom"],
      providers: [TuiZoomService],
      host: {
        "[style.touch-action]": '"none"'
      }
    }]
  }], null, null);
})();

export {
  TuiPanService,
  TuiPan,
  TUI_SWIPE_OPTIONS,
  TuiSwipeService,
  TuiSwipe,
  TUI_ZOOM_OPTIONS,
  TuiZoomService,
  TuiZoom
};
//# sourceMappingURL=chunk-Z76CWXC7.js.map
