import {
  TUI_FALLBACK_VALUE
} from "./chunk-KA6RXUAL.js";
import {
  EMPTY_FUNCTION,
  WA_WINDOW,
  tuiProvide
} from "./chunk-YH3GNO5H.js";
import {
  NgControl,
  NgModel
} from "./chunk-XHNSMQQ5.js";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Injectable,
  Output,
  input,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective
} from "./chunk-UWXEFF5S.js";
import {
  outputFromObservable,
  takeUntilDestroyed
} from "./chunk-ETGSZUYA.js";
import {
  InjectionToken,
  computed,
  inject,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-6UR4NGDW.js";
import {
  Observable,
  Subject,
  delay,
  distinctUntilChanged,
  filter,
  identity,
  map,
  merge,
  startWith,
  switchMap
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-classes.mjs
var TuiValueTransformer = class {
};
function tuiValueTransformerFrom(token) {
  return {
    provide: TuiValueTransformer,
    useFactory: () => inject(token).valueTransformer
  };
}
var TuiNonNullableValueTransformer = class extends TuiValueTransformer {
  fromControlValue(value) {
    this.prevValue = value;
    return value;
  }
  toControlValue(value) {
    this.prevValue = value ?? this.prevValue;
    return this.prevValue;
  }
};
var TUI_IDENTITY_VALUE_TRANSFORMER = {
  fromControlValue: identity,
  toControlValue: identity
};
var FLAGS = {
  self: true,
  optional: true
};
var TuiControl = class _TuiControl {
  constructor() {
    this.fallback = inject(TUI_FALLBACK_VALUE, FLAGS);
    this.refresh$ = new Subject();
    this.internal = signal(this.fallback);
    this.control = inject(NgControl, {
      self: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.transformer = inject(TuiValueTransformer, FLAGS) ?? TUI_IDENTITY_VALUE_TRANSFORMER;
    this.value = computed(() => this.internal() ?? this.fallback);
    this.readOnly = input(false);
    this.pseudoInvalid = input(void 0, {
      alias: "invalid"
    });
    this.touched = signal(false);
    this.status = signal(void 0);
    this.disabled = computed(() => this.status() === "DISABLED");
    this.interactive = computed(() => !this.disabled() && !this.readOnly());
    this.invalid = computed(() => {
      const pseudoInvalid = this.pseudoInvalid();
      return pseudoInvalid == null ? this.interactive() && this.touched() && this.status() === "INVALID" : pseudoInvalid && this.interactive();
    });
    this.mode = computed(() => (
      // eslint-disable-next-line no-nested-ternary
      this.readOnly() ? "readonly" : this.invalid() ? "invalid" : "valid"
    ));
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.control.valueAccessor = this;
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.control.control), filter(Boolean), distinctUntilChanged(), switchMap((c) => merge(c.valueChanges, c.statusChanges, c.events).pipe(startWith(null))), takeUntilDestroyed()).subscribe(() => this.update());
  }
  registerOnChange(onChange) {
    this.refresh$.next();
    this.onChange = (value) => {
      const internal = untracked(this.internal);
      if (value === internal) {
        return;
      }
      onChange(this.transformer.toControlValue(value));
      this.internal.set(value);
      this.update();
    };
  }
  registerOnTouched(onTouched) {
    this.onTouched = () => {
      onTouched();
      this.update();
    };
  }
  setDisabledState() {
    this.update();
  }
  writeValue(value) {
    const safe = this.control instanceof NgModel ? this.control.model : value;
    this.internal.set(this.transformer.fromControlValue(safe));
    this.update();
  }
  update() {
    this.status.set(this.control.control?.status);
    this.touched.set(!!this.control.control?.touched);
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function TuiControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiControl)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiControl,
      inputs: {
        readOnly: [1, "readOnly"],
        pseudoInvalid: [1, "invalid", "pseudoInvalid"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControl, [{
    type: Directive
  }], () => [], null);
})();
function tuiAsControl(control) {
  return tuiProvide(TuiControl, control);
}
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/.pnpm/@ng-web-apis+resize-observe_92fc4a464db492473ec110b5e14731cc/node_modules/@ng-web-apis/resize-observer/fesm2022/ng-web-apis-resize-observer.mjs
var SafeObserver = typeof ResizeObserver !== "undefined" ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
};
var WA_RESIZE_OPTION_BOX_DEFAULT = "content-box";
var WA_RESIZE_OPTION_BOX = new InjectionToken(ngDevMode ? "[WA_RESIZE_OPTION_BOX]" : "", {
  factory: () => WA_RESIZE_OPTION_BOX_DEFAULT
});
var WaResizeObserverService = class _WaResizeObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const box = inject(WA_RESIZE_OPTION_BOX);
    super((subscriber) => {
      const observer = new SafeObserver((entries) => subscriber.next(entries));
      observer.observe(nativeElement, {
        box
      });
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function WaResizeObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaResizeObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaResizeObserverService,
    factory: _WaResizeObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaResizeObserverService, [{
    type: Injectable
  }], () => [], null);
})();
var WaResizeObserver = class _WaResizeObserver {
  waResizeObserver = outputFromObservable(inject(WaResizeObserverService));
  waResizeBox = WA_RESIZE_OPTION_BOX_DEFAULT;
  static ɵfac = function WaResizeObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaResizeObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaResizeObserver,
    selectors: [["", "waResizeObserver", ""]],
    inputs: {
      waResizeBox: "waResizeBox"
    },
    outputs: {
      waResizeObserver: "waResizeObserver"
    },
    features: [ɵɵProvidersFeature([WaResizeObserverService, {
      provide: WA_RESIZE_OPTION_BOX,
      useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || WA_RESIZE_OPTION_BOX_DEFAULT
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaResizeObserver, [{
    type: Directive,
    args: [{
      selector: "[waResizeObserver]",
      inputs: ["waResizeBox"],
      providers: [WaResizeObserverService, {
        provide: WA_RESIZE_OPTION_BOX,
        useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || WA_RESIZE_OPTION_BOX_DEFAULT
      }]
    }]
  }], null, {
    waResizeObserver: [{
      type: Output,
      args: ["waResizeObserver"]
    }]
  });
})();
var WA_RESIZE_OBSERVER_SUPPORT = new InjectionToken(ngDevMode ? "[WA_RESIZE_OBSERVER_SUPPORT]" : "", {
  factory: () => !!inject(WA_WINDOW).ResizeObserver
});

export {
  TuiValueTransformer,
  tuiValueTransformerFrom,
  TuiNonNullableValueTransformer,
  TUI_IDENTITY_VALUE_TRANSFORMER,
  TuiControl,
  tuiAsControl,
  TuiValidationError,
  WaResizeObserverService,
  WaResizeObserver
};
//# sourceMappingURL=chunk-P34HLSLH.js.map
