import {
  TuiLink
} from "./chunk-SRQCPCVA.js";
import {
  TUI_ITEMS_HANDLERS
} from "./chunk-NXUJANSI.js";
import {
  TuiButton
} from "./chunk-ZV5BAXQN.js";
import {
  TUI_COMMON_ICONS,
  TUI_MONTHS,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_TEXTS,
  TuiScrollIntoView,
  TuiScrollbar,
  tuiAsAuxiliary
} from "./chunk-SZ2IDNEI.js";
import {
  DAYS_IN_WEEK,
  MAX_YEAR,
  MIN_YEAR,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TUI_LAST_DISPLAYED_DAY,
  TuiDay,
  TuiDayOfWeek,
  TuiDayRange,
  TuiMapperPipe,
  TuiMonth,
  TuiMonthRange,
  TuiYear
} from "./chunk-EXOA3C32.js";
import {
  TuiHovered
} from "./chunk-7KPWPOU4.js";
import {
  TUI_FALSE_HANDLER,
  tuiCreateOptions,
  tuiInRange,
  tuiIsNumber,
  tuiNullableSame
} from "./chunk-YH3GNO5H.js";
import {
  AsyncPipe
} from "./chunk-WBUXHXP6.js";
import {
  ChangeDetectionStrategy,
  Component,
  Pipe,
  input,
  model,
  output,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UWXEFF5S.js";
import {
  toObservable
} from "./chunk-ETGSZUYA.js";
import {
  computed,
  effect,
  inject,
  linkedSignal,
  signal,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-6UR4NGDW.js";
import {
  map
} from "./chunk-3NTDFDXB.js";

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-spin-button.mjs
var _c0 = ["*"];
function TuiSpinButton_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 0);
    ɵɵlistener("click", function TuiSpinButton_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeftClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 1);
    ɵɵprojection(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 2);
    ɵɵlistener("click", function TuiSpinButton_Conditional_0_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRightClick());
    });
    ɵɵtext(5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const texts_r3 = ctx;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-button_hidden", ctx_r1.disabled() || ctx_r1.leftDisabled());
    ɵɵproperty("iconStart", ctx_r1.icons.decrement)("tabIndex", ctx_r1.focusable() ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[0], " ");
    ɵɵadvance(3);
    ɵɵclassProp("t-button_hidden", ctx_r1.disabled() || ctx_r1.rightDisabled());
    ɵɵproperty("iconStart", ctx_r1.icons.increment)("tabIndex", ctx_r1.focusable() ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[1], " ");
  }
}
var TuiSpinButton = class _TuiSpinButton {
  constructor() {
    this.icons = inject(TUI_COMMON_ICONS);
    this.spinTexts = inject(TUI_SPIN_TEXTS);
    this.focusable = input(true);
    this.disabled = input(false);
    this.leftDisabled = input(false);
    this.rightDisabled = input(false);
    this.leftClick = output();
    this.rightClick = output();
  }
  onLeftClick() {
    if (!this.disabled() && !this.leftDisabled()) {
      this.leftClick.emit();
    }
  }
  onRightClick() {
    if (!this.disabled() && !this.rightDisabled()) {
      this.rightClick.emit();
    }
  }
  static {
    this.ɵfac = function TuiSpinButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSpinButton)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSpinButton,
      selectors: [["tui-spin-button"]],
      hostBindings: function TuiSpinButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft.prevent", function TuiSpinButton_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.onLeftClick();
          })("keydown.arrowRight.prevent", function TuiSpinButton_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.onRightClick();
          })("mousedown.zoneless.prevent", function TuiSpinButton_mousedown_zoneless_prevent_HostBindingHandler() {
            return 0;
          });
        }
      },
      inputs: {
        focusable: [1, "focusable"],
        disabled: [1, "disabled"],
        leftDisabled: [1, "leftDisabled"],
        rightDisabled: [1, "rightDisabled"]
      },
      outputs: {
        leftClick: "leftClick",
        rightClick: "rightClick"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [["appearance", "flat", "automation-id", "tui-spin-button__left", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart", "tabIndex"], [1, "t-content", "t-calendar-title"], ["appearance", "flat", "automation-id", "tui-spin-button__right", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart", "tabIndex"]],
      template: function TuiSpinButton_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, TuiSpinButton_Conditional_0_Template, 6, 10);
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ctx.spinTexts()) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [TuiButton],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;font:var(--tui-typography-body-l);text-align:center;font-weight:700}.t-button[_ngcontent-%COMP%]{transform:scaleX(var(--tui-inline))}.t-button_hidden[_ngcontent-%COMP%]{visibility:hidden}.t-content[_ngcontent-%COMP%]{padding:0 .5rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSpinButton, [{
    type: Component,
    args: [{
      selector: "tui-spin-button",
      imports: [TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(keydown.arrowLeft.prevent)": "onLeftClick()",
        "(keydown.arrowRight.prevent)": "onRightClick()",
        "(mousedown.zoneless.prevent)": "(0)"
      },
      template: '@if (spinTexts(); as texts) {\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__left"\n        size="xs"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [class.t-button_hidden]="disabled() || leftDisabled()"\n        [iconStart]="icons.decrement"\n        [tabIndex]="focusable() ? 0 : -1"\n        (click)="onLeftClick()"\n    >\n        {{ texts[0] }}\n    </button>\n    <span class="t-content t-calendar-title">\n        <ng-content />\n    </span>\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__right"\n        size="xs"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [class.t-button_hidden]="disabled() || rightDisabled()"\n        [iconStart]="icons.increment"\n        [tabIndex]="focusable() ? 0 : -1"\n        (click)="onRightClick()"\n    >\n        {{ texts[1] }}\n    </button>\n}\n',
      styles: [":host{display:flex;align-items:center;justify-content:space-between;font:var(--tui-typography-body-l);text-align:center;font-weight:700}.t-button{transform:scaleX(var(--tui-inline))}.t-button_hidden{visibility:hidden}.t-content{padding:0 .5rem}\n"]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-calendar.mjs
var _c02 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function TuiCalendarSheet_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵɵproperty("textContent", day_r1);
  }
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
  if (rf & 2) {
    const markers_r5 = ɵɵnextContext();
    ɵɵstyleProp("background", (markers_r5 == null ? null : markers_r5[1]) || "");
  }
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "div", 6);
    ɵɵconditionalCreate(2, TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Conditional_2_Template, 1, 2, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const markers_r5 = ctx;
    ɵɵadvance();
    ɵɵstyleProp("background", markers_r5 == null ? null : markers_r5[0]);
    ɵɵadvance();
    ɵɵconditional(markers_r5.length > 1 ? 2 : -1);
  }
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵpipe(1, "tuiMapper");
    ɵɵlistener("click", function TuiCalendarSheet_For_9_For_3_Conditional_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      ɵɵnextContext();
      const item_r3 = ɵɵreadContextLet(0);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.dayClick.emit(item_r3));
    })("tuiHoveredChange", function TuiCalendarSheet_For_9_For_3_Conditional_1_Template_div_tuiHoveredChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      ɵɵnextContext();
      const item_r3 = ɵɵreadContextLet(0);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onItemHovered($event && item_r3));
    });
    ɵɵtext(2);
    ɵɵconditionalCreate(3, TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Template, 3, 3, "div", 5);
    ɵɵpipe(4, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_30_0;
    ɵɵnextContext();
    const item_r3 = ɵɵreadContextLet(0);
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("t-cell_disabled", ctx_r3.disabledItemHandler()(item_r3))("t-cell_today", ctx_r3.itemIsToday(item_r3))("t-cell_unavailable", ctx_r3.itemIsUnavailable(item_r3));
    ɵɵattribute("data-range", ctx_r3.getItemRange(item_r3))("data-type", ɵɵpipeBind2(1, 10, item_r3, ctx_r3.dayType));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r3.day, " ");
    ɵɵadvance();
    ɵɵconditional((tmp_30_0 = ɵɵpipeBindV(4, 13, ɵɵpureFunction5(19, _c02, item_r3, ctx_r3.toMarkers, ctx_r3.itemIsToday(item_r3), ctx_r3.getItemRange(item_r3), ctx_r3.markerHandler()))) ? 3 : -1, tmp_30_0);
  }
}
function TuiCalendarSheet_For_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵconditionalCreate(1, TuiCalendarSheet_For_9_For_3_Conditional_1_Template, 5, 25, "div", 3);
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    ɵɵnextContext();
    const rowIndex_r7 = ɵɵreadContextLet(0);
    const ctx_r3 = ɵɵnextContext();
    const sheet_r8 = ɵɵreadContextLet(5);
    const item_r9 = ɵɵstoreLet(sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7][$index_r6]);
    ɵɵadvance();
    ɵɵconditional(item_r9 && (!ctx_r3.itemIsUnavailable(item_r9) || ctx_r3.showAdjacent()) ? 1 : -1);
  }
}
function TuiCalendarSheet_For_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵrepeaterCreate(2, TuiCalendarSheet_For_9_For_3_Template, 2, 2, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r10 = ctx.$index;
    ɵɵnextContext();
    const sheet_r8 = ɵɵreadContextLet(5);
    const rowIndex_r11 = ɵɵstoreLet($index_r10);
    ɵɵadvance(2);
    ɵɵrepeater("-".repeat((sheet_r8[rowIndex_r11] == null ? null : sheet_r8[rowIndex_r11].length) ?? 0));
  }
}
function TuiCalendarSpin_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.value().formattedYear, " ");
  }
}
function TuiCalendarSpin_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function TuiCalendarSpin_Conditional_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.yearClick.emit(ctx_r0.value()));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.value().formattedYear, " ");
  }
}
function TuiCalendarYear_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("click", function TuiCalendarYear_For_1_For_3_Template_div_click_1_listener() {
      ɵɵrestoreView(_r1);
      const item_r2 = ɵɵreadContextLet(0);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.yearClick.emit(item_r2));
    })("tuiHoveredChange", function TuiCalendarYear_For_1_For_3_Template_div_tuiHoveredChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const item_r2 = ɵɵreadContextLet(0);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onItemHovered($event, item_r2));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    ɵɵnextContext();
    const rowIndex_r5 = ɵɵreadContextLet(0);
    const ctx_r2 = ɵɵnextContext();
    const item_r6 = ɵɵstoreLet(ctx_r2.getItem(rowIndex_r5, $index_r4));
    ɵɵadvance();
    ɵɵclassProp("t-cell_disabled", ctx_r2.isDisabled(item_r6))("t-cell_today", ctx_r2.itemIsToday(item_r6));
    ɵɵproperty("tuiScrollIntoView", ctx_r2.scrollItemIntoView(item_r6));
    ɵɵattribute("data-range", ctx_r2.getItemRange(item_r6));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r6, " ");
  }
}
function TuiCalendarYear_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 0);
    ɵɵrepeaterCreate(2, TuiCalendarYear_For_1_For_3_Template, 3, 8, "div", 1, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r7 = ctx.$index;
    ɵɵstoreLet($index_r7);
    ɵɵadvance(2);
    ɵɵrepeater("-".repeat(4));
  }
}
function TuiCalendar_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 0)(1, "tui-calendar-year", 1);
    ɵɵlistener("yearClick", function TuiCalendar_Conditional_0_Template_tui_calendar_year_yearClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("initialItem", ctx_r1.month().year)("max", ctx_r1.max().year)("min", ctx_r1.min().year)("rangeMode", ctx_r1.options.rangeMode)("value", ctx_r1.value());
  }
}
function TuiCalendar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar-spin", 2);
    ɵɵlistener("valueChange", function TuiCalendar_Conditional_1_Template_tui_calendar_spin_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaginationValueChange($event));
    })("yearClick", function TuiCalendar_Conditional_1_Template_tui_calendar_spin_yearClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.view.set("year"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "tui-calendar-sheet", 3);
    ɵɵpipe(2, "tuiMapper");
    ɵɵlistener("dayClick", function TuiCalendar_Conditional_1_Template_tui_calendar_sheet_dayClick_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDayClick($event));
    })("hoveredItemChange", function TuiCalendar_Conditional_1_Template_tui_calendar_sheet_hoveredItemChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onHoveredItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("max", ctx_r1.computedMaxViewedMonth())("min", ctx_r1.computedMinViewedMonth())("value", ctx_r1.month());
    ɵɵadvance();
    ɵɵproperty("disabledItemHandler", ɵɵpipeBind4(2, 9, ctx_r1.disabledItemHandler(), ctx_r1.disabledItemHandlerMapper, ctx_r1.min(), ctx_r1.max()))("hoveredItem", ctx_r1.hoveredItem())("markerHandler", ctx_r1.markerHandler())("month", ctx_r1.month())("showAdjacent", ctx_r1.showAdjacent())("value", ctx_r1.value());
  }
}
var TUI_CALENDAR_DEFAULT_OPTIONS = {
  dayType: (day) => day.isWeekend ? "weekend" : "weekday",
  weekStart: signal(TuiDayOfWeek.Monday)
};
var [TUI_CALENDAR_OPTIONS, tuiCalendarOptionsProvider] = tuiCreateOptions(TUI_CALENDAR_DEFAULT_OPTIONS);
var TUI_CALENDAR_SHEET_DEFAULT_OPTIONS = {
  rangeMode: false
};
var [TUI_CALENDAR_SHEET_OPTIONS, tuiCalendarSheetOptionsProvider] = tuiCreateOptions(TUI_CALENDAR_SHEET_DEFAULT_OPTIONS);
var CALENDAR_ROWS_COUNT = 6;
var TuiCalendarSheetPipe = class _TuiCalendarSheetPipe {
  constructor() {
    this.options = inject(TUI_CALENDAR_OPTIONS);
    this.currentMonth = null;
    this.currentSheet = [];
  }
  transform(month, showAdjacentDays = false) {
    if (this.currentMonth?.monthSame(month)) {
      return this.currentSheet;
    }
    const sheet = [];
    for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
        const day = getDayFromMonthRowCol({
          month,
          rowIndex,
          colIndex,
          firstDayOfWeek: this.options.weekStart()
        });
        const isPrevMonthDay = (day2, relativeToMonth = month) => day2.year < relativeToMonth.year || day2.month < relativeToMonth.month;
        const isNextMonthDay = (day2, relativeToMonth = month) => day2.year > relativeToMonth.year || day2.month > relativeToMonth.month;
        if (isPrevMonthDay(day) && !showAdjacentDays) {
          continue;
        }
        if (isNextMonthDay(day) && !showAdjacentDays) {
          break;
        }
        row.push(day);
      }
      sheet.push(row);
    }
    this.currentSheet = sheet.filter((row) => row.length);
    this.currentMonth = month;
    return this.currentSheet;
  }
  static {
    this.ɵfac = function TuiCalendarSheetPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheetPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiCalendarSheet",
      type: _TuiCalendarSheetPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheetPipe, [{
    type: Pipe,
    args: [{
      name: "tuiCalendarSheet"
    }]
  }], null, null);
})();
function getMonthStartDaysOffset(month, firstDayOfWeek) {
  const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
  return startMonthOffsetFromSunday >= firstDayOfWeek ? startMonthOffsetFromSunday - firstDayOfWeek : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
}
function getDayFromMonthRowCol({
  month,
  rowIndex,
  colIndex,
  firstDayOfWeek
}) {
  ngDevMode && console.assert(Number.isInteger(rowIndex));
  ngDevMode && console.assert(tuiInRange(rowIndex, 0, 6));
  ngDevMode && console.assert(Number.isInteger(colIndex));
  ngDevMode && console.assert(tuiInRange(colIndex, 0, DAYS_IN_WEEK));
  let day = rowIndex * DAYS_IN_WEEK + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;
  if (day > month.daysCount) {
    day -= month.daysCount;
    month = month.append({
      month: 1
    });
  }
  if (day <= 0) {
    month = month.append({
      month: -1
    });
    day = month.daysCount + day;
  }
  return new TuiDay(month.year, month.month, day);
}
function convertToSundayFirstWeekFormat(weekDaysNames) {
  const sundayIndex = weekDaysNames.length - 1;
  return [weekDaysNames[sundayIndex] || "", ...weekDaysNames.slice(0, sundayIndex)];
}
var TuiOrderWeekDaysPipe = class _TuiOrderWeekDaysPipe {
  constructor() {
    this.options = inject(TUI_CALENDAR_OPTIONS);
  }
  transform(mondayFirstWeekDays$) {
    return mondayFirstWeekDays$.pipe(map(convertToSundayFirstWeekFormat), map((weekDays) => [...weekDays.slice(this.options.weekStart()), ...weekDays.slice(0, this.options.weekStart())]));
  }
  static {
    this.ɵfac = function TuiOrderWeekDaysPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOrderWeekDaysPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiOrderWeekDays",
      type: _TuiOrderWeekDaysPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOrderWeekDaysPipe, [{
    type: Pipe,
    args: [{
      name: "tuiOrderWeekDays"
    }]
  }], null, null);
})();
var TuiCalendarSheet = class _TuiCalendarSheet {
  constructor() {
    this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    this.today = TuiDay.currentLocal();
    this.unorderedWeekDays$ = toObservable(inject(TUI_SHORT_WEEK_DAYS));
    this.dayType = inject(TUI_CALENDAR_OPTIONS).dayType;
    this.month = input(TuiMonth.currentLocal());
    this.disabledItemHandler = input(TUI_FALSE_HANDLER);
    this.markerHandler = input(null);
    this.value = input(null);
    this.showAdjacent = input(true);
    this.hoveredItem = model(null);
    this.dayClick = output();
    this.toMarkers = (day, today, range, markerHandler) => {
      if (today || ["active", "end", "start"].includes(range || "")) {
        return null;
      }
      const markers = markerHandler?.(day);
      return markers?.length ? markers : null;
    };
  }
  onItemHovered(item) {
    this.updateHoveredItem(item || null);
  }
  getItemRange(item) {
    const value = this.value();
    if (!value) {
      return null;
    }
    if (value instanceof TuiDay && !this.computedRangeMode) {
      return value.daySame(item) ? "active" : null;
    }
    if (value instanceof TuiDayRange && value.isSingleDay) {
      return value.from.daySame(item) ? "active" : null;
    }
    if (!(value instanceof TuiDay) && !(value instanceof TuiDayRange)) {
      return value.find((day) => day.daySame(item)) ? "active" : null;
    }
    const range = this.getRange(value, this.hoveredItem());
    if (range.isSingleDay && range.from.daySame(item)) {
      return "active";
    }
    if (range.from.daySame(item)) {
      return "start";
    }
    if (range.to.daySame(item)) {
      return "end";
    }
    return range.from.dayBefore(item) && range.to.dayAfter(item) ? "middle" : null;
  }
  get computedRangeMode() {
    return this.options.rangeMode;
  }
  get isRangePicking() {
    return this.options.rangeMode && this.value() instanceof TuiDay;
  }
  itemIsToday(item) {
    return this.today.daySame(item);
  }
  itemIsUnavailable(item) {
    return !this.month().monthSame(item);
  }
  getRange(value, hoveredItem) {
    if (value instanceof TuiDay) {
      return TuiDayRange.sort(value, hoveredItem ?? value);
    }
    return value.isSingleDay ? TuiDayRange.sort(value.from, hoveredItem ?? value.to) : value;
  }
  updateHoveredItem(day) {
    if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem.set(day);
  }
  static {
    this.ɵfac = function TuiCalendarSheet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheet)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSheet,
      selectors: [["tui-calendar-sheet"]],
      hostVars: 2,
      hostBindings: function TuiCalendarSheet_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking);
        }
      },
      inputs: {
        month: [1, "month"],
        disabledItemHandler: [1, "disabledItemHandler"],
        markerHandler: [1, "markerHandler"],
        value: [1, "value"],
        showAdjacent: [1, "showAdjacent"],
        hoveredItem: [1, "hoveredItem"]
      },
      outputs: {
        hoveredItem: "hoveredItemChange",
        dayClick: "dayClick"
      },
      decls: 10,
      vars: 8,
      consts: [[1, "t-row", "t-row_weekday"], [1, "t-cell", 3, "textContent"], ["automation-id", "tui-calendar-sheet__row", 1, "t-row"], ["automation-id", "tui-calendar-sheet__cell", 1, "t-cell", 3, "t-cell_disabled", "t-cell_today", "t-cell_unavailable"], ["automation-id", "tui-calendar-sheet__cell", 1, "t-cell", 3, "click", "tuiHoveredChange"], [1, "t-dots"], [1, "t-dot"], [1, "t-dot", 3, "background"]],
      template: function TuiCalendarSheet_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵrepeaterCreate(1, TuiCalendarSheet_For_2_Template, 1, 1, "div", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵpipe(3, "tuiOrderWeekDays");
          ɵɵpipe(4, "async");
          ɵɵelementEnd();
          ɵɵdeclareLet(5);
          ɵɵpipe(6, "tuiCalendarSheet");
          ɵɵelementStart(7, "div");
          ɵɵrepeaterCreate(8, TuiCalendarSheet_For_9_Template, 4, 1, "div", 2, ɵɵrepeaterTrackByIndex);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵrepeater(ɵɵpipeBind1(4, 2, ɵɵpipeBind1(3, 0, ctx.unorderedWeekDays$)));
          ɵɵadvance(4);
          const sheet_r12 = ɵɵstoreLet(ɵɵpipeBind2(6, 4, ctx.month(), true));
          ɵɵadvance(3);
          ɵɵrepeater("-".repeat(sheet_r12.length));
        }
      },
      dependencies: [AsyncPipe, TuiCalendarSheetPipe, TuiHovered, TuiMapperPipe, TuiOrderWeekDaysPipe],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell[_ngcontent-%COMP%]{inline-size:calc(100% / 7)}[data-type=weekday][_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-type=weekend][_ngcontent-%COMP%]{color:var(--tui-text-negative)}.t-row[_ngcontent-%COMP%]{justify-content:flex-start}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row_weekday[_ngcontent-%COMP%]{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-dots[_ngcontent-%COMP%]{position:absolute;display:flex;inset-block-end:0;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot[_ngcontent-%COMP%]{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}`]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheet, [{
    type: Component,
    args: [{
      selector: "tui-calendar-sheet",
      imports: [AsyncPipe, TuiCalendarSheetPipe, TuiHovered, TuiMapperPipe, TuiOrderWeekDaysPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isRangePicking"
      },
      template: `<div class="t-row t-row_weekday">
    @for (day of unorderedWeekDays$ | tuiOrderWeekDays | async; track day) {
        <div
            class="t-cell"
            [textContent]="day"
        ></div>
    }
</div>
@let sheet = month() | tuiCalendarSheet: true;
<div>
    @for (_ of '-'.repeat(sheet.length); track $index) {
        @let rowIndex = $index;
        <div
            automation-id="tui-calendar-sheet__row"
            class="t-row"
        >
            @for (_ of '-'.repeat(sheet[rowIndex]?.length ?? 0); track $index) {
                @let item = sheet[rowIndex]?.[$index];
                @if (item && (!itemIsUnavailable(item) || showAdjacent())) {
                    <div
                        automation-id="tui-calendar-sheet__cell"
                        class="t-cell"
                        [attr.data-range]="getItemRange(item)"
                        [attr.data-type]="item | tuiMapper: dayType"
                        [class.t-cell_disabled]="disabledItemHandler()(item)"
                        [class.t-cell_today]="itemIsToday(item)"
                        [class.t-cell_unavailable]="itemIsUnavailable(item)"
                        (click)="dayClick.emit(item)"
                        (tuiHoveredChange)="onItemHovered($event && item)"
                    >
                        {{ item.day }}
                        @if (
                            item | tuiMapper: toMarkers : itemIsToday(item) : getItemRange(item) : markerHandler();
                            as markers
                        ) {
                            <div class="t-dots">
                                <div
                                    class="t-dot"
                                    [style.background]="markers?.[0]"
                                ></div>
                                @if (markers.length > 1) {
                                    <div
                                        class="t-dot"
                                        [style.background]="markers?.[1] || ''"
                                    ></div>
                                }
                            </div>
                        }
                    </div>
                }
            }
        </div>
    }
</div>
`,
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell{inline-size:calc(100% / 7)}[data-type=weekday]{color:var(--tui-text-primary)}[data-type=weekend]{color:var(--tui-text-negative)}.t-row{justify-content:flex-start}.t-row:first-child{justify-content:flex-end}.t-row_weekday{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable{opacity:var(--tui-disabled-opacity)}.t-dots{position:absolute;display:flex;inset-block-end:0;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}
`]
    }]
  }], null, null);
})();
var TuiCalendarSpin = class _TuiCalendarSpin {
  constructor() {
    this.months = inject(TUI_MONTHS);
    this.value = model(TuiMonth.currentLocal());
    this.min = input(TUI_FIRST_DAY);
    this.max = input(TUI_LAST_DAY);
    this.yearClick = output();
  }
  append(date) {
    const value = this.value().append(date);
    const min = this.min();
    const max = this.max();
    if (min.monthSameOrAfter(value)) {
      this.updateValue(min);
    } else {
      this.updateValue(max.monthSameOrBefore(value) ? max : value);
    }
  }
  updateValue(value) {
    if (this.value().monthSame(value)) {
      return;
    }
    this.value.set(value);
  }
  static {
    this.ɵfac = function TuiCalendarSpin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSpin)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSpin,
      selectors: [["tui-calendar-spin"]],
      inputs: {
        value: [1, "value"],
        min: [1, "min"],
        max: [1, "max"]
      },
      outputs: {
        value: "valueChange",
        yearClick: "yearClick"
      },
      decls: 4,
      vars: 5,
      consts: [[3, "leftClick", "rightClick", "focusable", "leftDisabled", "rightDisabled"], ["tabIndex", "-1", "tuiLink", "", "type", "button"], ["tabIndex", "-1", "tuiLink", "", "type", "button", 3, "click"]],
      template: function TuiCalendarSpin_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-spin-button", 0);
          ɵɵlistener("leftClick", function TuiCalendarSpin_Template_tui_spin_button_leftClick_0_listener() {
            return ctx.append({
              month: -1
            });
          })("rightClick", function TuiCalendarSpin_Template_tui_spin_button_rightClick_0_listener() {
            return ctx.append({
              month: 1
            });
          });
          ɵɵtext(1);
          ɵɵconditionalCreate(2, TuiCalendarSpin_Conditional_2_Template, 1, 1)(3, TuiCalendarSpin_Conditional_3_Template, 2, 1, "button", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("focusable", false)("leftDisabled", ctx.value().monthSameOrBefore(ctx.min()))("rightDisabled", ctx.value().monthSameOrAfter(ctx.max()));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.months()[ctx.value().month], " ");
          ɵɵadvance();
          ɵɵconditional(ctx.min().year === ctx.max().year ? 2 : 3);
        }
      },
      dependencies: [TuiLink, TuiSpinButton],
      styles: ["[_nghost-%COMP%]{display:block}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSpin, [{
    type: Component,
    args: [{
      selector: "tui-calendar-spin",
      imports: [TuiLink, TuiSpinButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<tui-spin-button\n    [focusable]="false"\n    [leftDisabled]="value().monthSameOrBefore(min())"\n    [rightDisabled]="value().monthSameOrAfter(max())"\n    (leftClick)="append({month: -1})"\n    (rightClick)="append({month: 1})"\n>\n    {{ months()[value().month] }}\n    @if (min().year === max().year) {\n        {{ value().formattedYear }}\n    } @else {\n        <button\n            tabIndex="-1"\n            tuiLink\n            type="button"\n            (click)="yearClick.emit(value())"\n        >\n            {{ value().formattedYear }}\n        </button>\n    }\n</tui-spin-button>\n',
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var LIMIT = 100;
var ITEMS_IN_ROW = 4;
var CURRENT_YEAR = TuiMonth.currentLocal().year;
var TuiCalendarYear = class _TuiCalendarYear {
  constructor() {
    this.hoveredItem = signal(null);
    this.calculatedMin = computed(() => {
      const initial = this.initialItem() - LIMIT;
      const min = this.min() ?? MIN_YEAR;
      return min > initial ? min : initial;
    });
    this.calculatedMax = computed(() => {
      const initial = this.initialItem() + LIMIT;
      const max = this.max() ?? MAX_YEAR;
      return max < initial ? max + 1 : initial;
    });
    this.isRangePicking = computed((x = this.value()) => this.rangeMode() && (x instanceof TuiDay || x instanceof TuiMonth));
    this.rows = computed(() => Math.ceil((this.calculatedMax() - this.calculatedMin()) / ITEMS_IN_ROW));
    this.rangeMode = input(false);
    this.disabledItemHandler = input(inject(TUI_ITEMS_HANDLERS).disabledItemHandler());
    this.value = input(null);
    this.min = input(MIN_YEAR, {
      transform: (x) => x ?? MIN_YEAR
    });
    this.max = input(MAX_YEAR, {
      transform: (x) => x ?? MAX_YEAR
    });
    this.initialItem = input(CURRENT_YEAR, {
      transform: (x) => x ?? CURRENT_YEAR
    });
    this.yearClick = output();
  }
  isDisabled(item) {
    return this.max() && this.max() < item || this.min() && this.min() > item || this.disabledItemHandler()(item);
  }
  getItemRange(item) {
    const value = this.value();
    const hoveredItem = this.hoveredItem();
    if (value instanceof TuiYear && value.year === item) {
      return "active";
    }
    if (tuiIsNumber(value)) {
      return value === item ? "active" : null;
    }
    if (!(value instanceof TuiMonthRange) && !(value instanceof TuiYear)) {
      return value?.find((day) => day.year === item) ? "active" : null;
    }
    const hovered = this.isRangePicking() ? hoveredItem : null;
    const from = "from" in value ? value.from?.year : value.year;
    const to = "from" in value ? value.to.year : value.year;
    const min = Math.min(from, hovered ?? to);
    const max = Math.max(from, hovered ?? to);
    if (min === max && from === to && from === item) {
      return "active";
    }
    if (min === item) {
      return "start";
    }
    if (max === item) {
      return "end";
    }
    return min < item && item < max ? "middle" : null;
  }
  onItemHovered(hovered, item) {
    this.hoveredItem.set(hovered ? item : null);
  }
  scrollItemIntoView(item) {
    return this.initialItem() === item;
  }
  getItem(rowIndex, colIndex) {
    return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin();
  }
  itemIsToday(item) {
    return CURRENT_YEAR === item;
  }
  static {
    this.ɵfac = function TuiCalendarYear_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarYear)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarYear,
      selectors: [["tui-calendar-year"]],
      hostVars: 2,
      hostBindings: function TuiCalendarYear_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking());
        }
      },
      inputs: {
        rangeMode: [1, "rangeMode"],
        disabledItemHandler: [1, "disabledItemHandler"],
        value: [1, "value"],
        min: [1, "min"],
        max: [1, "max"],
        initialItem: [1, "initialItem"]
      },
      outputs: {
        yearClick: "yearClick"
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiCalendarYear)])],
      decls: 2,
      vars: 0,
      consts: [["automation-id", "tui-calendar-year__row", 1, "t-row"], ["automation-id", "tui-calendar-year__cell", 1, "t-cell", 3, "t-cell_disabled", "t-cell_today", "tuiScrollIntoView"], ["automation-id", "tui-calendar-year__cell", 1, "t-cell", 3, "click", "tuiHoveredChange", "tuiScrollIntoView"]],
      template: function TuiCalendarYear_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, TuiCalendarYear_For_1_Template, 4, 1, "div", 0, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵrepeater("-".repeat(ctx.rows()));
        }
      },
      dependencies: [TuiHovered, TuiScrollIntoView],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell[_ngcontent-%COMP%]{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}`]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarYear, [{
    type: Component,
    args: [{
      selector: "tui-calendar-year",
      imports: [TuiHovered, TuiScrollIntoView],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiCalendarYear)],
      host: {
        "[class._picking]": "isRangePicking()"
      },
      template: `@for (_ of '-'.repeat(rows()); track $index) {
    @let rowIndex = $index;
    <div
        automation-id="tui-calendar-year__row"
        class="t-row"
    >
        @for (_ of '-'.repeat(4); track $index) {
            @let item = getItem(rowIndex, $index);
            <div
                automation-id="tui-calendar-year__cell"
                class="t-cell"
                [attr.data-range]="getItemRange(item)"
                [class.t-cell_disabled]="isDisabled(item)"
                [class.t-cell_today]="itemIsToday(item)"
                [tuiScrollIntoView]="scrollItemIntoView(item)"
                (click)="yearClick.emit(item)"
                (tuiHoveredChange)="onItemHovered($event, item)"
            >
                {{ item }}
            </div>
        }
    </div>
}
`,
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media(hover:hover)and (pointer:fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}
`]
    }]
  }], null, null);
})();
var TuiCalendar = class _TuiCalendar {
  constructor() {
    this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    this.disabledItemHandler = input(inject(TUI_ITEMS_HANDLERS).disabledItemHandler());
    this.min = input(TUI_FIRST_DAY, {
      transform: (x) => x ?? TUI_FIRST_DAY
    });
    this.max = input(TUI_LAST_DAY, {
      transform: (x) => x ?? TUI_LAST_DAY
    });
    this.minViewedMonth = input(TUI_FIRST_DAY);
    this.maxViewedMonth = input(TUI_LAST_DAY);
    this.showAdjacent = input(true);
    this.markerHandler = input(null);
    this.initialView = input("month");
    this.month = model(TuiMonth.currentLocal());
    this.hoveredItem = model(null);
    this.value = model(null);
    this.dayClick = output();
    this.computedMinViewedMonth = computed(() => {
      const min = this.min();
      const minViewed = this.minViewedMonth() ?? TUI_FIRST_DAY;
      return minViewed.monthSameOrAfter(min) ? minViewed : min;
    });
    this.computedMaxViewedMonth = computed(() => {
      const max = this.max();
      const maxViewed = this.maxViewedMonth() ?? TUI_LAST_DAY;
      return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
    });
    this.view = linkedSignal(() => this.initialView());
    this.syncMonthFromValue = effect(() => {
      const value = this.value();
      if (this.showAdjacent() && value instanceof TuiDay && value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)) {
        this.month.set(value);
      }
    });
    this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
  }
  onPaginationValueChange(month) {
    this.updateViewedMonth(month);
  }
  onDayClick(day) {
    this.dayClick.emit(day);
    this.value.set(day);
  }
  onHoveredItemChange(day) {
    this.updateHoveredDay(day);
  }
  onPickerYearClick(year) {
    this.view.set("month");
    this.updateViewedMonth(new TuiMonth(year, this.month().month));
  }
  updateViewedMonth(month) {
    if (this.month().monthSame(month)) {
      return;
    }
    this.month.set(month);
  }
  updateHoveredDay(day) {
    if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem.set(day);
  }
  static {
    this.ɵfac = function TuiCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendar,
      selectors: [["tui-calendar"]],
      hostBindings: function TuiCalendar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.prevent.zoneless", function TuiCalendar_pointerdown_prevent_zoneless_HostBindingHandler() {
            return 0;
          });
        }
      },
      inputs: {
        disabledItemHandler: [1, "disabledItemHandler"],
        min: [1, "min"],
        max: [1, "max"],
        minViewedMonth: [1, "minViewedMonth"],
        maxViewedMonth: [1, "maxViewedMonth"],
        showAdjacent: [1, "showAdjacent"],
        markerHandler: [1, "markerHandler"],
        initialView: [1, "initialView"],
        month: [1, "month"],
        hoveredItem: [1, "hoveredItem"],
        value: [1, "value"]
      },
      outputs: {
        month: "monthChange",
        hoveredItem: "hoveredItemChange",
        value: "valueChange",
        dayClick: "dayClick"
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiCalendar)])],
      decls: 2,
      vars: 1,
      consts: [["automation-id", "tui-calendar__scrollbar", 1, "t-scrollbar"], ["automation-id", "tui-calendar__year", 3, "yearClick", "initialItem", "max", "min", "rangeMode", "value"], ["automation-id", "tui-calendar__pagination", 1, "t-pagination", 3, "valueChange", "yearClick", "max", "min", "value"], ["automation-id", "tui-calendar__calendar", 3, "dayClick", "hoveredItemChange", "disabledItemHandler", "hoveredItem", "markerHandler", "month", "showAdjacent", "value"]],
      template: function TuiCalendar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiCalendar_Conditional_0_Template, 2, 5, "tui-scrollbar", 0)(1, TuiCalendar_Conditional_1_Template, 3, 14);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.view() === "year" ? 0 : 1);
        }
      },
      dependencies: [TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}tui-sheet-dialog[_nghost-%COMP%], tui-sheet-dialog   [_nghost-%COMP%]{inline-size:100%}tui-calendar-year[_ngcontent-%COMP%]{padding:0}.t-scrollbar[_ngcontent-%COMP%]{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination[_ngcontent-%COMP%]{margin-block-end:1rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendar, [{
    type: Component,
    args: [{
      selector: "tui-calendar",
      imports: [TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiCalendar)],
      host: {
        "(pointerdown.prevent.zoneless)": "0"
      },
      template: `@if (view() === 'year') {
    <tui-scrollbar
        automation-id="tui-calendar__scrollbar"
        class="t-scrollbar"
    >
        <tui-calendar-year
            automation-id="tui-calendar__year"
            [initialItem]="month().year"
            [max]="max().year"
            [min]="min().year"
            [rangeMode]="options.rangeMode"
            [value]="value()"
            (yearClick)="onPickerYearClick($event)"
        />
    </tui-scrollbar>
} @else {
    <tui-calendar-spin
        automation-id="tui-calendar__pagination"
        class="t-pagination"
        [max]="computedMaxViewedMonth()"
        [min]="computedMinViewedMonth()"
        [value]="month()"
        (valueChange)="onPaginationValueChange($event)"
        (yearClick)="view.set('year')"
    />
    <tui-calendar-sheet
        automation-id="tui-calendar__calendar"
        [disabledItemHandler]="disabledItemHandler() | tuiMapper: disabledItemHandlerMapper : min() : max()"
        [hoveredItem]="hoveredItem()"
        [markerHandler]="markerHandler()"
        [month]="month()"
        [showAdjacent]="showAdjacent()"
        [value]="value()"
        (dayClick)="onDayClick($event)"
        (hoveredItemChange)="onHoveredItemChange($event)"
    />
}
`,
      styles: [":host{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}:host-context(tui-sheet-dialog){inline-size:100%}tui-calendar-year{padding:0}.t-scrollbar{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination{margin-block-end:1rem}\n"]
    }]
  }], null, null);
})();

export {
  TuiSpinButton,
  TUI_CALENDAR_DEFAULT_OPTIONS,
  TUI_CALENDAR_OPTIONS,
  tuiCalendarOptionsProvider,
  TUI_CALENDAR_SHEET_DEFAULT_OPTIONS,
  TUI_CALENDAR_SHEET_OPTIONS,
  tuiCalendarSheetOptionsProvider,
  TuiCalendarSheetPipe,
  TuiOrderWeekDaysPipe,
  TuiCalendarSheet,
  TuiCalendarSpin,
  TuiCalendarYear,
  TuiCalendar
};
//# sourceMappingURL=chunk-QBKHR5EK.js.map
