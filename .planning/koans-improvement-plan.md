# План улучшений фичи Koans

## Context

Фича `src/app/features/koans` — предварительная реализация: список «коанов» (дзен-притчи о JS),
случайный «коан дня» и читалка. Контент — 41 `.mdx` файла в `public/koans/`, отдаётся тремя
Netlify-функциями. Реализация рабочая, но это первый проход: есть проблемы безопасности на бэкенде,
пробелы в доступности UI, отклонения от конвенций проекта (CLAUDE.md) и **полное отсутствие тестов**.

Цель — довести фичу до продакшн-уровня: закрыть дыры безопасности, сделать UI доступным,
выровнять структуру под конвенции и покрыть тестами по стандартам проекта.

Приоритеты: **P0** — баги/безопасность (чинить первыми), **P1** — доступность и корректность,
**P2** — нейминг/структура, **Tests** — сквозное покрытие.

---

## P0 — Безопасность и баги бэкенда ✅ ВЫПОЛНЕНО

### 1. Удалить дублирующие `.mts`-файлы функций ✅

`netlify/functions/` содержит и `.ts`, и устаревшие `.mts` версии:
`koans-list.mts`, `random-koan.mts`. С `node_bundler = "esbuild"` Netlify бандлит **оба**
расширения как отдельные функции — конфликтующие/дублирующие эндпоинты.

- **Действие:** удалить `netlify/functions/koans-list.mts` и `netlify/functions/random-koan.mts`.
- **Сделано:** оба файла удалены через `git rm`. **Находка:** они импортировали
  `./shared/parse-frontmatter.mts`, которого больше нет (shared переехал в `shared/koans/`) —
  это был не просто дубль, а сломанный мёртвый код.

### 2. `get-koan.ts` — слабое сопоставление slug ✅

`netlify/functions/get-koan.ts:16` — `files.find((f) => f.includes(slug))`.
`slug="o"` вернёт первый попавшийся файл; нет валидации формата.
Реальной path-traversal нет (`fileName` приходит из `readdir`), но логика некорректна.

- **Действие:** валидировать формат `^[0-9a-z-]+$` (иначе 400), затем точное сравнение
  `files.find((f) => f === \`${slug}.mdx\`)`.
- **Сделано:** добавлена константа `SLUG_PATTERN`, валидация → 400, точное сравнение имени файла.

### 3. Frontend — slug в URL без кодирования ✅

`koan-api.service.ts:31` — `` `/.netlify/functions/get-koan?slug=${slug}` `` без `encodeURIComponent`.

- **Действие:** передавать через `HttpParams` (`{ params: { slug } }`) — Angular сам кодирует.
- **Сделано:** `getKoan` использует `{ params: { slug } }` — объектная форма, `HttpParams`
  импортировать не нужно, Angular кодирует сам.

### 4. `parseFrontmatter` — `JSON.parse` без `try/catch` ✅

`netlify/functions/shared/koans/parse-frontmatter.ts:56` — `JSON.parse(value)` для `tags`.
Битый `tags` в любом `.mdx` уронит функцию с 500 и стек-трейсом.

- **Действие:** обернуть в `try/catch`, при ошибке `frontmatter.tags = []`.
- **Сделано:** выделена функция `parseTags` с `try/catch` + проверкой `Array.isArray`
  (защита и от валидного, но не-массива JSON).

### 5. Функции без обработки ошибок ✅

`get-koan.ts`, `koans-list.ts`, `random-koan.ts` — `readdir`/`readFile` не обёрнуты;
исключение → необработанный 500 с возможной утечкой стек-трейса.

- **Действие:** обернуть тело каждого хендлера в `try/catch`, возвращать
  `Response.json({ error: 'Internal error' }, { status: 500 })`, логировать через `console.error`.
- **Сделано:** все три хендлера обёрнуты в `try/catch` с `console.error` и чистым 500.

### 6. `random-koan.ts` — пустой список файлов ✅

`random-koan.ts:9` — при пустом `files` `file` будет `undefined` → краш в `readFile`.

