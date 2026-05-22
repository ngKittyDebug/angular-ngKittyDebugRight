# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

«ngKittyDebug / delulu-church» — Angular 21 SPA (RS School team project), TypeScript strict, Taiga UI, NgRx Signals. Backend — Netlify Functions. Package manager pinned to `pnpm@10.30.0` (see `packageManager` in `package.json`).

## Commands

The full inventory lives in `README.md`. Non-obvious ones:

- `pnpm start` — `ng serve -o` (frontend only, calls to `/.netlify/functions/*` will 404). Serves on `http://localhost:4200`.
- `pnpm dev` — `netlify dev`, runs both Angular dev server and Netlify Functions locally. **Serves on `http://localhost:8888`** — use this URL when doing visual checks. Use this when touching anything that hits `/.netlify/functions/koan-*`.
- `pnpm test` — Angular Vitest runner (jsdom). Single-file: `pnpm test -- --include='**/koans.facade.spec.ts'`.
- `pnpm test:functions` — runs the **separate** Netlify functions suite (`vitest.netlify.config.ts`, node env, root = `netlify/__tests__`). Frontend and backend tests do not share a config.
- `pnpm typecheck` — `tsc -b --noEmit` (project references, not a plain `tsc`).
- `pnpm lint` — covers both `src` and `netlify` for eslint, plus stylelint over CSS/SCSS.

`.planning/` is git-ignored (per `eslint.config.js` `ignores`) and is the staging area for design handoffs / plans — safe to write into, never imported by app code.

## Architecture

### Frontend layers (`src/app`)

- `core/` — app-wide chrome (`LayoutComponent` with `TuiMainComponent` + footer + navigation config).
- `features/<name>/` — feature module. Standard inner layout: `data/{api,store,facades,services,models,mocks}` + `ui/<page>/<components>`. Route file (`<name>.routes.ts`) wires lazy loading and feature-scoped providers.
- `shared/` — reusable utilities, mocks, ambient types (`utility-types.d.ts`).
- Path aliases (`tsconfig.json`): `@core/*`, `@features/*`, `@shared/*`. Prefer them over deep relatives.
- Component selector prefix is `ngKitty` (Angular CLI `prefix` in `angular.json`).
- App bootstraps standalone via `app.config.ts` with `provideRouter(withComponentInputBinding())`, `provideHttpClient()`, `provideTaiga()`. Add new app-wide providers there.

### Feature data triplet (canonical: `features/koans`)

The koans feature is the reference pattern for new features. Three layers, DI-provided at route level (not `providedIn: 'root'`), so each lazy-loaded route gets a fresh state container:

1. **`KoansStore`** — `signalStore` from `@ngrx/signals` with `withState`/`withComputed`/`withMethods`. Holds all reactive state (entities, loading flags, filters, errors). Pure: no HTTP, no side effects beyond `patchState`.
2. **`KoansFacade`** — the only API the UI talks to. Owns RxJS `Subject`s that drive `switchMap` pipelines into the API service; results are pushed back into the store. Uses `takeUntilDestroyed()` for teardown (required since the facade is route-scoped, not root-scoped). Also bridges persistence (`localStorage` via `KoansPersistenceService`).
3. **`KoanApiService`** — `providedIn: 'root'`, thin `HttpClient` wrapper over `/.netlify/functions/koan-*`. Holds an in-memory `Map` cache for koan bodies.

`koans.routes.ts` provides `[KoansStore, KoansFacade, provideMarkdown({ markedExtensions: […] })]` so the store/facade pair and `ngx-markdown` extensions exist only while `/koans/*` is active.

### Markdown rendering pipeline

`koans/koan-marked-extensions.ts` defines custom `marked` v18 block tokenizers for `<Master>`, `<Student>`, `<Source>`, `<Action>`, `<Haiku>`, `<Question>`, each rendered as a `<p class="segment …">`. Inline content runs through `marked.parseInline` and is sanitized with **DOMPurify** before reaching the DOM. There is also a heading renderer that shifts `<h1>`→`<h2>` etc. — both are provided via `provideMarkdown({ markedExtensions: [{ provide: MARKED_EXTENSIONS, useValue: …, multi: true }] })`. When adding a new koan segment type, add both the tokenizer and the renderer in this file and consider whether the heading-shift renderer still fits.

### Backend (`netlify/functions`)

Netlify Functions written in TypeScript and bundled with esbuild (`netlify.toml`). The `koans/` subgroup reads MDX files shipped via `included_files = ["public/koans/*.mdx"]` (so functions can `readFile` them in production). Frontmatter is parsed by a hand-rolled parser in `netlify/functions/shared/koan-utilities.ts` — it expects YAML-ish key/value lines and `tags` as a JSON-encoded array. Functions cache parsed lists in module-scope — fine because warm instances are short-lived and content is build-time. Tests live in `netlify/__tests__/` and run under a separate Vitest config (`vitest.netlify.config.ts`) — keep them out of the Angular Vitest tree. Note: the registered functions are at the root of `netlify/functions/` (per `netlify.toml`); the duplicate `netlify/functions/koans/*.ts` tree is legacy and not exposed as endpoints.

### Content (`public/koans/*.mdx`)

Koans are authored as `.mdx` with frontmatter (`number`, `title`, `slug`, `category`, `tags`, `source`) plus a body that uses the custom segment tags above. The Netlify list/get/random endpoints return the parsed model consumed by `KoanApiService`.

## Conventions & gotchas

