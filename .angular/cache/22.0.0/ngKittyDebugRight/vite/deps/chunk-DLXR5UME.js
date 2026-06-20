import {
  tuiInjectElement,
  tuiProvide,
  tuiTakeUntilDestroyed,
  tuiZonefree
} from "./chunk-YH3GNO5H.js";
import {
  NG_VALIDATORS
} from "./chunk-XHNSMQQ5.js";
import {
  Directive,
  input,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-UWXEFF5S.js";
import {
  BehaviorSubject,
  delay,
  of,
  switchMap
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var TuiNativeValidator = class _TuiNativeValidator {
  constructor() {
    this.el = tuiInjectElement();
    this.control$ = new BehaviorSubject(null);
    this.sub = this.control$.pipe(switchMap((control) => control?.events || of(null)), delay(0), tuiZonefree(), tuiTakeUntilDestroyed()).subscribe(() => this.handleValidation());
    this.tuiNativeValidator = input("Invalid");
  }
  validate(control) {
    this.control$.next(control);
    return null;
  }
  handleValidation() {
    const invalid = !!this.control$.value?.touched && this.control$.value?.invalid;
    this.el.closest("tui-textfield")?.classList.toggle("tui-invalid", invalid);
    this.el.setCustomValidity?.(invalid ? this.tuiNativeValidator() : "");
  }
  static {
    this.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNativeValidator,
      selectors: [["", "tuiNativeValidator", ""]],
      hostBindings: function TuiNativeValidator_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiNativeValidator_focusout_HostBindingHandler() {
            return ctx.handleValidation();
          });
        }
      },
      inputs: {
        tuiNativeValidator: [1, "tuiNativeValidator"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiNativeValidator, true)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeValidator, [{
    type: Directive,
    args: [{
      selector: "[tuiNativeValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
      host: {
        "(focusout)": "handleValidation()"
      }
    }]
  }], null, null);
})();

export {
  TuiNativeValidator
};
//# sourceMappingURL=chunk-DLXR5UME.js.map