- **Действие:** проверка `if (!files.length) return 404` (применимо и к `koans-list`).
- **Сделано:** guard `!files.length` → 404 добавлен в `random-koan` и `koans-list`.

### Находки P0 (для следующих этапов)

- `netlify.toml` содержит только catch-all redirect, без редиректов на имена функций —
  переименование функций в **P2** безопасно, прав&shy;ить нужно только вызовы в `koan-api.service.ts`.
- **Новое улучшение (→ P2):** три функции дублируют формирование ошибок —
  стоит вынести общий хелпер `jsonError(status, message)` в `shared/koans/`.
- **Новое улучшение (→ P2, perf):** `koans-list` на каждый запрос читает и парсит все 41
  `.mdx` файла. Кандидат на кеш в памяти функции или сборку манифеста на этапе билда.
- Проверка: `pnpm typecheck` (root + `netlify/functions/tsconfig.json`) и
  `eslint src/app/features/koans netlify/functions` — чисто.

---

## P1 — Доступность и корректность ✅ ВЫПОЛНЕНО

### Доступность (a11y)

**`koan-list.component.html`** — кликабельный `<li tabindex="0">` без роли: ✅

- Заменить внутренность `<li>` на нативный `<button type="button">` (или добавить `role="button"`).
- Активный пункт: `[attr.aria-current]="item.slug === selectedSlug() ? 'true' : null"`.
- `(keydown.space)` — добавить `$event.preventDefault()` (иначе скролл страницы).
- `<ul>` — добавить `aria-label="Список коанов"`.
- **Сделано:** `<li>` теперь содержит нативный `<button>` (Enter/Space работают сами —
  `preventDefault` не понадобился), `aria-current` на активном, `aria-label` на `<ul>`,
  `:focus-visible` outline в scss.

**`koan-widget.component.html`** — состояние загрузки: ✅

- Добавить `[attr.aria-busy]="loading()"` на контейнер, видимый индикатор/скелетон вместо
  пустого блока, пока `koan()` пуст.
- **Сделано:** ветка `@if (loading() && !koan())` с `aria-busy="true"` и текстом
  «Мастер выбирает свиток…»; на загруженном виджете `[attr.aria-busy]="loading()"`.

**`koan-reader.component.html`** — структура и анонс: ✅

- Проверить иерархию заголовков: на странице нет `<h1>` (проверить `LayoutComponent`);
  сегмент-заголовки сейчас `<h2>`.
- Обернуть `.koan-reader` в регион с `aria-live="polite"` + `role="region"` +
  `aria-label`, чтобы смена коана анонсировалась.
- При выборе коана переводить фокус на читалку (focus management).
- **Сделано:** добавлен `<div role="region" aria-live="polite" aria-label="Текст коана"
tabindex="-1" #readerRegion>`; `effect()` в компоненте переводит фокус на регион при
  смене коана; добавлена ветка loading. `LayoutComponent` действительно без `<h1>` —
  добавлен visually-hidden `<h1>Коаны</h1>` в `koans-page` (см. ниже).

**Контраст (`src/styles.css`)** — проверить по WCAG AA (4.5:1): ✅
`--koan-source` (55% от текста), `--koan-action` (70%), а также `.haiku`/`.question`
с пониженной `opacity` в `koan-reader.component.scss`. Поднять там, где не проходит.

- **Сделано/находка:** обе темы на самом деле тёмные (`[tuiTheme='light']` имеет фон
  `#14100f`). Расчётный контраст `--koan-source` 55% ≈ **5.3:1**, `--koan-action` 70%
  ещё выше — проходят AA, правка не нужна. `.haiku`/`.question` (`opacity: 0.9` на
  ярких цветах) тоже проходят. Реальный провал был один — `.reader-empty { opacity: 0.4 }`
  ≈ 3.4:1; исправлено: убрана `opacity`, текст переведён на цвет `--koan-source`.

