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

## Sandbox / remote container quirks (Claude Code on the web)

These only apply when the agent runs in a sandboxed remote container (web app, GitHub Action, CI). Local terminal sessions don't hit them.

### `pnpm dev` (netlify dev) may fail on edge-runtime download

Netlify CLI eagerly downloads its Deno edge-functions runtime even when the project has no edge functions (we don't — only `netlify/functions/`). If outbound to the deno hosting CDN is blocked you'll see:

```
Error: Download failed with status code 403
  at prepareServer (.../netlify-cli/.../edge-functions/proxy.ts)
```

The CLI prints `Local dev server ready: http://localhost:8888` first, then dies — port 8888 never actually serves.

**Workaround:** run Angular dev server alone (`pnpm start` → port 4200) and put a Node sidecar in front that bundles the netlify functions through esbuild and proxies everything else to 4200. Sidecar pattern (kept in `.planning/` if reused):

```js
// 1. Bundle each handler with createRequire banner so Node-built-ins work in ESM:
//    esbuild --bundle --platform=node --format=esm --target=node22 \
//            --banner:js='import {createRequire as r} from "module"; const require=r(import.meta.url);' \
//            --outfile=<out>/<name>.mjs netlify/functions/<name>.ts
// 2. http server on :8888: route /.netlify/functions/<name> → dynamic import of <name>.mjs,
//    convert Node req↔Fetch Request/Response (handlers are (Request)=>Promise<Response>),
//    everything else → proxy to http://localhost:4200.
```

The handlers use `process.cwd()` for `public/koans/*.mdx` resolution — run the sidecar from the repo root.

### Browser smoke (the `run` skill)

- `chromium-cli` is **not** installed in the default sandbox. Fall back to driving Playwright directly (`playwright@1.56+` ships with the container).
- `playwright` is installed globally, not in `node_modules`, so a bare `import { chromium } from 'playwright'` won't resolve. Use `import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs'`.
- Chromium binary lives at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. Launch with `chromium.launch({ executablePath: '…', args: ['--no-sandbox', '--disable-dev-shm-usage'] })`.
- Taiga UI's dropdowns (`tui-data-list-wrapper`) render in a portal — locate items with `page.locator('tui-data-list-wrapper >> text=…')`, not via the trigger's subtree.
- Language switcher does **not** change the URL; it calls `transloco.setActiveLang(lang)`. Click the `ngKitty-language-switcher button` → pick from dropdown — don't try `/en/koans` URL prefixes.

### Commit signing may fail with `missing source`

`commit.gpgsign=true` is enforced via `/tmp/code-sign` → `/opt/env-runner/environment-manager code-sign`. The signing server occasionally returns 400 `{"error":{"message":"missing source"}}` for the whole session. Standard project rule still applies: never bypass with `--no-gpg-sign` unless the user explicitly authorises it.

If signing is broken and the user authorises bypass, prefer producing a patch hand-off (`git diff --staged --binary > patch` + `SendUserFile`) over a local unsigned commit — the user re-creates the commit locally with their own key.

### No `origin` remote in fresh clones

The container clones the repo without configuring `origin`. `git push` will not work, even with a working signature. There is no automatic file sync back to the user's machine — the only outbound channel is `SendUserFile`. Plan hand-offs accordingly (a zip with patch + DONE/TODO + instructions, dropped into `.planning/`, then re-entered from the user's local terminal).
