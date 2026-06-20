import {
  FormArray,
  FormGroup
} from "./chunk-XHNSMQQ5.js";
import {
  isPlatformBrowser
} from "./chunk-WBUXHXP6.js";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  ViewContainerRef,
  afterNextRender,
  createComponent,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-UWXEFF5S.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-ETGSZUYA.js";
import {
  DOCUMENT,
  DestroyRef,
  EnvironmentInjector,
  INJECTOR$1,
  InjectionToken,
  NgZone,
  PLATFORM_ID,
  SIGNAL,
  effect,
  inject,
  isSignal,
  signal,
  untracked
} from "./chunk-6UR4NGDW.js";
import {
  EMPTY,
  NEVER,
  Observable,
  asyncScheduler,
  catchError,
  concat,
  defaultIfEmpty,
  distinctUntilChanged,
  endWith,
  fromEvent,
  map,
  merge,
  pipe,
  queueScheduler,
  repeat,
  share,
  shareReplay,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap
} from "./chunk-3NTDFDXB.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-constants.mjs
var rect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};
var EMPTY_FUNCTION = () => {
};
var EMPTY_CLIENT_RECT = __spreadProps(__spreadValues({}, rect), {
  toJSON: () => rect
});
var TUI_FALSE_HANDLER = () => false;
var TUI_TRUE_HANDLER = () => true;
var TUI_STRINGIFY = ({ $implicit }) => String($implicit);
function bothEmpty(item1, item2) {
  return Array.isArray(item1) && Array.isArray(item2) && !item1.length && !item2.length;
}
var TUI_DEFAULT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase().includes(search.toLowerCase());
var TUI_STRICT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase() === search.toLowerCase();
var TUI_DEFAULT_IDENTITY_MATCHER = (item1, item2) => item1 === item2 || bothEmpty(item1, item2);
var TUI_DIGIT_REGEXP = /\d/;
var TUI_NON_DIGIT_REGEXP = /\D/;
var TUI_NON_DIGITS_REGEXP = /\D+/g;
var svgNodeFilter = {
  acceptNode(node) {
    return "ownerSVGElement" in node ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }
};
var CHAR_NO_BREAK_SPACE = " ";
var CHAR_EN_DASH = "–";
var CHAR_EM_DASH = "—";
var CHAR_LAQUO = "«";
var CHAR_RAQUO = "»";
var CHAR_HYPHEN = "-";
var CHAR_MINUS = "−";
var CHAR_PLUS = "+";
var CHAR_BULLET = "•";
var CHAR_ELLIPSIS = "…";
var CHAR_CURRENCY_SIGN = "¤";
var CHAR_ZERO_WIDTH_SPACE = "​";
var TUI_USED_ICONS = [
  "@img.amex",
  "@img.diners-club",
  "@img.discover",
  "@img.humo",
  "@img.jcb",
  "@img.maestro",
  "@img.mastercard",
  "@img.ru-pay",
  "@img.union-pay",
  "@img.uzcard",
  "@img.verve",
  "@tui.arrow-left",
  "@tui.arrow-right",
  "@tui.calendar",
  "@tui.check",
  "@tui.chevron-down",
  "@tui.chevron-left",
  "@tui.chevron-right",
  "@tui.chevron-up",
  "@tui.chevrons-up-down",
  "@tui.circle-alert",
  "@tui.circle-check",
  "@tui.circle-help",
  "@tui.circle-x",
  "@tui.clock",
  "@tui.code",
  "@tui.copy",
  "@tui.electron",
  "@tui.ellipsis",
  "@tui.expand",
  "@tui.eye",
  "@tui.eye-off",
  "@tui.file",
  "@tui.filter",
  "@tui.grip-vertical",
  "@tui.heart",
  "@tui.heart-filled",
  "@tui.info",
  "@tui.layout-grid",
  "@tui.link",
  "@tui.menu",
  "@tui.minimize",
  "@tui.minus",
  "@tui.mir",
  "@tui.plus",
  "@tui.rotate-ccw-square",
  "@tui.search",
  "@tui.shrink",
  "@tui.star",
  "@tui.trash",
  "@tui.visa",
  "@tui.x"
];
var TUI_VERSION = "5.9.0";