**Пустые/загрузочные/ошибочные состояния** — все три состояния списка и читалки
должны иметь видимый текст и `aria-live`. ✅

- **Сделано:** `koan-list` — `loading`-ветка «Свитки разворачиваются…» и пустая
  «Свитки не найдены» (обе `aria-live`); `koan-reader` — loading-ветка; `koans-page` —
  баннер ошибки `<p class="koans-error" role="alert">` поверх стора `error()`.

### Корректность

**`koans.facade.ts` (KoansStore):** ✅

- `loadKoanList` и `selectKoan` не имеют флагов загрузки и обработки ошибок —
  при сбое запроса UI навсегда пустой. Добавить в `KoansState`: `loadingList`,
  `loadingSelected`, `error: string | null`.
- `selectKoan` — гонка при быстрых кликах (ответы могут прийти не по порядку).
  Перевести на `rxMethod` + `switchMap` (`@ngrx/signals/rxjs-interop`).
- Все три метода — добавить ветку `error` в `subscribe`/`tapResponse`.
- **Сделано:** все три метода переписаны на `rxMethod` + `switchMap` + `catchError`;
  в стейт добавлены `loadingList`, `loadingSelected`, `error`. `rxMethod` сам чистится
  при уничтожении стора — `DestroyRef`/`takeUntilDestroyed` убраны. `rxMethod<void>`
  вызывается без аргументов, вызовы в `koans-page` не менялись.

**`koan-widget.component.ts`** — удалить неиспользуемый импорт `MarkdownComponent`
(в шаблоне `<markdown>` нет). ✅ **Сделано.**

**`koan-body-parser.service.ts`** — каст `as unknown as MarkedToken[]` (строка 10):
заменить на корректную типизацию через `marked.Lexer`/`Token[]`. Тип `'prose'` в
`KoanSegmentType` объявлен, но парсером не используется — удалить из union (см. P2).

- **Сделано частично + находка:** `'prose'` удалён из `KoanSegmentType`. Каст
  **оставлен** — он load-bearing: `lexer()` возвращает `(MarkedToken | Tokens.Generic)[]`,
  а index-signature `Tokens.Generic` расширяет все поля до `any` (eslint
  `no-unsafe-assignment`). Добавлен поясняющий комментарий вместо удаления.

### Находки P1 (для следующих этапов)

- Новая утилита `.visually-hidden` добавлена в `src/styles.css` — переиспользуема
  другими фичами.
- `LayoutComponent` (`layout.component.html`) не содержит `<h1>` ни для одной страницы —
  возможно, стоит завести единый паттерн заголовка страницы на уровне layout (→ вне koans).
- Проверка: `pnpm typecheck`, `eslint`, `stylelint`, `pnpm build` — чисто
  (бюджет бандла превышен глобально, к koans не относится — фича в lazy-chunk 17.5 kB).

---

## P2 — Нейминг и структура (по CLAUDE.md) ✅ ВЫПОЛНЕНО

| Что             | Сейчас                                                        | Должно быть                                                        | Статус                                       |
| --------------- | ------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------- |
| API-сервис      | `data/api/koan/koan-api.service.ts` (плоско)                  | `data/api/koan/services/koan-api.service.ts`                       | ✅ `git mv` выполнен                         |
| API-модель      | `RawKoanResponse` инлайн в сервисе                            | `data/api/koan/models/koan-api.model.ts`, имя `KoanApiResponse`    | ✅ вынесена                                  |
| Конвертер       | приватный `buildKoanModel` в сервисе                          | `data/api/koan/helpers/convert-koan-api-response-to-koan-model.ts` | ✅ вынесен как чистая функция                |
| Facade          | экспорт `KoansStore` из `koans.facade.ts`                     | переименовать в `KoansFacade` (конвенция `EntityFacade`)           | ✅ переименован (+ routes, page)             |
| Segment type    | `'prose'` в union, не используется                            | удалить из `KoanSegmentType`                                       | ✅ (сделано ещё в P1)                        |
| Netlify-функции | `get-koan`, `koans-list`, `random-koan` (разный порядок слов) | `koan-get`, `koan-list`, `koan-random`                             | ✅ `git mv` + вызовы в `koan-api.service.ts` |

