import {
  TUI_ITEMS_HANDLERS,
  TuiWithItemsHandlers
} from "./chunk-NXUJANSI.js";
import {
  TuiCell,
  TuiLabel,
  TuiWithOptionContent,
  tuiAsDataListHost
} from "./chunk-MCVQCEJX.js";
import {
  TUI_BUTTON_OPTIONS,
  TuiAppearance,
  TuiButton,
  TuiWithIcons,
  tuiButtonOptionsProvider
} from "./chunk-ZV5BAXQN.js";
import {
  TuiDropdownContent,
  TuiDropdownDirective,
  TuiDropdownFixed,
  TuiDropdownOpen,
  TuiWithDropdownOpen
} from "./chunk-5C76XODH.js";
import {
  TUI_AUXILIARY,
  TUI_CLEAR_WORD,
  TUI_COMMON_ICONS,
  TUI_ICON_START,
  TUI_SCROLL_REF,
  TUI_TEXTFIELD_VALUE,
  TuiScrollControls
} from "./chunk-SZ2IDNEI.js";
import {
  TuiControl,
  WaResizeObserver
} from "./chunk-P34HLSLH.js";
import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
  injectContext,
  tuiFocusedIn
} from "./chunk-KA6RXUAL.js";
import {
  TUI_DEFAULT_MATCHER,
  TUI_STRICT_MATCHER,
  WA_IS_ANDROID,
  WA_WINDOW,
  tuiArrayToggle,
  tuiCreateOptions,
  tuiGenerateId,
  tuiInjectElement,
  tuiIsElement,
  tuiIsFlat,
  tuiProvide,
  tuiPx,
  tuiValue,
  tuiZonefree
} from "./chunk-YH3GNO5H.js";
import {
  NgControl
} from "./chunk-XHNSMQQ5.js";
import {
  AsyncPipe
} from "./chunk-WBUXHXP6.js";
import {
  TuiItem
} from "./chunk-6DJSNXVY.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Optional,
  Pipe,
  SkipSelf,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  contentChild,
  contentChildren,
  input,
  setClassMetadata,
  viewChild,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-UWXEFF5S.js";