// node_modules/.pnpm/@ng-web-apis+common@5.2.0_@_553bad85532fe3ccc9dcdcbd0e657c41/node_modules/@ng-web-apis/common/fesm2022/ng-web-apis-common.mjs
var WA_WINDOW = new InjectionToken(ngDevMode ? "[WA_WINDOW]" : "", {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error("Window is not available");
    }
    return defaultView;
  }
});
var WA_ANIMATION_FRAME = new InjectionToken(ngDevMode ? "[WA_ANIMATION_FRAME]" : "", {
  factory: () => {
    const { requestAnimationFrame, cancelAnimationFrame } = inject(WA_WINDOW);
    const animationFrame$ = new Observable((subscriber) => {
      let id = NaN;
      const callback = (timestamp) => {
        subscriber.next(timestamp);
        id = requestAnimationFrame(callback);
      };
      id = requestAnimationFrame(callback);
      return () => {
        cancelAnimationFrame(id);
      };
    });
    return animationFrame$.pipe(share());
  }
});
var WA_CACHES = new InjectionToken(ngDevMode ? "[WA_CACHES]" : "", { factory: () => inject(WA_WINDOW).caches });
var WA_CRYPTO = new InjectionToken(ngDevMode ? "[WA_CRYPTO]" : "", {
  factory: () => inject(WA_WINDOW).crypto
});
var WA_CSS = new InjectionToken(ngDevMode ? "[WA_CSS]" : "", {
  factory: () => inject(WA_WINDOW).CSS ?? {
    escape: (v) => v,
    supports: () => false
  }
});
var WA_HISTORY = new InjectionToken(ngDevMode ? "[WA_HISTORY]" : "", {
  factory: () => inject(WA_WINDOW).history
});
var WA_LOCAL_STORAGE = new InjectionToken(ngDevMode ? "[WA_LOCAL_STORAGE]" : "", { factory: () => inject(WA_WINDOW).localStorage });
var WA_LOCATION = new InjectionToken(ngDevMode ? "[WA_LOCATION]" : "", { factory: () => inject(WA_WINDOW).location });
var WA_NAVIGATOR = new InjectionToken(ngDevMode ? "[WA_NAVIGATOR]" : "", { factory: () => inject(WA_WINDOW).navigator });
var WA_MEDIA_DEVICES = new InjectionToken(ngDevMode ? "[WA_MEDIA_DEVICES]" : "", { factory: () => inject(WA_NAVIGATOR).mediaDevices });
var WA_NETWORK_INFORMATION = new InjectionToken(ngDevMode ? "[WA_NETWORK_INFORMATION]" : "", {
  factory: () => inject(WA_NAVIGATOR).connection || null
});
var WA_PAGE_VISIBILITY = new InjectionToken(ngDevMode ? "[WA_PAGE_VISIBILITY]" : "", {
  factory: () => {
    const documentRef = inject(DOCUMENT);
    return fromEvent(documentRef, "visibilitychange").pipe(startWith(0), map(() => documentRef.visibilityState !== "hidden"), distinctUntilChanged(), shareReplay({ refCount: false, bufferSize: 1 }));
  }
});
var WA_PERFORMANCE = new InjectionToken(ngDevMode ? "[WA_PERFORMANCE]" : "", { factory: () => inject(WA_WINDOW).performance });
var WA_SCREEN = new InjectionToken(ngDevMode ? "[WA_SCREEN]" : "", {
  factory: () => inject(WA_WINDOW).screen
});
var WA_SESSION_STORAGE = new InjectionToken(ngDevMode ? "[WA_SESSION_STORAGE]" : "", { factory: () => inject(WA_WINDOW).sessionStorage });
var WA_SPEECH_RECOGNITION = new InjectionToken(ngDevMode ? "[WA_SPEECH_RECOGNITION]" : "", {
  factory: () => {
    const windowRef = inject(WA_WINDOW);
    return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
  }
});
var WA_SPEECH_SYNTHESIS = new InjectionToken(ngDevMode ? "[WA_SPEECH_SYNTHESIS]" : "", { factory: () => inject(WA_WINDOW).speechSynthesis });
var WA_USER_AGENT = new InjectionToken(ngDevMode ? "[WA_USER_AGENT]" : "", { factory: () => inject(WA_NAVIGATOR).userAgent });

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-math.mjs
function tuiClamp(value, minimum, maximum) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(minimum));
  ngDevMode && console.assert(!Number.isNaN(maximum));
  ngDevMode && maximum && minimum && console.assert(maximum >= minimum);
  const minClamped = max(minimum ?? value, value);
  return min(maximum ?? minClamped, minClamped);
}
function min(x, ...values) {
  return values.reduce((a, b) => a < b ? a : b, x);
}
function max(x, ...values) {
  return values.reduce((a, b) => a > b ? a : b, x);
}
function tuiInRange(value, fromInclude, toExclude) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(fromInclude));
  ngDevMode && console.assert(!Number.isNaN(toExclude));
  ngDevMode && console.assert(fromInclude < toExclude);
  return value >= fromInclude && value < toExclude;
}
function tuiNormalizeToIntNumber(value, min2, max2) {
  ngDevMode && console.assert(Number.isInteger(min2));
  ngDevMode && console.assert(Number.isInteger(max2));
  ngDevMode && console.assert(min2 <= max2);
  if (Number.isNaN(value) || value <= min2) {
    return min2;
  }
  return value >= max2 ? max2 : Math.round(value);
}
function tuiQuantize(value, quantum) {
  ngDevMode && console.assert(Number.isFinite(value));
  ngDevMode && console.assert(Number.isFinite(quantum));
  ngDevMode && console.assert(quantum > 0);
  const remainder = value % quantum;
  return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}
