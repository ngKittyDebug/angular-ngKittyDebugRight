import {
  CHAR_NO_BREAK_SPACE,
  TuiAnimated,
  WA_ANIMATION_FRAME,
  WA_IS_IOS,
  WA_LOCAL_STORAGE,
  WA_WINDOW,
  tuiCreateOptions,
  tuiGetElementOffset,
  tuiInjectElement,
  tuiProvide,
  tuiProvideOptions,
  tuiScrollFrom,
  tuiTypedFromEvent,
  tuiWindowSize,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-YH3GNO5H.js";
import {
  AsyncPipe
} from "./chunk-WBUXHXP6.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Injectable,
  input,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-UWXEFF5S.js";
import {
  takeUntilDestroyed
} from "./chunk-ETGSZUYA.js";
import {
  DOCUMENT,
  DestroyRef,
  InjectionToken,
  computed,
  effect,
  inject,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-6UR4NGDW.js";
import {
  BehaviorSubject,
  Observable,
  distinctUntilChanged,
  filter,
  from,
  fromEvent,
  map,
  merge,
  of,
  share,
  startWith,
  switchMap,
  takeUntil,
  throttleTime,
  timer
} from "./chunk-3NTDFDXB.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/.pnpm/@taiga-ui+i18n@5.5.0_@angul_f135b748fd9d0f08ba490c7f2250ad0a/node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-languages-english.mjs
var TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Number", "Card number"],
  cardExpiry: ["Expires", "Valid through"]
};
var TUI_ENGLISH_LANGUAGE_ADDON_DOC = {
  demoTexts: ["Dark mode", "Background", "Value"],
  preview: "Preview",
  menuText: "Menu",
  searchText: "Search",
  seeAlsoText: "See also",
  tocText: "On this page",
  sourceCodeText: "Source code"
};
var TUI_ENGLISH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Solid color", "Gradient"],
  toolbarTools: {
    undo: "Undo",
    redo: "Redo",
    font: "Font",
    fontStyle: "Font style",
    fontSize: "Font size",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    strikeThrough: "Strike through",
    justify: "Justify",
    justifyLeft: "Justify left",
    justifyCenter: "Justify center",
    justifyRight: "Justify right",
    justifyFull: "Justify full",
    list: "List",
    indent: "Indent",
    outdent: "Outdent",
    unorderedList: "Unordered list",
    orderedList: "Ordered list",
    quote: "Quote",
    foreColor: "Color",
    backColor: "Background color",
    hiliteColor: "Highlight color",
    clear: "Clear",
    link: "Link",
    attach: "Attach file",
    tex: "Insert TeX",
    code: "Code",
    image: "Insert image",
    insertHorizontalRule: "Insert horizontal rule",
    superscript: "Superscript",
    subscript: "Subscript",
    insertTable: "Insert table",
    insertGroup: "Insert group",
    hiliteGroup: "Hilite group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Insert column before", "Insert column after"],
    ["Insert row before", "Insert row after"],
    ["Delete column", "Delete row"]
  ],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    large: "Large",
    normal: "Normal",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_ENGLISH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Show/Hide",
  paginationTexts: {
    pages: "Pages",
    linesPerPage: "Lines per page",
    of: "of"
  }
};
var TUI_ENGLISH_LANGUAGE_COUNTRIES = {
  AD: "Andorra",
  AE: "United Arab Emirates",
  AF: "Afghanistan",
  AG: "Antigua & Barbuda",
  AI: "Anguilla",
  AL: "Albania",
  AM: "Armenia",
  AO: "Angola",
  AR: "Argentina",
  AT: "Austria",
  AU: "Australia",
  AW: "Aruba",
  AZ: "Azerbaijan",
  BA: "Bosnia & Herzegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BH: "Bahrain",
  BI: "Burundi",
  BJ: "Benin",
  BL: "St. Barthélemy",
  BM: "Bermuda",
  BN: "Brunei",
  BO: "Bolivia",
  BQ: "Caribbean Netherlands",
  BR: "Brazil",
  BS: "Bahamas",
  BT: "Bhutan",
  BW: "Botswana",
  BY: "Belarus",
  BZ: "Belize",
  CA: "Canada",
  CD: "Congo - Kinshasa",
  CF: "Central African Republic",
  CG: "Congo - Brazzaville",
  CH: "Switzerland",
  CI: "Côte d’Ivoire",
  CL: "Chile",
  CM: "Cameroon",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  CV: "Cape Verde",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  DE: "Germany",
  DJ: "Djibouti",
  DK: "Denmark",
  DM: "Dominica",
  DO: "Dominican Republic",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  ER: "Eritrea",
  ES: "Spain",
  ET: "Ethiopia",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falkland Islands",
  FM: "Federated States of Micronesia",
  FR: "France",
  GA: "Gabon",
  GB: "United Kingdom",
  GD: "Grenada",
  GE: "Georgia",
  GF: "French Guiana",
  GH: "Ghana",
  GI: "Gibraltar",
  GL: "Greenland",
  GM: "Gambia",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Equatorial Guinea",
  GR: "Greece",
  GT: "Guatemala",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HK: "Hong Kong",
  HN: "Honduras",
  HR: "Croatia",
  HT: "Haiti",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IN: "India",
  IQ: "Iraq",
  IR: "Iran",
  IS: "Iceland",
  IT: "Italy",
  JM: "Jamaica",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kyrgyzstan",
  KH: "Cambodia",
  KM: "Comoros",
  KN: "St. Kitts & Nevis",
  KP: "North Korea",
  KR: "South Korea",
  KW: "Kuwait",
  KY: "Cayman Islands",
  KZ: "Kazakhstan",
  LA: "Laos",
  LB: "Lebanon",
  LC: "St. Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  LY: "Libya",
  MA: "Morocco",
  MC: "Monaco",
  MD: "Moldova",
  ME: "Montenegro",
  MF: "St. Martin",
  MG: "Madagascar",
  MK: "North Macedonia",
  ML: "Mali",
  MM: "Myanmar (Burma)",
  MN: "Mongolia",
  MO: "Macao",
  MQ: "Martinique",
  MR: "Mauritania",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldives",
  MW: "Malawi",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NA: "Namibia",
  NC: "New Caledonia",
  NE: "Niger",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NP: "Nepal",
  NZ: "New Zealand",
  OM: "Oman",
  PA: "Panama",
  PE: "Peru",
  PF: "French Polynesia",
  PG: "Papua New Guinea",
  PH: "Philippines",
  PK: "Pakistan",
  PL: "Poland",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russia",
  RW: "Rwanda",
  SA: "Saudi Arabia",
  SB: "Solomon Islands",
  SC: "Seychelles",
  SD: "Sudan",
  SE: "Sweden",
  SG: "Singapore",
  SH: "St. Helena",
  SI: "Slovenia",
  SK: "Slovakia",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Suriname",
  ST: "São Tomé & Príncipe",
  SV: "El Salvador",
  SX: "Sint Maarten",
  SY: "Syria",
  SZ: "Eswatini",
  TC: "Turks & Caicos Islands",
  TD: "Chad",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tajikistan",
  TL: "Timor-Leste",
  TM: "Turkmenistan",
  TN: "Tunisia",
  TO: "Tonga",
  TR: "Türkiye",
  TT: "Trinidad & Tobago",
  TW: "Taiwan",
  TZ: "Tanzania",
  UA: "Ukraine",
  UG: "Uganda",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VC: "St. Vincent & Grenadines",
  VE: "Venezuela",
  VG: "British Virgin Islands",
  VN: "Vietnam",
  VU: "Vanuatu",
  WS: "Samoa",
  XK: "Kosovo",
  YE: "Yemen",
  YT: "Mayotte",
  ZA: "South Africa",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  AC: "Ascension Island",
  AS: "American Samoa",
  AX: "Åland Islands",
  CC: "Cocos (Keeling) Islands",
  CK: "Cook Islands",
  CX: "Christmas Island",
  EH: "Western Sahara",
  FO: "Faroe Islands",
  GG: "Guernsey",
  GU: "Guam",
  IM: "Isle of Man",
  JE: "Jersey",
  IO: "British Indian Ocean Territory",
  KI: "Kiribati",
  MH: "Marshall Islands",
  MP: "Northern Mariana Islands",
  NF: "Norfolk Island",
  NR: "Nauru",
  NU: "Niue",
  PM: "Saint Pierre and Miquelon",
  PR: "Puerto Rico",
  PS: "Palestine",
  SJ: "Svalbard and Jan Mayen",
  SS: "South Sudan",
  TA: "Tristan da Cunha",
  TK: "Tokelau",
  TV: "Tuvalu",
  VA: "Holy See",
  VI: "Virgin Islands",
  WF: "Wallis and Futuna"
};
var TUI_ENGLISH_LANGUAGE_CORE = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  close: "Close",
  back: "Back",
  clear: "Clear",
  nothingFoundMessage: "Nothing found",
  defaultErrorMessage: "Value is invalid",
  spinTexts: ["Previous", "Next"],
  shortWeekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  countries: TUI_ENGLISH_LANGUAGE_COUNTRIES
};
var TUI_ENGLISH_LANGUAGE_KIT = {
  cancel: "Cancel",
  done: "Done",
  more: "More",
  otherDate: "Other date...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Choose day", "Choose range", "Choose days"],
  range: ["from", "to"],
  countTexts: ["Plus", "Minus"],
  time: {
    "MM:SS": "MM:SS",
    "HH:MM": "HH:MM",
    "HH:MM AA": "HH:MM AA",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS AA": "HH:MM:SS AA",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS",
    "HH:MM:SS.MSS AA": "HH:MM:SS.MSS AA",
    "HH AA": "HH AA",
    HH: "HH",
    "MM:SS.MSS": "MM:SS.MSS",
    "SS.MSS": "SS.MSS"
  },
  dateTexts: {
    "dd/mm/yyyy": "DD/MM/YYYY",
    "mm/dd/yyyy": "MM/DD/YYYY",
    "yyyy/mm/dd": "YYYY/MM/DD"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Show password", "Hide password"],
  copyTexts: ["Copy", "Copied"],
  shortCalendarMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  pagination: ["Previous page", "Next page"],
  fileTexts: {
    loadingError: "Upload failed",
    preview: "Preview",
    remove: "Remove"
  },
  inputFileTexts: {
    defaultLabelSingle: "or drop it here",
    defaultLabelMultiple: "or drop them here",
    defaultLinkSingle: "Choose a file",
    defaultLinkMultiple: "Choose files",
    maxSizeRejectionReason: "File is larger than",
    formatRejectionReason: "Wrong file type",
    drop: "Drop file here",
    dropMultiple: "Drop files here"
  },
  multiSelectTexts: {
    all: "Select all",
    none: "Select none"
  },
  confirm: {
    yes: "Yes",
    no: "No"
  },
  previewTexts: { rotate: "Rotate" },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  },
  phoneSearch: "Type country or code",
  dayRangePeriods: [
    "For all the time",
    "Today",
    "Yesterday",
    "Current week",
    "Current month",
    "Previous month"
  ]
};
var TUI_ENGLISH_LANGUAGE_LAYOUT = {
  inputSearch: {
    popular: "Popular",
    history: "Recent",
    placeholder: "Type query",
    hotkey: "to search",
    all: "All",
    empty: "Nothing found"
  }
};
var TUI_ENGLISH_LANGUAGE = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
  name: "english"
}, TUI_ENGLISH_LANGUAGE_CORE), TUI_ENGLISH_LANGUAGE_KIT), TUI_ENGLISH_LANGUAGE_ADDON_TABLE), TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE), TUI_ENGLISH_LANGUAGE_ADDON_EDITOR), TUI_ENGLISH_LANGUAGE_ADDON_DOC), TUI_ENGLISH_LANGUAGE_LAYOUT);

