# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install --frozen-lockfile  # install dependencies
pnpm start          # dev server at http://localhost:4200/ (Angular only)
pnpm dev            # full-stack dev server via netlify dev (required for Netlify functions)
pnpm build          # production build
pnpm watch          # build in watch mode (development config)
pnpm test           # unit tests (Vitest, no watch)
pnpm test:watch     # tests in watch mode
pnpm test:cov       # tests with coverage
pnpm lint           # ESLint + Stylelint
pnpm lint:fix       # ESLint + Stylelint with autofix
pnpm format         # Prettier check
pnpm format:fix     # Prettier autofix
pnpm typecheck      # TypeScript without emit
```

To run a single test file: `pnpm ng test --include="**/path/to/file.spec.ts"`

> When working on the Koans feature, use `pnpm dev` — `pnpm start` alone won't proxy `/.netlify/functions/*` requests.

## Git Hooks

- **pre-commit**: lint-staged (eslint + prettier), typecheck, prettier check
- **commit-msg**: commitlint validation
- **pre-push**: branch name validation, lint, all tests

## Architecture

Feature-first layered architecture. Dependency direction is strict and one-way.

```
src/app/
├── app.config.ts       # providers: Taiga UI, router, zone
├── app.routes.ts       # root routes, uses LayoutComponent as shell
├── app.component.ts
├── core/               # global singletons: layout, interceptors, tokens, config providers
├── shared/             # reusable cross-feature: validators, guards, helpers, UI components, mocks
└── features/           # product logic, each feature owns its own UI, data, and state
```

**Allowed dependency directions:**

- `app` → `core`, `shared`, `features`
- `features` → `core`, `shared`
- `shared` → nothing (no features, no core product code)
- `core` → nothing feature-specific
- `data` → never depends on `ui`

### Feature structure

```
features/<feature-name>/
├── <feature-name>.routes.ts
├── data/
│   ├── api/<entity>/{models,services,helpers,mocks}
│   ├── facades/        # UI entry point into business logic
│   ├── services/       # feature-level business logic
│   ├── models/
│   ├── helpers/
│   └── mocks/
└── ui/
    └── components/
        └── <page-name>/
            ├── <page-name>.component.{ts,html,scss,spec.ts}
            └── <block-name>/   # page-scoped UI blocks
```

**Data flow:** `route → page → ui components → facade → services/api → backend`

Page components inject the facade and compose the screen from blocks. Never call API services directly from components; go through a facade.

**Facade implementation:** Facades are `signalStore` instances from `@ngrx/signals` (not plain services). They are provided at the route level via the route's `providers` array — not `{ providedIn: 'root' }` — giving each routed subtree its own store instance.

**Router:** configured with `withComponentInputBinding()`, so route params and query params bind directly to component `input()` signals or `@Input()` properties without needing `ActivatedRoute`.

## TypeScript Path Aliases

```
@core/*      → src/app/core/*
@features/*  → src/app/features/*
@shared/*    → src/app/shared/*
```

**Global utility types** (no import needed — declared in `src/app/shared/utility-types.d.ts`):

```typescript
Nullable<T>; // T | null | undefined
ValueOf<T>; // T[keyof T]
WithRequired<T, K>; // make keys K required
WithOptional<T, K>; // make keys K optional
```

## Netlify Functions (backend)

Functions live in `netlify/functions/` and are available at `/.netlify/functions/<name>` in production and via `pnpm dev` locally.

```
netlify/functions/
├── koans-list.ts       # GET /.netlify/functions/koans-list → KoanListItemModel[]
├── random-koan.ts      # GET /.netlify/functions/random-koan → { frontmatter, body }
└── shared/koans/       # shared helpers (parseFrontmatter, getAllKoanFiles, etc.)
```

Koans content files live in `public/koans/*.mdx`. They are bundled into the Netlify deploy via `included_files` in `netlify.toml` and read at runtime by the functions.

## Naming Conventions

| Entity           | Pattern                                        | Example                               |
| ---------------- | ---------------------------------------------- | ------------------------------------- |
| Component        | `entity-type`                                  | `user-list`, `user-card`, `user-form` |
| API service      | `EntityApiService`                             | `UserApiService`                      |
| Business service | `RoleService`                                  | `AuthService`                         |
| Facade           | `EntityFacade`                                 | `UserListFacade`                      |
| Converter        | `convertEntityToApi` / `convertEntityToClient` | `convertUserApiDataToUserModel`       |
| API model        | `EntityApiData` / `EntityApiResponse`          | `UserApiData`                         |
| Client model     | `EntityModel`                                  | `UserModel`                           |
| Array variable   | `...List` suffix                               | `userList`, `filteredUserList`        |
| Event handler    | `on` prefix                                    | `onDelete`, `onFormSubmit`            |
| Constants        | `UPPER_SNAKE_CASE`                             | `MAX_RETRIES`, `DEFAULT_PAGE_SIZE`    |
| FormControl      | `xxxFormControl`                               | `nameFormControl`                     |
| FormGroup type   | `xxxFormGroup`                                 | `addressFormGroup`                    |
| FormArray type   | `xxxFormArray`                                 | `addressesFormArray`                  |
| Test fixture     | `entity.fixture.ts`                            | `user.fixture.ts`                     |
| Mock             | `entity-name.mock.ts`                          | `user-api-service.mock.ts`            |

- Prefer `signal` over `BehaviorSubject` for local state
- Use `takeUntilDestroyed(this.destroyRef)` for Observable subscriptions
- All components must use `ChangeDetectionStrategy.OnPush`
- Component selector prefix: `ngKitty`

## Testing (Vitest + Angular TestBed)

Tests live in `*.spec.ts` files next to the source. Mocks in `*.mock.ts` next to what they replace. Fixtures in a `fixtures/` folder at the feature root.

**Structure (`describe` hierarchy):**

```typescript
describe('UserListComponent', () => {          // what is being tested
  describe('Happy Path', () => {               // scenario type
    describe('Данные получены', () => {         // specific context (Russian)
      it('должен отобразить список пользователей', () => {});  // it in Russian, lowercase
    });
  });
  describe('Edge Cases', () => { ... });
  describe('Negative Cases', () => { ... });
});
```

**AAA pattern** — three parts separated by a single blank line, no AAA comments:

```typescript
it('должен вернуть сумму', () => {
  const a = 2;
  const b = 3;

  const result = service.sum(a, b);

  expect(result).toBe(5);
});
```

**Mock pattern:**

```typescript
export const UserServiceMock = {
  getUsers: vi.fn(),
} as const satisfies MockedObject<Partial<UserService>>;
```

**Fixture pattern:**

```typescript
export const UserFixture = { id: 1, name: 'Иван' } as const satisfies UserModel;
```

Key rules:

- Test only public contracts; never test private methods directly
- `vi.fn()` behavior configured per-test in Arrange (or in `beforeEach` if shared across all tests in a `describe`)
- Use `toHaveBeenCalledTimes(n)` and `toHaveBeenNthCalledWith(n, ...)` — avoid bare `toHaveBeenCalled()` / `toHaveBeenCalledWith()`
- `fakeAsync` + `tick` for timers and RxJS `delay`; `done` for callbacks outside fakeAsync
- One `configureTestingModule` per group; use `overrideProvider` for targeted substitutions
- `clearMocks: true` is enabled by default — no need for `vi.clearAllMocks()` in `afterEach`
- `describe`, `it`, `expect`, `beforeEach`, `afterEach` are global; import only `vi`, `MockedObject` explicitly from `vitest`

## Commit Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Allowed types: `build`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`, `chore`

Rules: imperative mood (`add`, `fix`, `update`), no capital first letter, no trailing period, max 100 chars per line.

Branch name pattern: `^(chore|feat|fix|docs|style|refactor|perf)\/[a-zA-Z0-9-]+[_-][a-zA-Z0-9-]+$`

## Key ESLint Rules

- `@angular-eslint/prefer-on-push-component-change-detection`: error
- `@typescript-eslint/explicit-member-accessibility`: error (all members need access modifiers; `constructor` and `transform` are exempt)
- `@typescript-eslint/consistent-type-imports`: error (use `import type` for types)
- `@typescript-eslint/consistent-type-definitions`: error, must use `interface` not `type`
- `import/no-cycle`: error — circular imports are forbidden
- Member ordering in classes: private fields → public fields → constructor → public methods → private methods
- `*.mock.ts` and `*.spec.ts` files have relaxed `no-explicit-any` and unsafe-\* rules