var MAX_PRECISION = 292;
function calculate(value, precision, func) {
  if (value === Infinity) {
    return value;
  }
  ngDevMode && console.assert(!Number.isNaN(value), "Value must be number");
  ngDevMode && console.assert(Number.isInteger(precision), "Precision must be integer");
  precision = Math.min(precision, MAX_PRECISION);
  const [significand, exponent = ""] = `${value}`.split("e");
  const roundedInt = func(Number(`${significand}e${Number(exponent) + precision}`));
  ngDevMode && console.assert(Number.isSafeInteger(roundedInt), "Impossible to correctly round such a large number");
  const processedPair = `${roundedInt}e`.split("e");
  return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
function tuiRound(value, precision = 0) {
  return calculate(value, precision, Math.round);
}
function tuiCeil(value, precision = 0) {
  return calculate(value, precision, Math.ceil);
}
function tuiFloor(value, precision = 0) {
  return calculate(value, precision, Math.floor);
}
function tuiTrunc(value, precision = 0) {
  return calculate(value, precision, Math.trunc);
}
function tuiIsSafeToRound(value, precision = 0) {
  return Number.isSafeInteger(Math.trunc(value * 10 ** precision));
}
function tuiRoundWith({ value, precision, method }) {
  switch (method) {
    case "ceil":
      return tuiCeil(value, precision);
    case "floor":
      return tuiFloor(value, precision);
    case "round":
      return tuiRound(value, precision);
    default:
      return tuiTrunc(value, precision);
  }
}
function tuiSum(...args) {
  if (args.length === 0) {
    return 0;
  }
  if (args.every((arg) => typeof arg === "bigint")) {
    return args.reduce((acc, n) => acc + n, BigInt(0));
  }
  const numbers = args.map((arg) => Number(arg));
  const decimal = numbers.map((n) => (n.toString().split(".")[1] ?? "").length);
  const maxDecimal = Math.max(0, ...decimal);
  const precision = 10 ** maxDecimal;
  const sumInt = numbers.reduce((acc, n) => acc + Math.round(n * precision), 0);
  return sumInt / precision;
}
function tuiToInt(bool) {
  return bool ? 1 : 0;
}

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-miscellaneous.mjs
function tuiArrayRemove(array, index) {
  return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
function tuiArrayShallowEquals(a, b) {
  return a.length === b.length && a.every((item, index) => Object.is(item, b[index]));
}
function tuiArrayToggle(array, item, identity) {
  const index = identity ? array.findIndex((it) => identity(it, item)) : array.indexOf(item);
  return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
function tuiIsControlEmpty({ value = null }) {
  return value === null || value === "" || Array.isArray(value) && !value.length;
}
function tuiCountFilledControls(control) {
  if (control instanceof FormArray) {
    return control.controls.reduce((acc, nestedControl) => acc + tuiCountFilledControls(nestedControl), 0);
  }
  return control instanceof FormGroup ? Object.values(control.controls).reduce((acc, nestedControl) => acc + tuiCountFilledControls(nestedControl), 0) : tuiToInt(!tuiIsControlEmpty(control));
}
function tuiIsString(value) {
  return typeof value === "string";
}
function tuiDefaultSort(x, y) {
  if (x === y) {
    return 0;
  }
  if (tuiIsString(x) && tuiIsString(y)) {
    return x.localeCompare(y, void 0, { numeric: true });
  }
  return x > y ? 1 : -1;
}
function tuiDistanceBetweenTouches({ touches }) {
  return Math.hypot((touches[0]?.clientX ?? 0) - (touches[1]?.clientX ?? 0), (touches[0]?.clientY ?? 0) - (touches[1]?.clientY ?? 0));
}
function tuiEaseInOutQuad(t) {
  ngDevMode && console.assert(t >= 0 && t <= 1, "Input must be between 0 and 1 inclusive but received ", t);
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
var autoId = 0;
function tuiGenerateId() {
  return `tui_${autoId++}${Date.now().toString(36)}`;
}
function tuiIsFlat(items) {
  return !Array.isArray(items[0]);
}
function tuiIsNumber(value) {
  return typeof value === "number";
}
function tuiIsObject(value) {
  return typeof value === "object" && !!value;
}
function tuiIsPresent(value) {
  return value != null;
}
function tuiMarkControlAsTouchedAndValidate(control) {
  if (control instanceof FormArray) {
    control.controls.forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  if (control instanceof FormGroup) {
    Object.values(control.controls).forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  control.markAsTouched();
  control.updateValueAndValidity();
}
function tuiNullableSame(a, b, handler) {
  if (a === null) {
    return b === null;
  }
  return b === null ? false : handler(a, b);
}
function tuiObfuscate(value, symbol) {
  if (!value) {
    return value;
  }
  const match = /[\p{L}\p{N}]/gu;
  let visible = 0;
  let obfuscateIndexes = getObfuscateIndexes(value, match);
  if (obfuscateIndexes.length >= 8) {
    visible = 2;
  } else if (obfuscateIndexes.length >= 4) {
    visible = 1;
  }
  obfuscateIndexes = obfuscateIndexes.slice(visible, obfuscateIndexes.length);
  const lastIndex = obfuscateIndexes.length - visible;
  obfuscateIndexes = obfuscateIndexes.slice(0, lastIndex < 0 ? 0 : lastIndex);
  const result = value.split("");
  obfuscateIndexes.forEach((index) => {
    result[index] = symbol;
  });
  return result.join("");
}
function getObfuscateIndexes(value, match) {
  if (!match) {
    return Array.from({ length: value.length }).map((_, index) => index);
  }
  const obfuscateIndexes = [];
  let matchResult;
  let count = 0;
  while ((matchResult = match.exec(value)) !== null && count < value.length) {
    const start = matchResult.index;
    const end = match.lastIndex - 1;
    for (let i = start; i <= end; i++) {
      obfuscateIndexes.push(i);
    }
    count++;
  }
  return obfuscateIndexes;
}
function tuiPx(value) {
  ngDevMode && console.assert(Number.isFinite(value), "Value must be finite number");
  return `${value}px`;
}
function tuiSanitizeText(value) {
  const controlCharsRegex = /[\x00-\x1F\x7F-\x9F]/g;
  const zeroWidthCharsRegex = /[\u200B-\u200D\uFEFF]/g;
  return value.trim().replaceAll(controlCharsRegex, "").replaceAll(zeroWidthCharsRegex, "");
}
function tuiSetSignal(signal2, value) {
  if ("set" in signal2) {
    signal2.set(value);
  } else if ("applyValueToInputSignal" in signal2[SIGNAL]) {
    signal2[SIGNAL].applyValueToInputSignal(signal2[SIGNAL], value);
  } else {
    ngDevMode && console.assert(false, "tuiSetSignal was called on read-only signal");
  }
}
var MAP = new InjectionToken(ngDevMode ? "MAP" : "", {
  factory: () => {
    const map2 = /* @__PURE__ */ new Map();
    inject(DestroyRef).onDestroy(() => map2.forEach((component) => component.destroy()));
    return map2;
  }
});
function tuiWithStyles(component) {
  const map2 = inject(MAP);
  const environmentInjector = inject(EnvironmentInjector);
  if (!map2.has(component)) {
    map2.set(component, createComponent(component, { environmentInjector }));
  }
  return;
}

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-observables.mjs
function tuiCloseWatcher() {
  return new Observable((subscriber) => {
    let watcher;
    const setup = () => {
      watcher = getWatcher();
      watcher.onclose = () => setup();
      watcher.oncancel = (event) => {
        event.preventDefault();
        subscriber.next();
      };
    };
    setup();
    return () => watcher.destroy();
  });
}
function getWatcher() {
  try {
    return new CloseWatcher();
  } catch (e) {
    return { destroy: () => {
    } };
  }
}
function tuiControlValue(control) {
  return new Observable((subscriber) => control?.valueChanges?.pipe(startWith(control.value)).subscribe(subscriber));
}
function tuiTypedFromEvent(target, event, options = {}) {
  return fromEvent(target, event, options);
}
var TuiDragState = class {
  constructor(stage, event) {
    this.stage = stage;
    this.event = event;
  }
};
function tuiDragAndDropFrom(element) {
  const { ownerDocument } = element;
  return concat(tuiTypedFromEvent(element, "mousedown").pipe(take(1), map((event) => new TuiDragState("start", event))), merge(tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event) => new TuiDragState("continues", event))), merge(tuiTypedFromEvent(ownerDocument, "mouseup"), tuiTypedFromEvent(ownerDocument, "dragend")).pipe(take(1), map((event) => new TuiDragState("end", event)), endWith(null))).pipe(takeWhile(tuiIsPresent))).pipe(repeat());
}
function tuiPreventDefault() {
  return tap((event) => event.preventDefault());
}
function tuiStopPropagation() {
  return tap((event) => event.stopPropagation());
}
function tuiIfMap(project, predicate = Boolean) {
  return pipe(switchMap((value) => predicate(value) ? project(value) : EMPTY));
}
function tuiScrollFrom(element) {
  return tuiTypedFromEvent(element === element.ownerDocument.documentElement ? element.ownerDocument : element, "scroll");
}
function tuiTakeUntilDestroyed(destroyRef) {
  return pipe(takeUntil(NEVER.pipe(takeUntilDestroyed(destroyRef), catchError(() => EMPTY), defaultIfEmpty(null))));
}
var tuiUntrackedScheduler = {
  now: queueScheduler.now.bind(queueScheduler),
  schedule(work, delay, state) {
    return queueScheduler.schedule(function(s) {
      return untracked(() => work.call(this, s));
    }, delay, state);
  }
};
function tuiWatch(cdr = inject(ChangeDetectorRef)) {
  return tap(() => cdr.markForCheck());
}
function tuiZonefull(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => source.subscribe({
    next: (value) => zone.run(() => subscriber.next(value)),
    error: (error) => zone.run(() => subscriber.error(error)),
    complete: () => zone.run(() => subscriber.complete())
  }));
}
function tuiZonefree(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => zone.runOutsideAngular(() => source.subscribe(subscriber)));
}
function tuiZoneOptimized(zone = inject(NgZone)) {
  return pipe(tuiZonefree(zone), tuiZonefull(zone));
}
var TuiZoneScheduler = class {
  constructor(zoneConditionFn, scheduler = asyncScheduler) {
    this.zoneConditionFn = zoneConditionFn;
    this.scheduler = scheduler;
  }
  now() {
    return this.scheduler.now();
  }
  schedule(...args) {
    return this.zoneConditionFn(() => this.scheduler.schedule(...args));
  }
};
function tuiZonefreeScheduler(zone = inject(NgZone), scheduler = asyncScheduler) {
  return new TuiZoneScheduler(zone.runOutsideAngular.bind(zone), scheduler);
}
function tuiZonefullScheduler(zone = inject(NgZone), scheduler = asyncScheduler) {
  return new TuiZoneScheduler(zone.run.bind(zone), scheduler);
}

// node_modules/.pnpm/@angular+cdk@21.2.10_@angul_97e8f3d82cfa4dd55162ae3f52e590a8/node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/.pnpm/@angular+cdk@21.2.10_@angul_97e8f3d82cfa4dd55162ae3f52e590a8/node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/.pnpm/@angular+cdk@21.2.10_@angul_97e8f3d82cfa4dd55162ae3f52e590a8/node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-dom.mjs
function tuiContainsOrAfter(current, node) {
  try {
    return current.contains(node) || !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING);
  } catch (e) {
    return false;
  }
}
function tuiIsInput(element) {
  return element.matches("input");
}
function tuiIsTextarea(element) {
  return element.matches("textarea");
}
function tuiIsTextfield(element) {
  return tuiIsInput(element) || tuiIsTextarea(element);
}
function tuiIsElement(node) {
  return !!node && "nodeType" in node && node.nodeType === Node.ELEMENT_NODE;
}
function tuiIsHTMLElement(node) {
  const defaultView = node?.ownerDocument.defaultView;
  return !!node && !!defaultView && node instanceof defaultView.HTMLElement;
}
function tuiIsTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}
function tuiIsInputEvent(event) {
  return "data" in event && "inputType" in event;
}
function tuiGetActualTarget(event) {
  return event.composedPath()[0];
}
var DEFAULT_FORMAT = "text/plain";
function tuiGetClipboardDataText(event, format = DEFAULT_FORMAT) {
  return "clipboardData" in event && event.clipboardData !== null ? event.clipboardData.getData(format) || event.clipboardData.getData(DEFAULT_FORMAT) : event.target.ownerDocument.defaultView.clipboardData.getData("text");
}
function tuiGetDocumentOrShadowRoot(node) {
  return "getRootNode" in node && node.isConnected ? node.getRootNode() : node.ownerDocument;
}
function tuiGetElementObscures(element) {
  if (!element.getBoundingClientRect) {
    return null;
  }
  const { left, right, top, bottom, width, height } = element.getBoundingClientRect();
  if (width === 0 && height === 0) {
    return null;
  }
  const doc = tuiGetDocumentOrShadowRoot(element);
  const horizontalMiddle = Math.round(left + width / 2);
  const verticalMiddle = Math.round(top + height / 2);
  const elements = [
    doc.elementFromPoint(horizontalMiddle, Math.round(top) + 2),
    doc.elementFromPoint(horizontalMiddle, Math.round(bottom) - 2),
    doc.elementFromPoint(Math.round(left) + 2, verticalMiddle),
    doc.elementFromPoint(Math.round(right) - 2, verticalMiddle)
  ].filter(tuiIsPresent);
  if (!elements.length) {
    return [];
  }
  const filtered = elements.filter((el) => !element.contains(el) && !el.contains(element));
  return filtered.length === 4 ? filtered : null;
}
function tuiGetElementOffset(host, element) {
  ngDevMode && console.assert(host.contains(element), "Host must contain element");
  let { offsetTop, offsetLeft, offsetParent } = element;
  while (tuiIsHTMLElement(offsetParent) && offsetParent !== host) {
    offsetTop += offsetParent.offsetTop;
    offsetLeft += offsetParent.offsetLeft;
    offsetParent = offsetParent.offsetParent;
  }
  return { offsetTop, offsetLeft };
}
function tuiGetSelectedText({ getSelection, document }) {
  return document.activeElement && tuiIsTextfield(document.activeElement) ? document.activeElement.value.slice(document.activeElement.selectionStart || 0, document.activeElement.selectionEnd || 0) : getSelection()?.toString() || null;
}
function tuiInjectElement() {
  return inject(ElementRef).nativeElement;
}
function tuiIsElementEditable(element) {
  return tuiIsTextfield(element) && !element.readOnly && element.inputMode !== "none" || Boolean(element.isContentEditable);
}
function tuiPointToClientRect(x = 0, y = 0) {
  const rect2 = {
    x,
    y,
    left: x,
    right: x,
    top: y,
    bottom: y,
    width: 0,
    height: 0
  };
  return __spreadProps(__spreadValues({}, rect2), {
    toJSON: () => rect2
  });
}
function tuiValue(input, injector = inject(INJECTOR$1)) {
  const win = injector.get(WA_WINDOW);
  if (!win.tuiInputPatched && isPlatformBrowser(injector.get(PLATFORM_ID))) {
    win.tuiInputPatched = true;
    patch(win.HTMLInputElement.prototype);
    patch(win.HTMLTextAreaElement.prototype);
    patch(win.HTMLSelectElement.prototype);
  }
  let element = isSignal(input) ? void 0 : coerceElement(input);
  let cleanup = () => {
  };
  const options = { injector };
  const value = signal(element?.value || "");
  const process = (el) => {
    const update = () => untracked(() => value.set(el.value));
    el.addEventListener("input", update, { capture: true });
    el.addEventListener("tui-input", update, { capture: true });
    return () => {
      el.removeEventListener("input", update, { capture: true });
      el.removeEventListener("tui-input", update, { capture: true });
    };
  };
  injector.get(DestroyRef).onDestroy(() => cleanup());
  if (isSignal(input)) {
    effect(() => {
      element = coerceElement(input());
      cleanup();
      if (element && !element.matches("select[multiple]")) {
        value.set(element.value);
        cleanup = process(element);
      }
    }, options);
  } else if (element && !element.matches("select[multiple]")) {
    cleanup = process(element);
  }
  effect(() => {
    const v = value();
    if (element?.matches("select[multiple]")) {
      return;
    }
    if (element?.matches(":focus") && "selectionStart" in element) {
      const { selectionStart, selectionEnd } = element;
      element.value = v;
      try {
        element.setSelectionRange(selectionStart, selectionEnd);
      } catch (e) {
      }
    } else if (element) {
      element.value = v;
    }
  }, options);
  return value;
}
function patch(prototype) {
  const { set } = Object.getOwnPropertyDescriptor(prototype, "value");
  Object.defineProperty(prototype, "value", {
    set(detail) {
      const value = this.value;
      const event = new CustomEvent("tui-input", { detail, bubbles: true });
      set.call(this, detail);
      if (value !== detail) {
        this.dispatchEvent(event);
      }
    }
  });
}
function tuiWindowSize(window) {
  return toSignal(fromEvent(window, "resize").pipe(startWith(null), map(() => {
    const width = Math.max(window.document.documentElement.clientWidth || 0, window.innerWidth || 0, window.visualViewport?.width || 0);
    const height = Math.max(window.document.documentElement.clientHeight || 0, window.innerHeight || 0, window.visualViewport?.height || 0);
    const rect2 = {
      width,
      height,
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      x: 0,
      y: 0
    };
    return __spreadProps(__spreadValues({}, rect2), {
      toJSON: () => JSON.stringify(rect2)
    });
  })), { requireSync: true });
}