// node_modules/.pnpm/@taiga-ui+i18n@5.5.0_@angul_f135b748fd9d0f08ba490c7f2250ad0a/node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-tokens.mjs
var TUI_DEFAULT_LANGUAGE = new InjectionToken(ngDevMode ? "TUI_DEFAULT_LANGUAGE" : "", { factory: () => TUI_ENGLISH_LANGUAGE });
var TUI_LANGUAGE = new InjectionToken(ngDevMode ? "TUI_LANGUAGE" : "", { factory: () => signal(inject(TUI_DEFAULT_LANGUAGE)) });
var TUI_LANGUAGE_LOADER = new InjectionToken(ngDevMode ? "TUI_LANGUAGE_LOADER" : "");
var TUI_LANGUAGE_STORAGE_KEY = new InjectionToken(ngDevMode ? "TUI_LANGUAGE_STORAGE_KEY" : "", { factory: () => "tuiLanguage" });

// node_modules/.pnpm/@taiga-ui+i18n@5.5.0_@angul_f135b748fd9d0f08ba490c7f2250ad0a/node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-utils.mjs
function tuiExtractI18n(key) {
  return (language = inject(TUI_LANGUAGE)) => computed(() => language()[key]);
}
function normalizeCommonJSImport(importPromise) {
  return __async(this, null, function* () {
    return importPromise.then((m) => m.default || m);
  });
}
function tuiLoadLanguage(language, loader) {
  return from(normalizeCommonJSImport(loader(language))).pipe(map((module) => module?.[`TUI_${language.toUpperCase()}_LANGUAGE`]));
}
function tuiAsyncLoadLanguage(language, loader, fallback) {
  return language && loader ? tuiLoadLanguage(language, loader) : of(fallback);
}
var TuiLanguageSwitcherService = class _TuiLanguageSwitcherService extends BehaviorSubject {
  constructor() {
    super(tuiAsyncLoadLanguage(inject(WA_LOCAL_STORAGE)?.getItem(inject(TUI_LANGUAGE_STORAGE_KEY)) || null, inject(TUI_LANGUAGE_LOADER, {
      optional: true
    }), inject(TUI_DEFAULT_LANGUAGE)));
    this.fallback = inject(TUI_DEFAULT_LANGUAGE);
    this.key = inject(TUI_LANGUAGE_STORAGE_KEY);
    this.storage = inject(WA_LOCAL_STORAGE);
    this.loader = inject(TUI_LANGUAGE_LOADER, {
      optional: true
    });
  }
  get language() {
    return this.storage?.getItem(this.key) || this.fallback.name;
  }
  setLanguage(language) {
    this.storage?.setItem(this.key, language);
    this.next(tuiAsyncLoadLanguage(language, this.loader, this.fallback));
  }
  clear() {
    this.storage?.removeItem(this.key);
    this.next(of(this.fallback));
  }
  static {
    this.ɵfac = function TuiLanguageSwitcherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLanguageSwitcherService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiLanguageSwitcherService,
      factory: _TuiLanguageSwitcherService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLanguageSwitcherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-tokens.mjs
var TUI_REDUCED_MOTION = new InjectionToken(ngDevMode ? "TUI_REDUCED_MOTION" : "", {
  factory: () => inject(DOCUMENT).defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
});
var TUI_ANIMATIONS_SPEED = new InjectionToken(ngDevMode ? "TUI_ANIMATIONS_SPEED" : "", { factory: () => inject(TUI_REDUCED_MOTION) ? 0 : 1 });
var TUI_ASSETS_PATH = new InjectionToken(ngDevMode ? "TUI_ASSETS_PATH" : "", {
  factory: () => "assets/taiga-ui/icons"
});
function tuiAssetsPathProvider(useValue) {
  return {
    provide: TUI_ASSETS_PATH,
    useValue
  };
}
var TUI_AUXILIARY = new InjectionToken(ngDevMode ? "TUI_AUXILIARY" : "", {
  factory: () => null
});
function tuiAsAuxiliary(x) {
  return tuiProvide(TUI_AUXILIARY, x);
}
var TUI_MEDIA = new InjectionToken(ngDevMode ? "TUI_MEDIA" : "", {
  factory: () => ({
    mobile: 768,
    desktopSmall: 1280,
    desktopLarge: Infinity
  })
});
var TUI_BREAKPOINT = new InjectionToken(ngDevMode ? "TUI_BREAKPOINT" : "", {
  factory: () => {
    const size = tuiWindowSize(inject(WA_WINDOW));
    const media = inject(TUI_MEDIA);
    const sorted = Object.values(media).sort((a, b) => a - b);
    const invert = Object.keys(media).reduce((ret, key) => __spreadProps(__spreadValues({}, ret), {
      [media[key]]: key
    }), {});
    return computed(() => {
      const { width } = size();
      const key = sorted.find((size2) => size2 > width);
      const index = key || sorted[sorted.length - 1] || 0;
      return invert[index] ?? "desktopLarge";
    });
  }
});
var COMMON_ICONS = {
  check: "@tui.check",
  close: "@tui.x",
  error: "@tui.circle-alert",
  more: "@tui.chevron-right",
  search: "@tui.search",
  ellipsis: "@tui.ellipsis",
  decrement: "@tui.chevron-left",
  increment: "@tui.chevron-right"
};
var [TUI_COMMON_ICONS, tuiCommonIconsProvider] = tuiCreateOptions(COMMON_ICONS);
var TUI_DARK_MODE_DEFAULT_KEY = "tuiDark";
var TUI_DARK_MODE_KEY = new InjectionToken(ngDevMode ? "TUI_DARK_MODE_KEY" : "", { factory: () => TUI_DARK_MODE_DEFAULT_KEY });
var TUI_DARK_MODE = new InjectionToken(ngDevMode ? "TUI_DARK_MODE" : "", {
  factory: () => {
    let automatic = true;
    const storage = inject(WA_LOCAL_STORAGE);
    const key = inject(TUI_DARK_MODE_KEY);
    const saved = storage?.getItem(key);
    const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
    const result = signal(Boolean((saved && JSON.parse(saved)) ?? media.matches));
    fromEvent(media, "change").pipe(filter(() => !storage?.getItem(key)), takeUntilDestroyed()).subscribe(() => {
      automatic = true;
      result.set(media.matches);
    });
    untracked(() => {
      effect(() => {
        const value = String(result());
        if (automatic) {
          automatic = false;
        } else {
          storage?.setItem(key, value);
        }
      });
    });
    return Object.assign(result, {
      reset: () => {
        storage?.removeItem(key);
        automatic = true;
        result.set(media.matches);
      }
    });
  }
});
var TUI_DEFAULT_DATE_FORMAT = {
  mode: "dd/mm/yyyy",
  separator: "."
};
var TUI_DATE_FORMAT = new InjectionToken(ngDevMode ? "TUI_DATE_FORMAT" : "", { factory: () => signal(TUI_DEFAULT_DATE_FORMAT) });
function tuiDateFormatProvider(options) {
  return {
    provide: TUI_DATE_FORMAT,
    useFactory: () => {
      const parent = inject(TUI_DATE_FORMAT, { optional: true, skipSelf: true });
      return computed(() => __spreadValues(__spreadValues({}, parent?.() || TUI_DEFAULT_DATE_FORMAT), options));
    }
  };
}
var TUI_MONTHS = new InjectionToken(ngDevMode ? "TUI_MONTHS" : "", {
  factory: tuiExtractI18n("months")
});
var TUI_CLOSE_WORD = new InjectionToken(ngDevMode ? "TUI_CLOSE_WORD" : "", {
  factory: tuiExtractI18n("close")
});
var TUI_BACK_WORD = new InjectionToken(ngDevMode ? "TUI_BACK_WORD" : "", {
  factory: tuiExtractI18n("back")
});
var TUI_CLEAR_WORD = new InjectionToken(ngDevMode ? "TUI_CLEAR_WORD" : "", {
  factory: tuiExtractI18n("clear")
});
var TUI_NOTHING_FOUND_MESSAGE = new InjectionToken(ngDevMode ? "TUI_NOTHING_FOUND_MESSAGE" : "", { factory: tuiExtractI18n("nothingFoundMessage") });
var TUI_DEFAULT_ERROR_MESSAGE = new InjectionToken(ngDevMode ? "TUI_DEFAULT_ERROR_MESSAGE" : "", { factory: tuiExtractI18n("defaultErrorMessage") });
var TUI_SPIN_TEXTS = new InjectionToken(ngDevMode ? "TUI_SPIN_TEXTS" : "", {
  factory: tuiExtractI18n("spinTexts")
});
var TUI_SHORT_WEEK_DAYS = new InjectionToken(ngDevMode ? "TUI_SHORT_WEEK_DAYS" : "", { factory: tuiExtractI18n("shortWeekDays") });
var TUI_ICON_START = new InjectionToken(ngDevMode ? "TUI_ICON_START" : "", {
  factory: () => ""
});
var TUI_ICON_END = new InjectionToken(ngDevMode ? "TUI_ICON_END" : "", {
  factory: () => ""
});
var TUI_ICON_REGISTRY = new InjectionToken(ngDevMode ? "TUI_ICON_REGISTRY" : "", { factory: () => ({}) });
function tuiIconsProvider(icons) {
  return {
    provide: TUI_ICON_REGISTRY,
    useFactory: () => __spreadValues(__spreadValues({}, inject(TUI_ICON_REGISTRY, { skipSelf: true, optional: true }) || {}), Object.fromEntries(Object.entries(icons).map(([key, value]) => [
      key,
      `"data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}"`
    ])))
  };
}
var TUI_ICON_RESOLVER = new InjectionToken(ngDevMode ? "TUI_ICON_RESOLVER" : "", {
  factory: () => {
    const path = inject(TUI_ASSETS_PATH);
    return (icon) => `${path}/${icon.replace(/@[a-z]+\./i, "").replaceAll(".", "/")}.svg`;
  }
});
function tuiGetIconMode(icon) {
  return icon?.match(/@([^.]*)\./)?.[1] || icon || void 0;
}
function tuiInjectIconResolver() {
  const icons = inject(TUI_ICON_REGISTRY);
  const resolver = inject(TUI_ICON_RESOLVER);
  return (icon) => {
    if (!icon || icon.includes("/")) {
      return icon.replace(/@[a-z]+\./i, "");
    }
    return icon.startsWith("@font.") ? icon.replace("@font.", "") : icons[icon] ?? resolver(icon);
  };
}
function tuiIconResolverProvider(useValue) {
  return { provide: TUI_ICON_RESOLVER, useValue };
}
var TUI_DEFAULT_NUMBER_FORMAT = {
  precision: Number.NaN,
  decimalSeparator: ".",
  thousandSeparator: CHAR_NO_BREAK_SPACE,
  rounding: "truncate",
  decimalMode: "pad",
  negativePattern: "prefixFirst"
};
var TUI_NUMBER_FORMAT = new InjectionToken(ngDevMode ? "TUI_NUMBER_FORMAT" : "", { factory: () => signal(TUI_DEFAULT_NUMBER_FORMAT) });
function tuiNumberFormatProvider(options) {
  return {
    provide: TUI_NUMBER_FORMAT,
    useFactory: () => {
      const parent = inject(TUI_NUMBER_FORMAT, { optional: true, skipSelf: true });
      return computed(() => __spreadValues(__spreadValues({}, parent?.() || TUI_DEFAULT_NUMBER_FORMAT), options));
    }
  };
}
var TUI_SELECTION_STREAM = new InjectionToken(ngDevMode ? "TUI_SELECTION_STREAM" : "", {
  factory: () => {
    const doc = inject(DOCUMENT);
    return merge(tuiTypedFromEvent(doc, "selectionchange"), tuiTypedFromEvent(doc, "mouseup"), tuiTypedFromEvent(doc, "mousedown").pipe(switchMap(() => tuiTypedFromEvent(doc, "mousemove").pipe(takeUntil(tuiTypedFromEvent(doc, "mouseup"))))), tuiTypedFromEvent(doc, "keydown"), tuiTypedFromEvent(doc, "keyup")).pipe(share());
  }
});
var TUI_TEXTFIELD_VALUE = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_VALUE" : "");
var TUI_VALIDATION_ERRORS = new InjectionToken(ngDevMode ? "TUI_VALIDATION_ERRORS" : "", { factory: () => ({}) });
var tuiValidationErrorsProvider = (valueOrFactory) => tuiProvideOptions(TUI_VALIDATION_ERRORS, valueOrFactory, {});
var TUI_VIEWPORT = new InjectionToken(ngDevMode ? "TUI_VIEWPORT" : "", {
  factory: () => {
    const win = inject(WA_WINDOW);
    return {
      type: "viewport",
      getClientRect() {
        const { height = 0, offsetTop = 0 } = win.visualViewport || {};
        const rect = {
          top: 0,
          left: 0,
          right: win.innerWidth,
          bottom: win.innerHeight,
          width: win.innerWidth,
          height: height + offsetTop || win.innerHeight,
          x: 0,
          y: 0
        };
        return __spreadProps(__spreadValues({}, rect), {
          toJSON: () => JSON.stringify(rect)
        });
      }
    };
  }
});
function tuiAsViewport(accessor) {
  return tuiProvide(TUI_VIEWPORT, accessor);
}

// node_modules/.pnpm/@taiga-ui+core@5.9.0_da693f7c59ee2a42098bfaf4c4a98129/node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-scrollbar.mjs
function TuiScrollControls_Conditional_0_Template(rf, ctx) {
}
function TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template_div_mousedown_capture_prevent_0_listener() {
      return 0;
    });
    ɵɵelement(1, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext();
    ɵɵclassProp("t-bar_has-horizontal", bars_r1[1]);
  }
}
function TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template_div_mousedown_capture_prevent_0_listener() {
      return 0;
    });
    ɵɵelement(1, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext();
    ɵɵclassProp("t-bar_has-vertical", bars_r1[0]);
  }
}
function TuiScrollControls_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiScrollControls_Conditional_1_Conditional_0_Conditional_0_Template, 2, 2, "div", 0);
    ɵɵconditionalCreate(1, TuiScrollControls_Conditional_1_Conditional_0_Conditional_1_Template, 2, 2, "div", 1);
  }
  if (rf & 2) {
    const bars_r1 = ctx;
    ɵɵconditional(bars_r1[0] ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(bars_r1[1] ? 1 : -1);
  }
}
function TuiScrollControls_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiScrollControls_Conditional_1_Conditional_0_Template, 2, 2);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional((tmp_1_0 = ɵɵpipeBind1(1, 1, ctx_r1.refresh$)) ? 0 : -1, tmp_1_0);
  }
}
var _c0 = ["*"];
function TuiScrollbar_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("t-hover-mode", ctx_r0.options.mode === "hover");
  }
}
var SCROLL_REF_SELECTOR = "[tuiScrollRef]";
var TUI_SCROLL_REF = new InjectionToken(ngDevMode ? "TUI_SCROLL_REF" : "", {
  factory: () => new ElementRef(inject(DOCUMENT).documentElement)
});
var TuiScrollRef = class _TuiScrollRef {
  static {
    this.ɵfac = function TuiScrollRef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollRef)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollRef,
      selectors: [["", "tuiScrollRef", ""]],
      features: [ɵɵProvidersFeature([tuiProvide(TUI_SCROLL_REF, ElementRef)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRef, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollRef]",
      providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)]
    }]
  }], null, null);
})();
var TuiScrollbarService = class _TuiScrollbarService extends Observable {
  constructor() {
    super((subscriber) => this.scroll$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.element = inject(TUI_SCROLL_REF).nativeElement;
    this.scroll$ = merge(tuiTypedFromEvent(this.el.parentElement, "mousedown").pipe(filter(({
      target
    }) => target !== this.el), map((event) => this.getScrolled(event, 0.5, 0.5))), tuiTypedFromEvent(this.el, "mousedown").pipe(tuiZonefree(), switchMap((event) => {
      const {
        ownerDocument
      } = this.el;
      const rect = this.el.getBoundingClientRect();
      const vertical = getOffsetVertical(event, rect);
      const horizontal = getOffsetHorizontal(event, rect);
      return tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event2) => this.getScrolled(event2, vertical, horizontal)), takeUntil(tuiTypedFromEvent(ownerDocument, "mouseup")));
    })));
  }
  getScrolled({
    clientY,
    clientX
  }, offsetY, offsetX) {
    const {
      offsetHeight,
      offsetWidth
    } = this.el;
    const {
      top,
      left,
      right,
      width,
      height
    } = this.el.parentElement.getBoundingClientRect();
    const rtl = this.el.matches('[dir="rtl"] :scope');
    const inline = rtl ? right : left;
    const multiplier = rtl ? -1 : 1;
    const maxTop = this.element.scrollHeight - height;
    const maxLeft = this.element.scrollWidth - width;
    const scrolledTop = (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);
    const scrolledLeft = (clientX - inline - offsetWidth * offsetX * multiplier) / (width - offsetWidth);
    return [maxTop * scrolledTop, maxLeft * scrolledLeft];
  }
  static {
    this.ɵfac = function TuiScrollbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbarService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiScrollbarService,
      factory: _TuiScrollbarService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarService, [{
    type: Injectable
  }], () => [], null);
})();
function getOffsetVertical({
  clientY
}, {
  top,
  height
}) {
  return (clientY - top) / height;
}
function getOffsetHorizontal({
  clientX
}, {
  left,
  width
}) {
  return (clientX - left) / width;
}
var MIN_WIDTH = 24;
var TuiScrollbarDirective = class _TuiScrollbarDirective {
  constructor() {
    this.el = inject(TUI_SCROLL_REF).nativeElement;
    this.style = tuiInjectElement().style;
    this.scrollSub = inject(TuiScrollbarService).pipe(takeUntilDestroyed()).subscribe(([top, left]) => {
      this.el.style.scrollBehavior = "auto";
      if (this.tuiScrollbar() === "horizontal") {
        this.el.scrollLeft = left;
      } else {
        this.el.scrollTop = top;
      }
      this.el.style.scrollBehavior = "";
    });
    this.styleSub = merge(inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())), tuiScrollFrom(this.el)).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      const dimension = {
        scrollTop: this.el.scrollTop,
        scrollHeight: this.el.scrollHeight,
        clientHeight: this.el.clientHeight,
        scrollLeft: this.el.scrollLeft,
        scrollWidth: this.el.scrollWidth,
        clientWidth: this.el.clientWidth
      };
      const thumb = `${this.getThumb(dimension) * 100}%`;
      const view = `${this.getView(dimension) * 100}%`;
      if (this.tuiScrollbar() === "vertical") {
        this.style.top = thumb;
        this.style.height = view;
      } else {
        this.style.left = thumb;
        this.style.insetInlineStart = thumb;
        this.style.width = view;
      }
    });
    this.tuiScrollbar = input("vertical");
  }
  getScrolled(dimension) {
    return this.tuiScrollbar() === "vertical" ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight) : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
  }
  getCompensation(dimension) {
    if (dimension.clientHeight * dimension.clientHeight / dimension.scrollHeight > MIN_WIDTH && this.tuiScrollbar() === "vertical" || dimension.clientWidth * dimension.clientWidth / dimension.scrollWidth > MIN_WIDTH && this.tuiScrollbar() === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar() === "vertical" ? MIN_WIDTH / dimension.clientHeight : MIN_WIDTH / dimension.clientWidth;
  }
  getThumb(dimension) {
    const compensation = this.getCompensation(dimension) || this.getView(dimension);
    return Math.abs(this.getScrolled(dimension) * (1 - compensation));
  }
  getView(dimension) {
    return this.tuiScrollbar() === "vertical" ? Math.ceil(dimension.clientHeight / dimension.scrollHeight * 100) / 100 : Math.ceil(dimension.clientWidth / dimension.scrollWidth * 100) / 100;
  }
  static {
    this.ɵfac = function TuiScrollbarDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbarDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollbarDirective,
      selectors: [["", "tuiScrollbar", ""]],
      inputs: {
        tuiScrollbar: [1, "tuiScrollbar"]
      },
      features: [ɵɵProvidersFeature([TuiScrollbarService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollbar]",
      providers: [TuiScrollbarService]
    }]
  }], null, null);
})();
var TUI_DEFAULT_SCROLLBAR_OPTIONS = {
  mode: "always"
};
var [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] = tuiCreateOptions(TUI_DEFAULT_SCROLLBAR_OPTIONS);
var TuiScrollControls = class _TuiScrollControls {
  constructor() {
    this.scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.refresh$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(300, tuiZonefreeScheduler()), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized());
  }
  get scrollbars() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.scrollRef;
    return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
  }
  static {
    this.ɵfac = function TuiScrollControls_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollControls)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiScrollControls,
      selectors: [["tui-scroll-controls"]],
      decls: 2,
      vars: 1,
      consts: [["tuiAnimated", "", 1, "t-bar", "t-bar_vertical", 3, "t-bar_has-horizontal"], ["tuiAnimated", "", 1, "t-bar", "t-bar_horizontal", 3, "t-bar_has-vertical"], ["tuiAnimated", "", 1, "t-bar", "t-bar_vertical", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "vertical", 1, "t-thumb"], ["tuiAnimated", "", 1, "t-bar", "t-bar_horizontal", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
      template: function TuiScrollControls_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiScrollControls_Conditional_0_Template, 0, 0)(1, TuiScrollControls_Conditional_1_Template, 2, 3);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.nativeScrollbar ? 0 : 1);
        }
      },
      dependencies: [AsyncPipe, TuiAnimated, TuiScrollbarDirective],
      styles: ["[_nghost-%COMP%]{position:sticky;z-index:1;inset-block-start:0;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}  [tuiScrollable]{scrollbar-width:none;-ms-overflow-style:none}  [tuiScrollable]::-webkit-scrollbar,   [tuiScrollable]::-webkit-scrollbar-thumb{display:none}.t-bar[_ngcontent-%COMP%]{position:absolute;inset-inline-end:0;pointer-events:auto}.t-bar.tui-enter[_ngcontent-%COMP%], .t-bar.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-bar_vertical[_ngcontent-%COMP%]{inset-block:.25rem;inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{inset-block-end:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{inset-block-end:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{inset-inline-end:.5rem}.t-thumb[_ngcontent-%COMP%]{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{inset-block-end:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{block-size:.875rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControls, [{
    type: Component,
    args: [{
      selector: "tui-scroll-controls",
      imports: [AsyncPipe, TuiAnimated, TuiScrollbarDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '@if (nativeScrollbar) {\n} @else {\n    @if (refresh$ | async; as bars) {\n        @if (bars[0]) {\n            <div\n                tuiAnimated\n                class="t-bar t-bar_vertical"\n                [class.t-bar_has-horizontal]="bars[1]"\n                (mousedown.capture.prevent)="(0)"\n            >\n                <div\n                    tuiScrollbar="vertical"\n                    class="t-thumb"\n                ></div>\n            </div>\n        }\n        @if (bars[1]) {\n            <div\n                tuiAnimated\n                class="t-bar t-bar_horizontal"\n                [class.t-bar_has-vertical]="bars[0]"\n                (mousedown.capture.prevent)="(0)"\n            >\n                <div\n                    tuiScrollbar="horizontal"\n                    class="t-thumb"\n                ></div>\n            </div>\n        }\n    }\n}\n',
      styles: [":host{position:sticky;z-index:1;inset-block-start:0;inset-inline-start:0;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none;overflow:hidden;color:var(--tui-text-primary)}::ng-deep [tuiScrollable]{scrollbar-width:none;-ms-overflow-style:none}::ng-deep [tuiScrollable]::-webkit-scrollbar,::ng-deep [tuiScrollable]::-webkit-scrollbar-thumb{display:none}.t-bar{position:absolute;inset-inline-end:0;pointer-events:auto}.t-bar.tui-enter,.t-bar.tui-leave{animation-name:tuiFade}.t-bar_vertical{inset-block:.25rem;inline-size:.875rem}.t-bar_horizontal{inset-block-end:0;inset-inline-start:0;block-size:.875rem}.t-bar_has-horizontal{inset-block-end:.5rem}.t-bar_has-vertical{inset-inline-end:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{inset-inline-end:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{inset-block-end:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"]
    }]
  }], null, null);
})();
var TUI_SCROLL_INTO_VIEW = "tui-scroll-into-view";
var TUI_SCROLLABLE = "tui-scrollable";
var TuiScrollbar = class _TuiScrollbar {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_SCROLLBAR_OPTIONS);
    this.isIOS = inject(WA_IS_IOS);
    this.browserScrollRef = new ElementRef(this.el);
  }
  get delegated() {
    return this.scrollRef !== this.el || this.options.mode === "native";
  }
  get scrollRef() {
    return this.browserScrollRef.nativeElement;
  }
  set scrollRef(element) {
    this.browserScrollRef.nativeElement = element;
  }
  scrollIntoView(detail) {
    if (this.delegated) {
      return;
    }
    const {
      offsetHeight,
      offsetWidth
    } = detail;
    const {
      offsetTop,
      offsetLeft
    } = tuiGetElementOffset(this.scrollRef, detail);
    const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
    const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;
    this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
  }
  static {
    this.ɵfac = function TuiScrollbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiScrollbar,
      selectors: [["tui-scrollbar"]],
      hostVars: 2,
      hostBindings: function TuiScrollbar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-scrollable.stop", function TuiScrollbar_tui_scrollable_stop_HostBindingHandler($event) {
            return ctx.scrollRef = $event.detail;
          })("tui-scroll-into-view.stop", function TuiScrollbar_tui_scroll_into_view_stop_HostBindingHandler($event) {
            return ctx.scrollIntoView($event.detail);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_native-hidden", ctx.options.mode !== "native" && (!ctx.isIOS || ctx.options.mode === "hidden"));
        }
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(_TuiScrollbar).browserScrollRef
      }])],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 3,
      consts: [[1, "t-bars", 3, "t-hover-mode"], [1, "t-content"], [1, "t-bars"]],
      template: function TuiScrollbar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, TuiScrollbar_Conditional_0_Template, 1, 2, "tui-scroll-controls", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵconditional(!ctx.isIOS && ctx.options.mode !== "native" && ctx.options.mode !== "hidden" ? 0 : -1);
          ɵɵadvance();
          ɵɵclassProp("t-content_delegated", ctx.delegated);
        }
      },
      dependencies: [TuiScrollControls],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}._native-hidden[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}._native-hidden[_nghost-%COMP%]::-webkit-scrollbar, ._native-hidden[_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]   .t-hover-mode[_ngcontent-%COMP%]:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[_nghost-%COMP%]:hover > .t-hover-mode[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:max-content}.t-content_delegated[_ngcontent-%COMP%]{block-size:100%}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-primary)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbar, [{
    type: Component,
    args: [{
      selector: "tui-scrollbar",
      imports: [TuiScrollControls],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(TuiScrollbar).browserScrollRef
      }],
      host: {
        "[class._native-hidden]": 'options.mode !== "native" && (!isIOS || options.mode === "hidden")',
        [`(${TUI_SCROLLABLE}.stop)`]: "scrollRef = $event.detail",
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: "scrollIntoView($event.detail)"
      },
      template: `@if (!isIOS && options.mode !== 'native' && options.mode !== 'hidden') {
    <tui-scroll-controls
        class="t-bars"
        [class.t-hover-mode]="options.mode === 'hover'"
    />
}
<div
    class="t-content"
    [class.t-content_delegated]="delegated"
>
    <ng-content />
</div>
`,
      styles: [":host{position:relative;display:flex;max-block-size:100%;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover>.t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"]
    }]
  }], null, null);
})();
var TuiScrollIntoView = class _TuiScrollIntoView {
  constructor() {
    this.el = tuiInjectElement();
    this.destroyRef = inject(DestroyRef);
    this.tuiScrollIntoView = input();
    this.dispatchEvent = effect(() => {
      const scroll = this.tuiScrollIntoView();
      if (!scroll) {
        return;
      }
      timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.el.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
          bubbles: true,
          detail: this.el
        }));
      });
    });
  }
  static {
    this.ɵfac = function TuiScrollIntoView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollIntoView)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollIntoView,
      selectors: [["", "tuiScrollIntoView", ""]],
      inputs: {
        tuiScrollIntoView: [1, "tuiScrollIntoView"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoView, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollIntoView]"
    }]
  }], null, null);
})();
var TuiScrollable = class _TuiScrollable {
  constructor() {
    this.el = tuiInjectElement();
  }
  ngOnInit() {
    this.el.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
      bubbles: true,
      detail: this.el
    }));
  }
  static {
    this.ɵfac = function TuiScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollable)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollable,
      selectors: [["", "tuiScrollable", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollable, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollable]"
    }]
  }], null, null);
})();

