import {
  EMPTY_FUNCTION,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  WA_ANIMATION_FRAME,
  WA_IS_ANDROID,
  WA_IS_IOS,
  WA_WINDOW,
  svgNodeFilter,
  tuiArrayRemove,
  tuiGenerateId,
  tuiGetActualTarget,
  tuiGetDocumentOrShadowRoot,
  tuiGetElementObscures,
  tuiIfMap,
  tuiInjectElement,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiProvide,
  tuiTypedFromEvent,
  tuiUntrackedScheduler,
  tuiWindowSize,
  tuiZoneOptimized,
  tuiZonefreeScheduler
} from "./chunk-YH3GNO5H.js";
import {
  isPlatformBrowser
} from "./chunk-WBUXHXP6.js";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Injectable,
  RendererFactory2,
  TemplateRef,
  ViewContainerRef,
  input,
  reflectComponentType,
  setClassMetadata,
  viewChild,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵqueryAdvance,
  ɵɵviewQuerySignal
} from "./chunk-UWXEFF5S.js";
import {
  outputFromObservable,
  toObservable,
  toSignal
} from "./chunk-ETGSZUYA.js";
import {
  DOCUMENT,
  DestroyRef,
  INJECTOR$1,
  InjectionToken,
  Injector,
  NgZone,
  PLATFORM_ID,
  inject,
  ɵɵdefineInjectable
} from "./chunk-6UR4NGDW.js";
import {
  Observable,
  Subject,
  distinctUntilChanged,
  endWith,
  filter,
  fromEvent,
  ignoreElements,
  map,
  merge,
  observeOn,
  of,
  repeat,
  share,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  throttleTime,
  timer,
  withLatestFrom
} from "./chunk-3NTDFDXB.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-focus.mjs
function tuiFocusedIn(node) {
  return toSignal(merge(fromEvent(node, "focus", { capture: true }).pipe(map(TUI_TRUE_HANDLER)), fromEvent(node, "blur", { capture: true }).pipe(map(TUI_FALSE_HANDLER))).pipe(observeOn(tuiUntrackedScheduler)), { initialValue: false });
}
function tuiIsFocusable(element) {
  if (element.matches(":disabled") || element.getAttribute("tabIndex") === "-1") {
    return false;
  }
  if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") {
    return true;
  }
  switch (element.tagName) {
    case "A":
    case "LINK":
      return element.hasAttribute("href");
    case "AUDIO":
    case "VIDEO":
      return element.hasAttribute("controls");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    case "INPUT":
      return element.getAttribute("type") !== "hidden";
    default:
      return false;
  }
}
function tuiGetClosestFocusable({ initial, root, previous = false }) {
  if (!root.ownerDocument) {
    return null;
  }
  const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
  treeWalker.currentNode = initial;
  do {
    if (tuiIsHTMLElement(treeWalker.currentNode)) {
      initial = treeWalker.currentNode;
    }
    if (tuiIsHTMLElement(initial) && tuiIsFocusable(initial)) {
      return initial;
    }
  } while (previous ? treeWalker.previousNode() : treeWalker.nextNode());
  return null;
}
function tuiGetFocused({ activeElement }) {
  if (!activeElement?.shadowRoot) {
    return activeElement;
  }
  let element = activeElement.shadowRoot.activeElement;
  while (element?.shadowRoot) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function tuiIsFocused(node) {
  return !!node?.ownerDocument && tuiGetFocused(node.ownerDocument) === node && node.ownerDocument.hasFocus();
}
function tuiIsFocusedIn(node) {
  const focused = node?.ownerDocument && tuiGetFocused(node.ownerDocument);
  return !!focused && node.contains(focused) && node.ownerDocument?.hasFocus();
}
function tuiMoveFocus(currentIndex, elements, step) {
  currentIndex += step;
  while (currentIndex >= 0 && currentIndex < elements.length) {
    elements[currentIndex]?.focus();
    if (tuiIsFocused(elements[currentIndex])) {
      return;
    }
    currentIndex += step;
  }
}

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-tokens.mjs
var TUI_REMOVED_ELEMENT = new InjectionToken(ngDevMode ? "TUI_REMOVED_ELEMENT" : "", {
  factory: () => {
    const element$ = new Subject();
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    const proto = Object.getPrototypeOf(renderer.delegate ?? renderer);
    const { removeChild } = proto;
    proto.removeChild = function(...args) {
      element$.next(args[1]);
      removeChild.apply(this, args);
    };
    return element$.pipe(startWith(null), switchMap((element) => timer(0).pipe(map(() => null), startWith(element))), share());
  }
});
function isValidFocusout(target, removedElement = null) {
  return (
    // Not due to switching tabs/going to DevTools
    tuiGetDocumentOrShadowRoot(target).activeElement !== target && // Not due to button/input becoming disabled or under disabled fieldset
    !target.matches(":disabled") && // Not due to element being removed from DOM
    !removedElement?.contains(target) && // Not due to scrollable element became non-scrollable
    (target.getAttribute("tabIndex") === "-1" || tuiIsFocusable(target))
  );
}
function shadowRootActiveElement(root) {
  return merge(tuiTypedFromEvent(root, "focusin").pipe(map(({ target }) => target)), tuiTypedFromEvent(root, "focusout").pipe(filter(({ target, relatedTarget }) => !!relatedTarget && isValidFocusout(target)), map(({ relatedTarget }) => relatedTarget)));
}
var TUI_ACTIVE_ELEMENT = new InjectionToken(ngDevMode ? "TUI_ACTIVE_ELEMENT" : "", {
  factory: () => {
    const removedElement$ = inject(TUI_REMOVED_ELEMENT);
    const win = inject(WA_WINDOW);
    const doc = inject(DOCUMENT);
    const zone = inject(NgZone);
    const focusout$ = tuiTypedFromEvent(win, "focusout", { capture: true });
    const focusin$ = tuiTypedFromEvent(win, "focusin", { capture: true });
    const blur$ = tuiTypedFromEvent(win, "blur");
    const mousedown$ = tuiTypedFromEvent(win, "mousedown");
    const mouseup$ = tuiTypedFromEvent(win, "mouseup");
    const pointerdown$ = tuiTypedFromEvent(win, "pointerdown");
    const pointercancel$ = tuiTypedFromEvent(win, "pointercancel");
    return merge(focusout$.pipe(takeUntil(pointerdown$.pipe(filter((e) => !e.defaultPrevented))), repeat({ delay: () => merge(mouseup$, pointercancel$) }), withLatestFrom(removedElement$), filter(([event, removedElement]) => isValidFocusout(tuiGetActualTarget(event), removedElement)), map(([{ relatedTarget }]) => relatedTarget)), blur$.pipe(map(() => doc.activeElement), filter((element) => !!element?.matches("iframe"))), focusin$.pipe(switchMap((event) => {
      const target = tuiGetActualTarget(event);
      const root = tuiGetDocumentOrShadowRoot(target) || doc;
      return root === doc ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
    })), mousedown$.pipe(map(tuiGetActualTarget), switchMap((target) => !doc.activeElement || doc.activeElement === doc.body ? of(target) : focusout$.pipe(take(1), map(() => target), takeUntil(timer(0, tuiZonefreeScheduler(zone))))))).pipe(distinctUntilChanged(), share());
  }
});
var TUI_FALLBACK_VALUE = new InjectionToken(ngDevMode ? "TUI_FALLBACK_VALUE" : "", { factory: () => null });
function tuiFallbackValueProvider(useValue) {
  return {
    provide: TUI_FALLBACK_VALUE,
    useValue
  };
}
var TUI_PLATFORM = new InjectionToken(ngDevMode ? "TUI_PLATFORM" : "", {
  factory: () => {
    if (inject(WA_IS_IOS)) {
      return "ios";
    }
    return inject(WA_IS_ANDROID) ? "android" : "web";
  }
});
var TUI_WINDOW_SIZE = new InjectionToken(ngDevMode ? "TUI_WINDOW_SIZE" : "", { factory: () => toObservable(tuiWindowSize(inject(WA_WINDOW))) });

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-active-zone.mjs
var TuiActiveZone = class _TuiActiveZone {
  constructor() {
    this.active$ = inject(TUI_ACTIVE_ELEMENT);
    this.tuiActiveZoneParent = null;
    this.parent = inject(_TuiActiveZone, {
      skipSelf: true,
      optional: true
    });
    this.el = inject(ElementRef, {
      optional: true
    })?.nativeElement ?? inject(DOCUMENT).documentElement;
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => tuiIsElement(element) && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized(), share());
    this.children = [];
    this.parent?.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
    zone?.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  ngOnDestroy() {
    this.parent?.removeSubActiveZone(this);
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.contains(node) || this.children.some((item) => item.contains(node));
  }
  // issue: https://github.com/typescript-eslint/typescript-eslint/issues/11770
  // eslint-disable-next-line @typescript-eslint/no-unused-private-class-members
  addSubActiveZone(activeZone) {
    this.children = [...this.children, activeZone];
  }
  // issue: https://github.com/typescript-eslint/typescript-eslint/issues/11770
  // eslint-disable-next-line @typescript-eslint/no-unused-private-class-members
  removeSubActiveZone(activeZone) {
    this.children = tuiArrayRemove(this.children, this.children.indexOf(activeZone));
  }
  static {
    this.ɵfac = function TuiActiveZone_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiActiveZone)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiActiveZone,
      selectors: [["", "tuiActiveZone", "", 5, "ng-container"], ["", "tuiActiveZoneChange", "", 5, "ng-container"], ["", "tuiActiveZoneParent", "", 5, "ng-container"]],
      inputs: {
        tuiActiveZoneParentSetter: [0, "tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
      },
      outputs: {
        tuiActiveZoneChange: "tuiActiveZoneChange"
      },
      exportAs: ["tuiActiveZone"]
    });
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiActiveZone,
      factory: _TuiActiveZone.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZone, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }, {
    type: Directive,
    args: [{
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      inputs: ["tuiActiveZoneParentSetter: tuiActiveZoneParent"],
      outputs: ["tuiActiveZoneChange"],
      exportAs: "tuiActiveZone"
    }]
  }], () => [], null);
})();

