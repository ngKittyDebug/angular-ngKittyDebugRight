import {
  WA_WINDOW
} from "./chunk-YH3GNO5H.js";
import {
  Directive,
  ElementRef,
  Injectable,
  Output,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective
} from "./chunk-UWXEFF5S.js";
import {
  outputFromObservable
} from "./chunk-ETGSZUYA.js";
import {
  InjectionToken,
  inject,
  ɵɵdefineInjectable
} from "./chunk-6UR4NGDW.js";
import {
  Observable,
  share
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@ng-web-apis+intersection-o_eb351381155d28e1a236e134bdb5eb90/node_modules/@ng-web-apis/intersection-observer/fesm2022/ng-web-apis-intersection-observer.mjs
var SafeObserver = typeof IntersectionObserver !== "undefined" ? IntersectionObserver : class {
  root = null;
  rootMargin = "";
  thresholds = [];
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_INTERSECTION_ROOT = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_ROOT]" : "");
var WA_INTERSECTION_ROOT_MARGIN_DEFAULT = "0px 0px 0px 0px";
var WA_INTERSECTION_ROOT_MARGIN = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_ROOT_MARGIN]" : "", {
  factory: () => WA_INTERSECTION_ROOT_MARGIN_DEFAULT
});
function rootMarginFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionRootMargin") || WA_INTERSECTION_ROOT_MARGIN_DEFAULT;
}
var WA_INTERSECTION_THRESHOLD_DEFAULT = 0;
var WA_INTERSECTION_THRESHOLD = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_THRESHOLD]" : "", {
  factory: () => WA_INTERSECTION_THRESHOLD_DEFAULT
});
function thresholdFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionThreshold")?.split(",").map(parseFloat) || WA_INTERSECTION_THRESHOLD_DEFAULT;
}
var WaIntersectionObserverDirective = class _WaIntersectionObserverDirective extends SafeObserver {
  callbacks = /* @__PURE__ */ new Map();
  margin = "";
  threshold = "";
  constructor() {
    const root = inject(WA_INTERSECTION_ROOT, {
      optional: true
    });
    super((entries) => {
      this.callbacks.forEach((callback, element) => {
        const filtered = entries.filter(({
          target
        }) => target === element);
        if (filtered.length) {
          callback(filtered, this);
        }
      });
    }, {
      root: root?.nativeElement,
      rootMargin: rootMarginFactory(),
      threshold: thresholdFactory()
    });
  }
  observe(target, callback = () => {
  }) {
    super.observe(target);
    this.callbacks.set(target, callback);
  }
  unobserve(target) {
    super.unobserve(target);
    this.callbacks.delete(target);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaIntersectionObserverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserverDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObserverDirective,
    selectors: [["", "waIntersectionObserver", ""]],
    inputs: {
      margin: [0, "waIntersectionRootMargin", "margin"],
      threshold: [0, "waIntersectionThreshold", "threshold"]
    },
    exportAs: ["IntersectionObserver"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[waIntersectionObserver]",
      inputs: ["margin: waIntersectionRootMargin", "threshold: waIntersectionThreshold"],
      exportAs: "IntersectionObserver"
    }]
  }], () => [], null);
})();
var WaIntersectionObserveeService = class _WaIntersectionObserveeService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const observer = inject(WaIntersectionObserverDirective);
    super((subscriber) => {
      observer.observe(nativeElement, (entries) => {
        subscriber.next(entries);
      });
      return () => {
        observer.unobserve(nativeElement);
      };
    });
    return this.pipe(share());
  }
  static ɵfac = function WaIntersectionObserveeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserveeService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaIntersectionObserveeService,
    factory: _WaIntersectionObserveeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserveeService, [{
    type: Injectable
  }], () => [], null);
})();
var WaIntersectionObservee = class _WaIntersectionObservee {
  waIntersectionObservee = outputFromObservable(inject(WaIntersectionObserveeService));
  static ɵfac = function WaIntersectionObservee_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObservee)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObservee,
    selectors: [["", "waIntersectionObservee", ""]],
    outputs: {
      waIntersectionObservee: "waIntersectionObservee"
    },
    features: [ɵɵProvidersFeature([WaIntersectionObserveeService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObservee, [{
    type: Directive,
    args: [{
      selector: "[waIntersectionObservee]",
      providers: [WaIntersectionObserveeService]
    }]
  }], null, {
    waIntersectionObservee: [{
      type: Output,
      args: ["waIntersectionObservee"]
    }]
  });
})();
var WaIntersectionRoot = class _WaIntersectionRoot {
  static ɵfac = function WaIntersectionRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionRoot)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionRoot,
    selectors: [["", "waIntersectionRoot", ""]],
    features: [ɵɵProvidersFeature([{
      provide: WA_INTERSECTION_ROOT,
      useExisting: ElementRef
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionRoot, [{
    type: Directive,
    args: [{
      selector: "[waIntersectionRoot]",
      providers: [{
        provide: WA_INTERSECTION_ROOT,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var WaIntersectionObserver = [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot];
var WaIntersectionObserverService = class _WaIntersectionObserverService extends Observable {
  nativeElement = inject(ElementRef).nativeElement;
  rootMargin = inject(WA_INTERSECTION_ROOT_MARGIN);
  threshold = inject(WA_INTERSECTION_THRESHOLD);
  root = inject(WA_INTERSECTION_ROOT, {
    optional: true
  })?.nativeElement ?? null;
  constructor() {
    super((subscriber) => {
      const observer = new SafeObserver((entries) => {
        subscriber.next(entries);
      }, {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      });
      observer.observe(this.nativeElement);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function WaIntersectionObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaIntersectionObserverService,
    factory: _WaIntersectionObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverService, [{
    type: Injectable
  }], () => [], null);
})();
var WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken(ngDevMode ? "[WA_INTERSECTION_OBSERVER_SUPPORT]" : "", {
  factory: () => !!inject(WA_WINDOW).IntersectionObserver
});

export {
  WA_INTERSECTION_ROOT,
  WaIntersectionObserverDirective,
  WaIntersectionObservee,
  WaIntersectionRoot,
  WaIntersectionObserver
};
//# sourceMappingURL=chunk-5DJGLATO.js.map
