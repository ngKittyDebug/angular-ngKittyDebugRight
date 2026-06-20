import {
  WA_MUTATION_OBSERVER_INIT,
  WaMutationObserverService
} from "./chunk-4X6TQHJY.js";
import {
  TUI_RADIO_OPTIONS,
  TuiIcon,
  TuiRadioComponent,
  tuiHintOptionsProvider
} from "./chunk-ASIXPXN2.js";
import {
  tuiLinkOptionsProvider
} from "./chunk-SRQCPCVA.js";
import {
  TuiDataList,
  TuiDataListComponent
} from "./chunk-MCVQCEJX.js";
import {
  TuiButton,
  TuiIcons,
  TuiWithAppearance,
  TuiWithIcons,
  tuiAppearanceOptionsProvider,
  tuiIconStart
} from "./chunk-ZV5BAXQN.js";
import {
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  tuiDropdownOptionsProvider
} from "./chunk-5C76XODH.js";
import {
  TUI_COMMON_ICONS,
  TUI_ICON_END,
  tuiExtractI18n
} from "./chunk-SZ2IDNEI.js";
import {
  RouterLinkActive
} from "./chunk-QR3F4THY.js";
import {
  TuiNativeValidator
} from "./chunk-DLXR5UME.js";
import {
  WaResizeObserverService
} from "./chunk-P34HLSLH.js";
import {
  PolymorpheusOutlet,
  tuiGetClosestFocusable,
  tuiIsFocused,
  tuiMoveFocus
} from "./chunk-KA6RXUAL.js";
import {
  TUI_VERSION,
  TuiAnimated,
  WA_CSS,
  tuiClamp,
  tuiControlValue,
  tuiCreateOptions,
  tuiGenerateId,
  tuiInjectElement,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiProvide,
  tuiPx,
  tuiToInt,
  tuiTypedFromEvent,
  tuiWithStyles,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-YH3GNO5H.js";
import {
  NgControl,
  RadioControlValueAccessor
} from "./chunk-XHNSMQQ5.js";
import {
  NgTemplateOutlet
} from "./chunk-WBUXHXP6.js";
import {
  TuiItem
} from "./chunk-6DJSNXVY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Injectable,
  TemplateRef,
  ViewEncapsulation,
  afterNextRender,
  contentChild,
  contentChildren,
  input,
  model,
  setClassMetadata,
  viewChild,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-UWXEFF5S.js";
import {
  outputFromObservable,
  takeUntilDestroyed,
  toObservable,
  toSignal
} from "./chunk-ETGSZUYA.js";
import {
  DOCUMENT,
  INJECTOR$1,
  InjectionToken,
  computed,
  effect,
  inject,
  signal,
  ɵɵdefineInjectable,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-6UR4NGDW.js";
import {
  EMPTY,
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  merge,
  share,
  startWith,
  switchMap,
  take,
  tap
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fade.mjs
var BUFFER = 1;
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
      exportAs: ["tui-fade-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiFade]:where(*[data-tui-version="5.9.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar,[tuiFade]:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar-thumb{display:none}[tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade]:where(*[data-tui-version="5.9.0"])[data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade]:where(*[data-tui-version="5.9.0"])[data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px)}[tuiFade]:where(*[data-tui-version="5.9.0"])[data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom}[tuiFade]:where(*[data-tui-version="5.9.0"])[data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n'],
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
      exportAs: `tui-fade-${TUI_VERSION}`,
      styles: ['[tuiFade]:where(*[data-tui-version="5.9.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar,[tuiFade]:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar-thumb{display:none}[tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[dir=rtl] [tuiFade]:where(*[data-tui-version="5.9.0"]):not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade]:where(*[data-tui-version="5.9.0"])[data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade]:where(*[data-tui-version="5.9.0"])[data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px)}[tuiFade]:where(*[data-tui-version="5.9.0"])[data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom}[tuiFade]:where(*[data-tui-version="5.9.0"])[data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n']
    }]
  }], null, null);
})();
var TuiFade = class _TuiFade {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.lineHeight = input(null, {
      alias: "tuiFadeHeight"
    });
    this.size = input("1.5em", {
      alias: "tuiFadeSize"
    });
    this.offset = input("0em", {
      alias: "tuiFadeOffset"
    });
    this.orientation = input("horizontal", {
      alias: "tuiFade"
    });
    const el = tuiInjectElement();
    afterNextRender(() => el.style.setProperty("transition", ""));
    merge(inject(WaResizeObserverService, {
      self: true
    }), inject(WaMutationObserverService, {
      self: true
    }), fromEvent(el, "scroll")).pipe(filter(() => !!el.scrollWidth), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      el.classList.toggle("_end", this.isEnd(el));
      el.classList.toggle("_start", !!Math.floor(el.scrollLeft) || !!Math.floor(el.scrollTop));
    });
  }
  isEnd({
    scrollTop,
    scrollLeft,
    scrollHeight,
    scrollWidth,
    clientHeight,
    clientWidth
  }) {
    return this.orientation() === "vertical" ? Math.round(scrollTop) < scrollHeight - clientHeight - BUFFER : Math.ceil(Math.abs(scrollLeft)) < scrollWidth - clientWidth - BUFFER || // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
    scrollHeight > clientHeight + 4 * BUFFER;
  }
  static {
    this.ɵfac = function TuiFade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFade)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFade,
      selectors: [["", "tuiFade", ""]],
      hostAttrs: ["data-tui-version", "5.9.0"],
      hostVars: 11,
      hostBindings: function TuiFade_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation());
          ɵɵstyleProp("--t-fade-offset", ctx.offset())("--t-fade-size", ctx.size())("--t-line-height", ctx.lineHeight())("line-height", ctx.lineHeight())("transition", "none");
        }
      },
      inputs: {
        lineHeight: [1, "tuiFadeHeight", "lineHeight"],
        size: [1, "tuiFadeSize", "size"],
        offset: [1, "tuiFadeOffset", "offset"],
        orientation: [1, "tuiFade", "orientation"]
      },
      features: [ɵɵProvidersFeature([WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFade, [{
    type: Directive,
    args: [{
      selector: "[tuiFade]",
      providers: [WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-orientation]": "orientation()",
        "[style.--t-fade-offset]": "offset()",
        "[style.--t-fade-size]": "size()",
        "[style.--t-line-height]": "lineHeight()",
        "[style.line-height]": "lineHeight()",
        "[style.transition]": '"none"'
      }
    }]
  }], () => [], null);
})();

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-avatar.mjs
var _c0 = ["*"];
function TuiAvatarLabeled_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const word_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(word_r1);
  }
}
function TuiAvatarLabeled_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, TuiAvatarLabeled_Conditional_1_For_1_Template, 2, 1, "span", 0, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.words());
  }
}
var [TUI_AVATAR_OPTIONS, tuiAvatarOptionsProvider] = tuiCreateOptions({
  appearance: "",
  round: true,
  size: "m"
});
var Styles$1 = class Styles2 {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Styles2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: Styles2,
      selectors: [["ng-component"]],
      exportAs: ["tui-avatar-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiAvatar]:where(*[data-tui-version="5.9.0"]){--t-size: var(--tui-height-l);--t-radius: .75rem;--t-corner-offset: calc((var(--t-radius) * 1.4142 - var(--t-radius)) * 1 / 1.4142);position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;font:var(--tui-typography-body-l);font-weight:700;aspect-ratio:1;opacity:.999}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):before{inline-size:auto;block-size:auto}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):not(._initials):before{position:absolute;inset:0;font-size:calc(var(--t-size) * .6)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-typography-ui-2xs);font-size:.5625rem}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xs]._initials:before{font:var(--tui-typography-ui-2xs);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-typography-ui-2xs);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=s]._initials:before{font:var(--tui-typography-body-s);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-typography-ui-m);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=m]._initials:before{font:var(--tui-typography-body-m);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-typography-heading-h4)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xl]._initials:before{font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xxl]._initials:before{font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xxxl]._initials:before{font:var(--tui-typography-heading-h2)}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):not([data-shape=square]){--t-radius: calc(var(--t-size) / 2) !important}[tuiAvatar]:where(*[data-tui-version="5.9.0"])._initials:before{content:attr(data-icon-start);-webkit-mask-image:none;mask-image:none;background:none;font:var(--tui-typography-heading-h6)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])._badge{-webkit-mask-image:radial-gradient(circle at calc(max(var(--tui-inline),0) * 100% - var(--tui-inline) * var(--t-corner-offset)) calc(100% - var(--t-corner-offset)),black .23rem,transparent .25rem,transparent .375rem,black .39rem);mask-image:radial-gradient(circle at calc(max(var(--tui-inline),0) * 100% - var(--tui-inline) * var(--t-corner-offset)) calc(100% - var(--t-corner-offset)),black .23rem,transparent .25rem,transparent .375rem,black .39rem);mask-clip:no-clip}[tuiAvatar]:where(*[data-tui-version="5.9.0"])._badge:after{content:"";position:absolute;display:block;inset-block-start:calc(100% - var(--t-corner-offset));inset-inline-start:calc(100% - var(--t-corner-offset));inline-size:.55rem;block-size:.55rem;border-radius:100%;background:var(--t-badge);transform:translate3d(calc(var(--tui-inline) * -50%),-50%,0)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])._fallback img,[tuiAvatar]:where(*[data-tui-version="5.9.0"])._fallback video{display:none}[tuiAvatar]:where(*[data-tui-version="5.9.0"]) img,[tuiAvatar]:where(*[data-tui-version="5.9.0"]) video,[tuiAvatar]:where(*[data-tui-version="5.9.0"]) picture{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):has(img,video):not(._fallback){background:none}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles$1, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-avatar-${TUI_VERSION}`,
      styles: ['[tuiAvatar]:where(*[data-tui-version="5.9.0"]){--t-size: var(--tui-height-l);--t-radius: .75rem;--t-corner-offset: calc((var(--t-radius) * 1.4142 - var(--t-radius)) * 1 / 1.4142);position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;font:var(--tui-typography-body-l);font-weight:700;aspect-ratio:1;opacity:.999}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):before{inline-size:auto;block-size:auto}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):not(._initials):before{position:absolute;inset:0;font-size:calc(var(--t-size) * .6)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-typography-ui-2xs);font-size:.5625rem}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xs]._initials:before{font:var(--tui-typography-ui-2xs);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-typography-ui-2xs);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=s]._initials:before{font:var(--tui-typography-body-s);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-typography-ui-m);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=m]._initials:before{font:var(--tui-typography-body-m);font-weight:700}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-typography-heading-h4)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xl]._initials:before{font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xxl]._initials:before{font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-typography-heading-h3)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])[data-size=xxxl]._initials:before{font:var(--tui-typography-heading-h2)}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):not([data-shape=square]){--t-radius: calc(var(--t-size) / 2) !important}[tuiAvatar]:where(*[data-tui-version="5.9.0"])._initials:before{content:attr(data-icon-start);-webkit-mask-image:none;mask-image:none;background:none;font:var(--tui-typography-heading-h6)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])._badge{-webkit-mask-image:radial-gradient(circle at calc(max(var(--tui-inline),0) * 100% - var(--tui-inline) * var(--t-corner-offset)) calc(100% - var(--t-corner-offset)),black .23rem,transparent .25rem,transparent .375rem,black .39rem);mask-image:radial-gradient(circle at calc(max(var(--tui-inline),0) * 100% - var(--tui-inline) * var(--t-corner-offset)) calc(100% - var(--t-corner-offset)),black .23rem,transparent .25rem,transparent .375rem,black .39rem);mask-clip:no-clip}[tuiAvatar]:where(*[data-tui-version="5.9.0"])._badge:after{content:"";position:absolute;display:block;inset-block-start:calc(100% - var(--t-corner-offset));inset-inline-start:calc(100% - var(--t-corner-offset));inline-size:.55rem;block-size:.55rem;border-radius:100%;background:var(--t-badge);transform:translate3d(calc(var(--tui-inline) * -50%),-50%,0)}[tuiAvatar]:where(*[data-tui-version="5.9.0"])._fallback img,[tuiAvatar]:where(*[data-tui-version="5.9.0"])._fallback video{display:none}[tuiAvatar]:where(*[data-tui-version="5.9.0"]) img,[tuiAvatar]:where(*[data-tui-version="5.9.0"]) video,[tuiAvatar]:where(*[data-tui-version="5.9.0"]) picture{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}[tuiAvatar]:where(*[data-tui-version="5.9.0"]):has(img,video):not(._fallback){background:none}\n']
    }]
  }], null, null);
})();
var TuiAvatar = class _TuiAvatar {
  constructor() {
    this.options = inject(TUI_AVATAR_OPTIONS);
    this.nothing = tuiWithStyles(Styles$1);
    this.icons = inject(TuiIcons);
    this.fallback = signal(false);
    this.size = input(this.options.size);
    this.round = input(this.options.round);
    this.badge = input("");
  }
  static {
    this.ɵfac = function TuiAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatar)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAvatar,
      selectors: [["", "tuiAvatar", ""]],
      hostAttrs: ["tuiAvatar", ""],
      hostVars: 10,
      hostBindings: function TuiAvatar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("error.capture", function TuiAvatar_error_capture_HostBindingHandler() {
            return ctx.fallback.set(true);
          })("load.capture", function TuiAvatar_load_capture_HostBindingHandler() {
            return ctx.fallback.set(false);
          });
        }
        if (rf & 2) {
          let tmp_5_0;
          ɵɵattribute("data-shape", ctx.round() ? "round" : "square")("data-size", ctx.size());
          ɵɵstyleProp("--t-badge", ctx.badge());
          ɵɵclassProp("_badge", ctx.badge())("_fallback", ctx.fallback())("_initials", ((tmp_5_0 = ctx.icons.iconStart()) == null ? null : tmp_5_0.length) < 3);
        }
      },
      inputs: {
        size: [1, "size"],
        round: [1, "round"],
        badge: [1, "badge"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart", "tuiAvatar"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatar, [{
    type: Directive,
    args: [{
      selector: "[tuiAvatar]",
      providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart: tuiAvatar"]
      }],
      host: {
        tuiAvatar: "",
        "[attr.data-shape]": 'round() ? "round" : "square"',
        "[attr.data-size]": "size()",
        "[class._badge]": "badge()",
        "[class._fallback]": "fallback()",
        "[class._initials]": "icons.iconStart()?.length < 3",
        "[style.--t-badge]": "badge()",
        "(error.capture)": "fallback.set(true)",
        "(load.capture)": "fallback.set(false)"
      }
    }]
  }], null, null);
})();
var TuiAvatarLabeled = class _TuiAvatarLabeled {
  constructor() {
    this.label = input("");
    this.words = computed(() => this.label().split(" "));
  }
  static {
    this.ɵfac = function TuiAvatarLabeled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarLabeled)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarLabeled,
      selectors: [["tui-avatar-labeled"]],
      hostAttrs: ["data-tui-version", "5.9.0"],
      inputs: {
        label: [1, "label"]
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [["tuiFade", ""]],
      template: function TuiAvatarLabeled_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵconditionalCreate(1, TuiAvatarLabeled_Conditional_1_Template, 2, 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.label().length ? 1 : -1);
        }
      },
      dependencies: [TuiFade],
      styles: ['tui-avatar-labeled:where(*[data-tui-version="5.9.0"]){display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;font:var(--tui-typography-ui-xs);padding:0 .5rem;white-space:nowrap}tui-avatar-labeled:where(*[data-tui-version="5.9.0"]) [tuiAvatar]{margin-block-end:.375rem}tui-avatar-labeled:where(*[data-tui-version="5.9.0"]) [tuiFade]{inline-size:calc(100% + 1rem)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarLabeled, [{
    type: Component,
    args: [{
      selector: "tui-avatar-labeled",
      imports: [TuiFade],
      template: `
        <ng-content />
        @if (label().length) {
            @for (word of words(); track $index) {
                <span tuiFade>{{ word }}</span>
            }
        }
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION
      },
      styles: ['tui-avatar-labeled:where(*[data-tui-version="5.9.0"]){display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;font:var(--tui-typography-ui-xs);padding:0 .5rem;white-space:nowrap}tui-avatar-labeled:where(*[data-tui-version="5.9.0"]) [tuiAvatar]{margin-block-end:.375rem}tui-avatar-labeled:where(*[data-tui-version="5.9.0"]) [tuiFade]{inline-size:calc(100% + 1rem)}\n']
    }]
  }], null, null);
})();
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
      exportAs: ["tui-avatar-outline-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template1(rf, ctx) {
      },
      styles: ['[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"]){--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])[data-size=xs],[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])[data-size=s],[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])._outline{-webkit-mask-image:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask-image:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])._outline:after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask-image:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask-image:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n'],
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
      exportAs: `tui-avatar-outline-${TUI_VERSION}`,
      styles: ['[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"]){--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])[data-size=xs],[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])[data-size=s],[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])._outline{-webkit-mask-image:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask-image:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]:where(*[data-tui-version="5.9.0"])._outline:after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask-image:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask-image:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n']
    }]
  }], null, null);
})();
var TuiAvatarOutline = class _TuiAvatarOutline {
  constructor() {
    this.nothing = tuiWithStyles(Styles3);
    this.value = computed((value = this.tuiAvatarOutline()) => value === "" ? "var(--tui-background-accent-1)" : value);
    this.tuiAvatarOutline = input("");
  }
  static {
    this.ɵfac = function TuiAvatarOutline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutline)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAvatarOutline,
      selectors: [["", "tuiAvatarOutline", ""]],
      hostVars: 4,
      hostBindings: function TuiAvatarOutline_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-fill", ctx.value());
          ɵɵclassProp("_outline", ctx.value());
        }
      },
      inputs: {
        tuiAvatarOutline: [1, "tuiAvatarOutline"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutline, [{
    type: Directive,
    args: [{
      selector: "[tuiAvatarOutline]",
      host: {
        "[class._outline]": "value()",
        "[style.--t-fill]": "value()"
      }
    }]
  }], null, null);
})();
var TuiAvatarStack = class _TuiAvatarStack {
  constructor() {
    this.direction = input("end");
  }
  static {
    this.ɵfac = function TuiAvatarStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarStack)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarStack,
      selectors: [["tui-avatar-stack"]],
      hostAttrs: ["data-tui-version", "5.9.0"],
      hostVars: 1,
      hostBindings: function TuiAvatarStack_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-direction", ctx.direction());
        }
      },
      inputs: {
        direction: [1, "direction"]
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TuiAvatarStack_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['tui-avatar-stack:where(*[data-tui-version="5.9.0"]){display:flex;--t-gap: .125rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar]{--t-offset: 2.5rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=l]{--t-offset: 1.5rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=m]{--t-offset: .75rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=s]{--t-offset: .575rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=xs]{--t-offset: .375rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar]._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]._round{--tui-inline: 1}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=start] [tuiAvatar]._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=start] [tuiAvatar]:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=start] [tuiAvatar]:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar]:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=start] [tuiAvatar]:not(._round),tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar]:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarStack, [{
    type: Component,
    args: [{
      selector: "tui-avatar-stack",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-direction]": "direction()"
      },
      styles: ['tui-avatar-stack:where(*[data-tui-version="5.9.0"]){display:flex;--t-gap: .125rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar]{--t-offset: 2.5rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=l]{--t-offset: 1.5rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=m]{--t-offset: .75rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=s]{--t-offset: .575rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar][data-size=xs]{--t-offset: .375rem}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar]._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]._round{--tui-inline: 1}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=start] [tuiAvatar]._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=start] [tuiAvatar]:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=start] [tuiAvatar]:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar]:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=start] [tuiAvatar]:not(._round),tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack:where(*[data-tui-version="5.9.0"])[data-direction=end] [tuiAvatar]:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack:where(*[data-tui-version="5.9.0"]) [tuiAvatar]:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n']
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-chevron.mjs
var TUI_CHEVRON = new InjectionToken(ngDevMode ? "TUI_CHEVRON" : "", {
  factory: () => "@tui.chevron-down"
});
var Styles4 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-chevron-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"]):after,tui-icon[tuiChevron]:where(*[data-tui-version="5.9.0"]):before{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;cursor:pointer;font-size:1rem}[tuiButton][data-size=m][tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"]):after{margin-inline-end:-.125rem}[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"])._chevron-rotated:after,tui-icon[tuiChevron]:where(*[data-tui-version="5.9.0"])._chevron-rotated:before{transform:rotate(180deg)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"]){--t-stroke: var(--tui-stroke-width)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"]):after{transform:rotate(0) scale(calc(2 / 3));font-size:1.5rem;--tui-stroke-width: calc(var(--t-stroke) / 2 * 3)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"])._chevron-rotated:after{transform:rotate(180deg) scale(calc(2 / 3))}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles4, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-chevron-${TUI_VERSION}`,
      styles: ['[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"]):after,tui-icon[tuiChevron]:where(*[data-tui-version="5.9.0"]):before{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;cursor:pointer;font-size:1rem}[tuiButton][data-size=m][tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"]):after{margin-inline-end:-.125rem}[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"])._chevron-rotated:after,tui-icon[tuiChevron]:where(*[data-tui-version="5.9.0"])._chevron-rotated:before{transform:rotate(180deg)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"]){--t-stroke: var(--tui-stroke-width)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"]):after{transform:rotate(0) scale(calc(2 / 3));font-size:1.5rem;--tui-stroke-width: calc(var(--t-stroke) / 2 * 3)}tui-textfield[tuiChevron][tuiIcons]:where(*[data-tui-version="5.9.0"])._chevron-rotated:after{transform:rotate(180deg) scale(calc(2 / 3))}\n']
    }]
  }], null, null);
})();
var TuiChevron = class _TuiChevron {
  constructor() {
    this.el = tuiInjectElement();
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.nothing = tuiWithStyles(Styles4);
    this.toggle = effect(() => this.el.classList.toggle("_chevron-rotated", this.rotated() || this.rotated() === "" && !!this.dropdown?.ref()));
    this.rotated = input("", {
      alias: "tuiChevron"
    });
  }
  static {
    this.ɵfac = function TuiChevron_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevron)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiChevron,
      selectors: [["", "tuiChevron", ""]],
      hostAttrs: ["tuiChevron", ""],
      inputs: {
        rotated: [1, "tuiChevron", "rotated"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_ICON_END, TUI_CHEVRON)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevron, [{
    type: Directive,
    args: [{
      selector: "[tuiChevron]",
      providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
      host: {
        tuiChevron: ""
      }
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge.mjs
var TUI_BADGE_DEFAULT_OPTIONS = {
  appearance: "",
  size: "l"
};
var [TUI_BADGE_OPTIONS, tuiBadgeOptionsProvider] = tuiCreateOptions(TUI_BADGE_DEFAULT_OPTIONS);
var Styles5 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-badge-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiBadge]:where(*[data-tui-version="5.9.0"]){--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;justify-content:center;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:fit-content;font:var(--tui-typography-body-s)}[tuiBadge]:where(*[data-tui-version="5.9.0"])>img,[tuiBadge]:where(*[data-tui-version="5.9.0"])>tui-icon,[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiAvatar],[tuiBadge]:where(*[data-tui-version="5.9.0"])>tui-badge,[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiBadge],[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiRadio],[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiSwitch],[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiCheckbox],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before,[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}[tuiBadge]:where(*[data-tui-version="5.9.0"])>tui-icon,[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before,[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{font-size:var(--t-icon-size)!important}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=negative]{--t-status: var(--tui-status-negative)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=positive]{--t-status: var(--tui-status-positive)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=warning]{--t-status: var(--tui-status-warning)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=info]{--t-status: var(--tui-status-info)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=neutral]{--t-status: var(--tui-status-neutral)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-typography-ui-2xs)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-typography-body-m)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=negative],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=positive],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=warning],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=info],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]:where(*[data-tui-version="5.9.0"]){padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]:where(*[data-tui-version="5.9.0"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;--t-margin: 0}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles5, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-badge-${TUI_VERSION}`,
      styles: ['[tuiBadge]:where(*[data-tui-version="5.9.0"]){--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;justify-content:center;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:fit-content;font:var(--tui-typography-body-s)}[tuiBadge]:where(*[data-tui-version="5.9.0"])>img,[tuiBadge]:where(*[data-tui-version="5.9.0"])>tui-icon,[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiAvatar],[tuiBadge]:where(*[data-tui-version="5.9.0"])>tui-badge,[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiBadge],[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiRadio],[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiSwitch],[tuiBadge]:where(*[data-tui-version="5.9.0"])>[tuiCheckbox],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before,[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}[tuiBadge]:where(*[data-tui-version="5.9.0"])>tui-icon,[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before,[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{font-size:var(--t-icon-size)!important}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=negative]{--t-status: var(--tui-status-negative)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=positive]{--t-status: var(--tui-status-positive)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=warning]{--t-status: var(--tui-status-warning)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=info]{--t-status: var(--tui-status-info)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-appearance=neutral]{--t-status: var(--tui-status-neutral)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-typography-ui-2xs)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-typography-body-m)}[tuiBadge]:where(*[data-tui-version="5.9.0"])[data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=negative],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=positive],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=warning],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=info],[tuiBadge]:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]:where(*[data-tui-version="5.9.0"]){padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]:where(*[data-tui-version="5.9.0"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;--t-margin: 0}\n']
    }]
  }], null, null);
})();
var TuiBadge = class _TuiBadge {
  constructor() {
    this.nothing = tuiWithStyles(Styles5);
    this.size = input(inject(TUI_BADGE_OPTIONS).size);
  }
  static {
    this.ɵfac = function TuiBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadge)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBadge,
      selectors: [["", "tuiBadge", ""], ["tui-icon", "tuiBadge", ""]],
      hostVars: 1,
      hostBindings: function TuiBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadge, [{
    type: Directive,
    args: [{
      // tui-icon[tuiBadge] is required to avoid double matching of TuiIcons
      selector: "[tuiBadge],tui-icon[tuiBadge]",
      providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge-notification.mjs
var _c02 = ["*"];
var TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS = {
  size: "m"
};
var [TUI_BADGE_NOTIFICATION_OPTIONS, tuiBadgeNotificationOptionsProvider] = tuiCreateOptions(TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
var TuiBadgeNotification = class _TuiBadgeNotification {
  constructor() {
    this.size = input(inject(TUI_BADGE_NOTIFICATION_OPTIONS).size);
  }
  static {
    this.ɵfac = function TuiBadgeNotification_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgeNotification)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBadgeNotification,
      selectors: [["tui-badge-notification"]],
      hostVars: 1,
      hostBindings: function TuiBadgeNotification_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵHostDirectivesFeature([TuiAnimated])],
      ngContentSelectors: _c02,
      decls: 1,
      vars: 0,
      template: function TuiBadgeNotification_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["[_nghost-%COMP%]{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-typography-body-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}.tui-enter[_nghost-%COMP%]{animation:tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}.tui-leave[_nghost-%COMP%]{animation:tuiScale var(--tui-duration) ease-in-out reverse}[data-size=m][_nghost-%COMP%]{--t-size: 1.25rem}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-typography-body-xs)}[data-size=xs][_nghost-%COMP%]{--t-size: .375rem;padding:0;font-size:0}[_nghost-%COMP%]   [tuiIconButton][_nghost-%COMP%], [tuiIconButton]   [_nghost-%COMP%]{position:absolute;inset-inline-end:25%;inset-block-start:25%}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeNotification, [{
    type: Component,
    args: [{
      selector: "tui-badge-notification",
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated],
      host: {
        "[attr.data-size]": "size()"
      },
      styles: [":host{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-typography-body-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}:host.tui-enter{animation:tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}:host.tui-leave{animation:tuiScale var(--tui-duration) ease-in-out reverse}:host[data-size=m]{--t-size: 1.25rem}:host[data-size=s]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-typography-body-xs)}:host[data-size=xs]{--t-size: .375rem;padding:0;font-size:0}:host :host-context([tuiIconButton]){position:absolute;inset-inline-end:25%;inset-block-start:25%}\n"]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-block.mjs
var TUI_BLOCK_DEFAULT_OPTIONS = {
  appearance: "outline-grayscale",
  size: "l"
};
var [TUI_BLOCK_OPTIONS, tuiBlockOptionsProvider] = tuiCreateOptions(TUI_BLOCK_DEFAULT_OPTIONS);
var Styles6 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-block-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiBlock]:where(*[data-tui-version="5.9.0"]){--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-typography-body-m);padding:var(--tui-padding-l);isolation:isolate}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s]{gap:.5rem;font:var(--tui-typography-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s]:before,[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s]:after{font-size:1rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m]{gap:.625rem;font:var(--tui-typography-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m]:before,[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m]:after{margin:-.125rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]:where(*[data-tui-version="5.9.0"])._disabled :focus{visibility:hidden}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-appearance=""]{justify-content:center}[tuiBlock]:where(*[data-tui-version="5.9.0"]) input[tuiBlock]{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;z-index:-1;min-block-size:0;pointer-events:none;border-radius:inherit;padding:0}[tuiBlock]:where(*[data-tui-version="5.9.0"]) input[tuiBlock][type=file]{opacity:0}[tuiBlock]:where(*[data-tui-version="5.9.0"]) [tuiAvatar]{margin:-.25rem}[tuiBlock]:where(*[data-tui-version="5.9.0"]) [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock]:where(*[data-tui-version="5.9.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock]:where(*[data-tui-version="5.9.0"]) [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles6, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-block-${TUI_VERSION}`,
      styles: ['[tuiBlock]:where(*[data-tui-version="5.9.0"]){--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-typography-body-m);padding:var(--tui-padding-l);isolation:isolate}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s]{gap:.5rem;font:var(--tui-typography-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s]:before,[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s]:after{font-size:1rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m]{gap:.625rem;font:var(--tui-typography-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m]:before,[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m]:after{margin:-.125rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]:where(*[data-tui-version="5.9.0"])._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]:where(*[data-tui-version="5.9.0"])._disabled :focus{visibility:hidden}[tuiBlock]:where(*[data-tui-version="5.9.0"])[data-appearance=""]{justify-content:center}[tuiBlock]:where(*[data-tui-version="5.9.0"]) input[tuiBlock]{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;z-index:-1;min-block-size:0;pointer-events:none;border-radius:inherit;padding:0}[tuiBlock]:where(*[data-tui-version="5.9.0"]) input[tuiBlock][type=file]{opacity:0}[tuiBlock]:where(*[data-tui-version="5.9.0"]) [tuiAvatar]{margin:-.25rem}[tuiBlock]:where(*[data-tui-version="5.9.0"]) [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock]:where(*[data-tui-version="5.9.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock]:where(*[data-tui-version="5.9.0"]) [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n']
    }]
  }], null, null);
})();
var TuiBlock = class _TuiBlock {
  constructor() {
    this.nothing = tuiWithStyles(Styles6);
    this.options = inject(TUI_BLOCK_OPTIONS);
    this.control = contentChild(NgControl);
    this.size = input(this.options.size, {
      alias: "tuiBlock"
    });
  }
  static {
    this.ɵfac = function TuiBlock_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlock)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBlock,
      selectors: [["label", "tuiBlock", ""], ["input", "tuiBlock", ""]],
      contentQueries: function TuiBlock_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.control, NgControl, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["tuiBlock", ""],
      hostVars: 3,
      hostBindings: function TuiBlock_HostBindings(rf, ctx) {
        if (rf & 2) {
          let tmp_1_0;
          ɵɵattribute("data-size", ctx.size() || ctx.options.size || "l");
          ɵɵclassProp("_disabled", !!((tmp_1_0 = ctx.control()) == null ? null : tmp_1_0.disabled));
        }
      },
      inputs: {
        size: [1, "tuiBlock", "size"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS), tuiAvatarOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlock, [{
    type: Directive,
    args: [{
      selector: "label[tuiBlock],input[tuiBlock]",
      providers: [tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS), tuiAvatarOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiNativeValidator, TuiWithAppearance, TuiWithIcons],
      host: {
        tuiBlock: "",
        "[attr.data-size]": 'size() || this.options.size || "l"',
        "[class._disabled]": "!!this.control()?.disabled"
      }
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-items-with-more.mjs
var _c03 = (a0) => ({
  $implicit: a0
});
function TuiItemsWithMoreComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 1);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const template_r1 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiItemsWithMoreComponent_For_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiItemsWithMoreComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, TuiItemsWithMoreComponent_For_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("t-item_hidden", ctx_r3.isHidden($index_r3));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiItemsWithMoreComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 1);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const template_r1 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiItemsWithMoreComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelementContainer(1, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.more() || null)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c03, ctx_r3.lastIndex()));
  }
}
function TuiItemsWithMoreComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiItemsWithMoreComponent_ng_template_4_Conditional_0_Template, 2, 4, "span", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵconditional(!ctx_r3.isMoreHidden() ? 0 : -1);
  }
}
var TuiItemsWithMoreDirective = class _TuiItemsWithMoreDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.itemsLimit = input(Infinity);
    this.required = input(-1);
    this.linesLimit = input(1);
    this.side = input("end");
    this.align = computed(() => this.linesLimit() > 1 ? "end" : this.side());
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
  maxWidth() {
    return Math.max(...Array.from(this.el.children, ({
      clientWidth
    }) => clientWidth));
  }
  static {
    this.ɵfac = function TuiItemsWithMoreDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsWithMoreDirective,
      hostVars: 4,
      hostBindings: function TuiItemsWithMoreDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-min-width", ctx.maxWidth(), "px");
          ɵɵclassProp("_multiline", ctx.linesLimit() > 1);
        }
      },
      inputs: {
        itemsLimit: [1, "itemsLimit"],
        required: [1, "required"],
        linesLimit: [1, "linesLimit"],
        side: [1, "side"]
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreDirective, [{
    type: Directive,
    args: [{
      host: {
        "[class._multiline]": "linesLimit() > 1",
        "[style.--t-min-width.px]": "maxWidth()"
      }
    }]
  }], null, null);
})();
var TuiItemsWithMoreService = class _TuiItemsWithMoreService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.directive = inject(TuiItemsWithMoreDirective);
    this.stream$ = merge(this.directive.change$, inject(WaMutationObserverService, {
      self: true
    }), inject(WaResizeObserverService, {
      self: true
    })).pipe(debounceTime(0, tuiZonefreeScheduler()), map(() => this.directive.linesLimit() > 1 ? this.getOverflowIndexMultiline() : this.getOverflowIndex(Array.from(this.el.children))), distinctUntilChanged(), tuiZoneOptimized(), share());
  }
  getOverflowIndex(children) {
    const {
      align,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const items = Array.from(children, ({
      clientWidth: clientWidth2
    }) => clientWidth2);
    const index = align() === "start" ? 0 : items.length - 1;
    const more = children[index]?.tagName === "SPAN" ? items[index] ?? 0 : 0;
    const total = items.reduce((sum, width) => sum + width, 0) - more;
    if (total <= clientWidth && itemsLimit() >= items.length) {
      return align() === "end" ? itemsLimit() : 0;
    }
    return align() === "start" ? this.getIndexStart(items, total, more) : this.getIndexEnd(items, total, more);
  }
  getIndexStart(items, total, more) {
    const {
      required,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const min = Number.isFinite(itemsLimit()) ? items.length - itemsLimit() - 1 : 0;
    const last = items.length - 1;
    const mandatory = required() === -1 ? last : required();
    for (let i = 1; i < last; i++) {
      if (i === mandatory + 1) {
        continue;
      }
      total -= items[i] ?? 0;
      if (total + more <= clientWidth) {
        return tuiClamp(i, mandatory < min ? min + 1 : min, items.length);
      }
    }
    return items.length;
  }
  getIndexEnd(items, total, more) {
    const {
      required,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const max = itemsLimit() > required() ? itemsLimit() - 1 : itemsLimit() - 2;
    const last = items.length - 1;
    const mandatory = required() === -1 ? 0 : required;
    for (let i = last - 1; i > 0; i--) {
      if (i === mandatory) {
        continue;
      }
      total -= items[i] ?? 0;
      if (total + more <= clientWidth) {
        return tuiClamp(i - 1, -1, max);
      }
    }
    return -1;
  }
  getOverflowIndexMultiline() {
    const {
      children
    } = this.el;
    const {
      linesLimit,
      itemsLimit
    } = this.directive;
    const items = Array.from(children);
    const rows = new Set(items.map((item) => item.offsetTop));
    const offset = Array.from(rows)[linesLimit() - 1];
    const firstItemLastRow = items.findIndex((i) => i.offsetTop === offset);
    const lastRow = items.slice(firstItemLastRow);
    const index = firstItemLastRow + this.getOverflowIndex(lastRow);
    return Math.min(itemsLimit() - 1, index);
  }
  static {
    this.ɵfac = function TuiItemsWithMoreService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiItemsWithMoreService,
      factory: _TuiItemsWithMoreService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiMore = class _TuiMore {
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function TuiMore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMore)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiMore,
      selectors: [["", "tuiMore", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMore, [{
    type: Directive,
    args: [{
      selector: "[tuiMore]"
    }]
  }], null, null);
})();
var TuiItemsWithMoreComponent = class _TuiItemsWithMoreComponent {
  constructor() {
    this.service = inject(TuiItemsWithMoreService);
    this.directive = inject(TuiItemsWithMoreDirective);
    this.more = contentChild(TuiMore, {
      read: TemplateRef
    });
    this.items = contentChildren(TuiItem, {
      read: TemplateRef,
      descendants: true
    });
    this.isMoreHidden = computed((index = this.lastIndex()) => index >= this.items().length - 1 && this.directive.align() === "end" || !index && this.directive.align() === "start");
    this.lastIndexChange = outputFromObservable(this.service);
    this.lastIndex = toSignal(this.service, {
      initialValue: 0
    });
  }
  isHidden(index) {
    const {
      align,
      required
    } = this.directive;
    return index > this.lastIndex() && index !== required() && align() === "end" || index < this.lastIndex() && index !== required() && align() === "start";
  }
  static {
    this.ɵfac = function TuiItemsWithMoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiItemsWithMoreComponent,
      selectors: [["tui-items-with-more"]],
      contentQueries: function TuiItemsWithMoreComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.more, TuiMore, 5, TemplateRef)(dirIndex, ctx.items, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      outputs: {
        lastIndexChange: "lastIndexChange"
      },
      features: [ɵɵProvidersFeature([WaMutationObserverService, WaResizeObserverService, TuiItemsWithMoreService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiItemsWithMoreDirective,
        inputs: ["itemsLimit", "itemsLimit", "required", "required", "side", "side", "linesLimit", "linesLimit"]
      }])],
      decls: 6,
      vars: 2,
      consts: [["template", ""], [3, "ngTemplateOutlet"], [1, "t-item", 3, "t-item_hidden"], [1, "t-item"], [4, "ngTemplateOutlet"], [1, "t-item", "t-item_more"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TuiItemsWithMoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiItemsWithMoreComponent_Conditional_0_Template, 1, 1, "ng-container", 1);
          ɵɵrepeaterCreate(1, TuiItemsWithMoreComponent_For_2_Template, 2, 3, "div", 2, ɵɵrepeaterTrackByIdentity);
          ɵɵconditionalCreate(3, TuiItemsWithMoreComponent_Conditional_3_Template, 1, 1, "ng-container", 1);
          ɵɵtemplate(4, TuiItemsWithMoreComponent_ng_template_4_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.directive.side() === "start" ? 0 : -1);
          ɵɵadvance();
          ɵɵrepeater(ctx.items());
          ɵɵadvance(2);
          ɵɵconditional(ctx.directive.side() === "end" ? 3 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap;gap:0!important}._multiline[_nghost-%COMP%]{flex-wrap:wrap}.t-item[_ngcontent-%COMP%]{flex:0 0 auto;max-inline-size:100%}.t-item_hidden[_ngcontent-%COMP%]{position:absolute;inset-block-end:0;visibility:hidden}._multiline[_nghost-%COMP%]   .t-item_more[_ngcontent-%COMP%]:not(:empty){min-inline-size:var(--t-min-width, 0)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreComponent, [{
    type: Component,
    args: [{
      selector: "tui-items-with-more",
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [WaMutationObserverService, WaResizeObserverService, TuiItemsWithMoreService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }],
      hostDirectives: [{
        directive: TuiItemsWithMoreDirective,
        inputs: ["itemsLimit", "required", "side", "linesLimit"]
      }],
      template: `@if (directive.side() === 'start') {
    <ng-container [ngTemplateOutlet]="template" />
}
@for (item of items(); track item) {
    <div
        class="t-item"
        [class.t-item_hidden]="isHidden($index)"
    >
        <ng-container *ngTemplateOutlet="item" />
    </div>
}
@if (directive.side() === 'end') {
    <ng-container [ngTemplateOutlet]="template" />
}
<ng-template #template>
    @if (!isMoreHidden()) {
        <span class="t-item t-item_more">
            <ng-container
                [ngTemplateOutlet]="more() || null"
                [ngTemplateOutletContext]="{$implicit: lastIndex()}"
            />
        </span>
    }
</ng-template>
`,
      styles: [":host{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap;gap:0!important}:host._multiline{flex-wrap:wrap}.t-item{flex:0 0 auto;max-inline-size:100%}.t-item_hidden{position:absolute;inset-block-end:0;visibility:hidden}:host._multiline .t-item_more:not(:empty){min-inline-size:var(--t-min-width, 0)}\n"]
    }]
  }], null, null);
})();
var TuiItemsWithMore = [TuiItemsWithMoreComponent, TuiItemsWithMoreDirective, TuiMore, TuiItem];

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-tokens.mjs
var TUI_CONFIRM_WORDS = new InjectionToken(ngDevMode ? "TUI_CONFIRM_WORDS" : "", { factory: tuiExtractI18n("confirm") });
var TUI_CANCEL_WORD = new InjectionToken(ngDevMode ? "TUI_CANCEL_WORD" : "", {
  factory: tuiExtractI18n("cancel")
});
var TUI_DONE_WORD = new InjectionToken(ngDevMode ? "TUI_DONE_WORD" : "", {
  factory: tuiExtractI18n("done")
});
var TUI_MORE_WORD = new InjectionToken(ngDevMode ? "TUI_MORE_WORD" : "", {
  factory: tuiExtractI18n("more")
});
var TUI_HIDE_TEXT = new InjectionToken(ngDevMode ? "TUI_HIDE_TEXT" : "", {
  factory: tuiExtractI18n("hide")
});
var TUI_SHOW_ALL_TEXT = new InjectionToken(ngDevMode ? "TUI_SHOW_ALL_TEXT" : "", { factory: tuiExtractI18n("showAll") });
var TUI_OTHER_DATE_TEXT = new InjectionToken(ngDevMode ? "TUI_OTHER_DATE_TEXT" : "", { factory: tuiExtractI18n("otherDate") });
var TUI_CHOOSE_DAY_OR_RANGE_TEXTS = new InjectionToken(ngDevMode ? "TUI_CHOOSE_DAY_OR_RANGE_TEXTS" : "", { factory: tuiExtractI18n("mobileCalendarTexts") });
var TUI_FROM_TO_TEXTS = new InjectionToken(ngDevMode ? "TUI_FROM_TO_TEXTS" : "", { factory: tuiExtractI18n("range") });
var TUI_PLUS_MINUS_TEXTS = new InjectionToken(ngDevMode ? "TUI_PLUS_MINUS_TEXTS" : "", { factory: tuiExtractI18n("countTexts") });
var TUI_TIME_TEXTS = new InjectionToken(ngDevMode ? "TUI_TIME_TEXTS" : "", {
  factory: tuiExtractI18n("time")
});
var TUI_DATE_TEXTS = new InjectionToken(ngDevMode ? "TUI_DATE_TEXTS" : "", { factory: tuiExtractI18n("dateTexts") });
var TUI_DIGITAL_INFORMATION_UNITS = new InjectionToken(ngDevMode ? "TUI_DIGITAL_INFORMATION_UNITS" : "", { factory: tuiExtractI18n("digitalInformationUnits") });
var TUI_COPY_TEXTS = new InjectionToken(ngDevMode ? "TUI_COPY_TEXTS" : "", {
  factory: tuiExtractI18n("copyTexts")
});
var TUI_PASSWORD_TEXTS = new InjectionToken(ngDevMode ? "TUI_PASSWORD_TEXTS" : "", { factory: tuiExtractI18n("passwordTexts") });
var TUI_CALENDAR_MONTHS = new InjectionToken(ngDevMode ? "TUI_CALENDAR_MONTHS" : "", { factory: tuiExtractI18n("shortCalendarMonths") });
var TUI_FILE_TEXTS = new InjectionToken(ngDevMode ? "TUI_FILE_TEXTS" : "", {
  factory: tuiExtractI18n("fileTexts")
});
var TUI_PAGINATION_TEXTS = new InjectionToken(ngDevMode ? "TUI_PAGINATION_TEXTS" : "", { factory: tuiExtractI18n("pagination") });
var TUI_INPUT_FILE_TEXTS = new InjectionToken(ngDevMode ? "TUI_INPUT_FILE_TEXTS" : "", { factory: tuiExtractI18n("inputFileTexts") });
var TUI_MULTI_SELECT_TEXTS = new InjectionToken(ngDevMode ? "TUI_MULTI_SELECT_TEXTS" : "", { factory: tuiExtractI18n("multiSelectTexts") });
var TUI_COUNTRIES = new InjectionToken(ngDevMode ? "TUI_COUNTRIES" : "", { factory: tuiExtractI18n("countries") });
var TUI_PREVIEW_TEXTS = new InjectionToken(ngDevMode ? "TUI_PREVIEW_TEXTS" : "", { factory: tuiExtractI18n("previewTexts") });
var TUI_PREVIEW_ZOOM_TEXTS = new InjectionToken(ngDevMode ? "TUI_PREVIEW_ZOOM_TEXTS" : "", { factory: tuiExtractI18n("zoomTexts") });
var TUI_INTERNATIONAL_SEARCH = new InjectionToken(ngDevMode ? "TUI_INTERNATIONAL_SEARCH" : "", { factory: tuiExtractI18n("phoneSearch") });
var TUI_DAY_RANGE_PERIODS = new InjectionToken(ngDevMode ? "TUI_DAY_RANGE_PERIODS" : "", { factory: tuiExtractI18n("dayRangePeriods") });

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-breadcrumbs.mjs
var _c04 = ["*"];
function TuiBreadcrumbs_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4)(1, 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const separator_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.items()[0] || null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext(5);
    const separator_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 4);
    ɵɵconditionalCreate(2, TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_ng_container_0_Conditional_2_Template, 1, 1, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const item_r4 = ctx_r2.$implicit;
    const ɵ$index_9_r5 = ctx_r2.$index;
    const ɵ$count_9_r6 = ctx_r2.$count;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r4);
    ɵɵadvance();
    ɵɵconditional(!(ɵ$index_9_r5 === ɵ$count_9_r6 - 1) ? 2 : -1);
  }
}
function TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_ng_container_0_Template, 3, 2, "ng-container", 5);
  }
}
function TuiBreadcrumbs_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiBreadcrumbs_Conditional_0_For_3_Conditional_0_Template, 1, 0, "ng-container");
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(item_r4 !== ctx_r0.items()[0] || ctx_r0.itemsLimit() === 2 ? 0 : -1);
  }
}
function TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵelementContainer(1, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r7);
  }
}
function TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_For_2_Conditional_0_Template, 2, 1, "span", 9);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    const index_r9 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional($index_r8 + ctx_r0.offset() && $index_r8 <= index_r9 && item_r7 !== ctx_r0.items()[ctx_r0.items().length - 1] ? 0 : -1);
  }
}
function TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 8);
    ɵɵrepeaterCreate(1, TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_For_2_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.items());
  }
}
function TuiBreadcrumbs_Conditional_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6)(1, "button", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainer(3, 4);
    ɵɵelementEnd();
    ɵɵtemplate(4, TuiBreadcrumbs_Conditional_0_ng_template_4_ng_template_4_Template, 3, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const dropdown_r10 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext(2);
    const separator_r2 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("iconStart", ctx_r0.icons.ellipsis)("tuiDropdown", dropdown_r10);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.more(), " ");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiBreadcrumbs_Conditional_0_Conditional_0_Template, 2, 2);
    ɵɵelementStart(1, "tui-items-with-more", 2);
    ɵɵrepeaterCreate(2, TuiBreadcrumbs_Conditional_0_For_3_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
    ɵɵtemplate(4, TuiBreadcrumbs_Conditional_0_ng_template_4_Template, 6, 4, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.itemsLimit() !== 2 ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("itemsLimit", ctx_r0.itemsLimit() - 2)("required", ctx_r0.items().length + ctx_r0.offset() - 2);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.items());
  }
}
function TuiBreadcrumbs_Conditional_1_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const separator_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
    ɵɵconditionalCreate(1, TuiBreadcrumbs_Conditional_1_For_1_Conditional_1_Template, 1, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ɵ$index_40_r12 = ctx.$index;
    const ɵ$count_40_r13 = ctx.$count;
    ɵɵproperty("ngTemplateOutlet", item_r11);
    ɵɵadvance();
    ɵɵconditional(!(ɵ$index_40_r12 === ɵ$count_40_r13 - 1) ? 1 : -1);
  }
}
function TuiBreadcrumbs_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, TuiBreadcrumbs_Conditional_1_For_1_Template, 2, 2, null, null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵrepeater(ctx_r0.items());
  }
}
function TuiBreadcrumbs_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.options.icon);
  }
}
function TuiBreadcrumbs_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.options.icon);
  }
}
function TuiBreadcrumbs_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiBreadcrumbs_ng_template_2_Conditional_0_Template, 1, 1, "tui-icon", 10)(1, TuiBreadcrumbs_ng_template_2_Conditional_1_Template, 2, 1, "span", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.options.icon.length > 1 ? 0 : 1);
  }
}
var TUI_BREADCRUMBS_DEFAULT_OPTIONS = {
  icon: "@tui.chevron-right",
  size: "m",
  itemsLimit: 0
};
var [TUI_BREADCRUMBS_OPTIONS, tuiBreadcrumbsOptionsProvider] = tuiCreateOptions(TUI_BREADCRUMBS_DEFAULT_OPTIONS);
var TuiBreadcrumbs = class _TuiBreadcrumbs {
  constructor() {
    this.items = contentChildren(TuiItem, {
      read: TemplateRef
    });
    this.options = inject(TUI_BREADCRUMBS_OPTIONS);
    this.icons = inject(TUI_COMMON_ICONS);
    this.more = inject(TUI_MORE_WORD);
    this.size = input(this.options.size);
    this.itemsLimit = input(this.options.itemsLimit);
    this.offset = computed(() => this.itemsLimit() === 2 ? 1 : 0);
  }
  static {
    this.ɵfac = function TuiBreadcrumbs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBreadcrumbs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBreadcrumbs,
      selectors: [["tui-breadcrumbs"]],
      contentQueries: function TuiBreadcrumbs_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.items, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostVars: 1,
      hostBindings: function TuiBreadcrumbs_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"],
        itemsLimit: [1, "itemsLimit"]
      },
      features: [ɵɵProvidersFeature([tuiLinkOptionsProvider({
        appearance: "action-grayscale"
      }), tuiHintOptionsProvider({
        direction: "bottom"
      })])],
      ngContentSelectors: _c04,
      decls: 5,
      vars: 1,
      consts: [["separator", ""], ["dropdown", ""], ["side", "start", 3, "itemsLimit", "required"], ["tuiMore", ""], [3, "ngTemplateOutlet"], [4, "tuiItem"], [1, "t-more"], ["appearance", "flat", "size", "xs", "tuiDropdownAuto", "", "tuiIconButton", "", "type", "button", 3, "iconStart", "tuiDropdown"], ["size", "s"], ["tuiOption", "", 1, "t-option"], [1, "t-icon", 3, "icon"], [1, "t-char"]],
      template: function TuiBreadcrumbs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, TuiBreadcrumbs_Conditional_0_Template, 5, 3)(1, TuiBreadcrumbs_Conditional_1_Template, 2, 0);
          ɵɵtemplate(2, TuiBreadcrumbs_ng_template_2_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵprojection(4);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.itemsLimit() > 1 ? 0 : 1);
        }
      },
      dependencies: [NgTemplateOutlet, TuiButton, TuiDataListComponent, TuiDropdownDirective, TuiDropdownOpen, TuiIcon, TuiItemsWithMoreComponent, TuiMore, TuiItem],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;white-space:nowrap;color:var(--tui-text-secondary)}[data-size=m][_nghost-%COMP%]{font:var(--tui-typography-body-s);line-height:1.5rem;block-size:1.5rem}[data-size=l][_nghost-%COMP%]{font:var(--tui-typography-body-m);line-height:2.5rem;block-size:2.5rem}[_nghost-%COMP%]     [tuiLink]{text-decoration:none}.t-more[_ngcontent-%COMP%]{display:flex;align-items:center}.t-option[_ngcontent-%COMP%]    >*{color:var(--tui-text-primary)!important;background:transparent!important;text-decoration:none}.t-icon[_ngcontent-%COMP%]{margin:0 .5rem;font-size:1rem;transform:scaleX(var(--tui-inline))}.t-char[_ngcontent-%COMP%]{margin:0 .375rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBreadcrumbs, [{
    type: Component,
    args: [{
      selector: "tui-breadcrumbs",
      imports: [NgTemplateOutlet, TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiItemsWithMore],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiLinkOptionsProvider({
        appearance: "action-grayscale"
      }), tuiHintOptionsProvider({
        direction: "bottom"
      })],
      host: {
        "[attr.data-size]": "size()"
      },
      template: '@if (itemsLimit() > 1) {\n    @if (itemsLimit() !== 2) {\n        <ng-container [ngTemplateOutlet]="items()[0] || null" />\n        <ng-container [ngTemplateOutlet]="separator" />\n    }\n    <tui-items-with-more\n        side="start"\n        [itemsLimit]="itemsLimit() - 2"\n        [required]="items().length + offset() - 2"\n    >\n        @for (item of items(); track item) {\n            @if (item !== items()[0] || itemsLimit() === 2) {\n                <ng-container *tuiItem>\n                    <ng-container [ngTemplateOutlet]="item" />\n                    @if (!$last) {\n                        <ng-container [ngTemplateOutlet]="separator" />\n                    }\n                </ng-container>\n            }\n        }\n        <ng-template\n            let-index\n            tuiMore\n        >\n            <span class="t-more">\n                <button\n                    appearance="flat"\n                    size="xs"\n                    tuiDropdownAuto\n                    tuiIconButton\n                    type="button"\n                    [iconStart]="icons.ellipsis"\n                    [tuiDropdown]="dropdown"\n                >\n                    {{ more() }}\n                </button>\n                <ng-container [ngTemplateOutlet]="separator" />\n            </span>\n            <ng-template #dropdown>\n                <tui-data-list size="s">\n                    @for (item of items(); track item) {\n                        @if ($index + offset() && $index <= index && item !== items()[items().length - 1]) {\n                            <span\n                                tuiOption\n                                class="t-option"\n                            >\n                                <ng-container [ngTemplateOutlet]="item" />\n                            </span>\n                        }\n                    }\n                </tui-data-list>\n            </ng-template>\n        </ng-template>\n    </tui-items-with-more>\n} @else {\n    @for (item of items(); track item) {\n        <ng-container [ngTemplateOutlet]="item" />\n        @if (!$last) {\n            <ng-container [ngTemplateOutlet]="separator" />\n        }\n    }\n}\n<ng-template #separator>\n    @if (options.icon.length > 1) {\n        <tui-icon\n            class="t-icon"\n            [icon]="options.icon"\n        />\n    } @else {\n        <span class="t-char">{{ options.icon }}</span>\n    }\n</ng-template>\n\n<ng-content />\n',
      styles: [":host{display:flex;align-items:center;white-space:nowrap;color:var(--tui-text-secondary)}:host[data-size=m]{font:var(--tui-typography-body-s);line-height:1.5rem;block-size:1.5rem}:host[data-size=l]{font:var(--tui-typography-body-m);line-height:2.5rem;block-size:2.5rem}:host ::ng-deep [tuiLink]{text-decoration:none}.t-more{display:flex;align-items:center}.t-option ::ng-deep>*{color:var(--tui-text-primary)!important;background:transparent!important;text-decoration:none}.t-icon{margin:0 .5rem;font-size:1rem;transform:scaleX(var(--tui-inline))}.t-char{margin:0 .375rem}\n"]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-switch.mjs
var [TUI_SWITCH_OPTIONS, tuiSwitchOptionsProvider] = tuiCreateOptions({
  showIcons: true,
  size: "m",
  icon: () => "@tui.check",
  appearance: ({
    checked
  }) => checked ? "primary" : "secondary"
});
var TuiSwitch = class _TuiSwitch extends TuiRadioComponent {
  constructor() {
    super(...arguments);
    this.native = "switch" in this.el;
    this.icon = tuiIconStart(computed(() => this.showIcons() ? this.options.icon(this.size()) : ""));
    this.showIcons = input(this.options.showIcons);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSwitch_BaseFactory;
      return function TuiSwitch_Factory(__ngFactoryType__) {
        return (ɵTuiSwitch_BaseFactory || (ɵTuiSwitch_BaseFactory = ɵɵgetInheritedFactory(_TuiSwitch)))(__ngFactoryType__ || _TuiSwitch);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSwitch,
      selectors: [["input", "type", "checkbox", "tuiSwitch", ""]],
      hostAttrs: ["role", "switch", "switch", ""],
      hostVars: 2,
      hostBindings: function TuiSwitch_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_native", ctx.native);
        }
      },
      inputs: {
        showIcons: [1, "showIcons"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_RADIO_OPTIONS, TUI_SWITCH_OPTIONS)]), ɵɵHostDirectivesFeature([TuiIcons]), ɵɵInheritDefinitionFeature],
      decls: 0,
      vars: 0,
      template: function TuiSwitch_Template(rf, ctx) {
      },
      styles: ['[tuiSwitch]:where(*[data-tui-version="5.9.0"]){transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-size=s]:before{inline-size:1rem;transform:translate(calc(var(--tui-inline) * -1rem));font-size:.75rem}[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-size=s]:after{inline-size:1rem;box-shadow:calc(var(--tui-inline) * -2.625rem) 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-size=s]:checked:after{transform:scale(.375) translate(calc(var(--tui-inline) * 2.625rem))}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):checked:before{transform:none}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):checked:after{transform:scale(.33333) translate(calc(var(--tui-inline) * 4.5rem))}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):disabled._readonly._readonly{opacity:1}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):before,[tuiSwitch]:where(*[data-tui-version="5.9.0"]):after{position:absolute;block-size:100%;inline-size:1.5rem;transition-property:transform;zoom:1}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):before{inset-inline-start:.125rem;font-size:1rem;transform:translate(calc(var(--tui-inline) * -1.5rem))}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):after{display:block;inset-inline-end:0;border-radius:100%;background:none;transform:scale(.33333);box-shadow:calc(var(--tui-inline) * -4.5rem) 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed)}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):not([data-icon-start]):after{outline-offset:20rem}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):invalid:not([data-mode]),[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-mode~=invalid]{color:#fff}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwitch, [{
    type: Component,
    args: [{
      selector: 'input[type="checkbox"][tuiSwitch]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(TUI_RADIO_OPTIONS, TUI_SWITCH_OPTIONS)],
      hostDirectives: [TuiIcons],
      host: {
        role: "switch",
        switch: "",
        "[class._native]": "native"
      },
      styles: ['[tuiSwitch]:where(*[data-tui-version="5.9.0"]){transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-size=s]:before{inline-size:1rem;transform:translate(calc(var(--tui-inline) * -1rem));font-size:.75rem}[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-size=s]:after{inline-size:1rem;box-shadow:calc(var(--tui-inline) * -2.625rem) 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-size=s]:checked:after{transform:scale(.375) translate(calc(var(--tui-inline) * 2.625rem))}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):checked:before{transform:none}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):checked:after{transform:scale(.33333) translate(calc(var(--tui-inline) * 4.5rem))}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):disabled._readonly._readonly{opacity:1}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):before,[tuiSwitch]:where(*[data-tui-version="5.9.0"]):after{position:absolute;block-size:100%;inline-size:1.5rem;transition-property:transform;zoom:1}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):before{inset-inline-start:.125rem;font-size:1rem;transform:translate(calc(var(--tui-inline) * -1.5rem))}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):after{display:block;inset-inline-end:0;border-radius:100%;background:none;transform:scale(.33333);box-shadow:calc(var(--tui-inline) * -4.5rem) 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed)}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):not([data-icon-start]):after{outline-offset:20rem}[tuiSwitch]:where(*[data-tui-version="5.9.0"]):invalid:not([data-mode]),[tuiSwitch]:where(*[data-tui-version="5.9.0"])[data-mode~=invalid]{color:#fff}\n']
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-segmented.mjs
var _c05 = ["*"];
var TuiSegmentedDirective = class _TuiSegmentedDirective {
  constructor() {
    this.component = inject(TuiSegmented);
    this.el = tuiInjectElement();
    this.links = contentChildren(RouterLinkActive);
    this.elements = contentChildren(RouterLinkActive, {
      read: ElementRef
    });
    this.controls = contentChildren(NgControl, {
      descendants: true
    });
    this.controls$ = toObservable(this.controls);
    this.radios = contentChildren(RadioControlValueAccessor, {
      descendants: true
    });
  }
  ngAfterContentInit() {
    this.controls$.pipe(switchMap(([control]) => tuiControlValue(control)), map((value) => this.radios().findIndex((c) => c.value === value))).subscribe((index) => {
      this.component.update(index);
    });
  }
  ngAfterContentChecked() {
    const index = this.links().findIndex(({
      isActive
    }) => isActive);
    if (index !== -1) {
      this.update(this.elements()[index]?.nativeElement || null);
    }
  }
  update(target) {
    this.component.update(Array.from(this.el.children).findIndex((tab) => tab.contains(target)));
  }
  static {
    this.ɵfac = function TuiSegmentedDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSegmentedDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSegmentedDirective,
      contentQueries: function TuiSegmentedDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.links, RouterLinkActive, 4)(dirIndex, ctx.elements, RouterLinkActive, 4, ElementRef)(dirIndex, ctx.controls, NgControl, 5)(dirIndex, ctx.radios, RadioControlValueAccessor, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(4);
        }
      },
      hostBindings: function TuiSegmentedDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiSegmentedDirective_click_HostBindingHandler($event) {
            return ctx.update($event.target);
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmentedDirective, [{
    type: Directive,
    args: [{
      host: {
        "(click)": "update($event.target)"
      }
    }]
  }], null, null);
})();
var [TUI_SEGMENTED_OPTIONS, tuiSegmentedOptionsProvider] = tuiCreateOptions({
  size: "s"
});
var TuiSegmented = class _TuiSegmented {
  constructor() {
    this.legacy = !inject(WA_CSS).supports("anchor-name", "--t-anchor");
    this.el = tuiInjectElement();
    this.anchorId = `--${tuiGenerateId()}`;
    this.sub = inject(WaResizeObserverService, {
      self: true
    }).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => this.refresh());
    this.size = input(inject(TUI_SEGMENTED_OPTIONS).size);
    this.activeItemIndex = model(0);
    this.disabled = input(false);
  }
  ngOnChanges() {
    this.refresh();
  }
  update(activeItemIndex) {
    if (activeItemIndex === this.activeItemIndex() || activeItemIndex < 0) {
      return;
    }
    this.activeItemIndex.set(activeItemIndex);
    this.refresh();
  }
  refresh() {
    const el = this.el.children.item(this.activeItemIndex());
    if (!tuiIsHTMLElement(el)) {
      return;
    }
    Array.from(this.el.children).forEach((e) => e.classList.remove("tui-segmented_active"));
    el.classList.add("tui-segmented_active");
    if (!this.legacy) {
      return;
    }
    const {
      offsetWidth,
      offsetLeft,
      offsetTop
    } = el;
    this.el.style.setProperty("--t-top", tuiPx(offsetTop));
    this.el.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.el.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiSegmented_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSegmented)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSegmented,
      selectors: [["tui-segmented"]],
      hostAttrs: ["data-tui-version", "5.9.0"],
      hostVars: 4,
      hostBindings: function TuiSegmented_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size())("inert", ctx.disabled() ? "" : null);
          ɵɵstyleProp("--t-anchor", ctx.anchorId);
        }
      },
      inputs: {
        size: [1, "size"],
        activeItemIndex: [1, "activeItemIndex"],
        disabled: [1, "disabled"]
      },
      outputs: {
        activeItemIndex: "activeItemIndexChange"
      },
      features: [ɵɵProvidersFeature([WaResizeObserverService, tuiBadgeNotificationOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiSegmentedDirective]), ɵɵNgOnChangesFeature],
      ngContentSelectors: _c05,
      decls: 1,
      vars: 0,
      template: function TuiSegmented_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['tui-segmented:where(*[data-tui-version="5.9.0"]){position:relative;display:flex;flex-shrink:0;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(#000,#000);mask-image:linear-gradient(#000,#000)}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=s] tui-icon{font-size:1rem}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-typography-body-l);border-radius:var(--tui-radius-l)}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=l]>*:before{block-size:1.25rem}tui-segmented:where(*[data-tui-version="5.9.0"])[inert]{opacity:var(--tui-disabled-opacity);pointer-events:none}tui-segmented:where(*[data-tui-version="5.9.0"])>a,tui-segmented:where(*[data-tui-version="5.9.0"])>button,tui-segmented:where(*[data-tui-version="5.9.0"])>label,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;block-size:var(--t-height);white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented:where(*[data-tui-version="5.9.0"])>a>*,tui-segmented:where(*[data-tui-version="5.9.0"])>button>*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented:where(*[data-tui-version="5.9.0"])>a:focus-visible,tui-segmented:where(*[data-tui-version="5.9.0"])>button:focus-visible,tui-segmented:where(*[data-tui-version="5.9.0"])>label:focus-visible,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media(hover:hover)and (pointer:fine){tui-segmented:where(*[data-tui-version="5.9.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented:where(*[data-tui-version="5.9.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.9.0"])>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}}tui-segmented:where(*[data-tui-version="5.9.0"])>a:active,tui-segmented:where(*[data-tui-version="5.9.0"])>button:active,tui-segmented:where(*[data-tui-version="5.9.0"])>label:active,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):active,tui-segmented:where(*[data-tui-version="5.9.0"])>a:active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>button:active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label:active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>a.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.9.0"])>button.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.9.0"])>label.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented:where(*[data-tui-version="5.9.0"])>a.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>button.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented:where(*[data-tui-version="5.9.0"])>.tui-segmented_active{anchor-name:var(--t-anchor)}tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]){position:absolute;inset:-.125rem;background:transparent!important}tui-segmented:where(*[data-tui-version="5.9.0"]):before{transition-property:inset,inline-size;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;inset:var(--t-top) auto auto var(--t-left);inset:anchor(start);position-anchor:var(--t-anchor);block-size:var(--t-height);inline-size:var(--t-width);inline-size:anchor-size(inline);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}@supports not (anchor-name: --t-anchor){[dir=rtl] tui-segmented:where(*[data-tui-version="5.9.0"]):before{inset-inline:auto var(--t-left)}}[tuiTheme=dark] tui-segmented:where(*[data-tui-version="5.9.0"]),tui-segmented[tuiTheme=dark]:where(*[data-tui-version="5.9.0"]){--tui-background-base: var(--tui-background-neutral-1-hover)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmented, [{
    type: Component,
    args: [{
      selector: "tui-segmented",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [WaResizeObserverService, tuiBadgeNotificationOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiSegmentedDirective],
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()",
        "[attr.inert]": 'disabled() ? "" : null',
        "[style.--t-anchor]": "anchorId"
      },
      styles: ['tui-segmented:where(*[data-tui-version="5.9.0"]){position:relative;display:flex;flex-shrink:0;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(#000,#000);mask-image:linear-gradient(#000,#000)}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=s] tui-icon{font-size:1rem}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-m)}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-typography-body-l);border-radius:var(--tui-radius-l)}tui-segmented:where(*[data-tui-version="5.9.0"])[data-size=l]>*:before{block-size:1.25rem}tui-segmented:where(*[data-tui-version="5.9.0"])[inert]{opacity:var(--tui-disabled-opacity);pointer-events:none}tui-segmented:where(*[data-tui-version="5.9.0"])>a,tui-segmented:where(*[data-tui-version="5.9.0"])>button,tui-segmented:where(*[data-tui-version="5.9.0"])>label,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;block-size:var(--t-height);white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented:where(*[data-tui-version="5.9.0"])>a>*,tui-segmented:where(*[data-tui-version="5.9.0"])>button>*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented:where(*[data-tui-version="5.9.0"])>a:focus-visible,tui-segmented:where(*[data-tui-version="5.9.0"])>button:focus-visible,tui-segmented:where(*[data-tui-version="5.9.0"])>label:focus-visible,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media(hover:hover)and (pointer:fine){tui-segmented:where(*[data-tui-version="5.9.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented:where(*[data-tui-version="5.9.0"])>a:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>button:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>label:not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented:where(*[data-tui-version="5.9.0"])>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.9.0"])>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}}tui-segmented:where(*[data-tui-version="5.9.0"])>a:active,tui-segmented:where(*[data-tui-version="5.9.0"])>button:active,tui-segmented:where(*[data-tui-version="5.9.0"])>label:active,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):active,tui-segmented:where(*[data-tui-version="5.9.0"])>a:active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>button:active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label:active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]):active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>a.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.9.0"])>button.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.9.0"])>label.tui-segmented_active,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented:where(*[data-tui-version="5.9.0"])>a.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>button.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label.tui-segmented_active+*,tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented:where(*[data-tui-version="5.9.0"])>.tui-segmented_active{anchor-name:var(--t-anchor)}tui-segmented:where(*[data-tui-version="5.9.0"])>label>input:not([tuiRadio]){position:absolute;inset:-.125rem;background:transparent!important}tui-segmented:where(*[data-tui-version="5.9.0"]):before{transition-property:inset,inline-size;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;inset:var(--t-top) auto auto var(--t-left);inset:anchor(start);position-anchor:var(--t-anchor);block-size:var(--t-height);inline-size:var(--t-width);inline-size:anchor-size(inline);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}@supports not (anchor-name: --t-anchor){[dir=rtl] tui-segmented:where(*[data-tui-version="5.9.0"]):before{inset-inline:auto var(--t-left)}}[tuiTheme=dark] tui-segmented:where(*[data-tui-version="5.9.0"]),tui-segmented[tuiTheme=dark]:where(*[data-tui-version="5.9.0"]){--tui-background-base: var(--tui-background-neutral-1-hover)}\n']
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+kit@5.9.0_991789992a1b151c004b445815c7ebb8/node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-tabs.mjs
var _c06 = ["*"];
function TuiTabsWithMore_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiTabsWithMore_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementContainer(1, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const item_r2 = ctx_r2.$implicit;
    const $index_r4 = ctx_r2.$index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("t-overflown", ctx_r4.isOverflown($index_r4));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiTabsWithMore_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiTabsWithMore_For_2_Conditional_0_Template, 1, 1, "ng-container", 5)(1, TuiTabsWithMore_For_2_Conditional_1_Template, 2, 3, "div", 6);
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵconditional($index_r4 <= ctx_r4.lastVisibleIndex ? 0 : 1);
  }
}
function TuiTabsWithMore_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r7 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r7, " ");
  }
}
function TuiTabsWithMore_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTabsWithMore_Conditional_3_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r4.open, $event) || (ctx_r4.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.arrowLeft.prevent", function TuiTabsWithMore_Conditional_3_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrowLeft());
    });
    ɵɵtemplate(1, TuiTabsWithMore_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const dropdown_r8 = ɵɵreference(6);
    ɵɵclassProp("_active", ctx_r4.isMoreActive)("t-no-margin", ctx_r4.isMoreAlone)("t-overflown", !ctx_r4.isMoreVisible);
    ɵɵproperty("tabIndex", ctx_r4.isMoreFocusable ? 0 : -1)("tuiDropdown", ctx_r4.dropdownContent() || dropdown_r8);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r4.open);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r4.moreContent());
  }
}
function TuiTabsWithMore_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTabsWithMore_Conditional_4_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r4 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r4.open, $event) || (ctx_r4.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.arrowLeft.prevent", function TuiTabsWithMore_Conditional_4_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrowLeft());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const dropdown_r8 = ɵɵreference(6);
    ɵɵclassProp("_active", ctx_r4.isMoreActive)("t-no-margin", ctx_r4.isMoreAlone)("t-overflown", !ctx_r4.isMoreVisible);
    ɵɵproperty("tabIndex", ctx_r4.isMoreFocusable ? 0 : -1)("tuiDropdown", ctx_r4.dropdownContent() || dropdown_r8);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r4.open);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r4.moreWord(), " ");
  }
}
function TuiTabsWithMore_ng_template_5_For_3_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiTabsWithMore_ng_template_5_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTabsWithMore_ng_template_5_For_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const item_r14 = ɵɵnextContext().$implicit;
    ɵɵproperty("polymorpheusOutlet", item_r14);
  }
}
function TuiTabsWithMore_ng_template_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("tui-tab-activate", function TuiTabsWithMore_ng_template_5_For_3_Template_div_tui_tab_activate_0_listener() {
      const $index_r13 = ɵɵrestoreView(_r12).$index;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.onClick($index_r13));
    });
    ɵɵconditionalCreate(1, TuiTabsWithMore_ng_template_5_For_3_Conditional_1_Template, 1, 1, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r13 = ctx.$index;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r4.shouldShow($index_r13) ? 1 : -1);
  }
}
function TuiTabsWithMore_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11, 1);
    ɵɵlistener("keydown.arrowDown.prevent", function TuiTabsWithMore_ng_template_5_Template_div_keydown_arrowDown_prevent_0_listener($event) {
      ɵɵrestoreView(_r10);
      const element_r11 = ɵɵreference(1);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onWrapperArrow($event, element_r11, false));
    })("keydown.arrowUp.prevent", function TuiTabsWithMore_ng_template_5_Template_div_keydown_arrowUp_prevent_0_listener($event) {
      ɵɵrestoreView(_r10);
      const element_r11 = ɵɵreference(1);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onWrapperArrow($event, element_r11, true));
    });
    ɵɵrepeaterCreate(2, TuiTabsWithMore_ng_template_5_For_3_Template, 2, 1, "div", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵattribute("data-size", ctx_r4.size());
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r4.items());
  }
}
var TUI_TAB_ACTIVATE = "tui-tab-activate";
var TuiTab = class _TuiTab {
  constructor() {
    this.el = tuiInjectElement();
    this.rla = inject(RouterLinkActive, {
      optional: true
    });
    this.observer = this.rla && inject(WaMutationObserverService, {
      optional: true
    })?.pipe(filter(() => !!this.rla?.isActive));
    this.sub = merge(this.observer || EMPTY, this.rla?.isActiveChange.pipe(filter(Boolean)) || EMPTY, this.el.matches("button") ? tuiTypedFromEvent(this.el, "click").pipe(
      // Delaying execution until after all other click callbacks
      switchMap(() => tuiTypedFromEvent(this.el.parentElement, "click").pipe(take(1)))
    ) : EMPTY).pipe(takeUntilDestroyed()).subscribe(() => this.el.dispatchEvent(new CustomEvent(TUI_TAB_ACTIVATE, {
      bubbles: true
    })));
  }
  ngOnDestroy() {
    if (tuiIsFocused(this.el)) {
      this.el.blur();
    }
  }
  static {
    this.ɵfac = function TuiTab_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTab)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTab,
      selectors: [["a", "tuiTab", "", 3, "routerLink", ""], ["a", "tuiTab", "", "routerLink", "", "routerLinkActive", ""], ["button", "tuiTab", ""]],
      hostAttrs: ["type", "button"],
      features: [ɵɵHostDirectivesFeature([TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTab, [{
    type: Directive,
    args: [{
      selector: "a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]",
      hostDirectives: [TuiWithIcons],
      host: {
        type: "button"
      }
    }]
  }], null, null);
})();
var TUI_TABS_DEFAULT_OPTIONS = {
  underline: true,
  exposeActive: true,
  itemsLimit: Infinity,
  minMoreWidth: 0,
  size: "l"
};
var [TUI_TABS_OPTIONS, tuiTabsOptionsProvider] = tuiCreateOptions(TUI_TABS_DEFAULT_OPTIONS);
var Styles7 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-tabs-5.9.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiTab]:where(*[data-tui-version="5.9.0"]){transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;line-height:1.5rem;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-inline-start:var(--tui-tab-margin, 1.5rem)}[tuiTab]:where(*[data-tui-version="5.9.0"]):disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]:where(*[data-tui-version="5.9.0"])._active{color:var(--tui-text-primary);box-shadow:none;anchor-name:--tui-tab-active}[tuiTab]:where(*[data-tui-version="5.9.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}tui-tabs._underline [tuiTab]:where(*[data-tui-version="5.9.0"]):hover:not(._active){box-shadow:inset 0 -.125rem var(--tui-border-normal)}tui-tabs>[tuiTab]:where(*[data-tui-version="5.9.0"]):first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:where(*[data-tui-version="5.9.0"]):first-child{margin-inline-start:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:where(*[data-tui-version="5.9.0"]):first-child{margin-inline-start:var(--tui-tab-margin, 1.5rem)}[tuiTab]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:where(*[data-tui-version="5.9.0"]):empty:after,[tuiTab]:where(*[data-tui-version="5.9.0"]):empty:before{margin:.5rem}@media(hover:hover)and (pointer:fine){[tuiTab]:where(*[data-tui-version="5.9.0"]):hover{color:var(--tui-text-primary)}}tui-tabs:where(*[data-tui-version="5.9.0"]){scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;flex-shrink:0;font:var(--tui-typography-body-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate;anchor-scope:--tui-tab-active}tui-tabs:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar,tui-tabs:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar-thumb{display:none}tui-tabs:where(*[data-tui-version="5.9.0"])[data-size=m]{font:var(--tui-typography-body-s);--tui-tab-margin: 1rem}tui-tabs:where(*[data-tui-version="5.9.0"])[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}tui-tabs:where(*[data-tui-version="5.9.0"])[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}tui-tabs:where(*[data-tui-version="5.9.0"]):before{transition-property:inline-size,inset-inline-start;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;inset-block-end:0;inset-inline-start:var(--t-left);block-size:.125rem;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms;contain:strict}@supports (anchor-name: --tui-tab-active){tui-tabs:where(*[data-tui-version="5.9.0"]):before{inset-inline-start:anchor(start);inline-size:anchor-size(inline);position-anchor:--tui-tab-active}}tui-tabs:where(*[data-tui-version="5.9.0"])._underline:before{content:""}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]){flex-direction:column;box-shadow:inset calc(-1px * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]) [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]) [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;display:block;inset-block-start:0;inset-inline-end:0;block-size:100%;inline-size:.125rem;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]) [tuiTab]:hover{box-shadow:inset calc(-.125rem * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]) [tuiTab]._active:after{transform:none}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-typography-body-s)}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-vertical=end]{box-shadow:inset calc(1px * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-vertical=end] [tuiTab]{text-align:end}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-vertical=end] [tuiTab]:after{inset-inline:0 auto;transform-origin:left}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-vertical=end] [tuiTab]:hover{box-shadow:inset calc(.125rem * var(--tui-inline)) 0 var(--tui-border-normal)}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles7, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-tabs-${TUI_VERSION}`,
      styles: ['[tuiTab]:where(*[data-tui-version="5.9.0"]){transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;line-height:1.5rem;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-inline-start:var(--tui-tab-margin, 1.5rem)}[tuiTab]:where(*[data-tui-version="5.9.0"]):disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]:where(*[data-tui-version="5.9.0"])._active{color:var(--tui-text-primary);box-shadow:none;anchor-name:--tui-tab-active}[tuiTab]:where(*[data-tui-version="5.9.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}tui-tabs._underline [tuiTab]:where(*[data-tui-version="5.9.0"]):hover:not(._active){box-shadow:inset 0 -.125rem var(--tui-border-normal)}tui-tabs>[tuiTab]:where(*[data-tui-version="5.9.0"]):first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:where(*[data-tui-version="5.9.0"]):first-child{margin-inline-start:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:where(*[data-tui-version="5.9.0"]):first-child{margin-inline-start:var(--tui-tab-margin, 1.5rem)}[tuiTab]:where(*[data-tui-version="5.9.0"])[tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab]:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:where(*[data-tui-version="5.9.0"]):empty:after,[tuiTab]:where(*[data-tui-version="5.9.0"]):empty:before{margin:.5rem}@media(hover:hover)and (pointer:fine){[tuiTab]:where(*[data-tui-version="5.9.0"]):hover{color:var(--tui-text-primary)}}tui-tabs:where(*[data-tui-version="5.9.0"]){scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;flex-shrink:0;font:var(--tui-typography-body-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate;anchor-scope:--tui-tab-active}tui-tabs:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar,tui-tabs:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar-thumb{display:none}tui-tabs:where(*[data-tui-version="5.9.0"])[data-size=m]{font:var(--tui-typography-body-s);--tui-tab-margin: 1rem}tui-tabs:where(*[data-tui-version="5.9.0"])[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}tui-tabs:where(*[data-tui-version="5.9.0"])[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}tui-tabs:where(*[data-tui-version="5.9.0"]):before{transition-property:inline-size,inset-inline-start;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;inset-block-end:0;inset-inline-start:var(--t-left);block-size:.125rem;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms;contain:strict}@supports (anchor-name: --tui-tab-active){tui-tabs:where(*[data-tui-version="5.9.0"]):before{inset-inline-start:anchor(start);inline-size:anchor-size(inline);position-anchor:--tui-tab-active}}tui-tabs:where(*[data-tui-version="5.9.0"])._underline:before{content:""}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]){flex-direction:column;box-shadow:inset calc(-1px * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]) [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]) [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;display:block;inset-block-start:0;inset-inline-end:0;block-size:100%;inline-size:.125rem;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]) [tuiTab]:hover{box-shadow:inset calc(-.125rem * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"]) [tuiTab]._active:after{transform:none}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-typography-body-s)}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-vertical=end]{box-shadow:inset calc(1px * var(--tui-inline)) 0 var(--tui-border-normal)}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-vertical=end] [tuiTab]{text-align:end}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-vertical=end] [tuiTab]:after{inset-inline:0 auto;transform-origin:left}tui-tabs[data-vertical]:where(*[data-tui-version="5.9.0"])[data-vertical=end] [tuiTab]:hover{box-shadow:inset calc(.125rem * var(--tui-inline)) 0 var(--tui-border-normal)}\n']
    }]
  }], null, null);
})();
var TuiTabsDirective = class _TuiTabsDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.injector = inject(INJECTOR$1);
    this.nothing = tuiWithStyles(Styles7);
    this.size = input(inject(TUI_TABS_OPTIONS).size);
    this.activeItemIndex = model(0);
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll("[tuiTab]"));
  }
  get activeElement() {
    return this.tabs[this.activeItemIndex()] || null;
  }
  moveFocus(current, step) {
    const {
      tabs
    } = this;
    tuiMoveFocus(tabs.indexOf(current), tabs, step);
  }
  ngAfterViewChecked() {
    afterNextRender(() => {
      this.markTabAsActive();
    }, {
      injector: this.injector
    });
  }
  onActivate(element) {
    this.activeItemIndex.set(this.tabs.findIndex((tab) => tab === element));
  }
  markTabAsActive() {
    const {
      tabs,
      activeElement
    } = this;
    tabs.forEach((nativeElement) => {
      const active = nativeElement === activeElement;
      nativeElement.classList.toggle("_active", active);
      nativeElement.setAttribute("tabIndex", active ? "0" : "-1");
    });
  }
  static {
    this.ɵfac = function TuiTabsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsDirective,
      hostAttrs: ["data-tui-version", "5.9.0"],
      hostVars: 1,
      hostBindings: function TuiTabsDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-tab-activate.stop", function TuiTabsDirective_tui_tab_activate_stop_HostBindingHandler($event) {
            return ctx.onActivate($event.target);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"],
        activeItemIndex: [1, "activeItemIndex"]
      },
      outputs: {
        activeItemIndex: "activeItemIndexChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsDirective, [{
    type: Directive,
    args: [{
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-size]": "size()",
        [`(${TUI_TAB_ACTIVATE}.stop)`]: "onActivate($event.target)"
      }
    }]
  }], null, null);
})();
var TuiTabsHorizontal = class _TuiTabsHorizontal {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_TABS_OPTIONS);
    this.tabs = inject(TuiTabsDirective);
    this.sub = inject(WaMutationObserverService, {
      self: true
    }).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => this.refresh());
    this.underline = input(this.options.underline);
    effect(() => {
      const index = this.tabs.activeItemIndex();
      const element = this.tabs.tabs[index];
      if (!element) {
        return;
      }
      const {
        offsetLeft,
        offsetWidth
      } = element;
      if (offsetLeft < this.el.scrollLeft) {
        this.el.scrollLeft = offsetLeft;
      }
      if (offsetLeft + offsetWidth > this.el.scrollLeft + this.el.offsetWidth) {
        this.el.scrollLeft = offsetLeft + offsetWidth - this.el.offsetWidth;
      }
    });
  }
  ngAfterViewChecked() {
    this.refresh();
  }
  onKeyDownArrow(current, step) {
    this.tabs.moveFocus(current, step);
  }
  // TODO: Remove when anchor positioning will be available in all modern browsers: https://caniuse.com/css-anchor-positioning
  refresh() {
    if ("anchorName" in this.el.style) {
      return;
    }
    const {
      activeElement
    } = this.tabs;
    if (activeElement && !activeElement.isConnected) {
      return;
    }
    const {
      offsetLeft = 0,
      offsetWidth = 0
    } = activeElement || {};
    this.el.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.el.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiTabsHorizontal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsHorizontal)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsHorizontal,
      selectors: [["tui-tabs", 3, "vertical", ""]],
      hostVars: 4,
      hostBindings: function TuiTabsHorizontal_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationend", function TuiTabsHorizontal_animationend_HostBindingHandler() {
            return ctx.refresh();
          })("keydown.arrowLeft.prevent", function TuiTabsHorizontal_keydown_arrowLeft_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          })("keydown.arrowRight.prevent", function TuiTabsHorizontal_keydown_arrowRight_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--t-color", ctx.underline() === true ? "var(--tui-background-accent-1)" : ctx.underline());
          ɵɵclassProp("_underline", ctx.underline());
        }
      },
      inputs: {
        underline: [1, "underline"]
      },
      features: [ɵɵProvidersFeature([WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "activeItemIndex", "size", "size"],
        outputs: ["activeItemIndexChange", "activeItemIndexChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsHorizontal, [{
    type: Directive,
    args: [{
      selector: "tui-tabs:not([vertical])",
      providers: [WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }],
      hostDirectives: [{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "size"],
        outputs: ["activeItemIndexChange"]
      }],
      host: {
        "[class._underline]": "underline()",
        "[style.--t-color]": "underline() === true ? 'var(--tui-background-accent-1)' : underline()",
        "(animationend)": "refresh()",
        "(keydown.arrowLeft.prevent)": "onKeyDownArrow($event.target, -1)",
        "(keydown.arrowRight.prevent)": "onKeyDownArrow($event.target, 1)"
      }
    }]
  }], () => [], null);
})();
var TuiTabsVertical = class _TuiTabsVertical {
  constructor() {
    this.tabs = inject(TuiTabsDirective);
    this.vertical = input("start");
  }
  onKeyDownArrow(current, step) {
    this.tabs.moveFocus(current, step);
  }
  static {
    this.ɵfac = function TuiTabsVertical_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsVertical)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsVertical,
      selectors: [["tui-tabs", "vertical", ""]],
      hostVars: 1,
      hostBindings: function TuiTabsVertical_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowDown.prevent", function TuiTabsVertical_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiTabsVertical_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-vertical", ctx.vertical());
        }
      },
      inputs: {
        vertical: [1, "vertical"]
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "activeItemIndex", "size", "size"],
        outputs: ["activeItemIndexChange", "activeItemIndexChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsVertical, [{
    type: Directive,
    args: [{
      selector: "tui-tabs[vertical]",
      hostDirectives: [{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "size"],
        outputs: ["activeItemIndexChange"]
      }],
      host: {
        "[attr.data-vertical]": "vertical()",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)"
      }
    }]
  }], null, null);
})();
var TUI_TABS_REFRESH = new InjectionToken(ngDevMode ? "TUI_TABS_REFRESH" : "");
var TUI_TABS_PROVIDERS = [WaResizeObserverService, WaMutationObserverService, tuiDropdownOptionsProvider({
  align: "end"
}), {
  provide: WA_MUTATION_OBSERVER_INIT,
  useValue: {
    childList: true,
    subtree: true,
    characterData: true
  }
}, {
  provide: TUI_TABS_REFRESH,
  deps: [WaResizeObserverService, WaMutationObserverService, DOCUMENT, ElementRef, ChangeDetectorRef],
  useFactory: (resize$, mutations$, {
    body
  }, {
    nativeElement
  }, cdr) => merge(resize$, mutations$.pipe(tap(() => cdr.detectChanges()))).pipe(
    // Ignoring cases when host is detached from DOM
    filter(() => body.contains(nativeElement)),
    debounceTime(0),
    startWith(null),
    takeUntilDestroyed()
  )
}];
var TuiTabsWithMore = class _TuiTabsWithMore {
  constructor() {
    this.moreButton = viewChild(TuiTab, {
      read: ElementRef
    });
    this.dir = viewChild(TuiTabsHorizontal, {
      read: ElementRef
    });
    this.options = inject(TUI_TABS_OPTIONS);
    this.refresh$ = inject(TUI_TABS_REFRESH);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.maxIndex = Infinity;
    this.items = contentChildren(TuiItem, {
      read: TemplateRef
    });
    this.moreWord = inject(TUI_MORE_WORD);
    this.sync = effect(() => {
      this.activeItemIndex();
      this.maxIndex = this.getMaxIndex();
      this.open = false;
    });
    this.open = false;
    this.activeItemIndex = model(0);
    this.size = input(this.options.size);
    this.underline = input(this.options.underline);
    this.itemsLimit = input(this.options.itemsLimit);
    this.moreContent = input();
    this.dropdownContent = input();
  }
  get lastVisibleIndex() {
    if (this.itemsLimit() + 1 >= this.items().length) {
      return this.maxIndex;
    }
    const offset = this.itemsLimit() - 1 > this.activeItemIndex() || !this.options.exposeActive ? 1 : 2;
    return Math.min(this.itemsLimit() - offset, this.maxIndex);
  }
  isOverflown(index) {
    return index !== this.activeItemIndex() || !this.options.exposeActive;
  }
  shouldShow(index) {
    return index > this.lastVisibleIndex && this.isOverflown(index);
  }
  ngAfterViewInit() {
    this.refresh$.pipe(map(() => this.getMaxIndex()), tap(() => this.refresh()), filter((maxIndex) => this.maxIndex !== maxIndex)).subscribe((maxIndex) => {
      this.maxIndex = maxIndex;
      this.cdr.detectChanges();
    });
  }
  ngAfterViewChecked() {
    this.refresh();
  }
  // TODO: Improve performance
  get tabs() {
    return Array.from(this.el.querySelectorAll("[tuiTab]"));
  }
  get activeElement() {
    return this.tabs.find((tab) => tab.classList.contains("_active")) ?? null;
  }
  get isMoreAlone() {
    return this.lastVisibleIndex < 0 && !this.options.exposeActive;
  }
  get isMoreVisible() {
    return this.lastVisibleIndex < this.items().length - 1;
  }
  get isMoreFocusable() {
    return tuiIsFocused(this.moreButton()?.nativeElement);
  }
  get isMoreActive() {
    return this.open || !this.options.exposeActive && this.lastVisibleIndex < this.activeItemIndex();
  }
  onClick(index) {
    this.open = false;
    this.focusMore();
    this.activeItemIndex.set(index);
  }
  onArrowRight(event) {
    if (tuiIsElement(event.target) && tuiIsFocused(event.target)) {
      this.focusMore();
    }
  }
  onArrowLeft() {
    const {
      tabs
    } = this;
    let index = tabs.length - 2;
    while (index >= 0) {
      tabs[index]?.focus();
      if (tuiIsFocused(tabs[index])) {
        return;
      }
      index--;
    }
  }
  onWrapperArrow(event, wrapper, previous) {
    const button = event.target;
    const target = tuiGetClosestFocusable({
      initial: button,
      root: wrapper,
      previous
    });
    if (target) {
      target.focus();
    }
  }
  get margin() {
    return this.size() === "l" ? 24 : 16;
  }
  focusMore() {
    this.moreButton()?.nativeElement.focus();
  }
  getMaxIndex() {
    const {
      tabs,
      activeItemIndex,
      margin
    } = this;
    if (tabs.length < 2) {
      return 0;
    }
    const {
      exposeActive,
      minMoreWidth
    } = this.options;
    const {
      clientWidth
    } = this.el;
    const active = tabs[activeItemIndex()];
    const activeWidth = active?.scrollWidth ?? 0;
    const moreWidth = Math.max(tabs[tabs.length - 1]?.scrollWidth ?? 0, minMoreWidth);
    let maxIndex = tabs.length - 2;
    let total = tabs.reduce((acc, {
      scrollWidth
    }) => acc + scrollWidth, 0) + maxIndex * margin - (tabs[tabs.length - 1]?.scrollWidth ?? 0);
    if (Number.isNaN(total) || total <= clientWidth) {
      return Infinity;
    }
    while (maxIndex) {
      total -= (tabs[maxIndex]?.scrollWidth ?? 0) + margin;
      maxIndex--;
      const activeDisplaced = exposeActive && activeItemIndex() > maxIndex;
      const activeOffset = activeDisplaced ? activeWidth + margin : 0;
      const currentWidth = total + activeOffset + moreWidth + margin;
      const safetyOffset = tuiToInt(this.maxIndex === maxIndex - 1);
      if (currentWidth + safetyOffset < clientWidth) {
        return maxIndex;
      }
    }
    return -1;
  }
  // TODO: Remove when anchor positioning will be available in all modern browsers: https://caniuse.com/css-anchor-positioning
  refresh() {
    if ("anchorName" in this.el.style) {
      return;
    }
    const {
      offsetLeft = 0,
      offsetWidth = 0
    } = this.activeElement || {};
    this.dir()?.nativeElement.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.dir()?.nativeElement.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiTabsWithMore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsWithMore)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTabsWithMore,
      selectors: [["tui-tabs-with-more"]],
      contentQueries: function TuiTabsWithMore_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.items, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      viewQuery: function TuiTabsWithMore_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.moreButton, TuiTab, 5, ElementRef)(ctx.dir, TuiTabsHorizontal, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostVars: 1,
      hostBindings: function TuiTabsWithMore_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        activeItemIndex: [1, "activeItemIndex"],
        size: [1, "size"],
        underline: [1, "underline"],
        itemsLimit: [1, "itemsLimit"],
        moreContent: [1, "moreContent"],
        dropdownContent: [1, "dropdownContent"]
      },
      outputs: {
        activeItemIndex: "activeItemIndexChange"
      },
      features: [ɵɵProvidersFeature(TUI_TABS_PROVIDERS)],
      ngContentSelectors: _c06,
      decls: 8,
      vars: 4,
      consts: [["dropdown", ""], ["element", ""], [1, "t-tabs", 3, "activeItemIndexChange", "keydown.arrowRight", "size", "underline", "activeItemIndex"], ["tuiTab", "", "type", "button", 1, "t-more", 3, "_active", "t-no-margin", "t-overflown", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], ["tuiChevron", "", "tuiTab", "", "type", "button", 1, "t-more", 3, "_active", "t-no-margin", "t-overflown", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [3, "ngTemplateOutlet"], [1, "t-flex", 3, "t-overflown"], [1, "t-flex"], ["tuiTab", "", "type", "button", 1, "t-more", 3, "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [4, "polymorpheusOutlet"], ["tuiChevron", "", "tuiTab", "", "type", "button", 1, "t-more", 3, "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [1, "t-dropdown", 3, "keydown.arrowDown.prevent", "keydown.arrowUp.prevent"], [1, "t-dropdown-item"], [1, "t-dropdown-item", 3, "tui-tab-activate"]],
      template: function TuiTabsWithMore_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "tui-tabs", 2);
          ɵɵtwoWayListener("activeItemIndexChange", function TuiTabsWithMore_Template_tui_tabs_activeItemIndexChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.activeItemIndex, $event) || (ctx.activeItemIndex = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("keydown.arrowRight", function TuiTabsWithMore_Template_tui_tabs_keydown_arrowRight_0_listener($event) {
            return ctx.onArrowRight($event);
          });
          ɵɵrepeaterCreate(1, TuiTabsWithMore_For_2_Template, 2, 1, null, null, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵconditionalCreate(3, TuiTabsWithMore_Conditional_3_Template, 2, 10, "button", 3)(4, TuiTabsWithMore_Conditional_4_Template, 2, 10, "button", 4);
          ɵɵtemplate(5, TuiTabsWithMore_ng_template_5_Template, 4, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵprojection(7);
        }
        if (rf & 2) {
          ɵɵproperty("size", ctx.size())("underline", ctx.underline());
          ɵɵtwoWayProperty("activeItemIndex", ctx.activeItemIndex);
          ɵɵadvance();
          ɵɵrepeater(ctx.items());
          ɵɵadvance(2);
          ɵɵconditional(ctx.moreContent() ? 3 : 4);
        }
      },
      dependencies: [NgTemplateOutlet, PolymorpheusOutlet, TuiChevron, TuiDropdownDirective, TuiDropdownOpen, TuiTab, TuiTabsHorizontal],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-shrink:0;font:var(--tui-typography-body-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}[data-size=m][_nghost-%COMP%]{font:var(--tui-typography-body-s)}.t-tabs[_ngcontent-%COMP%]{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex[_ngcontent-%COMP%]{display:flex}.t-overflown[_ngcontent-%COMP%]{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-inline-end:-.25rem;vertical-align:bottom}.t-icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.t-dropdown[_ngcontent-%COMP%]{padding:.25rem 0}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;border-radius:var(--tui-radius-s);font:var(--tui-typography-body-m);line-height:1.5rem;color:var(--tui-text-primary)}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:before{display:none}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:hover, .t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:focus, .t-dropdown[_ngcontent-%COMP%]     *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m][_ngcontent-%COMP%]     *[tuiTab]{block-size:2.25rem;font:var(--tui-typography-body-s)}.t-dropdown-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.t-no-margin[_ngcontent-%COMP%]{margin-inline-start:0}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsWithMore, [{
    type: Component,
    args: [{
      selector: "tui-tabs-with-more",
      imports: [NgTemplateOutlet, PolymorpheusOutlet, TuiChevron, TuiDropdown, TuiTab, TuiTabsHorizontal],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_TABS_PROVIDERS,
      host: {
        "[attr.data-size]": "size()"
      },
      template: '<tui-tabs\n    class="t-tabs"\n    [size]="size()"\n    [underline]="underline()"\n    [(activeItemIndex)]="activeItemIndex"\n    (keydown.arrowRight)="onArrowRight($event)"\n>\n    @for (item of items(); track item) {\n        @if ($index <= lastVisibleIndex) {\n            <ng-container [ngTemplateOutlet]="item" />\n        } @else {\n            <div\n                class="t-flex"\n                [class.t-overflown]="isOverflown($index)"\n            >\n                <ng-container [ngTemplateOutlet]="item" />\n            </div>\n        }\n    }\n</tui-tabs>\n\n@if (moreContent()) {\n    <button\n        tuiTab\n        type="button"\n        class="t-more"\n        [class._active]="isMoreActive"\n        [class.t-no-margin]="isMoreAlone"\n        [class.t-overflown]="!isMoreVisible"\n        [tabIndex]="isMoreFocusable ? 0 : -1"\n        [tuiDropdown]="dropdownContent() || dropdown"\n        [(tuiDropdownOpen)]="open"\n        (keydown.arrowLeft.prevent)="onArrowLeft()"\n    >\n        <ng-container *polymorpheusOutlet="moreContent() as text">\n            {{ text }}\n        </ng-container>\n    </button>\n} @else {\n    <button\n        tuiChevron\n        tuiTab\n        type="button"\n        class="t-more"\n        [class._active]="isMoreActive"\n        [class.t-no-margin]="isMoreAlone"\n        [class.t-overflown]="!isMoreVisible"\n        [tabIndex]="isMoreFocusable ? 0 : -1"\n        [tuiDropdown]="dropdownContent() || dropdown"\n        [(tuiDropdownOpen)]="open"\n        (keydown.arrowLeft.prevent)="onArrowLeft()"\n    >\n        {{ moreWord() }}\n    </button>\n}\n<ng-template #dropdown>\n    <div\n        #element\n        class="t-dropdown"\n        [attr.data-size]="size()"\n        (keydown.arrowDown.prevent)="onWrapperArrow($event, element, false)"\n        (keydown.arrowUp.prevent)="onWrapperArrow($event, element, true)"\n    >\n        @for (item of items(); track item) {\n            <div\n                class="t-dropdown-item"\n                (tui-tab-activate)="onClick($index)"\n            >\n                @if (shouldShow($index)) {\n                    <ng-container *polymorpheusOutlet="item" />\n                }\n            </div>\n        }\n    </div>\n</ng-template>\n\n<ng-content />\n',
      styles: [":host{position:relative;display:flex;flex-shrink:0;font:var(--tui-typography-body-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}:host[data-size=m]{font:var(--tui-typography-body-s)}.t-tabs{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex{display:flex}.t-overflown{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-inline-end:-.25rem;vertical-align:bottom}.t-icon_rotated{transform:rotate(180deg)}.t-dropdown{padding:.25rem 0}.t-dropdown ::ng-deep *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;border-radius:var(--tui-radius-s);font:var(--tui-typography-body-m);line-height:1.5rem;color:var(--tui-text-primary)}.t-dropdown ::ng-deep *[tuiTab]:before{display:none}.t-dropdown ::ng-deep *[tuiTab]:hover,.t-dropdown ::ng-deep *[tuiTab]:focus,.t-dropdown ::ng-deep *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m] ::ng-deep *[tuiTab]{block-size:2.25rem;font:var(--tui-typography-body-s)}.t-dropdown-item{display:flex;flex-direction:column}.t-no-margin{margin-inline-start:0}\n"]
    }]
  }], null, null);
})();
var TuiTabs = [TuiItem, TuiTab, TuiTabsDirective, TuiTabsHorizontal, TuiTabsVertical, TuiTabsWithMore];

