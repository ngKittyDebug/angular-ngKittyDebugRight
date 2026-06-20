import {
  tuiInjectElement
} from "./chunk-YH3GNO5H.js";
import {
  Directive,
  afterNextRender,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-UWXEFF5S.js";

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-transitioned.mjs
var TuiTransitioned = class _TuiTransitioned {
  constructor() {
    const el = tuiInjectElement();
    afterNextRender(() => requestAnimationFrame(() => el.style.setProperty("transition", "")));
  }
  static {
    this.ɵfac = function TuiTransitioned_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTransitioned)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTransitioned,
      selectors: [["", "tuiTransitioned", ""]],
      hostAttrs: [2, "transition", "none"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTransitioned, [{
    type: Directive,
    args: [{
      selector: "[tuiTransitioned]",
      host: {
        style: "transition: none"
      }
    }]
  }], () => [], null);
})();

export {
  TuiTransitioned
};
//# sourceMappingURL=chunk-JN54BPNG.js.map