// node_modules/.pnpm/@ng-web-apis+platform@5.2.0/node_modules/@ng-web-apis/platform/fesm2022/ng-web-apis-platform.mjs
var WA_MOBILE_REGEXP = /(?:android|bb\d|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|^(?:1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8c]))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-)/i;
var WA_SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;
var WA_IOS_REG_EXP = /ipad|iphone|ipod/i;
function isIos({ userAgent, maxTouchPoints }) {
  return WA_IOS_REG_EXP.test(userAgent) || WA_SAFARI_REG_EXP.test(userAgent) && maxTouchPoints > 1;
}
var WA_IS_IOS = new InjectionToken(ngDevMode ? "[WA_IS_IOS]" : "", {
  factory: () => isIos(inject(WA_NAVIGATOR))
});
var WA_IS_MOBILE = new InjectionToken(ngDevMode ? "[WA_IS_MOBILE]" : "", { factory: () => WA_MOBILE_REGEXP.test(inject(WA_USER_AGENT)) });
var WA_IS_ANDROID = new InjectionToken(ngDevMode ? "[WA_IS_ANDROID]" : "", { factory: () => inject(WA_IS_MOBILE) && !inject(WA_IS_IOS) });
var WA_IS_E2E = new InjectionToken(ngDevMode ? "[WA_IS_E2E]" : "", {
  factory: () => !!inject(WA_WINDOW).Cypress || inject(WA_NAVIGATOR).webdriver
});
var WA_IS_TOUCH = new InjectionToken(ngDevMode ? "[WA_IS_TOUCH]" : "", {
  factory: () => {
    const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
    return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
      initialValue: media.matches
    });
  }
});
var WA_IS_WEBKIT = new InjectionToken(ngDevMode ? "[WA_IS_WEBKIT]" : "", {
  factory: () => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage
});
function isSafari({ ownerDocument: doc }) {
  const win = doc?.defaultView;
  const isMacOsSafari = win.safari !== void 0 && win.safari?.pushNotification?.toString() === "[object SafariRemoteNotification]";
  const isIosSafari = !!win.navigator?.vendor?.includes("Apple") && !win.navigator?.userAgent?.includes("CriOS") && !win.navigator?.userAgent?.includes("FxiOS");
  return isMacOsSafari || isIosSafari;
}

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-di.mjs
function tuiProvideOptions(provide, options, fallback) {
  return {
    provide,
    useFactory: () => __spreadValues(__spreadValues({}, inject(provide, { optional: true, skipSelf: true }) || fallback), inject(options, { optional: true }) || (typeof options === "function" ? options() : options))
  };
}
function tuiCreateOptions(defaults) {
  const token = new InjectionToken(ngDevMode ? "Options token" : "", {
    factory: () => defaults
  });
  return [token, (options) => tuiProvideOptions(token, options, defaults)];
}
function tuiDirectiveBinding(token, key, initial, options = { self: true }) {
  const result = isSignal(initial) ? initial : signal(initial);
  const directive = inject(token, options);
  const output = directive?.[`${key.toString()}Change`];
  if (!directive) {
    return result;
  }
  let previous;
  effect(() => {
    const value = result();
    if (previous === value) {
      return;
    }
    if (isSignal(directive[key])) {
      tuiSetSignal(directive[key], value);
    } else {
      directive[key] = value;
    }
    directive.ngOnChanges?.({});
    output?.emit?.(value);
    previous = value;
  });
  return result;
}
function tuiProvide(provide, useExisting, multi = false) {
  return { provide, useExisting, multi };
}

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-animated.mjs
var TUI_ENTER = "tui-enter";
var TUI_LEAVE = "tui-leave";
var TUI_LEAVE_KEY = `${TUI_LEAVE}_${TUI_VERSION.split(".")[0]}`;
var TuiAnimated = class _TuiAnimated {
  constructor() {
    this.renderer = inject(ViewContainerRef)._hostLView?.[11];
    this.el = tuiInjectElement();
    afterNextRender(() => this.remove());
    if (this.renderer && isPlatformBrowser(inject(PLATFORM_ID))) {
      wrap(this.renderer.delegate || this.renderer);
    }
  }
  remove() {
    if (this.el.isConnected && !this.el.getAnimations?.().length) {
      this.el.classList.remove(TUI_ENTER);
    }
  }
  static {
    this.ɵfac = function TuiAnimated_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAnimated)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAnimated,
      selectors: [["", "tuiAnimated", ""]],
      hostAttrs: [1, "tui-enter"],
      hostBindings: function TuiAnimated_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationcancel.self", function TuiAnimated_animationcancel_self_HostBindingHandler() {
            return ctx.remove();
          })("animationend.self", function TuiAnimated_animationend_self_HostBindingHandler() {
            return ctx.remove();
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAnimated, [{
    type: Directive,
    args: [{
      selector: "[tuiAnimated]",
      host: {
        class: TUI_ENTER,
        "(animationcancel.self)": "remove()",
        "(animationend.self)": "remove()"
      }
    }]
  }], () => [], null);
})();
function wrap(renderer) {
  if (renderer.data[TUI_LEAVE_KEY]) {
    return;
  }
  const {
    removeChild
  } = renderer;
  renderer.data[TUI_LEAVE_KEY] = true;
  renderer.removeChild = (parent, el, host) => {
    if (!tuiIsElement(el)) {
      removeChild.call(renderer, parent, el, host);
      return;
    }
    el.classList.remove(TUI_ENTER);
    const {
      length
    } = el.getAnimations?.() || [];
    el.classList.add(TUI_LEAVE);
    const animations = el.getAnimations?.() ?? [];
    const last = animations[animations.length - 1];
    const finish = () => {
      if (!parent || parent.contains(el)) {
        removeChild.call(renderer, parent, el, host);
      }
    };
    if (animations.length > length && last) {
      last.onfinish = finish;
      last.oncancel = finish;
    } else {
      finish();
    }
  };
}