export {
  TuiFade,
  TUI_AVATAR_OPTIONS,
  tuiAvatarOptionsProvider,
  TuiAvatar,
  TuiAvatarLabeled,
  TuiAvatarOutline,
  TuiAvatarStack,
  TUI_CHEVRON,
  TuiChevron,
  TUI_BADGE_DEFAULT_OPTIONS,
  TUI_BADGE_OPTIONS,
  tuiBadgeOptionsProvider,
  TuiBadge,
  TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_BADGE_NOTIFICATION_OPTIONS,
  tuiBadgeNotificationOptionsProvider,
  TuiBadgeNotification,
  TUI_BLOCK_DEFAULT_OPTIONS,
  TUI_BLOCK_OPTIONS,
  tuiBlockOptionsProvider,
  TuiBlock,
  TuiItemsWithMoreDirective,
  TuiItemsWithMoreService,
  TuiMore,
  TuiItemsWithMoreComponent,
  TuiItemsWithMore,
  TUI_CONFIRM_WORDS,
  TUI_CANCEL_WORD,
  TUI_DONE_WORD,
  TUI_MORE_WORD,
  TUI_HIDE_TEXT,
  TUI_SHOW_ALL_TEXT,
  TUI_OTHER_DATE_TEXT,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_FROM_TO_TEXTS,
  TUI_PLUS_MINUS_TEXTS,
  TUI_TIME_TEXTS,
  TUI_DATE_TEXTS,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_COPY_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_CALENDAR_MONTHS,
  TUI_FILE_TEXTS,
  TUI_PAGINATION_TEXTS,
  TUI_INPUT_FILE_TEXTS,
  TUI_MULTI_SELECT_TEXTS,
  TUI_COUNTRIES,
  TUI_PREVIEW_TEXTS,
  TUI_PREVIEW_ZOOM_TEXTS,
  TUI_INTERNATIONAL_SEARCH,
  TUI_DAY_RANGE_PERIODS,
  TUI_BREADCRUMBS_DEFAULT_OPTIONS,
  TUI_BREADCRUMBS_OPTIONS,
  tuiBreadcrumbsOptionsProvider,
  TuiBreadcrumbs,
  TUI_SWITCH_OPTIONS,
  tuiSwitchOptionsProvider,
  TuiSwitch,
  TuiSegmentedDirective,
  TUI_SEGMENTED_OPTIONS,
  tuiSegmentedOptionsProvider,
  TuiSegmented,
  TUI_TAB_ACTIVATE,
  TuiTab,
  TUI_TABS_DEFAULT_OPTIONS,
  TUI_TABS_OPTIONS,
  tuiTabsOptionsProvider,
  TuiTabsDirective,
  TuiTabsHorizontal,
  TuiTabsVertical,
  TUI_TABS_REFRESH,
  TUI_TABS_PROVIDERS,
  TuiTabsWithMore,
  TuiTabs
};
//# sourceMappingURL=chunk-TJ7QEMW4.js.map
