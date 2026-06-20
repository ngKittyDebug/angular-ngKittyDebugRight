import {
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  WA_IS_MOBILE,
  tuiInjectElement,
  tuiIsElement,
  tuiTypedFromEvent,
  tuiWatch,
  tuiZoneOptimized
} from "./chunk-YH3GNO5H.js";
import {
  Directive,
  Injectable,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective
} from "./chunk-UWXEFF5S.js";
import {
  outputFromObservable,
  toSignal
} from "./chunk-ETGSZUYA.js";
import {
  NgZone,
  inject,
  ɵɵdefineInjectable
} from "./chunk-6UR4NGDW.js";
import {
  Observable,
  distinctUntilChanged,
  filter,
  map,
  merge,
  of
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-hovered.mjs
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var TuiHoveredService = class _TuiHoveredService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.stream$ = merge(
      tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el, "mouseout").pipe(filter(movedOut), map(TUI_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
  static {
    this.ɵfac = function TuiHoveredService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHoveredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiHoveredService,
      factory: _TuiHoveredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], () => [], null);
})();
function tuiHovered() {
  return toSignal(inject(WA_IS_MOBILE) ? of(false) : inject(TuiHoveredService).pipe(tuiWatch()), {
    initialValue: false
  });
}
var TuiHovered = class _TuiHovered {
  constructor() {
    this.tuiHoveredChange = outputFromObservable(inject(TuiHoveredService));
  }
  static {
    this.ɵfac = function TuiHovered_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHovered)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHovered,
      selectors: [["", "tuiHoveredChange", ""]],
      outputs: {
        tuiHoveredChange: "tuiHoveredChange"
      },
      features: [ɵɵProvidersFeature([TuiHoveredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHovered, [{
    type: Directive,
    args: [{
      selector: "[tuiHoveredChange]",
      providers: [TuiHoveredService]
    }]
  }], null, null);
})();

export {
  TuiHoveredService,
  tuiHovered,
  TuiHovered
};
//# sourceMappingURL=chunk-7KPWPOU4.js.map