export {
  EMPTY_FUNCTION,
  EMPTY_CLIENT_RECT,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  TUI_STRINGIFY,
  TUI_DEFAULT_MATCHER,
  TUI_STRICT_MATCHER,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_DIGIT_REGEXP,
  TUI_NON_DIGIT_REGEXP,
  TUI_NON_DIGITS_REGEXP,
  svgNodeFilter,
  CHAR_NO_BREAK_SPACE,
  CHAR_EN_DASH,
  CHAR_EM_DASH,
  CHAR_LAQUO,
  CHAR_RAQUO,
  CHAR_HYPHEN,
  CHAR_MINUS,
  CHAR_PLUS,
  CHAR_BULLET,
  CHAR_ELLIPSIS,
  CHAR_CURRENCY_SIGN,
  CHAR_ZERO_WIDTH_SPACE,
  TUI_USED_ICONS,
  TUI_VERSION,
  WA_WINDOW,
  WA_ANIMATION_FRAME,
  WA_CSS,
  WA_LOCAL_STORAGE,
  WA_PAGE_VISIBILITY,
  tuiClamp,
  tuiInRange,
  tuiNormalizeToIntNumber,
  tuiQuantize,
  tuiRound,
  tuiCeil,
  tuiFloor,
  tuiTrunc,
  tuiIsSafeToRound,
  tuiRoundWith,
  tuiSum,
  tuiToInt,
  tuiArrayRemove,
  tuiArrayShallowEquals,
  tuiArrayToggle,
  tuiIsControlEmpty,
  tuiCountFilledControls,
  tuiIsString,
  tuiDefaultSort,
  tuiDistanceBetweenTouches,
  tuiEaseInOutQuad,
  tuiGenerateId,
  tuiIsFlat,
  tuiIsNumber,
  tuiIsObject,
  tuiIsPresent,
  tuiMarkControlAsTouchedAndValidate,
  tuiNullableSame,
  tuiObfuscate,
  tuiPx,
  tuiSanitizeText,
  tuiSetSignal,
  tuiWithStyles,
  tuiCloseWatcher,
  tuiControlValue,
  tuiTypedFromEvent,
  TuiDragState,
  tuiDragAndDropFrom,
  tuiPreventDefault,
  tuiStopPropagation,
  tuiIfMap,
  tuiScrollFrom,
  tuiTakeUntilDestroyed,
  tuiUntrackedScheduler,
  tuiWatch,
  tuiZonefull,
  tuiZonefree,
  tuiZoneOptimized,
  tuiZonefreeScheduler,
  tuiZonefullScheduler,
  coerceArray,
  coerceBooleanProperty,
  tuiContainsOrAfter,
  tuiIsInput,
  tuiIsTextarea,
  tuiIsTextfield,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsTextNode,
  tuiIsInputEvent,
  tuiGetActualTarget,
  tuiGetClipboardDataText,
  tuiGetDocumentOrShadowRoot,
  tuiGetElementObscures,
  tuiGetElementOffset,
  tuiGetSelectedText,
  tuiInjectElement,
  tuiIsElementEditable,
  tuiPointToClientRect,
  tuiValue,
  tuiWindowSize,
  WA_IS_IOS,
  WA_IS_MOBILE,
  WA_IS_ANDROID,
  WA_IS_TOUCH,
  WA_IS_WEBKIT,
  isSafari,
  tuiProvideOptions,
  tuiCreateOptions,
  tuiDirectiveBinding,
  tuiProvide,
  TUI_ENTER,
  TUI_LEAVE,
  TuiAnimated
};
//# sourceMappingURL=chunk-YH3GNO5H.js.map