- **Style preprocessing**: SCSS uses `includePaths: ["src", "src/styles"]` (`angular.json`), so `@use 'styles/foo'` resolves without `../../`. Global Taiga themes are loaded from `node_modules/@taiga-ui/styles/*.less` plus `src/styles.css`.
- **`.netlify/` vs `netlify/`**: `netlify/` is source (functions + tests); `.netlify/` is local CLI state — never edit by hand.
- **Conventional commits enforced** by commitlint (`build|ci|docs|feat|fix|perf|refactor|revert|style|test|chore`). Header capped at 72 chars. Branch names validated against `^(chore|feat|fix|docs|style|refactor|perf)\/[a-zA-Z0-9-]+[_-][a-zA-Z0-9-]+$`.
- **Husky + lint-staged** run eslint+prettier on staged files — don't bypass with `--no-verify`.
- **ESLint custom rules to keep in mind** (`eslint.config.js`): strict `member-ordering`, mandatory `@typescript-eslint/explicit-member-accessibility`, `consistent-type-imports`, `consistent-type-definitions: ['error', 'interface']`, `filename-case` (camelCase or kebab-case only), and a `padding-line-between-statements` policy that requires blank lines around `const`/`let`/`return`. `.mock.ts` and `.spec.ts` relax `no-explicit-any` and unsafe-\* rules.
- **`@angular-eslint/prefer-on-push-component-change-detection` is `error`** — all new components must declare `changeDetection: ChangeDetectionStrategy.OnPush`.
- **Utility types** (`src/app/shared/utility-types.d.ts`) are ambient globals available throughout the Angular frontend — no import needed. Prefer them over inline equivalents: `Nullable<T>` instead of `T | null` or `T | null | undefined`, `ValueOf<T>` for union of object values, `WithRequired<T, K>` / `WithOptional<T, K>` for targeted required/optional overrides. These types are also available in `netlify/functions` — the functions tsconfig already includes `utility-types.d.ts` via a relative path reference.
- **Angular 21 patterns** (standalone, `inject()`, signals, new control flow, typed reactive forms, `takeUntilDestroyed`) are required — see `.github/copilot-instructions.md` for the full reviewer checklist used in PRs.
- **`router` uses `withComponentInputBinding()`** — route params bind directly to `@Input()`/signal inputs on the routed component; no manual `ActivatedRoute` subscription needed for simple cases.

## Pre-flight checklist (run before declaring a task done / before commit / before PR)

Run **all four**, in this order, and fix anything that goes red before moving on. Husky/lint-staged will catch most lint issues at commit time, but the typecheck/test suites are not in the hooks — running them manually is mandatory.

1. `pnpm typecheck` — `tsc -b --noEmit` on the project references; catches strict-mode and template-type errors that ESLint doesn't.
2. `pnpm lint` — eslint over `src` + `netlify` and stylelint over CSS/SCSS. Use `pnpm lint:fix` for autofixable parts.
3. `pnpm test` — Angular Vitest suite (frontend specs).
4. `pnpm test:functions` — Netlify functions suite. **Required if you touched anything under `netlify/` or `public/koans/`.**

Optional but recommended for non-trivial changes:

- `pnpm format` — Prettier check; `pnpm format:fix` to autofix.
- `pnpm build` — production build, surfaces budget overruns (`anyComponentStyle` capped at 4 kB warn / 8 kB error in `angular.json`).
- Manual smoke on `pnpm dev` (`netlify dev`) for anything that calls `/.netlify/functions/*` — `pnpm start` alone won't exercise the backend.

When committing or opening a PR: use Conventional Commit type (`feat|fix|chore|refactor|docs|style|perf|test|build|ci|revert`), keep the subject ≤72 chars, and verify the branch name matches `^(chore|feat|fix|docs|style|refactor|perf)\/[a-z0-9-]+[_-][a-z0-9-]+$` (validated by `validate-branch-name`).

**Branching & PR base**: always branch off `develop`, and open PRs **against `develop`** (not `main`). `main` is the release branch and merges into it come from `develop` only.

## i18n (transloco)

Translation files live in `public/i18n/ru.json` and `public/i18n/en.json`. Always update both files together.

**Key namespacing** — feature-scoped keys are nested under a feature name; shared navigation under `navigation-items`:

```
"koans.sign-btn"          // feature-scoped label
"koans.sign-btn-title"    // feature-scoped tooltip
"navigation-items.koans"  // nav label
```

**Usage patterns:**

- Text content in templates: `{{ 'key' | transloco }}` — requires `TranslocoModule` in component `imports`
- Attribute bindings: `[title]="'key' | transloco"`, `[attr.aria-label]="'key' | transloco"`
- Static strings in TS config arrays (e.g. `navigation-item-list.config.ts`): wrap with `marker('key')` from `@jsverse/transloco-keys-manager/marker` so the keys-manager extractor picks them up

**UI copy voice — «delulu-church» tone:**

The app has a mystical-absurdist, zen-koan voice. UI strings should be allegorical and oblique — never literal instructions ("Click here to do X"). Use scroll/fate/cosmos/void metaphors, dry dark humour, and a hint of the inevitable. The keyboard shortcut `(R)` is kept in tooltips as a bare technical aside — it doesn't need to fit the prose.

Established phrase pairs (RU → EN) as a register reference:
| Key | RU | EN |
|-----|----|----|
| `koans.sign-btn` | Дай знак | Give a sign |
| `koans.sign-btn-title` | Воззвать к неведомому (R) | Invoke the unknown (R) |
| `koans.empty-hint` | Свиток пуст. Узри мудрость веков — или найди её сам. | The scroll is empty. Behold the wisdom of ages — or seek it yourself. |
| `navigation-items.koans` | Коаны | Koans |