// node_modules/.pnpm/@taiga-ui+font-watcher@0.6.0/node_modules/@taiga-ui/font-watcher/index.esm.js
var IFRAME = {
  position: "fixed",
  visibility: "hidden",
  pointerEvents: "none"
};
var BODY = {
  height: "fit-content",
  lineHeight: "1em",
  fontSize: "calc(env(preferred-text-scale) * 1em)"
};
function tuiFontSizeWatcher(callback, iframe = globalThis.document.createElement("iframe")) {
  const resize = () => {
    const { innerWidth = 0, outerWidth = 0, devicePixelRatio = 0 } = iframe.ownerDocument.defaultView || {};
    iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
  };
  iframe.ownerDocument.body.append(iframe);
  iframe.ownerDocument.defaultView?.addEventListener("resize", resize);
  const doc = iframe.contentDocument;
  const observer = new ResizeObserver(() => callback(doc?.body.offsetHeight || 0));
  Object.assign(iframe.style, IFRAME);
  Object.assign(doc?.body.style || {}, BODY);
  doc?.head.insertAdjacentHTML("beforeend", '<meta name="text-scale" content="scale">');
  doc?.documentElement.style.setProperty("font", "-apple-system-body");
  doc?.body.insertAdjacentText("beforeend", ".".repeat(1e3));
  observer.observe(doc?.body || iframe);
  resize();
  return () => {
    observer.disconnect();
    iframe.ownerDocument.defaultView?.removeEventListener("resize", resize);
    iframe.remove();
  };
}

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-font-size.mjs
var TUI_FONT_SIZE_HANDLER = new InjectionToken(ngDevMode ? "TUI_FONT_SIZE_HANDLER" : "");
var TuiFontSize = class _TuiFontSize {
  constructor() {
    this.handler = inject(TUI_FONT_SIZE_HANDLER, {
      optional: true
    });
    this.enabled = !inject(_TuiFontSize, {
      optional: true,
      skipSelf: true
    }) && isPlatformBrowser(inject(PLATFORM_ID)) && typeof ResizeObserver !== "undefined";
    this.nothing = inject(DestroyRef).onDestroy(this.enabled && this.handler ? tuiFontSizeWatcher(this.handler, inject(DOCUMENT).createElement("iframe")) : EMPTY_FUNCTION);
  }
  static {
    this.ɵfac = function TuiFontSize_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFontSize)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFontSize
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFontSize, [{
    type: Directive
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-obscured.mjs
var TuiObscuredService = class _TuiObscuredService extends Observable {
  constructor() {
    super((subscriber) => this.obscured$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.obscured$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler()), map(() => tuiGetElementObscures(this.el)), startWith(null), distinctUntilChanged(), tuiZoneOptimized());
  }
  static {
    this.ɵfac = function TuiObscuredService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiObscuredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiObscuredService,
      factory: _TuiObscuredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiObscured = class _TuiObscured {
  constructor() {
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.obscured$ = inject(TuiObscuredService, {
      self: true
    }).pipe(map((by) => !!by?.every((el) => !this.activeZone?.contains(el))));
    this.tuiObscuredEnabled = input();
    this.tuiObscured$ = toObservable(this.tuiObscuredEnabled).pipe(tuiIfMap(() => this.obscured$));
    this.tuiObscured = outputFromObservable(this.tuiObscured$);
  }
  static {
    this.ɵfac = function TuiObscured_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiObscured)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiObscured,
      selectors: [["", "tuiObscured", ""]],
      inputs: {
        tuiObscuredEnabled: [1, "tuiObscuredEnabled"]
      },
      outputs: {
        tuiObscured: "tuiObscured"
      },
      features: [ɵɵProvidersFeature([TuiObscuredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscured, [{
    type: Directive,
    args: [{
      selector: "[tuiObscured]",
      providers: [TuiObscuredService]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-vcr.mjs
var TuiVCR = class _TuiVCR {
  constructor() {
    this.vcr = inject(ViewContainerRef);
  }
  static {
    this.ɵfac = function TuiVCR_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVCR)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiVCR,
      selectors: [["", "tuiVCR", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVCR, [{
    type: Directive,
    args: [{
      selector: "[tuiVCR]"
    }]
  }], null, null);
})();

// node_modules/.pnpm/@taiga-ui+polymorpheus@5.0._e3499e9941f3368e195af870326272f7/node_modules/@taiga-ui/polymorpheus/fesm2022/taiga-ui-polymorpheus.mjs
var POLYMORPHEUS_CONTEXT = new InjectionToken(ngDevMode ? "POLYMORPHEUS_CONTEXT" : "");
function provideContext(useValue) {
  return {
    provide: POLYMORPHEUS_CONTEXT,
    useValue
  };
}
function injectContext(options = {}) {
  return inject(POLYMORPHEUS_CONTEXT, options);
}
var PolymorpheusComponent = class {
  constructor(component, i) {
    this.component = component;
    this.i = i;
  }
  createInjector(injector, useValue) {
    return Injector.create({
      parent: this.i || injector,
      providers: useValue == null ? [] : [provideContext(useValue)]
    });
  }
};
var PolymorpheusContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
  get polymorpheusOutlet() {
    return this.$implicit;
  }
};
function isPrimitive(value) {
  return Object(value) !== value;
}
var PolymorpheusTemplate = class _PolymorpheusTemplate {
  constructor(template = inject(TemplateRef, {
    self: true
  }), cdr = inject(ChangeDetectorRef)) {
    this.template = template;
    this.cdr = cdr;
    this.polymorpheus = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  check() {
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function PolymorpheusTemplate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolymorpheusTemplate)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PolymorpheusTemplate,
      selectors: [["ng-template", "polymorpheus", ""]],
      inputs: {
        polymorpheus: "polymorpheus"
      },
      exportAs: ["polymorpheus"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
    type: Directive,
    args: [{
      selector: "ng-template[polymorpheus]",
      inputs: ["polymorpheus"],
      exportAs: "polymorpheus"
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var PolymorpheusOutlet = class _PolymorpheusOutlet {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.i = inject(INJECTOR$1);
    this.t = inject(TemplateRef);
    this.content = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  ngOnChanges({
    content
  }) {
    const context = this.getContext();
    const component = isComponent(this.content);
    this.update();
    this.c?.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = new Proxy(ensureContext(context), {
      get: (_, key) => ensureContext(component ? this.context : this.getContext())?.[key]
    });
    if (isComponent(this.content)) {
      this.process(this.content, context == null ? void 0 : proxy);
      this.update();
    } else if ((context instanceof PolymorpheusContext && context.$implicit) != null) {
      this.vcr.createEmbeddedView(this.template, proxy, {
        injector: this.i
      });
    }
  }
  ngDoCheck() {
    if (isDirective(this.content)) {
      this.content.check();
    }
  }
  get template() {
    if (isDirective(this.content)) {
      return this.content.template;
    }
    return this.content instanceof TemplateRef ? this.content : this.t;
  }
  getContext() {
    return isTemplate(this.content) || isComponent(this.content) ? this.context : new PolymorpheusContext(typeof this.content === "function" ? this.content(this.context ?? {}) : this.content);
  }
  process(content, proxy) {
    this.c = this.vcr.createComponent(content.component, {
      injector: content.createInjector(this.i, proxy)
    });
  }
  update() {
    if (typeof this.context !== "object" || !isComponent(this.content)) {
      return;
    }
    const {
      inputs = []
    } = reflectComponentType(this.content.component) || {};
    for (const {
      templateName
    } of inputs) {
      if (templateName in (this.context ?? {})) {
        this.c?.setInput(templateName, this.context?.[templateName]);
      }
    }
  }
  static {
    this.ɵfac = function PolymorpheusOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolymorpheusOutlet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PolymorpheusOutlet,
      selectors: [["", "polymorpheusOutlet", ""]],
      inputs: {
        content: [0, "polymorpheusOutlet", "content"],
        context: [0, "polymorpheusOutletContext", "context"]
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutlet, [{
    type: Directive,
    args: [{
      selector: "[polymorpheusOutlet]",
      inputs: ["content: polymorpheusOutlet", "context: polymorpheusOutletContext"]
    }]
  }], null, null);
})();
function isDirective(content) {
  return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
  return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
  return isDirective(content) || content instanceof TemplateRef;
}
function ensureContext(context) {
  return isPrimitive(context) ? new PolymorpheusContext(context) : context;
}

// node_modules/.pnpm/@taiga-ui+cdk@5.9.0_941840e08a831c990dd00a60552c39e5/node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-portals.mjs
var TuiPortal = class _TuiPortal {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(service) {
    this.service = service;
    this.injector = inject(INJECTOR$1);
  }
  open(content, options = {}) {
    return new Observable(($implicit) => this.add(new PolymorpheusComponent(this.component, Injector.create({
      parent: this.injector,
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue: __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
          content,
          $implicit,
          createdAt: Date.now(),
          id: tuiGenerateId(),
          completeWith: (v) => {
            $implicit.next(v);
            $implicit.complete();
          }
        })
      }]
    }))));
  }
  add(component) {
    const ref = this.service.add(component);
    return () => ref.destroy();
  }
  static {
    this.ɵfac = function TuiPortal_Factory(__ngFactoryType__) {
      ɵɵinvalidFactory();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPortal,
      factory: _TuiPortal.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortal, [{
    type: Injectable
  }], () => [{
    type: void 0
  }], null);
})();
function tuiAsPortal(portal) {
  return tuiProvide(TuiPortal, portal);
}
var TuiPortalDirective = class _TuiPortalDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPortal);
    this.options = input({});
    this.open = input(false);
    this.openChange = outputFromObservable(toObservable(this.open).pipe(tuiIfMap(() => this.service.open(this, this.options()).pipe(ignoreElements(), endWith(false))), share()));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPortalDirective_BaseFactory;
      return function TuiPortalDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPortalDirective_BaseFactory || (ɵTuiPortalDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPortalDirective)))(__ngFactoryType__ || _TuiPortalDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPortalDirective,
      inputs: {
        options: [1, "options"],
        open: [1, "open"]
      },
      outputs: {
        openChange: "openChange"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalDirective, [{
    type: Directive
  }], null, null);
})();
var TuiPortalService = class _TuiPortalService {
  attach(host) {
    this.host = host;
  }
  add(content, context) {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return content instanceof PolymorpheusComponent ? this.host.addComponent(content) : this.host.addTemplate(content, context);
  }
  static {
    this.ɵfac = function TuiPortalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPortalService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPortalService,
      factory: _TuiPortalService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalService, [{
    type: Injectable
  }], null, null);
})();
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortals component; perhaps you forgot to wrap your application with tui-root." : "");
  }
};
var TuiPortals = class _TuiPortals {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.anchor = viewChild.required(TuiVCR);
    inject(TuiPortalService).attach(this);
  }
  addComponent(component) {
    const injector = component.createInjector(this.injector);
    const ref = this.anchor().vcr.createComponent(component.component, {
      injector
    });
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplate(templateRef, context) {
    return this.anchor().vcr.createEmbeddedView(templateRef, context);
  }
  static {
    this.ɵfac = function TuiPortals_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPortals)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPortals,
      viewQuery: function TuiPortals_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.anchor, TuiVCR, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortals, [{
    type: Directive
  }], () => [], null);
})();

export {
  tuiFocusedIn,
  tuiIsFocusable,
  tuiGetClosestFocusable,
  tuiGetFocused,
  tuiIsFocused,
  tuiIsFocusedIn,
  tuiMoveFocus,
  TUI_REMOVED_ELEMENT,
  TUI_ACTIVE_ELEMENT,
  TUI_FALLBACK_VALUE,
  tuiFallbackValueProvider,
  TUI_PLATFORM,
  TUI_WINDOW_SIZE,
  TuiActiveZone,
  TUI_FONT_SIZE_HANDLER,
  TuiFontSize,
  TuiObscuredService,
  TuiObscured,
  TuiVCR,
  injectContext,
  PolymorpheusComponent,
  PolymorpheusTemplate,
  PolymorpheusOutlet,
  TuiPortal,
  tuiAsPortal,
  TuiPortalDirective,
  TuiPortalService,
  TuiNoHostException,
  TuiPortals
};
//# sourceMappingURL=chunk-KA6RXUAL.js.map