Заметки (без обязательных правок):

- `KoanFrontmatter` дублируется в `parse-frontmatter.ts` и `koan.model.ts` — приемлемо
  (разные tsconfig-контексты), но стоит держать в синхронизации.
- `KoanBodyParserService` в `data/services/` — корректно (бизнес-логика фичи).

Найдено при P0 → сделано в P2:

- ✅ Общий хелпер `jsonError(status, message)` вынесен в
  `netlify/functions/shared/koans/http.ts`, используется всеми тремя функциями.
- ✅ (perf) `koan-list` теперь кеширует разобранный список в module-scope переменной
  (`cachedList`) — корректно, т.к. `.mdx` бандлятся с деплоем и не меняются в рантайме.

### Находки P2

- **Ещё один забытый `.mts`:** P0 удалил две функции-дубля, но в `shared/` оставался
  `netlify/functions/shared/parse-frontmatter.mts` (импортировался удалёнными `.mts`).
  Удалён в P2.
- Конвертер `buildKoanModel` зависел от инжектируемого `KoanBodyParserService`, поэтому
  вынесенная чистая функция `convertKoanApiResponseToKoanModel(response, bodyParser)`
  принимает парсер вторым аргументом (без DI).
- Netlify роутит функции по имени файла → переименование файла = переименование
  эндпоинта. `netlify.toml` содержит только catch-all redirect, поэтому правок —
  только URL в `koan-api.service.ts`.
- Проверка: `pnpm typecheck` (root + netlify), `eslint`, `pnpm build` — чисто.

---

## Tests — полное покрытие (по конвенциям CLAUDE.md) ✅ ВЫПОЛНЕНО

Итого: **37 фронтенд-тестов** (8 файлов) + **20 backend-тестов** (5 файлов) = 57 новых тестов.

### Инфраструктура ✅

- **Фикстуры:** `src/app/features/koans/fixtures/koan.fixture.ts` —
  `KoanFixture`, `KoanListFixture`, `KoanApiResponseFixture`, `KoanBodyFixture`,
  `KoanSegmentsFixture`. Использованы аннотации типов (а не `as const satisfies`),
  т.к. модели содержат изменяемые массивы.
- **Моки:** `koan-api.service.mock.ts`, `koan-body-parser.service.mock.ts` рядом
  с источниками (паттерн `as const satisfies MockedObject<Partial<...>>`).
- **`clearMocks` теперь реально включён:** создан корневой `vitest.config.ts`
  (`test.clearMocks: true`), подключён через `runnerConfig: "vitest.config.ts"` в
  `angular.json`. См. находки ниже.

### Спеки фронтенда ✅

- `koan-body-parser.service.spec.ts` — source до кода, heading, `Мастер:`/`Ученик:`,
  промоушен в `haiku`, `action` по умолчанию, пустой `body`, дефолт языка `js`.
- `convert-koan-api-response-to-koan-model.spec.ts` — маппинг + вызов парсера.
- `koan-api.service.spec.ts` — `HttpTestingController`, URL каждого метода,
  кодирование `slug` со спецсимволами.
- `koans.facade.spec.ts` — флаги загрузки, обновление состояния, ветки ошибок,
  отмена устаревшего `selectKoan` (switchMap).
- `koans-page.component.spec.ts` — `ngOnInit`, выбор коана и «следующий» через DOM.
- `koan-list.component.spec.ts` — рендер, эмит `koanSelect`, `aria-current`,
  пустое состояние, загрузка.
- `koan-reader.component.spec.ts` — рендер всех типов сегментов, пустое состояние,
  загрузка.
- `koan-widget.component.spec.ts` — только `question`-сегменты, эмит `next`,
  `disabled`/индикатор по `loading`.

### Спеки бэкенда (Netlify-функции) ✅

