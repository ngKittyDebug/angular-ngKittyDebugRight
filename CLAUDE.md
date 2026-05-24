# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

«ngKittyDebug / delulu-church» — Angular 21 SPA (RS School team project), TypeScript strict, Taiga UI, NgRx Signals. Backend — Netlify Functions. Package manager pinned to `pnpm@10.30.0`.

## Commands

- `pnpm start` — `ng serve -o` (frontend only; `/.netlify/functions/*` return 404). `http://localhost:4200`.
- `pnpm dev` — `netlify dev` (frontend + functions). **`http://localhost:8888`** — use for visual checks and anything hitting `/.netlify/functions/koan-*`. Production: `https://delulu-church.netlify.app/`.
- `pnpm test` — Vitest (jsdom). Single file: `pnpm test -- --include='**/koans.facade.spec.ts'`.
- `pnpm test:watch` — Vitest watch mode (frontend only; useful for TDD).
- `pnpm test:functions` — separate Netlify suite (`vitest.netlify.config.ts`, node env, `netlify/__tests__`).
- `pnpm typecheck` — `tsc -b --noEmit` (project references). **Not in git hooks — run manually.**
- `pnpm lint` / `pnpm lint:fix` — eslint (`src` + `netlify`) + stylelint.
- `pnpm i18n:extract` / `pnpm i18n:find` — emit missing keys / report dead keys via transloco-keys-manager.

`.planning/` is git-ignored, safe to write into; never imported by app code.

## Architecture

### Frontend (`src/app`)

- `core/` — app chrome; `features/<name>/` — lazy feature with inner layout `data/{api,store,facades,services,models,mocks}` + `ui/<page>/<components>`; `shared/` — utils + ambient types.
- Path aliases: `@core/*`, `@features/*`, `@shared/*`. Selector prefix: `ngKitty`. Add app-wide providers to `app.config.ts`.

### Feature data triplet — reference pattern: `features/koans/`

Three layers provided at **route level** (not `providedIn: 'root'`), so each lazy route gets a fresh state container:

1. **`KoansStore`** (`signalStore`) — pure state, no HTTP, no side effects beyond `patchState`.
2. **`KoansFacade`** — RxJS subjects → switchMap → API → store. `takeUntilDestroyed()` required (route-scoped lifecycle).
3. **`KoanApiService`** (`providedIn: 'root'`) — thin `HttpClient` wrapper with in-memory Map cache.

### Backend (`netlify/functions/`)

Registered endpoints: `koan-list`, `koan-get`, `koan-random`, `koan-categories`. MDX files available at runtime via `included_files = ["public/koans/*.mdx"]`. **`netlify/functions/koans/*.ts` is legacy — not registered.**

Markdown: custom `marked` v18 tokenizers (`<Master>`, `<Student>`, `<Source>`, `<Action>`, `<Haiku>`, `<Question>`) defined in `koan-marked-extensions.ts`; inline content sanitized via **DOMPurify** before reaching the DOM.

## Conventions

- **ESLint traps**: `explicit-member-accessibility` required (only `constructor`/`transform` exempt); `padding-line-between-statements` enforces blank lines before `return` and around `const`/`let`; `consistent-type-definitions: interface`; `filename-case` kebab/camelCase only.
- **OnPush required**: `@angular-eslint/prefer-on-push-component-change-detection` is `error`.
- **Utility types** (`src/app/shared/utility-types.d.ts`) are **ambient globals** — no import. Use `Nullable<T>`, `WithRequired<T,K>`, `WithOptional<T,K>`, `ValueOf<T>` over inline equivalents.
- **`.netlify/` vs `netlify/`**: `netlify/` is source; `.netlify/` is CLI state — never edit by hand.
- SCSS `includePaths: ["src", "src/styles"]` — `@use 'styles/foo'` resolves without `../../`.
- Angular 21 patterns (standalone, `inject()`, signals, `@if`/`@for`, `takeUntilDestroyed`) — see `.github/copilot-instructions.md` for the reviewer checklist.

## Pre-flight (mandatory before commit / PR)

1. `pnpm typecheck`
2. `pnpm lint`
3. `pnpm test`
4. `pnpm test:functions` — if `netlify/` or `public/koans/` touched.

Optional: `pnpm build` (checks `anyComponentStyle` budget: 4 kB warn / 8 kB error).

## Git & branching

- Branch off `develop`; PR base is **`develop`** (not `main`). `main` is release-only.
- Branch pattern: `^(chore|feat|fix|docs|style|refactor|perf)\/[a-z0-9-]+[_-][a-z0-9-]+$`.
- Conventional commit types: `feat|fix|chore|refactor|docs|style|perf|test|build|ci|revert`. Header ≤ 72 chars.

## i18n (transloco)

Always update `public/i18n/ru.json` **and** `public/i18n/en.json` together.

- Key namespacing: `koans.<key>` for features, `navigation-items.<key>` for nav.
- Templates: `{{ 'key' | transloco }}` (requires `TranslocoModule` in `imports`); attribute bindings: `[title]="'key' | transloco"`.
- Static TS config strings: wrap with `marker('key')` from `@jsverse/transloco-keys-manager/marker` so the extractor picks them up.
- UI copy voice: allegorical/oblique, zen-koan register — scroll/cosmos/void metaphors, dry humour; never literal instructions.