export {
  tuiExtractI18n,
  TUI_REDUCED_MOTION,
  TUI_ANIMATIONS_SPEED,
  TUI_ASSETS_PATH,
  tuiAssetsPathProvider,
  TUI_AUXILIARY,
  tuiAsAuxiliary,
  TUI_MEDIA,
  TUI_BREAKPOINT,
  TUI_COMMON_ICONS,
  tuiCommonIconsProvider,
  TUI_DARK_MODE_DEFAULT_KEY,
  TUI_DARK_MODE_KEY,
  TUI_DARK_MODE,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DATE_FORMAT,
  tuiDateFormatProvider,
  TUI_MONTHS,
  TUI_CLOSE_WORD,
  TUI_BACK_WORD,
  TUI_CLEAR_WORD,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_SPIN_TEXTS,
  TUI_SHORT_WEEK_DAYS,
  TUI_ICON_START,
  TUI_ICON_END,
  TUI_ICON_REGISTRY,
  tuiIconsProvider,
  TUI_ICON_RESOLVER,
  tuiGetIconMode,
  tuiInjectIconResolver,
  tuiIconResolverProvider,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_NUMBER_FORMAT,
  tuiNumberFormatProvider,
  TUI_SELECTION_STREAM,
  TUI_TEXTFIELD_VALUE,
  TUI_VALIDATION_ERRORS,
  tuiValidationErrorsProvider,
  TUI_VIEWPORT,
  tuiAsViewport,
  SCROLL_REF_SELECTOR,
  TUI_SCROLL_REF,
  TuiScrollRef,
  TuiScrollbarService,
  TuiScrollbarDirective,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_SCROLLBAR_OPTIONS,
  tuiScrollbarOptionsProvider,
  TuiScrollControls,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLLABLE,
  TuiScrollbar,
  TuiScrollIntoView,
  TuiScrollable
};
//# sourceMappingURL=chunk-SZ2IDNEI.js.map