- Раннер: отдельный `vitest.netlify.config.ts` (env `node`, root `netlify/functions`)
  - скрипт `pnpm test:functions`. `vitest/globals` добавлен в `netlify/functions/tsconfig.json`.
- `shared/koans/parse-frontmatter.spec.ts` — разбор frontmatter, тело, битый/не-массив
  `tags`, отсутствие `---`.
- `shared/koans/utilities.spec.ts` — `getKoansDirectory`, фильтрация `.mdx`.
- `__tests__/koan-get.spec.ts` / `koan-list.spec.ts` / `koan-random.spec.ts` —
  валидация slug, ветки 400/404/500, кеш `koan-list`.

### Находки Tests

- **Реальный баг найден тестом:** `koan-body-parser.service.ts` использовал
  `token.lang ?? 'js'`, но `marked` отдаёт `lang: ''` для блока без языка — `??` не
  ловит пустую строку. Исправлено на `|| 'js'`.
- **Неточность в CLAUDE.md:** заявлено «`clearMocks: true` enabled by default», но
  конфига Vitest не было и builder его не включает. Создан `vitest.config.ts`.
  Важно: `runnerConfig: true` (автопоиск) конфиг **не подхватил** — нужен явный путь.
- Backend-спеки трёх top-level хендлеров лежат в `netlify/functions/__tests__/`:
  Netlify деплоит каждый top-level `.ts` в `functions/` как эндпоинт, но игнорирует
  каталоги с префиксом `_`. Спеки чистой логики лежат рядом с источником в `shared/koans/`.
- Тест кеша `koan-list` требует `vi.resetModules()` + динамический `import` на каждый
  тест — иначе module-scope `cachedList` течёт между тестами.
- `pnpm lint` покрывает только `src` (`eslint src`) — `netlify/functions` не линтится
  в проекте (→ возможное улучшение вне scope koans).
- Проверка: `pnpm test` (41 тест, вкл. существующие), `pnpm test:functions` (20),
  `pnpm typecheck` (root + netlify), `eslint` — чисто.

---

## Критичные файлы (актуальные пути после P2)

**Бэкенд:**

- `netlify/functions/koan-get.ts`, `koan-list.ts`, `koan-random.ts`
- `netlify/functions/shared/koans/parse-frontmatter.ts`, `utilities.ts`, `http.ts`

**Фронтенд:**

- `src/app/features/koans/data/api/koan/services/koan-api.service.ts`
- `src/app/features/koans/data/api/koan/models/koan-api.model.ts`
- `src/app/features/koans/data/api/koan/helpers/convert-koan-api-response-to-koan-model.ts`
- `src/app/features/koans/data/services/koan-body-parser.service.ts`
- `src/app/features/koans/data/facades/koans.facade.ts`
- `src/app/features/koans/data/models/koan.model.ts`
- `src/app/features/koans/ui/components/koans-page/**` (4 компонента: page, widget, list, reader)
- `src/styles.css` (`.visually-hidden` + `--koan-*`)

---

## Verification

1. **Сборка/линт/типы:** `pnpm lint && pnpm typecheck && pnpm build`.
2. **Тесты:** `pnpm test` — все новые спеки зелёные; `pnpm test:cov` — покрытие фичи.
3. **Функционал (нужен `pnpm dev` — `netlify dev`, не `pnpm start`):**
   - `/koans`: грузится «коан дня», список, выбор коана открывает читалку.
   - «Следующий коан» меняет коан дня.
   - Ошибка: остановить netlify-функции / вернуть 500 → UI показывает состояние ошибки, не пустоту.
   - `get-koan?slug=` с битым slug → 400; несуществующий → 404.
4. **Доступность:**
   - Навигация только с клавиатуры: Tab по списку, Enter/Space выбирают, Space не скроллит.
   - Проверка axe DevTools на `/koans` — 0 нарушений.
   - Скринридер: смена коана анонсируется, у списка и читалки есть имена.
   - Контраст `--koan-*` цветов — проверить в DevTools/axe на обеих темах.
