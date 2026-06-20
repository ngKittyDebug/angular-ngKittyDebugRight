import {
  Directive,
  ElementRef,
  Injectable,
  Output,
  output,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective
} from "./chunk-UWXEFF5S.js";
import {
  InjectionToken,
  inject,
  ɵɵdefineInjectable
} from "./chunk-6UR4NGDW.js";
import {
  Observable
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@ng-web-apis+mutation-obser_4382b37ca1489e1e85be024b33eebea5/node_modules/@ng-web-apis/mutation-observer/fesm2022/ng-web-apis-mutation-observer.mjs
var SafeObserver = typeof MutationObserver !== "undefined" ? MutationObserver : class {
  observe() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_MUTATION_OBSERVER_INIT = new InjectionToken(ngDevMode ? "[WA_MUTATION_OBSERVER_INIT]" : "");
function booleanAttribute(element, attribute) {
  return element.getAttribute(attribute) !== null || void 0;
}
function mutationObserverInitFactory() {
  const {
    nativeElement
  } = inject(ElementRef);
  const attributeFilter = nativeElement.getAttribute("attributeFilter");
  return {
    attributeFilter: attributeFilter?.split(",").map((attr) => attr.trim()),
    attributeOldValue: booleanAttribute(nativeElement, "attributeOldValue"),
    attributes: booleanAttribute(nativeElement, "attributes"),
    characterData: booleanAttribute(nativeElement, "characterData"),
    characterDataOldValue: booleanAttribute(nativeElement, "characterDataOldValue"),
    childList: booleanAttribute(nativeElement, "childList"),
    subtree: booleanAttribute(nativeElement, "subtree")
  };
}
var WaMutationObserver = class _WaMutationObserver extends SafeObserver {
  nativeElement = inject(ElementRef).nativeElement;
  config = inject(WA_MUTATION_OBSERVER_INIT);
  attributeFilter = "";
  attributeOldValue = "";
  attributes = "";
  characterData = "";
  characterDataOldValue = "";
  childList = "";
  subtree = "";
  waMutationObserver = output();
  constructor() {
    super((records) => {
      this.waMutationObserver.emit(records);
    });
    this.observe(this.nativeElement, this.config);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaMutationObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaMutationObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaMutationObserver,
    selectors: [["", "waMutationObserver", ""]],
    inputs: {
      attributeFilter: "attributeFilter",
      attributeOldValue: "attributeOldValue",
      attributes: "attributes",
      characterData: "characterData",
      characterDataOldValue: "characterDataOldValue",
      childList: "childList",
      subtree: "subtree"
    },
    outputs: {
      waMutationObserver: "waMutationObserver"
    },
    exportAs: ["MutationObserver"],
    features: [ɵɵProvidersFeature([{
      provide: WA_MUTATION_OBSERVER_INIT,
      useFactory: mutationObserverInitFactory
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaMutationObserver, [{
    type: Directive,
    args: [{
      selector: "[waMutationObserver]",
      inputs: ["attributeFilter", "attributeOldValue", "attributes", "characterData", "characterDataOldValue", "childList", "subtree"],
      providers: [{
        provide: WA_MUTATION_OBSERVER_INIT,
        useFactory: mutationObserverInitFactory
      }],
      exportAs: "MutationObserver"
    }]
  }], () => [], {
    waMutationObserver: [{
      type: Output,
      args: ["waMutationObserver"]
    }]
  });
})();
var WaMutationObserverService = class _WaMutationObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const config = inject(WA_MUTATION_OBSERVER_INIT);
    super((subscriber) => {
      const observer = new SafeObserver((records) => {
        subscriber.next(records);
      });
      observer.observe(nativeElement, config);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function WaMutationObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaMutationObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaMutationObserverService,
    factory: _WaMutationObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaMutationObserverService, [{
    type: Injectable
  }], () => [], null);
})();

export {
  WA_MUTATION_OBSERVER_INIT,
  WaMutationObserver,
  WaMutationObserverService
};
//# sourceMappingURL=chunk-4X6TQHJY.js.map
