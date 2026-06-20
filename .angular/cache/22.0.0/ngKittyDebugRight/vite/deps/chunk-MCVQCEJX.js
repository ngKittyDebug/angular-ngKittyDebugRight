import {
  TuiWithIcons,
  tuiButtonOptionsProvider
} from "./chunk-ZV5BAXQN.js";
import {
  TuiDropdownDirective
} from "./chunk-5C76XODH.js";
import {
  TUI_NOTHING_FOUND_MESSAGE,
  tuiAsAuxiliary
} from "./chunk-SZ2IDNEI.js";
import {
  PolymorpheusOutlet,
  tuiIsFocused,
  tuiIsFocusedIn,
  tuiMoveFocus
} from "./chunk-KA6RXUAL.js";
import {
  TUI_VERSION,
  WA_IS_MOBILE,
  tuiCreateOptions,
  tuiInjectElement,
  tuiIsPresent,
  tuiProvide,
  tuiTakeUntilDestroyed,
  tuiWithStyles,
  tuiZonefree
} from "./chunk-YH3GNO5H.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ViewContainerRef,
  ViewEncapsulation,
  contentChild,
  contentChildren,
  createComponent,
  input,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UWXEFF5S.js";
import {
  DestroyRef,
  EnvironmentInjector,
  INJECTOR$1,
  InjectionToken,
  NgZone,
  computed,
  forwardRef,
  inject,
  signal
} from "./chunk-6UR4NGDW.js";
import {
  timer
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-cell.mjs
var [TUI_CELL_OPTIONS, tuiCellOptionsProvider] = tuiCreateOptions({
  height: "normal",
  size: "l"
});
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
      exportAs: ["tui-cell-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiCell]:where(*[data-tui-version="5.9.0"]){--t-pad: .125rem 1rem;--t-radius: var(--tui-radius-s);transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;text-align:start;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-pad);min-block-size:var(--t-block-size);border-radius:var(--t-radius)}[tuiCell]:where(*[data-tui-version="5.9.0"]):is(button,label):not(:disabled):active{background:var(--tui-background-neutral-1)}[tuiCell]:where(*[data-tui-version="5.9.0"]):disabled,[tuiCell]:where(*[data-tui-version="5.9.0"])[data-state=disabled]{opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.9.0"]):disabled>*:not([tuiTooltip]),[tuiCell]:where(*[data-tui-version="5.9.0"])[data-state=disabled]>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.9.0"]):is(label):has(input:disabled){opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.9.0"]):is(label):has(input:disabled)>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-block-size);align-items:center;align-self:stretch}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions]{position:absolute;z-index:1;inset-inline-end:0;padding-inline-end:inherit;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions] button:focus-visible,[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions] a:focus-visible{opacity:1}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiTitle]{flex-shrink:7;margin-inline-end:auto;align-items:normal;text-align:start}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiTitle]~[tuiTitle]{flex-shrink:3;margin-inline-end:0;text-align:end;align-items:flex-end}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell]:where(*[data-tui-version="5.9.0"]) tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);inset-inline-start:-.625rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-block-size: calc(var(--tui-height-s) - .125rem);--t-pad: .1875rem 1rem;gap:.5rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s][data-height=spacious]{--t-pad: .4375rem 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s][data-height=compact]{--t-block-size: calc(var(--tui-height-s) - .25rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-typography-ui-s);gap:0}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiAvatar]{--t-size: 1.5rem;--t-radius: var(--tui-radius-m);font:var(--tui-typography-body-m);font-size:.5625rem;margin:.1875rem 0}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-block-size: calc(var(--tui-height-m) - .75rem);--t-pad: .375rem 1rem;gap:.75rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m][data-height=spacious]{--t-pad: 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m][data-height=compact]{--t-block-size: calc(var(--tui-height-m) - .5rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-s);gap:.0625rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-ui-xs)}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiAvatar]{--t-size: 2rem;--t-radius: var(--tui-radius-m);align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=l]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: .5rem 1rem;--t-radius: var(--tui-radius-l);gap:1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=l][data-height=spacious]{--t-pad: 1.25rem 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=l][data-height=compact]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=l] [tuiAvatar]{--t-size: 2.5rem;font:var(--tui-typography-body-m);font-weight:700;align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.9.0"]):hover [tuiCellActions]~*{opacity:0}[tuiCell]:where(*[data-tui-version="5.9.0"]):hover [tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.9.0"]):hover [tuiCellActions] a,[tuiCell]:where(*[data-tui-version="5.9.0"]):hover [tuiCellActions] label{opacity:1}[tuiCell]:where(*[data-tui-version="5.9.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}@media(hover:hover)and (pointer:fine){a[tuiCell]:where(*[data-tui-version="5.9.0"]):hover:not(:disabled,[data-state=disabled]),button[tuiCell]:where(*[data-tui-version="5.9.0"]):hover:not(:disabled,[data-state=disabled]),label[tuiCell]:where(*[data-tui-version="5.9.0"]):hover:not(:disabled,[data-state=disabled]){background:var(--tui-background-neutral-1);cursor:pointer}label[tuiCell]:where(*[data-tui-version="5.9.0"]):hover:not(:has(input:disabled)){background:var(--tui-background-neutral-1);cursor:pointer}}\n'],
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
      exportAs: `tui-cell-${TUI_VERSION}`,
      styles: ['[tuiCell]:where(*[data-tui-version="5.9.0"]){--t-pad: .125rem 1rem;--t-radius: var(--tui-radius-s);transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;text-align:start;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-pad);min-block-size:var(--t-block-size);border-radius:var(--t-radius)}[tuiCell]:where(*[data-tui-version="5.9.0"]):is(button,label):not(:disabled):active{background:var(--tui-background-neutral-1)}[tuiCell]:where(*[data-tui-version="5.9.0"]):disabled,[tuiCell]:where(*[data-tui-version="5.9.0"])[data-state=disabled]{opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.9.0"]):disabled>*:not([tuiTooltip]),[tuiCell]:where(*[data-tui-version="5.9.0"])[data-state=disabled]>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.9.0"]):is(label):has(input:disabled){opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.9.0"]):is(label):has(input:disabled)>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-block-size);align-items:center;align-self:stretch}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions]{position:absolute;z-index:1;inset-inline-end:0;padding-inline-end:inherit;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions] button:focus-visible,[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiCellActions][tuiCellActions] a:focus-visible{opacity:1}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiTitle]{flex-shrink:7;margin-inline-end:auto;align-items:normal;text-align:start}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiTitle]~[tuiTitle]{flex-shrink:3;margin-inline-end:0;text-align:end;align-items:flex-end}[tuiCell]:where(*[data-tui-version="5.9.0"]) [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell]:where(*[data-tui-version="5.9.0"]) tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);inset-inline-start:-.625rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-block-size: calc(var(--tui-height-s) - .125rem);--t-pad: .1875rem 1rem;gap:.5rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s][data-height=spacious]{--t-pad: .4375rem 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s][data-height=compact]{--t-block-size: calc(var(--tui-height-s) - .25rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-typography-ui-s);gap:0}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiAvatar]{--t-size: 1.5rem;--t-radius: var(--tui-radius-m);font:var(--tui-typography-body-m);font-size:.5625rem;margin:.1875rem 0}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-block-size: calc(var(--tui-height-m) - .75rem);--t-pad: .375rem 1rem;gap:.75rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m][data-height=spacious]{--t-pad: 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m][data-height=compact]{--t-block-size: calc(var(--tui-height-m) - .5rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-s);gap:.0625rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-ui-xs)}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiAvatar]{--t-size: 2rem;--t-radius: var(--tui-radius-m);align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=l]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: .5rem 1rem;--t-radius: var(--tui-radius-l);gap:1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=l][data-height=spacious]{--t-pad: 1.25rem 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=l][data-height=compact]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.9.0"])[data-size=l] [tuiAvatar]{--t-size: 2.5rem;font:var(--tui-typography-body-m);font-weight:700;align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.9.0"]):hover [tuiCellActions]~*{opacity:0}[tuiCell]:where(*[data-tui-version="5.9.0"]):hover [tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.9.0"]):hover [tuiCellActions] a,[tuiCell]:where(*[data-tui-version="5.9.0"]):hover [tuiCellActions] label{opacity:1}[tuiCell]:where(*[data-tui-version="5.9.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}@media(hover:hover)and (pointer:fine){a[tuiCell]:where(*[data-tui-version="5.9.0"]):hover:not(:disabled,[data-state=disabled]),button[tuiCell]:where(*[data-tui-version="5.9.0"]):hover:not(:disabled,[data-state=disabled]),label[tuiCell]:where(*[data-tui-version="5.9.0"]):hover:not(:disabled,[data-state=disabled]){background:var(--tui-background-neutral-1);cursor:pointer}label[tuiCell]:where(*[data-tui-version="5.9.0"]):hover:not(:has(input:disabled)){background:var(--tui-background-neutral-1);cursor:pointer}}\n']
    }]
  }], null, null);
})();
var TuiCell = class _TuiCell {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.options = inject(TUI_CELL_OPTIONS);
    this.size = input(this.options.size, {
      alias: "tuiCell"
    });
    this.height = input(this.options.height, {
      alias: "tuiCellHeight"
    });
  }
  static {
    this.ɵfac = function TuiCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCell)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCell,
      selectors: [["", "tuiCell", "", 5, "ng-template"]],
      hostAttrs: ["data-tui-version", "5.9.0", "tuiCell", ""],
      hostVars: 2,
      hostBindings: function TuiCell_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-height", ctx.height())("data-size", ctx.size() || ctx.options.size || "l");
        }
      },
      inputs: {
        size: [1, "tuiCell", "size"],
        height: [1, "tuiCellHeight", "height"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "s"
      })])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCell, [{
    type: Directive,
    args: [{
      selector: "[tuiCell]:not(ng-template)",
      providers: [tuiButtonOptionsProvider({
        size: "s"
      })],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiCell: "",
        "[attr.data-height]": "height()",
        "[attr.data-size]": 'size() || options.size || "l"'
      }
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-data-list.mjs
var _c0 = ["*"];
function TuiDataListComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiDataListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, TuiDataListComponent_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.emptyContent() || ctx_r1.fallback());
  }
}
var TUI_DATA_LIST_HOST = new InjectionToken(ngDevMode ? "TUI_DATA_LIST_HOST" : "");
function tuiAsDataListHost(host) {
  return tuiProvide(TUI_DATA_LIST_HOST, host);
}
var TUI_OPTION_CONTENT = new InjectionToken(ngDevMode ? "TUI_OPTION_CONTENT" : "");
function tuiAsOptionContent(useValue) {
  return {
    provide: TUI_OPTION_CONTENT,
    useValue
  };
}
var TuiWithOptionContent = class _TuiWithOptionContent {
  constructor() {
    this.local = null;
    this.global = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
  }
  get content() {
    return this.global ?? this.local;
  }
  static {
    this.ɵfac = function TuiWithOptionContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithOptionContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithOptionContent,
      contentQueries: function TuiWithOptionContent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TUI_OPTION_CONTENT, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.local = _t.first);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithOptionContent, [{
    type: Directive
  }], null, {
    local: [{
      type: ContentChild,
      args: [TUI_OPTION_CONTENT, {
        descendants: true
      }]
    }]
  });
})();
var TuiOptionWithContent = class _TuiOptionWithContent {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.content = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
    this.ref = this.content && createComponent(this.content, {
      environmentInjector: inject(EnvironmentInjector),
      elementInjector: inject(INJECTOR$1),
      hostElement: tuiInjectElement()
    });
    if (this.ref) {
      this.vcr.insert(this.ref.hostView);
      this.ref.changeDetectorRef.detectChanges();
    }
  }
  static {
    this.ɵfac = function TuiOptionWithContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptionWithContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptionWithContent
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionWithContent, [{
    type: Directive
  }], () => [], null);
})();
var TuiOptionWithValue = class _TuiOptionWithValue {
  constructor() {
    this.host = inject(TUI_DATA_LIST_HOST, {
      optional: true
    });
    this.disabled = input(false);
    this.value = input();
  }
  onClick(value = this.value()) {
    if (value !== void 0) {
      this.host?.handleOption?.(value);
    }
  }
  static {
    this.ɵfac = function TuiOptionWithValue_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptionWithValue)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptionWithValue,
      selectors: [["button", "tuiOption", "", "value", ""], ["a", "tuiOption", "", "value", ""], ["label", "tuiOption", "", "value", ""]],
      hostBindings: function TuiOptionWithValue_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiOptionWithValue_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        disabled: [1, "disabled"],
        value: [1, "value"]
      },
      features: [ɵɵHostDirectivesFeature([TuiOptionWithContent])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionWithValue, [{
    type: Directive,
    args: [{
      selector: "button[tuiOption][value], a[tuiOption][value], label[tuiOption][value]",
      hostDirectives: [TuiOptionWithContent],
      host: {
        "(click)": "onClick()"
      }
    }]
  }], null, null);
})();
function tuiInjectDataListSize() {
  const sizes = ["s", "m", "l"];
  const size = inject(TUI_DATA_LIST_HOST, {
    optional: true
  })?.size;
  return size && sizes.includes(size) ? size : "l";
}
var TuiDataListComponent = class _TuiDataListComponent {
  constructor() {
    this.ngZone = inject(NgZone);
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.optionsQuery = contentChildren(forwardRef(() => TuiOptionWithValue), {
      descendants: true
    });
    this.fallback = inject(TUI_NOTHING_FOUND_MESSAGE);
    this.empty = signal(false);
    this.emptyContent = input();
    this.size = input(tuiInjectDataListSize());
    this.options = computed(() => this.optionsQuery().map(({
      value
    }) => value()).filter(tuiIsPresent));
  }
  onKeyDownArrow(current, step) {
    const {
      elements
    } = this;
    tuiMoveFocus(elements.indexOf(current), elements, step);
  }
  handleFocusLossIfNecessary(element = this.el) {
    if (tuiIsFocusedIn(element)) {
      this.origin?.focus({
        preventScroll: true
      });
    }
  }
  ngAfterContentChecked() {
    timer(0).pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.empty.set(!this.elements.length);
      this.cdr.detectChanges();
    });
  }
  get role() {
    return this.el.parentElement?.closest('[role="menu"],[role="listbox"]') ? null : this.el.role;
  }
  onFocusIn(relatedTarget, currentTarget) {
    if (!currentTarget.contains(relatedTarget) && !this.origin) {
      this.origin = relatedTarget;
    }
  }
  get elements() {
    return Array.from(this.el.querySelectorAll("[tuiOption]:not(.t-empty)"));
  }
  static {
    this.ɵfac = function TuiDataListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListComponent,
      selectors: [["tui-data-list"]],
      contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.optionsQuery, TuiOptionWithValue, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["data-tui-version", "5.9.0", "role", "listbox"],
      hostVars: 2,
      hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
            return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
          })("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          })("keydown.shift.tab", function TuiDataListComponent_keydown_shift_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("keydown.tab", function TuiDataListComponent_keydown_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
            return 0;
          })("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
            return ctx.handleFocusLossIfNecessary($event.target);
          })("wheel.zoneless.passive", function TuiDataListComponent_wheel_zoneless_passive_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size())("role", ctx.role);
        }
      },
      inputs: {
        emptyContent: [1, "emptyContent"],
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature([tuiCellOptionsProvider(() => ({
        size: inject(_TuiDataListComponent).size()
      })), tuiAsAuxiliary(_TuiDataListComponent), {
        provide: TUI_OPTION_CONTENT,
        useFactory: () => inject(TuiWithOptionContent, {
          optional: true
        })?.content ?? inject(TUI_OPTION_CONTENT, {
          skipSelf: true,
          optional: true
        })
      }])],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [["tuiCell", "", "tuiOption", "", 1, "t-empty"], [4, "polymorpheusOutlet"]],
      template: function TuiDataListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵconditionalCreate(1, TuiDataListComponent_Conditional_1_Template, 2, 1, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.empty() ? 1 : -1);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiCell],
      styles: ['tui-data-list:where(*[data-tui-version="5.9.0"]){display:flex;flex-direction:column;padding:.25rem}tui-data-list:where(*[data-tui-version="5.9.0"]):focus-within [tuiOption]._with-dropdown:not(:focus){background:transparent}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiOption]{min-block-size:0;font:var(--tui-typography-ui-s);padding:.375rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiOption]:before,tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiOption]:after{font-size:1rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiOption]{min-block-size:2.25rem;font:var(--tui-typography-ui-s);padding:.5rem .375rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=l]{gap:.125rem;padding:.5rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=l] [tuiOption]{font:var(--tui-typography-ui-m);padding-inline:.5rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=l] hr{block-size:1rem;border-inline-width:.5rem}tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;box-sizing:border-box;border-radius:var(--tui-radius-s);outline:none!important;cursor:pointer;word-break:break-word;text-transform:inherit}tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}@media(hover:hover)and (pointer:fine){tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:hover:not(:disabled){background:var(--tui-background-neutral-1)}}tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:active:not(:disabled),tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:focus-within,tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]._with-dropdown{background:var(--tui-background-neutral-1)}tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:after{margin-inline-start:auto}tui-data-list:where(*[data-tui-version="5.9.0"])>.t-empty{pointer-events:none;color:var(--tui-text-tertiary)}tui-data-list:where(*[data-tui-version="5.9.0"]) hr{position:relative;margin:0;block-size:.75rem;border:.375rem solid transparent;border-block:0}tui-data-list:where(*[data-tui-version="5.9.0"]) hr+hr,tui-data-list:where(*[data-tui-version="5.9.0"]) hr:first-child,tui-data-list:where(*[data-tui-version="5.9.0"]) hr:last-child{display:none}tui-data-list:where(*[data-tui-version="5.9.0"]) hr:before{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);content:"";block-size:1px;inline-size:100%;background:var(--tui-border-normal)}tui-opt-group:where(*[data-tui-version="5.9.0"]){position:relative;display:flex;font-weight:700!important;gap:inherit;color:var(--tui-text-primary);flex-direction:column}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.9.0"]){font:var(--tui-typography-body-s)}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.9.0"]):before{padding:.1875rem .375rem}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.9.0"]){font:var(--tui-typography-ui-m)}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.9.0"]):before{padding:.375rem}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.9.0"]){font:var(--tui-typography-ui-l)}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.9.0"]):before{padding:.5rem}tui-opt-group:where(*[data-tui-version="5.9.0"]):empty:before,tui-opt-group:where(*[data-tui-version="5.9.0"])[data-label=""]:before{display:none}tui-opt-group:where(*[data-tui-version="5.9.0"]):before{content:attr(data-label);word-break:break-word}tui-sheet-dialog tui-opt-group:where(*[data-tui-version="5.9.0"]):before{font:var(--tui-typography-heading-h6);padding:.5rem 0!important}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListComponent, [{
    type: Component,
    args: [{
      selector: "tui-data-list",
      imports: [PolymorpheusOutlet, TuiCell],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiCellOptionsProvider(() => ({
        size: inject(TuiDataListComponent).size()
      })), tuiAsAuxiliary(TuiDataListComponent), {
        provide: TUI_OPTION_CONTENT,
        useFactory: () => inject(TuiWithOptionContent, {
          optional: true
        })?.content ?? inject(TUI_OPTION_CONTENT, {
          skipSelf: true,
          optional: true
        })
      }],
      host: {
        "data-tui-version": TUI_VERSION,
        role: "listbox",
        "[attr.data-size]": "size()",
        "[attr.role]": "role",
        "(focusin)": "onFocusIn($event.relatedTarget, $event.currentTarget)",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)",
        "(keydown.shift.tab)": "handleFocusLossIfNecessary()",
        "(keydown.tab)": "handleFocusLossIfNecessary()",
        "(mousedown.prevent)": "(0)",
        "(mouseleave)": "handleFocusLossIfNecessary($event.target)",
        "(wheel.zoneless.passive)": "handleFocusLossIfNecessary()"
      },
      template: '<ng-content />\n@if (empty()) {\n    <!-- tuiOption selector purely for cosmetics, do not import -->\n    <span\n        tuiCell\n        tuiOption\n        class="t-empty"\n    >\n        <ng-container *polymorpheusOutlet="emptyContent() || fallback() as text">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n',
      styles: ['tui-data-list:where(*[data-tui-version="5.9.0"]){display:flex;flex-direction:column;padding:.25rem}tui-data-list:where(*[data-tui-version="5.9.0"]):focus-within [tuiOption]._with-dropdown:not(:focus){background:transparent}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiOption]{min-block-size:0;font:var(--tui-typography-ui-s);padding:.375rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiOption]:before,tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiOption]:after{font-size:1rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiOption]{min-block-size:2.25rem;font:var(--tui-typography-ui-s);padding:.5rem .375rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=l]{gap:.125rem;padding:.5rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=l] [tuiOption]{font:var(--tui-typography-ui-m);padding-inline:.5rem}tui-data-list:where(*[data-tui-version="5.9.0"])[data-size=l] hr{block-size:1rem;border-inline-width:.5rem}tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;box-sizing:border-box;border-radius:var(--tui-radius-s);outline:none!important;cursor:pointer;word-break:break-word;text-transform:inherit}tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}@media(hover:hover)and (pointer:fine){tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:hover:not(:disabled){background:var(--tui-background-neutral-1)}}tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:active:not(:disabled),tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:focus-within,tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]._with-dropdown{background:var(--tui-background-neutral-1)}tui-data-list:where(*[data-tui-version="5.9.0"]) [tuiOption]:after{margin-inline-start:auto}tui-data-list:where(*[data-tui-version="5.9.0"])>.t-empty{pointer-events:none;color:var(--tui-text-tertiary)}tui-data-list:where(*[data-tui-version="5.9.0"]) hr{position:relative;margin:0;block-size:.75rem;border:.375rem solid transparent;border-block:0}tui-data-list:where(*[data-tui-version="5.9.0"]) hr+hr,tui-data-list:where(*[data-tui-version="5.9.0"]) hr:first-child,tui-data-list:where(*[data-tui-version="5.9.0"]) hr:last-child{display:none}tui-data-list:where(*[data-tui-version="5.9.0"]) hr:before{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);content:"";block-size:1px;inline-size:100%;background:var(--tui-border-normal)}tui-opt-group:where(*[data-tui-version="5.9.0"]){position:relative;display:flex;font-weight:700!important;gap:inherit;color:var(--tui-text-primary);flex-direction:column}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.9.0"]){font:var(--tui-typography-body-s)}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.9.0"]):before{padding:.1875rem .375rem}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.9.0"]){font:var(--tui-typography-ui-m)}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.9.0"]):before{padding:.375rem}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.9.0"]){font:var(--tui-typography-ui-l)}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.9.0"]):before{padding:.5rem}tui-opt-group:where(*[data-tui-version="5.9.0"]):empty:before,tui-opt-group:where(*[data-tui-version="5.9.0"])[data-label=""]:before{display:none}tui-opt-group:where(*[data-tui-version="5.9.0"]):before{content:attr(data-label);word-break:break-word}tui-sheet-dialog tui-opt-group:where(*[data-tui-version="5.9.0"]):before{font:var(--tui-typography-heading-h6);padding:.5rem 0!important}\n']
    }]
  }], null, null);
})();
var TuiOptGroup = class _TuiOptGroup {
  constructor() {
    this.label = input();
  }
  static {
    this.ɵfac = function TuiOptGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptGroup,
      selectors: [["tui-opt-group"]],
      hostAttrs: ["data-tui-version", "5.9.0", "role", "group"],
      hostVars: 1,
      hostBindings: function TuiOptGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-label", ctx.label() || "");
        }
      },
      inputs: {
        label: [1, "label"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptGroup, [{
    type: Directive,
    args: [{
      selector: "tui-opt-group",
      host: {
        "data-tui-version": TUI_VERSION,
        role: "group",
        "[attr.data-label]": 'label() || ""'
      }
    }]
  }], null, null);
})();
var TuiOption = class _TuiOption {
  constructor() {
    this.isMobile = inject(WA_IS_MOBILE);
    this.el = tuiInjectElement();
    this.datalist = inject(forwardRef(() => TuiDataListComponent), {
      optional: true
    });
    this.dropdown = inject(TuiDropdownDirective, {
      self: true,
      optional: true
    })?.ref;
    this.disabled = input(false);
  }
  // Preventing focus loss upon focused option removal
  ngOnDestroy() {
    this.datalist?.handleFocusLossIfNecessary(this.el);
  }
  onMouseMove() {
    if (!this.isMobile && !tuiIsFocused(this.el) && this.datalist && this.el.closest("[tuiDataListDropdownManager]")) {
      this.el.focus({
        preventScroll: true
      });
    }
  }
  static {
    this.ɵfac = function TuiOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOption)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOption,
      selectors: [["button", "tuiOption", ""], ["a", "tuiOption", ""], ["label", "tuiOption", ""]],
      hostAttrs: ["role", "option", "type", "button"],
      hostVars: 3,
      hostBindings: function TuiOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousemove.zoneless", function TuiOption_mousemove_zoneless_HostBindingHandler() {
            return ctx.onMouseMove();
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.disabled() || null);
          ɵɵclassProp("_with-dropdown", ctx.dropdown == null ? null : ctx.dropdown());
        }
      },
      inputs: {
        disabled: [1, "disabled"]
      },
      features: [ɵɵHostDirectivesFeature([TuiWithIcons, TuiCell])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOption, [{
    type: Directive,
    args: [{
      selector: "button[tuiOption], a[tuiOption], label[tuiOption]",
      hostDirectives: [TuiWithIcons, TuiCell],
      host: {
        role: "option",
        type: "button",
        "[attr.disabled]": "disabled() || null",
        "[class._with-dropdown]": "dropdown?.()",
        "(mousemove.zoneless)": "onMouseMove()"
      }
    }]
  }], null, null);
})();
var TuiDataList = [TuiDataListComponent, TuiOption, TuiOptionWithValue, TuiOptGroup];

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-label.mjs
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
      exportAs: ["tui-label-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiLabel]:where(*[data-tui-version="5.9.0"]){display:flex;gap:.25rem;flex-direction:column;font:var(--tui-typography-body-s);color:var(--tui-text-primary)}[tuiLabel]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical]){flex-direction:row;inline-size:fit-content;font:var(--tui-typography-body-m)}[tuiLabel]:where(*[data-tui-version="5.9.0"]) input[type=checkbox],[tuiLabel]:where(*[data-tui-version="5.9.0"]) input[type=radio]{margin-inline-end:.5rem}[tuiLabel]:where(*[data-tui-version="5.9.0"]) input[type=checkbox][data-size=s],[tuiLabel]:where(*[data-tui-version="5.9.0"]) input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.9.0"]) small{font:var(--tui-typography-body-s)}[tuiLabel]:where(*[data-tui-version="5.9.0"]) [tuiTitle]{margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.9.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}\n'],
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
      exportAs: `tui-label-${TUI_VERSION}`,
      styles: ['[tuiLabel]:where(*[data-tui-version="5.9.0"]){display:flex;gap:.25rem;flex-direction:column;font:var(--tui-typography-body-s);color:var(--tui-text-primary)}[tuiLabel]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical]){flex-direction:row;inline-size:fit-content;font:var(--tui-typography-body-m)}[tuiLabel]:where(*[data-tui-version="5.9.0"]) input[type=checkbox],[tuiLabel]:where(*[data-tui-version="5.9.0"]) input[type=radio]{margin-inline-end:.5rem}[tuiLabel]:where(*[data-tui-version="5.9.0"]) input[type=checkbox][data-size=s],[tuiLabel]:where(*[data-tui-version="5.9.0"]) input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.9.0"]) small{font:var(--tui-typography-body-s)}[tuiLabel]:where(*[data-tui-version="5.9.0"]) [tuiTitle]{margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.9.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}\n']
    }]
  }], null, null);
})();
var TuiLabel = class _TuiLabel {
  constructor() {
    this.textfield = contentChild(forwardRef(() => TUI_DATA_LIST_HOST));
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(Styles2);
    this.parent = inject(forwardRef(() => TUI_DATA_LIST_HOST), {
      optional: true
    });
  }
  static {
    this.ɵfac = function TuiLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLabel)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLabel,
      selectors: [["label", "tuiLabel", ""]],
      contentQueries: function TuiLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.textfield, TUI_DATA_LIST_HOST, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["data-tui-version", "5.9.0"],
      hostVars: 2,
      hostBindings: function TuiLabel_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.textfield() ? "vertical" : "horizontal")("for", ctx.el.htmlFor || (ctx.parent == null ? null : ctx.parent.id));
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabel, [{
    type: Directive,
    args: [{
      selector: "label[tuiLabel]",
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-orientation]": 'textfield() ? "vertical" : "horizontal"',
        "[attr.for]": "el.htmlFor || parent?.id"
      }
    }]
  }], null, null);
})();

export {
  TUI_CELL_OPTIONS,
  tuiCellOptionsProvider,
  TuiCell,
  TUI_DATA_LIST_HOST,
  tuiAsDataListHost,
  TUI_OPTION_CONTENT,
  tuiAsOptionContent,
  TuiWithOptionContent,
  TuiOptionWithContent,
  TuiOptionWithValue,
  tuiInjectDataListSize,
  TuiDataListComponent,
  TuiOptGroup,
  TuiOption,
  TuiDataList,
  TuiLabel
};
//# sourceMappingURL=chunk-MCVQCEJX.js.map