import {
  takeUntilDestroyed
} from "./chunk-ETGSZUYA.js";
import {
  INJECTOR$1,
  InjectionToken,
  computed,
  forwardRef,
  inject,
  signal,
  untracked,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-6UR4NGDW.js";
import {
  filter,
  fromEvent
} from "./chunk-3NTDFDXB.js";
import {
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-button-x.mjs
var [TUI_BUTTON_X_OPTIONS, tuiButtonXOptionsProvider] = tuiCreateOptions({
  appearance: "neutral",
  size: "s"
});
var TuiButtonX = class _TuiButtonX {
  static {
    this.ɵfac = function TuiButtonX_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonX)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonX,
      selectors: [["", "tuiButtonX", ""]],
      hostAttrs: ["tuiIconButton", "", "type", "button"],
      hostVars: 2,
      hostBindings: function TuiButtonX_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.prevent.zoneless", function TuiButtonX_pointerdown_prevent_zoneless_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--t-radius", 100, "%");
        }
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider(() => inject(TUI_BUTTON_X_OPTIONS)), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiButton,
        inputs: ["size", "size"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonX, [{
    type: Directive,
    args: [{
      selector: "[tuiButtonX]",
      providers: [tuiButtonOptionsProvider(() => inject(TUI_BUTTON_X_OPTIONS)), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }],
      hostDirectives: [{
        directive: TuiButton,
        inputs: ["size"]
      }],
      host: {
        tuiIconButton: "",
        type: "button",
        "[style.--t-radius.%]": "100",
        "(pointerdown.prevent.zoneless)": "(0)"
      }
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-filter-by-input.mjs
var TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS = {
  filter: (items, search, stringify) => items.find((x) => TUI_STRICT_MATCHER(x, search, stringify)) ? items : items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify))
};
var [TUI_FILTER_BY_INPUT_OPTIONS, tuiFilterByInputOptionsProvider] = tuiCreateOptions(TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS);
var TuiFilterByInputPipe = class _TuiFilterByInputPipe {
  constructor() {
    this.options = inject(TUI_FILTER_BY_INPUT_OPTIONS);
    this.search = inject(TUI_TEXTFIELD_VALUE);
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.filter = signal(this.options.filter);
    this.filterFlat = computed((filter2 = this.filter(), search = this.search(), stringify = this.handlers.stringify()) => (items) => filter2(items, search, stringify));
    this.items = signal([]);
    this.filtered = computed((items = this.items(), filter2 = this.filterFlat()) => items && (tuiIsFlat(items) ? filter2(items) : this.filter2d(items)));
  }
  transform(items, filter2 = this.options.filter) {
    untracked(() => {
      this.items.set(items);
      this.filter.set(filter2);
    });
    return this.filtered();
  }
  filter2d(groups) {
    const groupMap = new Map(groups.flatMap((group, i) => group.map((item) => [item, i])));
    const filteredGroups = [];
    this.filterFlat()(groups.flat()).forEach((item) => {
      const i = groupMap.get(item);
      filteredGroups[i] = filteredGroups[i]?.concat(item) ?? [item];
    });
    return filteredGroups;
  }
  static {
    this.ɵfac = function TuiFilterByInputPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFilterByInputPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFilterByInput",
      type: _TuiFilterByInputPipe,
      pure: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterByInputPipe, [{
    type: Pipe,
    args: [{
      name: "tuiFilterByInput",
      pure: false
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-textfield.mjs
var _c0 = ["ghost"];
var _c1 = ["vcr"];
var _c2 = [[["input"]], [["select"]], [["textarea"]], [["label"]], "*", [["tui-icon"]]];
var _c3 = ["input", "select", "textarea", "label", "*", "tui-icon"];
var _c4 = (a0) => ({
  $implicit: a0
});
function TuiTextfieldComponent_Conditional_0_Template(rf, ctx) {
}
function TuiTextfieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TuiTextfieldComponent_Conditional_10_Template_button_click_0_listener() {
      let tmp_3_0;
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView((tmp_3_0 = ctx_r2.accessor()) == null ? null : tmp_3_0.setValue(null));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.clear(), " ");
  }
}
function TuiTextfieldComponent_Conditional_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiTextfieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, TuiTextfieldComponent_Conditional_12_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("tuiCell", ctx_r2.options.size());
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.content())("polymorpheusOutletContext", ɵɵpureFunction1(3, _c4, (tmp_4_0 = ctx_r2.control()) == null ? null : tmp_4_0.value));
  }
}
function TuiTextfieldComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 5, 1);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.computedFiller());
  }
}
function TuiTextfieldItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate(text_r1);
  }
}
var _c5 = [[["label"]], [["input"]], [["select"]], "*", [["tui-icon"]]];
var _c6 = ["label", "input", "select", "*", "tui-icon"];
var _c7 = (a0, a1) => ({
  item: a0,
  index: a1
});
function TuiTextfieldMultiComponent_Conditional_0_Template(rf, ctx) {
}
function TuiTextfieldMultiComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 1);
  }
}
function TuiTextfieldMultiComponent_For_6_ng_template_0_Template(rf, ctx) {
}
function TuiTextfieldMultiComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTextfieldMultiComponent_For_6_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.component)("polymorpheusOutletContext", ɵɵpureFunction1(5, _c4, ɵɵpureFunction2(2, _c7, item_r2, $index_r3)));
  }
}
function TuiTextfieldMultiComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.placeholder);
  }
}
function TuiTextfieldMultiComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function TuiTextfieldMultiComponent_Conditional_14_Template_button_click_0_listener() {
      let tmp_3_0;
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView((tmp_3_0 = ctx_r3.accessor()) == null ? null : tmp_3_0.setValue([]));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.clear(), " ");
  }
}
function TuiTextfieldMultiComponent_Conditional_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r6 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r6, " ");
  }
}
function TuiTextfieldMultiComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, TuiTextfieldMultiComponent_Conditional_18_ng_container_1_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("tuiCell", ctx_r3.options.size());
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.content())("polymorpheusOutletContext", ɵɵpureFunction1(3, _c4, (tmp_4_0 = ctx_r3.control()) == null ? null : tmp_4_0.value));
  }
}
var DEFAULT = {
  appearance: "textfield",
  size: "l",
  cleaner: true
};
var TUI_TEXTFIELD_OPTIONS = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_OPTIONS" : "", {
  factory: () => ({
    appearance: signal(DEFAULT.appearance),
    size: signal(DEFAULT.size),
    cleaner: signal(DEFAULT.cleaner)
  })
});
function tuiTextfieldOptionsProvider(options) {
  return {
    provide: TUI_TEXTFIELD_OPTIONS,
    deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
    useFactory: (parent) => __spreadValues({
      appearance: signal(parent?.appearance() ?? DEFAULT.appearance),
      size: signal(parent?.size() ?? DEFAULT.size),
      cleaner: signal(parent?.cleaner() ?? DEFAULT.cleaner)
    }, options)
  };
}
var TuiTextfieldOptionsDirective = class _TuiTextfieldOptionsDirective {
  constructor() {
    this.options = inject(TUI_TEXTFIELD_OPTIONS, {
      skipSelf: true
    });
    this.appearance = input(this.options.appearance(), {
      alias: "tuiTextfieldAppearance"
    });
    this.size = input(this.options.size(), {
      alias: "tuiTextfieldSize",
      transform: (size) => size || DEFAULT.size
    });
    this.cleaner = input(this.options.cleaner(), {
      alias: "tuiTextfieldCleaner"
    });
  }
  static {
    this.ɵfac = function TuiTextfieldOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldOptionsDirective,
      selectors: [["", "tuiTextfieldAppearance", ""], ["", "tuiTextfieldSize", ""], ["", "tuiTextfieldCleaner", ""]],
      inputs: {
        appearance: [1, "tuiTextfieldAppearance", "appearance"],
        size: [1, "tuiTextfieldSize", "size"],
        cleaner: [1, "tuiTextfieldCleaner", "cleaner"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_OPTIONS, _TuiTextfieldOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldOptionsDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]",
      providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)]
    }]
  }], null, null);
})();
var TuiSelectLike = class _TuiSelectLike {
  constructor() {
    this.el = tuiInjectElement();
    this.isAndroid = inject(WA_IS_ANDROID);
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
  }
  clear() {
    this.el.value = "";
  }
  prevent(event) {
    if (!this.isAndroid) {
      return;
    }
    event.preventDefault();
    this.el.focus();
  }
  static {
    this.ɵfac = function TuiSelectLike_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSelectLike)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSelectLike,
      selectors: [["", "tuiSelectLike", ""]],
      hostAttrs: ["autocomplete", "off", "inputmode", "none", "spellcheck", "false", "tuiSelectLike", ""],
      hostBindings: function TuiSelectLike_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("beforeinput", function TuiSelectLike_beforeinput_HostBindingHandler($event) {
            return ctx.options.cleaner() && $event.inputType.includes("delete") || $event.preventDefault();
          })("input.capture", function TuiSelectLike_input_capture_HostBindingHandler($event) {
            return ($event.inputType == null ? null : $event.inputType.includes("delete")) && ctx.clear();
          })("keydown.backspace", function TuiSelectLike_keydown_backspace_HostBindingHandler() {
            return ctx.options.cleaner() && ctx.clear();
          })("keydown.delete", function TuiSelectLike_keydown_delete_HostBindingHandler() {
            return ctx.options.cleaner() && ctx.clear();
          })("mousedown", function TuiSelectLike_mousedown_HostBindingHandler($event) {
            return ctx.prevent($event);
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelectLike, [{
    type: Directive,
    args: [{
      selector: "[tuiSelectLike]",
      host: {
        autocomplete: "off",
        inputmode: "none",
        spellcheck: "false",
        tuiSelectLike: "",
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        "(beforeinput)": 'options.cleaner() && $event.inputType.includes("delete") || $event.preventDefault()',
        "(input.capture)": '$event.inputType?.includes("delete") && clear()',
        "(keydown.backspace)": "options.cleaner() && clear()",
        // No (input) event if caret is at the beginning
        "(keydown.delete)": "options.cleaner() && clear()",
        // No (input) event if caret is at the end
        // Hide Android text select handle (bubble marker below transparent caret)
        "(mousedown)": "prevent($event)"
      }
    }]
  }], null, null);
})();
var TUI_TEXTFIELD_ACCESSOR = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_ACCESSOR" : "");
function tuiAsTextfieldAccessor(accessor) {
  return tuiProvide(TUI_TEXTFIELD_ACCESSOR, accessor);
}
var TuiTextfieldComponent = class _TuiTextfieldComponent {
  constructor() {
    this.autoId = tuiGenerateId();
    this.focusedIn = tuiFocusedIn(tuiInjectElement());
    this.ghost = viewChild("ghost");
    this.dropdown = inject(TuiDropdownDirective);
    this.open = inject(TuiDropdownOpen);
    this.clear = inject(TUI_CLEAR_WORD);
    this.label = contentChild(forwardRef(() => TuiLabel), {
      read: ElementRef
    });
    this.computedFiller = computed((value = this.value()) => {
      const filler = this.filler();
      if (filler.length <= value.length) {
        return "";
      }
      return this.input()?.nativeElement.matches('[dir="rtl"] :scope') ? `${filler.slice(0, filler.length - value.length)}${value}` : `${value}${filler.slice(value.length)}`;
    });
    this.showFiller = computed(() => this.focused() && !!this.computedFiller() && (!!this.value() || !this.input()?.nativeElement.placeholder));
    this.accessor = contentChild(TUI_TEXTFIELD_ACCESSOR);
    this.vcr = viewChild("vcr", {
      read: ViewContainerRef
    });
    this.control = contentChild(NgControl);
    this.child = contentChild(TuiControl);
    this.auxiliaries = contentChildren(TUI_AUXILIARY, {
      descendants: true
    });
    this.focused = computed(() => this.open.open() || this.focusedIn());
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
    this.el = tuiInjectElement();
    this.input = contentChild(TUI_TEXTFIELD_ACCESSOR, {
      read: ElementRef
    });
    this.content = input();
    this.filler = input("");
    this.value = tuiValue(this.input);
  }
  get id() {
    return this.input()?.nativeElement.id || this.autoId;
  }
  get disabled() {
    return this.control()?.disabled ?? this.input()?.nativeElement?.disabled ?? false;
  }
  get size() {
    return this.options.size();
  }
  handleOption(option) {
    this.accessor()?.setValue(option);
    this.open.open.set(false);
  }
  get hasLabel() {
    return Boolean(this.label()?.nativeElement?.childNodes.length);
  }
  onResize({
    contentRect
  }) {
    this.el.style.setProperty("--t-side", tuiPx(contentRect.width));
  }
  // Click on ::before,::after pseudo-elements ([iconStart] / [iconEnd])
  onIconClick() {
    this.input()?.nativeElement.focus();
    if (!this.open.enabled() || this.input()?.nativeElement.matches("input:read-only,textarea:read-only")) {
      return;
    }
    this.open.open.update((open) => !open);
    try {
      this.input()?.nativeElement.showPicker?.();
    } catch (e) {
    }
  }
  onScroll(element) {
    const input2 = this.input();
    if (input2?.nativeElement === element) {
      this.ghost()?.nativeElement.scrollTo({
        left: input2?.nativeElement.scrollLeft
      });
    }
  }
  static {
    this.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldComponent,
      selectors: [["tui-textfield", 3, "multi", ""]],
      contentQueries: function TuiTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.label, TuiLabel, 5, ElementRef)(dirIndex, ctx.accessor, TUI_TEXTFIELD_ACCESSOR, 5)(dirIndex, ctx.control, NgControl, 5)(dirIndex, ctx.child, TuiControl, 5)(dirIndex, ctx.auxiliaries, TUI_AUXILIARY, 5)(dirIndex, ctx.input, TUI_TEXTFIELD_ACCESSOR, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(6);
        }
      },
      viewQuery: function TuiTextfieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.ghost, _c0, 5)(ctx.vcr, _c1, 5, ViewContainerRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostAttrs: [1, "tui-interactive"],
      hostVars: 7,
      hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationcancel", function TuiTextfieldComponent_animationcancel_HostBindingHandler() {
            return 0;
          })("animationstart", function TuiTextfieldComponent_animationstart_HostBindingHandler() {
            return 0;
          })("click.self.prevent", function TuiTextfieldComponent_click_self_prevent_HostBindingHandler() {
            return 0;
          })("pointerdown.self.prevent", function TuiTextfieldComponent_pointerdown_self_prevent_HostBindingHandler() {
            return ctx.onIconClick();
          })("scroll.capture.zoneless", function TuiTextfieldComponent_scroll_capture_zoneless_HostBindingHandler($event) {
            return ctx.onScroll($event.target);
          })("tuiActiveZoneChange", function TuiTextfieldComponent_tuiActiveZoneChange_HostBindingHandler($event) {
            let tmp_0_0;
            return !$event && ((tmp_0_0 = ctx.control()) == null ? null : tmp_0_0.valueAccessor == null ? null : tmp_0_0.valueAccessor.onTouched == null ? null : tmp_0_0.valueAccessor.onTouched());
          });
        }
        if (rf & 2) {
          let tmp_3_0;
          ɵɵattribute("data-size", ctx.options.size());
          ɵɵclassProp("_disabled", ctx.disabled)("_with-label", ctx.hasLabel)("_with-template", ctx.content() && ((tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.value) != null);
        }
      },
      inputs: {
        content: [1, "content"],
        filler: [1, "filler"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)), tuiAsDataListHost(_TuiTextfieldComponent), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(_TuiTextfieldComponent).value
      }]), ɵɵHostDirectivesFeature([TuiAppearance, TuiDropdownDirective, TuiDropdownFixed, TuiWithDropdownOpen, TuiWithIcons, TuiWithItemsHandlers, TuiWithOptionContent])],
      ngContentSelectors: _c3,
      decls: 14,
      vars: 6,
      consts: [["vcr", ""], ["ghost", ""], [1, "t-content", 3, "pointerdown", "waResizeObserver"], ["tabindex", "-1", "tuiButtonX", ""], [1, "t-template", 3, "tuiCell"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"], ["tabindex", "-1", "tuiButtonX", "", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTextfieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c2);
          ɵɵconditionalCreate(0, TuiTextfieldComponent_Conditional_0_Template, 0, 0);
          ɵɵpipe(1, "async");
          ɵɵprojection(2);
          ɵɵprojection(3, 1);
          ɵɵprojection(4, 2);
          ɵɵprojection(5, 3);
          ɵɵelementStart(6, "span", 2);
          ɵɵlistener("pointerdown", function TuiTextfieldComponent_Template_span_pointerdown_6_listener() {
            let tmp_2_0;
            ɵɵrestoreView(_r1);
            return ɵɵresetView((tmp_2_0 = ctx.input()) == null ? null : tmp_2_0.nativeElement == null ? null : tmp_2_0.nativeElement.focus());
          })("waResizeObserver", function TuiTextfieldComponent_Template_span_waResizeObserver_6_listener($event) {
            return $event[0] && ctx.onResize($event[0]);
          });
          ɵɵprojection(7, 4);
          ɵɵelementContainer(8, null, 0);
          ɵɵconditionalCreate(10, TuiTextfieldComponent_Conditional_10_Template, 2, 1, "button", 3);
          ɵɵprojection(11, 5);
          ɵɵelementEnd();
          ɵɵconditionalCreate(12, TuiTextfieldComponent_Conditional_12_Template, 2, 5, "span", 4);
          ɵɵconditionalCreate(13, TuiTextfieldComponent_Conditional_13_Template, 2, 1, "input", 5);
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_3_0;
          ɵɵconditional(((tmp_1_0 = ctx.child()) == null ? null : tmp_1_0.value()) ?? ɵɵpipeBind1(1, 4, (tmp_1_0 = ctx.control()) == null ? null : tmp_1_0.control == null ? null : tmp_1_0.control.valueChanges) ? 0 : -1);
          ɵɵadvance(10);
          ɵɵconditional(ctx.options.cleaner() ? 10 : -1);
          ɵɵadvance(2);
          ɵɵconditional(((tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.value) != null ? 12 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showFiller() ? 13 : -1);
        }
      },
      dependencies: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, WaResizeObserver],
      styles: ['tui-textfield:where(*[data-tui-version="5.9.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-icon-start]{--t-start: 2.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;zoom:1}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-start]{--t-start: 2.125rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]) tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.9.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.9.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.9.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.9.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.9.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.9.0"]) button,tui-textfield:where(*[data-tui-version="5.9.0"]) a,tui-textfield:where(*[data-tui-version="5.9.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.9.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.9.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.9.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.9.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      selector: "tui-textfield:not([multi])",
      imports: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, WaResizeObserver],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)), tuiAsDataListHost(TuiTextfieldComponent), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(TuiTextfieldComponent).value
      }],
      hostDirectives: [TuiAppearance, TuiDropdownDirective, TuiDropdownFixed, TuiWithDropdownOpen, TuiWithIcons, TuiWithItemsHandlers, TuiWithOptionContent],
      host: {
        class: "tui-interactive",
        "[attr.data-size]": "options.size()",
        "[class._disabled]": "disabled",
        // TODO :has([tuiInput]:disabled)
        "[class._with-label]": "hasLabel",
        // TODO :has([tuiLabel]
        "[class._with-template]": "content() && control()?.value != null",
        "(animationcancel)": "0",
        // TODO :has([tuiInput]:disabled)
        "(animationstart)": "0",
        // TODO :has([tuiInput]:disabled)
        "(click.self.prevent)": "0",
        // TODO preventing breaks resize: both, but not preventing breaks focus, fix
        "(pointerdown.self.prevent)": "onIconClick()",
        "(scroll.capture.zoneless)": "onScroll($event.target)",
        "(tuiActiveZoneChange)": "!$event && control()?.valueAccessor?.onTouched?.()"
      },
      template: '@if (child()?.value() ?? (control()?.control?.valueChanges | async)) {}\n<ng-content select="input" />\n<ng-content select="select" />\n<ng-content select="textarea" />\n<ng-content select="label" />\n<span\n    class="t-content"\n    (pointerdown)="input()?.nativeElement?.focus()"\n    (waResizeObserver)="$event[0] && onResize($event[0])"\n>\n    <ng-content />\n    <ng-container #vcr />\n    @if (options.cleaner()) {\n        <button\n            tabindex="-1"\n            tuiButtonX\n            (click)="accessor()?.setValue(null)"\n        >\n            {{ clear() }}\n        </button>\n    }\n    <ng-content select="tui-icon" />\n</span>\n@if (control()?.value != null) {\n    <span\n        class="t-template"\n        [tuiCell]="options.size()"\n    >\n        <ng-container *polymorpheusOutlet="content() as text; context: {$implicit: control()?.value}">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n@if (showFiller()) {\n    <input\n        #ghost\n        aria-hidden="true"\n        disabled\n        class="t-filler"\n        [value]="computedFiller()"\n    />\n}\n',
      styles: ['tui-textfield:where(*[data-tui-version="5.9.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-icon-start]{--t-start: 2.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;zoom:1}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-start]{--t-start: 2.125rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]) tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.9.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.9.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.9.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.9.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.9.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.9.0"]) button,tui-textfield:where(*[data-tui-version="5.9.0"]) a,tui-textfield:where(*[data-tui-version="5.9.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.9.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.9.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.9.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.9.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}\n']
    }]
  }], null, null);
})();
var TuiTextfieldItemComponent = class _TuiTextfieldItemComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.context = injectContext();
    this.textfield = inject(TuiTextfieldMultiComponent);
    this.content = computed(() => this.textfield.item() ?? this.handlers.stringify()(this.context.$implicit.item));
  }
  prevent(e) {
    this.textfield.focused() && e.preventDefault();
  }
  static {
    this.ɵfac = function TuiTextfieldItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldItemComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldItemComponent,
      selectors: [["tui-textfield-item"]],
      hostVars: 4,
      hostBindings: function TuiTextfieldItemComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft.prevent", function TuiTextfieldItemComponent_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.el.previousElementSibling == null ? null : ctx.el.previousElementSibling.firstChild == null ? null : ctx.el.previousElementSibling.firstChild.focus();
          })("keydown.arrowRight.prevent", function TuiTextfieldItemComponent_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.el.nextElementSibling == null ? null : ctx.el.nextElementSibling.firstChild == null ? null : ctx.el.nextElementSibling.firstChild.focus();
          })("pointerdown.self", function TuiTextfieldItemComponent_pointerdown_self_HostBindingHandler($event) {
            return ctx.prevent($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_disabled", ctx.handlers.disabledItemHandler()(ctx.context.$implicit.item))("_string", !ctx.textfield.item());
        }
      },
      decls: 1,
      vars: 2,
      consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTextfieldItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiTextfieldItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: ['[_nghost-%COMP%]{max-inline-size:100%;flex-shrink:0;white-space:nowrap;text-overflow:ellipsis;color:var(--tui-text-primary)}._string[_nghost-%COMP%]{overflow:hidden;overflow:clip visible}._string._disabled[_nghost-%COMP%]{opacity:var(--tui-disabled-opacity)}._string[_nghost-%COMP%]:after{content:",\\a0"}[_nghost-%COMP%]:last-of-type{max-inline-size:80%}tui-textfield:not([data-focus="true"])[_nghost-%COMP%]:last-of-type:after, tui-textfield:not([data-focus="true"])   [_nghost-%COMP%]:last-of-type:after{display:none}tui-textfield:has([tuiSelectLike])[_nghost-%COMP%]:last-of-type:after, tui-textfield:has([tuiSelectLike])   [_nghost-%COMP%]:last-of-type:after, tui-textfield[data-mode~="readonly"][_nghost-%COMP%]:last-of-type:after, tui-textfield[data-mode~="readonly"]   [_nghost-%COMP%]:last-of-type:after{content:"\\a0"}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldItemComponent, [{
    type: Component,
    args: [{
      selector: "tui-textfield-item",
      imports: [PolymorpheusOutlet],
      template: '<ng-container *polymorpheusOutlet="content() as text; context: context">{{ text }}</ng-container>',
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._disabled]": "handlers.disabledItemHandler()(context.$implicit.item)",
        "[class._string]": "!textfield.item()",
        "(keydown.arrowLeft.prevent)": "el.previousElementSibling?.firstChild?.focus()",
        "(keydown.arrowRight.prevent)": "el.nextElementSibling?.firstChild?.focus()",
        "(pointerdown.self)": "prevent($event)"
      },
      styles: [':host{max-inline-size:100%;flex-shrink:0;white-space:nowrap;text-overflow:ellipsis;color:var(--tui-text-primary)}:host._string{overflow:hidden;overflow:clip visible}:host._string._disabled{opacity:var(--tui-disabled-opacity)}:host._string:after{content:",\\a0"}:host:last-of-type{max-inline-size:80%}:host-context(tui-textfield:not([data-focus="true"])):last-of-type:after{display:none}:host-context(tui-textfield:has([tuiSelectLike])):last-of-type:after,:host-context(tui-textfield[data-mode~="readonly"]):last-of-type:after{content:"\\a0"}\n']
    }]
  }], null, null);
})();
var TUI_TEXTFIELD_ITEM = new PolymorpheusComponent(TuiTextfieldItemComponent);
var TuiTextfieldMultiComponent = class _TuiTextfieldMultiComponent extends TuiTextfieldComponent {
  constructor() {
    super(...arguments);
    this.height = signal(null);
    this.win = inject(WA_WINDOW);
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.component = TUI_TEXTFIELD_ITEM;
    this.sub = fromEvent(this.el, "scroll").pipe(filter(() => this.rows() === 1), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      this.el.style.setProperty("--t-scroll", tuiPx(-1 * this.el.scrollLeft));
    });
    this.cva = contentChild(TuiControl);
    this.item = contentChild(TuiItem, {
      read: TemplateRef,
      descendants: true
    });
    this.rows = input(100);
  }
  handleOption(option) {
    this.accessor()?.setValue(tuiArrayToggle(this.control()?.value ?? [], option, this.handlers.identityMatcher()));
  }
  get placeholder() {
    const el = this.input()?.nativeElement;
    const placeholder = el?.matches("input") ? el.placeholder : this.computedFiller();
    const value = this.computedFiller() || this.value();
    const longer = value.length > placeholder.length ? value : placeholder;
    return this.focused() ? longer : "";
  }
  onItems({
    target
  }) {
    const height = this.rows() > 1 && this.control()?.value?.length ? target.querySelector("tui-textfield-item")?.clientHeight ?? 0 : null;
    if (height !== 0) {
      this.height.set(height);
    }
  }
  onLeft(event) {
    if (this.value() || !tuiIsElement(event.currentTarget)) {
      return;
    }
    event.preventDefault();
    event.currentTarget.previousElementSibling?.firstElementChild?.focus();
  }
  focusInput() {
    const selection = this.win.getSelection();
    if (!selection?.rangeCount || selection.getRangeAt(0)?.collapsed) {
      this.input()?.nativeElement.focus();
    }
  }
  onClick(target) {
    if (target === this.el || !this.cva()?.interactive() || !this.el.matches("[tuiChevron]") && !this.el.querySelector("select, [tuiInputDateMulti]") || target.matches('input:read-only,input[inputmode="none"]')) {
      return;
    }
    this.open.open.update((open) => !open);
    try {
      this.input()?.nativeElement.showPicker?.();
    } catch (e) {
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldMultiComponent_BaseFactory;
      return function TuiTextfieldMultiComponent_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldMultiComponent_BaseFactory || (ɵTuiTextfieldMultiComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldMultiComponent)))(__ngFactoryType__ || _TuiTextfieldMultiComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldMultiComponent,
      selectors: [["tui-textfield", "multi", ""]],
      contentQueries: function TuiTextfieldMultiComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.cva, TuiControl, 5)(dirIndex, ctx.item, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostVars: 7,
      hostBindings: function TuiTextfieldMultiComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.prevent", function TuiTextfieldMultiComponent_click_prevent_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          })("tuiActiveZoneChange", function TuiTextfieldMultiComponent_tuiActiveZoneChange_HostBindingHandler($event) {
            return !$event && ctx.el.scrollTo({
              left: 0
            });
          });
        }
        if (rf & 2) {
          let tmp_3_0;
          ɵɵattribute("data-state", ctx.disabled ? "disabled" : null);
          ɵɵstyleProp("--t-item-height", ctx.height(), "px")("--t-rows", ctx.rows());
          ɵɵclassProp("_empty", !((tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.value == null ? null : tmp_3_0.value.length));
        }
      },
      inputs: {
        rows: [1, "rows"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)), tuiAsDataListHost(_TuiTextfieldMultiComponent), tuiProvide(TuiTextfieldComponent, _TuiTextfieldMultiComponent), tuiProvide(TUI_SCROLL_REF, ElementRef), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(TuiTextfieldComponent).value
      }, tuiFilterByInputOptionsProvider({
        filter: (items, search, stringify) => items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify))
      })]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c6,
      decls: 19,
      vars: 12,
      consts: [["vcr", ""], [1, "t-scrollbar"], [1, "t-items", 3, "click", "pointerdown.self.zoneless.prevent", "waResizeObserver"], [3, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-input", 3, "keydown.arrowLeft"], [1, "t-ghost"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"], [1, "t-content", 3, "click.stop", "pointerdown.zoneless.prevent", "waResizeObserver"], ["tabindex", "-1", "tuiButtonX", ""], [1, "t-template", 3, "tuiCell"], ["tabindex", "-1", "tuiButtonX", "", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTextfieldMultiComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c5);
          ɵɵconditionalCreate(0, TuiTextfieldMultiComponent_Conditional_0_Template, 0, 0);
          ɵɵpipe(1, "async");
          ɵɵconditionalCreate(2, TuiTextfieldMultiComponent_Conditional_2_Template, 1, 0, "tui-scroll-controls", 1);
          ɵɵelementStart(3, "div", 2);
          ɵɵlistener("click", function TuiTextfieldMultiComponent_Template_div_click_3_listener() {
            return ctx.focusInput();
          })("pointerdown.self.zoneless.prevent", function TuiTextfieldMultiComponent_Template_div_pointerdown_self_zoneless_prevent_3_listener() {
            return 0;
          })("waResizeObserver", function TuiTextfieldMultiComponent_Template_div_waResizeObserver_3_listener($event) {
            return $event[0] && ctx.onItems($event[0]);
          });
          ɵɵprojection(4);
          ɵɵrepeaterCreate(5, TuiTextfieldMultiComponent_For_6_Template, 1, 7, null, 3, ɵɵrepeaterTrackByIdentity);
          ɵɵelementStart(7, "span", 4);
          ɵɵlistener("keydown.arrowLeft", function TuiTextfieldMultiComponent_Template_span_keydown_arrowLeft_7_listener($event) {
            return ctx.onLeft($event);
          });
          ɵɵprojection(8, 1);
          ɵɵprojection(9, 2);
          ɵɵconditionalCreate(10, TuiTextfieldMultiComponent_Conditional_10_Template, 2, 1, "span", 5);
          ɵɵelement(11, "input", 6);
          ɵɵelementEnd()();
          ɵɵelementStart(12, "span", 7);
          ɵɵlistener("click.stop", function TuiTextfieldMultiComponent_Template_span_click_stop_12_listener() {
            let tmp_2_0;
            ɵɵrestoreView(_r1);
            return ɵɵresetView((tmp_2_0 = ctx.input()) == null ? null : tmp_2_0.nativeElement == null ? null : tmp_2_0.nativeElement.focus());
          })("pointerdown.zoneless.prevent", function TuiTextfieldMultiComponent_Template_span_pointerdown_zoneless_prevent_12_listener() {
            return 0;
          })("waResizeObserver", function TuiTextfieldMultiComponent_Template_span_waResizeObserver_12_listener($event) {
            return $event[0] && ctx.onResize($event[0]);
          });
          ɵɵprojection(13, 3);
          ɵɵconditionalCreate(14, TuiTextfieldMultiComponent_Conditional_14_Template, 2, 1, "button", 8);
          ɵɵelementContainer(15, null, 0);
          ɵɵprojection(17, 4);
          ɵɵelementEnd();
          ɵɵconditionalCreate(18, TuiTextfieldMultiComponent_Conditional_18_Template, 2, 5, "span", 9);
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_4_0;
          let tmp_9_0;
          ɵɵconditional(((tmp_1_0 = ctx.child()) == null ? null : tmp_1_0.value()) ?? ɵɵpipeBind1(1, 10, (tmp_1_0 = ctx.control()) == null ? null : tmp_1_0.control == null ? null : tmp_1_0.control.valueChanges) ? 0 : -1);
          ɵɵadvance(2);
          ɵɵconditional(ctx.rows() > 1 ? 2 : -1);
          ɵɵadvance();
          ɵɵclassProp("t-items_horizontal", ctx.rows() === 1);
          ɵɵadvance(2);
          ɵɵrepeater((tmp_4_0 = ctx.control()) == null ? null : tmp_4_0.value);
          ɵɵadvance(5);
          ɵɵconditional(ctx.placeholder ? 10 : -1);
          ɵɵadvance();
          ɵɵclassProp("t-filler_hidden", !ctx.showFiller());
          ɵɵproperty("value", ctx.computedFiller());
          ɵɵadvance(3);
          ɵɵconditional(ctx.options.cleaner() ? 14 : -1);
          ɵɵadvance(4);
          ɵɵconditional(((tmp_9_0 = ctx.control()) == null ? null : tmp_9_0.value) != null ? 18 : -1);
        }
      },
      dependencies: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, TuiScrollControls, WaResizeObserver],
      styles: ['tui-textfield:where(*[data-tui-version="5.9.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-icon-start]{--t-start: 2.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;zoom:1}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-start]{--t-start: 2.125rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]) tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.9.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.9.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.9.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.9.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.9.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.9.0"]) button,tui-textfield:where(*[data-tui-version="5.9.0"]) a,tui-textfield:where(*[data-tui-version="5.9.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.9.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.9.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.9.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.9.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]){flex-wrap:nowrap;overflow:scroll;align-items:stretch;cursor:text;max-block-size:calc(var(--t-vertical) * 2 + var(--t-item-height) * var(--t-rows));overscroll-behavior-x:none;scroll-behavior:var(--tui-scroll-behavior)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]):before,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]):after{position:sticky;inset-block-start:0;inset-inline-start:0;block-size:var(--t-height)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-scrollbar{transform:translate(calc(var(--t-padding) * var(--tui-inline)));margin-inline-start:calc(-1 * var(--t-start));margin-inline-end:calc(1px - 100% + var(--t-start))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-scrollbar .t-bar_horizontal{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items{position:sticky;display:flex;inset-inline-start:var(--t-start);min-inline-size:0;flex:1;align-items:center;flex-wrap:wrap;padding:var(--t-vertical) 0;transition-duration:inherit;box-sizing:border-box}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items:after{content:"";min-inline-size:1px;min-block-size:1px}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items_horizontal{clip-path:inset(0 0 0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem));flex-wrap:nowrap}[dir=rtl] tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items_horizontal{clip-path:inset(0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem) 0 0)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items_horizontal>.t-input{padding-inline-end:calc(var(--t-side) + var(--t-end) + var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input{position:relative;display:flex;align-items:center;flex:1;block-size:var(--t-item-height, 1.25em);max-inline-size:100%;pointer-events:none;transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input .t-filler,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input [tuiInput]{inset-block-start:-5%;block-size:110%;padding:0;pointer-events:auto}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input .t-ghost{visibility:hidden;white-space:pre;text-overflow:clip;padding-inline-end:.125rem;block-size:100%}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input .t-filler_hidden{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label[data-size=l]{--t-vertical: .5625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label[data-size=l] tui-textfield-item:first-of-type{margin-block-start:1.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label[data-size=m]{--t-vertical: .4375rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label[data-size=m] tui-textfield-item:first-of-type{margin-block-start:.875rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label>.t-items{align-items:flex-end}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label>.t-items>label[tuiLabel]{min-inline-size:100%;margin:calc(var(--t-height) / 2 - var(--t-vertical) - .625em) 0;margin-inline-end:-100%;padding:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-content{position:sticky;inset-block-start:0;inset-inline-start:calc(100% - var(--t-side) - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items input:not(:focus)::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-mode~=readonly]>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-mode~=readonly]>.t-items label~.t-input input::placeholder{opacity:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._empty>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-focus=true]:not([data-mode~=readonly]):not(:focus-within)>.t-items input::placeholder{opacity:1}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-state=disabled],tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-mode~=readonly]{pointer-events:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-state=disabled] select,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-mode~=readonly] select{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=l]{--t-vertical: .625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=l]:after{inset-inline-start:calc(100% - var(--t-end) - var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-vertical: .5rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=m]:before{inset-inline-start:-.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=m]:after{inset-inline-start:calc(100% - var(--t-end) - .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-vertical: .125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=s]:before{inset-inline-start:-.25rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=s]:after{inset-inline-start:calc(100% - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]) tui-textfield-item{transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]) input::placeholder{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]) select{opacity:0;pointer-events:none!important}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._empty>.t-items select~.t-filler{display:block}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._empty:not([data-focus=true])>.t-items select~.t-filler{color:var(--tui-text-secondary)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]):has([tuiSelectLike]){cursor:pointer}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldMultiComponent, [{
    type: Component,
    args: [{
      selector: "tui-textfield[multi]",
      imports: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, TuiScrollControls, WaResizeObserver],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiButtonXOptionsProvider(() => inject(TUI_BUTTON_OPTIONS)), tuiAsDataListHost(TuiTextfieldMultiComponent), tuiProvide(TuiTextfieldComponent, TuiTextfieldMultiComponent), tuiProvide(TUI_SCROLL_REF, ElementRef), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(TuiTextfieldComponent).value
      }, tuiFilterByInputOptionsProvider({
        filter: (items, search, stringify) => items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify))
      })],
      host: {
        "[attr.data-state]": 'disabled ? "disabled" : null',
        "[class._empty]": "!control()?.value?.length",
        "[style.--t-item-height.px]": "height()",
        "[style.--t-rows]": "rows()",
        "(click.prevent)": "onClick($event.target)",
        "(tuiActiveZoneChange)": "!$event && el.scrollTo({left: 0})"
      },
      template: '@if (child()?.value() ?? (control()?.control?.valueChanges | async)) {}\n@if (rows() > 1) {\n    <tui-scroll-controls class="t-scrollbar" />\n}\n\n<div\n    class="t-items"\n    [class.t-items_horizontal]="rows() === 1"\n    (click)="focusInput()"\n    (pointerdown.self.zoneless.prevent)="(0)"\n    (waResizeObserver)="$event[0] && onItems($event[0])"\n>\n    <ng-content select="label" />\n    @for (item of control()?.value; track item) {\n        <ng-template\n            [polymorpheusOutlet]="component"\n            [polymorpheusOutletContext]="{$implicit: {item, index: $index}}"\n        />\n    }\n    <span\n        class="t-input"\n        (keydown.arrowLeft)="onLeft($event)"\n    >\n        <ng-content select="input" />\n        <ng-content select="select" />\n        @if (placeholder) {\n            <span class="t-ghost">{{ placeholder }}</span>\n        }\n        <input\n            aria-hidden="true"\n            disabled\n            class="t-filler"\n            [class.t-filler_hidden]="!showFiller()"\n            [value]="computedFiller()"\n        />\n    </span>\n</div>\n\n<span\n    class="t-content"\n    (click.stop)="input()?.nativeElement?.focus()"\n    (pointerdown.zoneless.prevent)="(0)"\n    (waResizeObserver)="$event[0] && onResize($event[0])"\n>\n    <ng-content />\n    @if (options.cleaner()) {\n        <button\n            tabindex="-1"\n            tuiButtonX\n            (click)="accessor()?.setValue([])"\n        >\n            {{ clear() }}\n        </button>\n    }\n    <ng-container #vcr />\n    <ng-content select="tui-icon" />\n</span>\n\n@if (control()?.value != null) {\n    <span\n        class="t-template"\n        [tuiCell]="options.size()"\n    >\n        <ng-container *polymorpheusOutlet="content() as text; context: {$implicit: control()?.value}">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n',
      styles: ['tui-textfield:where(*[data-tui-version="5.9.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media(hover:hover)and (pointer:fine){tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-icon-start]{--t-start: 2.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiIcons]:before{z-index:1;block-size:var(--t-height);inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none;zoom:1}tui-textfield:where(*[data-tui-version="5.9.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding));block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.9.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-start]{--t-start: 2.125rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.9.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.9.0"]):is(._disabled,[data-state=disabled]) tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.9.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.9.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.9.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.9.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.9.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.9.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.9.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.9.0"]) button,tui-textfield:where(*[data-tui-version="5.9.0"]) a,tui-textfield:where(*[data-tui-version="5.9.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.9.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.9.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.9.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.9.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.9.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.9.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.9.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.9.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]){flex-wrap:nowrap;overflow:scroll;align-items:stretch;cursor:text;max-block-size:calc(var(--t-vertical) * 2 + var(--t-item-height) * var(--t-rows));overscroll-behavior-x:none;scroll-behavior:var(--tui-scroll-behavior)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]):before,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]):after{position:sticky;inset-block-start:0;inset-inline-start:0;block-size:var(--t-height)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-scrollbar{transform:translate(calc(var(--t-padding) * var(--tui-inline)));margin-inline-start:calc(-1 * var(--t-start));margin-inline-end:calc(1px - 100% + var(--t-start))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-scrollbar .t-bar_horizontal{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items{position:sticky;display:flex;inset-inline-start:var(--t-start);min-inline-size:0;flex:1;align-items:center;flex-wrap:wrap;padding:var(--t-vertical) 0;transition-duration:inherit;box-sizing:border-box}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items:after{content:"";min-inline-size:1px;min-block-size:1px}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items_horizontal{clip-path:inset(0 0 0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem));flex-wrap:nowrap}[dir=rtl] tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items_horizontal{clip-path:inset(0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem) 0 0)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items_horizontal>.t-input{padding-inline-end:calc(var(--t-side) + var(--t-end) + var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input{position:relative;display:flex;align-items:center;flex:1;block-size:var(--t-item-height, 1.25em);max-inline-size:100%;pointer-events:none;transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input .t-filler,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input [tuiInput]{inset-block-start:-5%;block-size:110%;padding:0;pointer-events:auto}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input .t-ghost{visibility:hidden;white-space:pre;text-overflow:clip;padding-inline-end:.125rem;block-size:100%}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items>.t-input .t-filler_hidden{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label[data-size=l]{--t-vertical: .5625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label[data-size=l] tui-textfield-item:first-of-type{margin-block-start:1.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label[data-size=m]{--t-vertical: .4375rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label[data-size=m] tui-textfield-item:first-of-type{margin-block-start:.875rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label>.t-items{align-items:flex-end}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._with-label>.t-items>label[tuiLabel]{min-inline-size:100%;margin:calc(var(--t-height) / 2 - var(--t-vertical) - .625em) 0;margin-inline-end:-100%;padding:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-content{position:sticky;inset-block-start:0;inset-inline-start:calc(100% - var(--t-side) - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])>.t-items input:not(:focus)::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-mode~=readonly]>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-mode~=readonly]>.t-items label~.t-input input::placeholder{opacity:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._empty>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-focus=true]:not([data-mode~=readonly]):not(:focus-within)>.t-items input::placeholder{opacity:1}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-state=disabled],tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-mode~=readonly]{pointer-events:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-state=disabled] select,tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-mode~=readonly] select{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=l]{--t-vertical: .625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=l]:after{inset-inline-start:calc(100% - var(--t-end) - var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=m]{--t-vertical: .5rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=m]:before{inset-inline-start:-.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=m]:after{inset-inline-start:calc(100% - var(--t-end) - .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=s]{--t-vertical: .125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=s]:before{inset-inline-start:-.25rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])[data-size=s]:after{inset-inline-start:calc(100% - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]) tui-textfield-item{transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]) input::placeholder{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]) select{opacity:0;pointer-events:none!important}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._empty>.t-items select~.t-filler{display:block}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"])._empty:not([data-focus=true])>.t-items select~.t-filler{color:var(--tui-text-secondary)}tui-textfield[multi][multi]:where(*[data-tui-version="5.9.0"]):has([tuiSelectLike]){cursor:pointer}\n']
    }]
  }], null, null);
})();
var TuiTextfield = [TuiItem, TuiLabel, TuiTextfieldComponent, TuiTextfieldOptionsDirective, TuiTextfieldMultiComponent, TuiDropdownContent];
function tuiInjectAuxiliary(predicate) {
  const {
    auxiliaries
  } = inject(TuiTextfieldComponent);
  return computed(() => auxiliaries().find(predicate) ?? null);
}
var TUI_TEXTFIELD_CONTENT = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_CONTENT" : "");
function tuiAsTextfieldContent(useValue) {
  return {
    provide: TUI_TEXTFIELD_CONTENT,
    useValue
  };
}
var TuiTextfieldContent = class _TuiTextfieldContent {
  constructor() {
    this.vcr = inject(TuiTextfieldComponent).vcr;
    this.options = {
      injector: inject(INJECTOR$1)
    };
    this.content = inject(TUI_TEXTFIELD_CONTENT, {
      optional: true
    }) || inject(TemplateRef);
    this.ref = computed(() => {
      const vcr = this.vcr();
      return this.content instanceof TemplateRef ? vcr?.createEmbeddedView(this.content) : vcr?.createComponent(this.content, this.options).hostView;
    });
  }
  ngDoCheck() {
    this.ref()?.detectChanges();
  }
  ngOnDestroy() {
    this.ref()?.destroy();
  }
  static {
    this.ɵfac = function TuiTextfieldContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldContent,
      selectors: [["ng-template", "tuiTextfieldContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiTextfieldContent]"
    }]
  }], null, null);
})();
var TuiWithNativePicker = class _TuiWithNativePicker {
  constructor() {
    tuiInjectElement().type = "text";
  }
  static {
    this.ɵfac = function TuiWithNativePicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithNativePicker)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithNativePicker
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithNativePicker, [{
    type: Directive
  }], () => [], null);
})();

export {
  TUI_BUTTON_X_OPTIONS,
  tuiButtonXOptionsProvider,
  TuiButtonX,
  TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS,
  TUI_FILTER_BY_INPUT_OPTIONS,
  tuiFilterByInputOptionsProvider,
  TuiFilterByInputPipe,
  TUI_TEXTFIELD_OPTIONS,
  tuiTextfieldOptionsProvider,
  TuiTextfieldOptionsDirective,
  TuiSelectLike,
  TUI_TEXTFIELD_ACCESSOR,
  tuiAsTextfieldAccessor,
  TuiTextfieldComponent,
  TuiTextfieldItemComponent,
  TUI_TEXTFIELD_ITEM,
  TuiTextfieldMultiComponent,
  TuiTextfield,
  tuiInjectAuxiliary,
  TUI_TEXTFIELD_CONTENT,
  tuiAsTextfieldContent,
  TuiTextfieldContent,
  TuiWithNativePicker
};
//# sourceMappingURL=chunk-FTQVBIKW.js.map
