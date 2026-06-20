import {
  TUI_ICON_END,
  TUI_ICON_START,
  tuiGetIconMode,
  tuiInjectIconResolver
} from "./chunk-SZ2IDNEI.js";
import {
  TuiTransitioned
} from "./chunk-JN54BPNG.js";
import {
  TUI_VERSION,
  tuiCreateOptions,
  tuiDirectiveBinding,
  tuiIsString,
  tuiProvide,
  tuiWithStyles
} from "./chunk-YH3GNO5H.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation,
  input,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵstyleProp
} from "./chunk-UWXEFF5S.js";
import {
  InjectionToken,
  computed,
  inject
} from "./chunk-6UR4NGDW.js";

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-appearance.mjs
var TUI_APPEARANCE_DEFAULT_OPTIONS = {
  appearance: ""
};
var TUI_APPEARANCE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_APPEARANCE_OPTIONS" : "", {
  factory: () => TUI_APPEARANCE_DEFAULT_OPTIONS
});
function tuiAppearanceOptionsProvider(token) {
  return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}
var Styles = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-appearance-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiAppearance]:where(*[data-tui-version="5.9.0"]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:where(*[data-tui-version="5.9.0"]):before,[tuiAppearance]:where(*[data-tui-version="5.9.0"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version="5.9.0"]):focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.9.0"])[data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.9.0"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version="5.9.0"])[data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version="5.9.0"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version="5.9.0"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version="5.9.0"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version="5.9.0"])[data-state=disabled]:after{cursor:initial}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-appearance-${TUI_VERSION}`,
      styles: ['[tuiAppearance]:where(*[data-tui-version="5.9.0"]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:where(*[data-tui-version="5.9.0"]):before,[tuiAppearance]:where(*[data-tui-version="5.9.0"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version="5.9.0"]):focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.9.0"])[data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.9.0"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version="5.9.0"])[data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version="5.9.0"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version="5.9.0"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version="5.9.0"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version="5.9.0"])[data-state=disabled]:after{cursor:initial}\n']
    }]
  }], null, null);
})();
var TuiAppearance = class _TuiAppearance {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.modes = computed((mode = this.tuiAppearanceMode()) => !mode || tuiIsString(mode) ? mode : mode.join(" "));
    this.tuiAppearance = input(inject(TUI_APPEARANCE_OPTIONS).appearance);
    this.tuiAppearanceState = input(null);
    this.tuiAppearanceFocus = input(null);
    this.tuiAppearanceMode = input(null);
  }
  static {
    this.ɵfac = function TuiAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppearance,
      selectors: [["", "tuiAppearance", ""]],
      hostAttrs: ["data-tui-version", "5.9.0", "tuiAppearance", ""],
      hostVars: 4,
      hostBindings: function TuiAppearance_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.tuiAppearance())("data-focus", ctx.tuiAppearanceFocus())("data-mode", ctx.modes())("data-state", ctx.tuiAppearanceState());
        }
      },
      inputs: {
        tuiAppearance: [1, "tuiAppearance"],
        tuiAppearanceState: [1, "tuiAppearanceState"],
        tuiAppearanceFocus: [1, "tuiAppearanceFocus"],
        tuiAppearanceMode: [1, "tuiAppearanceMode"]
      },
      features: [ɵɵHostDirectivesFeature([TuiTransitioned])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearance, [{
    type: Directive,
    args: [{
      selector: "[tuiAppearance]",
      hostDirectives: [TuiTransitioned],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiAppearance: "",
        "[attr.data-appearance]": "tuiAppearance()",
        "[attr.data-focus]": "tuiAppearanceFocus()",
        "[attr.data-mode]": "modes()",
        "[attr.data-state]": "tuiAppearanceState()"
      }
    }]
  }], null, null);
})();
function tuiAppearance(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearance", value, options);
}
function tuiAppearanceState(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceState", value, options);
}
function tuiAppearanceFocus(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceFocus", value, options);
}
function tuiAppearanceMode(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceMode", value, options);
}
var TuiWithAppearance = class _TuiWithAppearance {
  static {
    this.ɵfac = function TuiWithAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithAppearance,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearance", "appearance", "tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithAppearance, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearance: appearance", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var OPT = {
  self: true,
  optional: true
};
var Styles2 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-icons-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: [':where([tuiIcons][data-tui-version="5.9.0"]){--t-icon-start: none;--t-icon-end: none;--t-zoom: calc(clamp(0px, var(--tui-font-offset) - 10px, 1px)/1px) }:where([tuiIcons][data-tui-version="5.9.0"]):before,:where([tuiIcons][data-tui-version="5.9.0"]):after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--t-zoom));-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version="5.9.0"]):after{display:var(--t-icon-end);-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-start=font]):before{content:var(--t-icon-start)}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-end=font]):after{content:var(--t-icon-end)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles2, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-icons-${TUI_VERSION}`,
      styles: [':where([tuiIcons][data-tui-version="5.9.0"]){--t-icon-start: none;--t-icon-end: none;--t-zoom: calc(clamp(0px, var(--tui-font-offset) - 10px, 1px)/1px) }:where([tuiIcons][data-tui-version="5.9.0"]):before,:where([tuiIcons][data-tui-version="5.9.0"]):after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--t-zoom));-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version="5.9.0"]):after{display:var(--t-icon-end);-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-start=font]):before{content:var(--t-icon-start)}:where([tuiIcons][data-tui-version="5.9.0"]):where([data-icon-end=font]):after{content:var(--t-icon-end)}\n']
    }]
  }], null, null);
})();
var TuiIcons = class _TuiIcons {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.nothing = tuiWithStyles(Styles2);
    this.start = computed(() => this.resolve(this.iconStart()));
    this.end = computed(() => this.resolve(this.iconEnd()));
    this.startMode = computed(() => tuiGetIconMode(this.iconStart()));
    this.endMode = computed(() => tuiGetIconMode(this.iconEnd()));
    this.iconEnd = input(inject(TUI_ICON_END, OPT));
    this.iconStart = input(inject(TUI_ICON_START, OPT));
  }
  resolve(icon) {
    if (!icon) {
      return null;
    }
    return tuiGetIconMode(icon) === "font" ? `'${this.resolver(icon)}'` : `url(${this.resolver(icon)})`;
  }
  static {
    this.ɵfac = function TuiIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiIcons,
      hostAttrs: ["data-tui-version", "5.9.0", "tuiIcons", ""],
      hostVars: 6,
      hostBindings: function TuiIcons_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-icon-end", ctx.endMode())("data-icon-start", ctx.startMode());
          ɵɵstyleProp("--t-icon-end", ctx.end())("--t-icon-start", ctx.start());
        }
      },
      inputs: {
        iconEnd: [1, "iconEnd"],
        iconStart: [1, "iconStart"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
    type: Directive,
    args: [{
      host: {
        "data-tui-version": TUI_VERSION,
        tuiIcons: "",
        "[attr.data-icon-end]": "endMode()",
        "[attr.data-icon-start]": "startMode()",
        "[style.--t-icon-end]": "end()",
        "[style.--t-icon-start]": "start()"
      }
    }]
  }], null, null);
})();
function tuiIconStart(value, options) {
  return tuiDirectiveBinding(TuiIcons, "iconStart", value, options);
}
function tuiIconEnd(value, options = {}) {
  return tuiDirectiveBinding(TuiIcons, "iconEnd", value, options);
}
var TuiWithIcons = class _TuiWithIcons {
  static {
    this.ɵfac = function TuiWithIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithIcons,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiIcons,
        inputs: ["iconStart", "iconStart", "iconEnd", "iconEnd"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithIcons, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart", "iconEnd"]
      }]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-button.mjs
var TUI_BUTTON_DEFAULT_OPTIONS = {
  appearance: "primary",
  size: "l"
};
var [TUI_BUTTON_OPTIONS, tuiButtonOptionsProvider] = tuiCreateOptions(TUI_BUTTON_DEFAULT_OPTIONS);
var Styles3 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-button-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiButton]:where(*[data-tui-version="5.9.0"]),[tuiIconButton]:where(*[data-tui-version="5.9.0"]){--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.9.0"])>img,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>img,[tuiButton]:where(*[data-tui-version="5.9.0"])>tui-icon,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>tui-icon,[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version="5.9.0"])>tui-badge,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>tui-badge,[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiBadge],[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiRadio],[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiButton]:where(*[data-tui-version="5.9.0"])>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version="5.9.0"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s],[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=m],[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.9.0"])._loading,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version="5.9.0"])._loading>*,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading>*,[tuiButton]:where(*[data-tui-version="5.9.0"])._loading:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading:before,[tuiButton]:where(*[data-tui-version="5.9.0"])._loading:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version="5.9.0"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version="5.9.0"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version="5.9.0"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiButton]:where(*[data-tui-version="5.9.0"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version="5.9.0"]):is(a):not([href]){opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version="5.9.0"]){gap:0;inline-size:var(--t-size);min-inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-icon-start]:after{display:none}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles3, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-button-${TUI_VERSION}`,
      styles: ['[tuiButton]:where(*[data-tui-version="5.9.0"]),[tuiIconButton]:where(*[data-tui-version="5.9.0"]){--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.9.0"])>img,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>img,[tuiButton]:where(*[data-tui-version="5.9.0"])>tui-icon,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>tui-icon,[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version="5.9.0"])>tui-badge,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>tui-badge,[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiBadge],[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiRadio],[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version="5.9.0"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version="5.9.0"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiButton]:where(*[data-tui-version="5.9.0"])>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version="5.9.0"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version="5.9.0"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s],[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=m],[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.9.0"])._loading,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version="5.9.0"])._loading>*,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading>*,[tuiButton]:where(*[data-tui-version="5.9.0"])._loading:before,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading:before,[tuiButton]:where(*[data-tui-version="5.9.0"])._loading:after,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version="5.9.0"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.9.0"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version="5.9.0"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version="5.9.0"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiButton]:where(*[data-tui-version="5.9.0"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version="5.9.0"]):is(a):not([href]){opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version="5.9.0"]){gap:0;inline-size:var(--t-size);min-inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version="5.9.0"])[tuiIconButton]:where(*[data-tui-version="5.9.0"])[data-icon-start]:after{display:none}\n']
    }]
  }], null, null);
})();
var TuiButton = class _TuiButton {
  constructor() {
    this.nothing = tuiWithStyles(Styles3);
    this.size = input(inject(TUI_BUTTON_OPTIONS).size);
  }
  static {
    this.ɵfac = function TuiButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButton,
      selectors: [["a", "tuiButton", ""], ["button", "tuiButton", ""], ["a", "tuiIconButton", ""], ["button", "tuiIconButton", ""]],
      hostVars: 1,
      hostBindings: function TuiButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButton, [{
    type: Directive,
    args: [{
      selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]",
      providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, null);
})();

export {
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  tuiAppearanceOptionsProvider,
  TuiAppearance,
  tuiAppearance,
  tuiAppearanceState,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  TuiWithAppearance,
  TuiIcons,
  tuiIconStart,
  tuiIconEnd,
  TuiWithIcons,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  tuiButtonOptionsProvider,
  TuiButton
};
//# sourceMappingURL=chunk-ZV5BAXQN.js.map
