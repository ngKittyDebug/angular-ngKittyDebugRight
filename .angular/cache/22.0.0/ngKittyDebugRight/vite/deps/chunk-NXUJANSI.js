import {
  TuiValidator
} from "./chunk-BHX6R23J.js";
import {
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_FALSE_HANDLER,
  tuiProvide
} from "./chunk-YH3GNO5H.js";
import {
  NG_VALIDATORS
} from "./chunk-XHNSMQQ5.js";
import {
  Directive,
  Optional,
  SkipSelf,
  input,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-UWXEFF5S.js";
import {
  InjectionToken,
  effect,
  inject,
  signal
} from "./chunk-6UR4NGDW.js";
import {
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-items-handlers.mjs
var TUI_DEFAULT_ITEMS_HANDLERS = {
  stringify: signal(String),
  identityMatcher: signal(TUI_DEFAULT_IDENTITY_MATCHER),
  disabledItemHandler: signal(TUI_FALSE_HANDLER)
};
var TUI_ITEMS_HANDLERS = new InjectionToken(ngDevMode ? "TUI_ITEMS_HANDLERS" : "", {
  factory: () => TUI_DEFAULT_ITEMS_HANDLERS
});
function tuiItemsHandlersProvider(options) {
  return {
    provide: TUI_ITEMS_HANDLERS,
    deps: [[new Optional(), new SkipSelf(), TUI_ITEMS_HANDLERS]],
    useFactory: (parent) => __spreadValues({
      stringify: signal(parent?.stringify() ?? TUI_DEFAULT_ITEMS_HANDLERS.stringify()),
      identityMatcher: signal(parent?.identityMatcher() ?? TUI_DEFAULT_ITEMS_HANDLERS.identityMatcher()),
      disabledItemHandler: signal(parent?.disabledItemHandler() ?? TUI_DEFAULT_ITEMS_HANDLERS.disabledItemHandler())
    }, options)
  };
}
var TuiItemsHandlersDirective = class _TuiItemsHandlersDirective {
  constructor() {
    this.handlers = inject(TUI_ITEMS_HANDLERS, {
      skipSelf: true
    });
    this.stringify = input(this.handlers.stringify());
    this.identityMatcher = input(this.handlers.identityMatcher());
    this.disabledItemHandler = input(this.handlers.disabledItemHandler());
  }
  static {
    this.ɵfac = function TuiItemsHandlersDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsHandlersDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsHandlersDirective,
      inputs: {
        stringify: [1, "stringify"],
        identityMatcher: [1, "identityMatcher"],
        disabledItemHandler: [1, "disabledItemHandler"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_ITEMS_HANDLERS, _TuiItemsHandlersDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsHandlersDirective, [{
    type: Directive,
    args: [{
      providers: [tuiProvide(TUI_ITEMS_HANDLERS, TuiItemsHandlersDirective)]
    }]
  }], null, null);
})();
var TuiWithItemsHandlers = class _TuiWithItemsHandlers {
  static {
    this.ɵfac = function TuiWithItemsHandlers_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithItemsHandlers)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithItemsHandlers,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiItemsHandlersDirective,
        inputs: ["stringify", "stringify", "identityMatcher", "identityMatcher", "disabledItemHandler", "disabledItemHandler"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithItemsHandlers, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiItemsHandlersDirective,
        inputs: ["stringify", "identityMatcher", "disabledItemHandler"]
      }]
    }]
  }], null, null);
})();
var TuiItemsHandlersValidator = class _TuiItemsHandlersValidator extends TuiValidator {
  constructor() {
    super(...arguments);
    this.handlers = inject(TuiItemsHandlersDirective);
    this.initialized = false;
    this.update = effect(() => {
      this.handlers.disabledItemHandler();
      if (this.initialized) {
        this.onChange();
      } else {
        this.initialized = true;
      }
    });
    this.disabledItemHandler = (value) => Array.isArray(value) ? value.some((item) => this.handlers.disabledItemHandler()(item)) : Boolean(value) && this.handlers.disabledItemHandler()(value);
    this.validate = ({
      value
    }) => this.disabledItemHandler(value) ? {
      tuiDisabledItem: value
    } : null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiItemsHandlersValidator_BaseFactory;
      return function TuiItemsHandlersValidator_Factory(__ngFactoryType__) {
        return (ɵTuiItemsHandlersValidator_BaseFactory || (ɵTuiItemsHandlersValidator_BaseFactory = ɵɵgetInheritedFactory(_TuiItemsHandlersValidator)))(__ngFactoryType__ || _TuiItemsHandlersValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsHandlersValidator,
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiItemsHandlersValidator, true)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsHandlersValidator, [{
    type: Directive,
    args: [{
      providers: [tuiProvide(NG_VALIDATORS, TuiItemsHandlersValidator, true)]
    }]
  }], null, null);
})();

export {
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_ITEMS_HANDLERS,
  tuiItemsHandlersProvider,
  TuiItemsHandlersDirective,
  TuiWithItemsHandlers,
  TuiItemsHandlersValidator
};
//# sourceMappingURL=chunk-NXUJANSI.js.map
