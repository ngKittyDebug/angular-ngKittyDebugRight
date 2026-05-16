# Handoff: Koans · Redesign 「Свиток」

## Overview

Редизайн страницы `/koans` для ngKittyDebug Angular SPA. Сохраняет всю логику фичи (KoansFacade + KoanApiService + ngx-markdown с кастомными расширениями для `<Master>` / `<Student>` / `<Source>` / `<Action>` / `<Haiku>` / `<Question>`), меняет **визуальный язык**, **навигацию** и добавляет:

- Поиск по тексту коанов (заголовок, теги, source, тело).
- Фильтр по категориям (`javascript` / `angular` / `philosophy`) и тегам.
- Группировку списка по категориям с маркерами 言 / 骨 / 道.
- Случайный коан («Дай знак» — на странице, отдельно от виджета).
- Шеринг прямой ссылкой `/koans/<slug>` через кнопку copy.
- Печать прочитанного (red dot) — храним в `localStorage`.
- Палитру Sumi: sumi-чернила + золото + киноварь. **Совместима** с существующими `[tuiTheme='light']` / `[tuiTheme='dark']` — токены живут в **scoped-селекторе** `.koans-page[data-koan-theme]`, не пересекаются с глобальными `--tui-*`.

## About the design files

Файлы в `reference/` — **дизайн-прототип на HTML/React**, не код для копирования в Angular. Они показывают как это должно выглядеть и вести себя. Файлы в `angular/` — drop-in Angular-исходники, которые соответствуют структуре твоей ветки `feat/koans-feature` и могут быть положены поверх существующих компонентов 1-в-1.

## Fidelity

**Hi-fi**. Цвета, шрифты, размеры, тени, паддинги — финальные. Шрифты:
- **Manrope** 300/400/500/600 — UI, заголовки, body.
- **JetBrains Mono** 400/500 — код, номера коанов в списке, чипы тегов.
- **Noto Serif JP** 400/500/600 — единичные кандзи-акценты (`公案`, `問`, `兆`, `部`, `標`, `巻`, `言`, `骨`, `道`).

Подключение через Google Fonts (см. `angular/index.html.patch` ниже) или локальный self-host.

## Совместимость с существующими темами

Существующие глобальные темы НЕ ТРОГАЕМ:
- `:root[tuiTheme='light']` — остаётся вашей золотистой светлой темой.
- `:root[tuiTheme='dark']` — остаётся фиолетовой dark-темой.

Новая палитра подключается на корне koans-страницы:
```html
<div class="koans-page" data-koan-theme="sumi"> … </div>
```
Все koan-CSS использует только новые CSS-переменные с префиксом `--k-` — они не пересекаются с глобальными `--tui-*` и `--koan-*`, хотя на старые `--koan-master/student/haiku/question/source/action` мы маппим для обратной совместимости с уже отрендеренным markdown.

Это позволяет:
- Спокойно дальше развивать сайт в delulu-стилистике.
- На странице коанов жить отдельной эстетикой.
- В любой момент добавить третью тему (`data-koan-theme="washi"` уже готова в `angular/styles-koans.scss`).

## Файловая структура пакета

```
design_handoff_koans_redesign/
├── README.md                          ← вы здесь
├── reference/                         ← HTML-прототип для визуальной сверки
│   ├── Koans Redesign.html
│   ├── styles.css
│   ├── app.jsx
│   ├── tweaks-panel.jsx
│   └── koans-data.js
└── angular/                           ← drop-in Angular-файлы
    ├── README-angular.md              ← карта путей: куда какой файл
    ├── styles-koans.scss              ← добавить в src/styles.css (внизу)
    ├── data/
    │   ├── koan.model.ts              ← расширенный (+category +tags +source)
    │   └── koans.facade.ts.patch.md   ← патч facade (фильтры/группировка/random)
    ├── koan-marked-extensions.ts      ← патч: 問 префикс у Question
    ├── koans-page/
    │   ├── koans-page.component.ts
    │   ├── koans-page.component.html
    │   └── koans-page.component.scss
    ├── koan-list/
    │   ├── koan-list.component.ts
    │   ├── koan-list.component.html
    │   └── koan-list.component.scss
    └── koan-reader/
        ├── koan-reader.component.ts
        ├── koan-reader.component.html
        └── koan-reader.component.scss
```

## Что нужно сделать на бэке (netlify functions)

`/.netlify/functions/koan-list` должна возвращать в каждом элементе **дополнительно**:
```ts
{ number, title, slug, category, tags }   // было: { number, title, slug }
```
Если не хочется править backend сразу — фронт-фолбэк: список без category/tags просто покажется одной группой «Все», фильтр по категориям/тегам будет пустым. Поиск по `title` будет работать.

## Screens / Views

### 1. KoansPage `/koans` и `/koans/:slug`

**Layout**: grid `320px 1fr`. Заголовочная панель `.koans-page__header` приклеена сверху (sticky, top:0). Под ней — `[ Sidebar | Reader ]`.

**Header** (высота ~72px, sticky):
- Слева: ensō-логотип SVG 34×34 (рисуем брашстроком из 2 path’ов с градиентом alpha) + столбик из двух строк: `公案` (Noto Serif JP, 11px, киноварь, letter-spacing 0.25em) и `Коаны` (Manrope 500, 17px).
- По центру: одиночный `<input type="search">` без обводки, только нижняя линия `1px solid var(--k-rule)`, placeholder italic «искать по тексту, тегу, источнику…». При focus линия становится чернилами. Слева 16×16 иконка лупы.
- Справа: icon-кнопка переключения темы (солнце/луна 16×16) + кнопка «Дай знак» с маленьким кандзи `兆`. Кнопка — outline на `var(--k-rule)`, на hover — киноварная обводка и текст.

**Body**: высота `calc(100vh - 72px)`, грид `320px 1fr`, без gap.

### 2. Sidebar (`koan-list` + расширения)

**Контейнер**: scroll-y, `border-right: 1px solid var(--k-rule)`, sticky, top: 72px.

Секции, разделённые тонкими hairline’ами:

1. **Раздел** — мини-кандзи `部` справа от подписи. Кнопки-категории:
   - `● JavaScript (n)`  
   - `● Angular (n)`  
   - `● Философия (n)`  
   - `● Все (N)`  
   
   Точка слева — `var(--k-rule)`, у активной — `var(--k-vermillion)`.
   Active state: цвет текста `var(--k-ink)` без обводки и фона; неактивные — `var(--k-ink-soft)`.

2. **Метки** — кандзи `標`. Чипы тегов: JetBrains Mono 11.5px, серая обводка `1px solid var(--k-rule)`, hover — обводка ink-mute, active — solid ink на бумаге (`background: var(--k-ink); color: var(--k-paper)`). Показываем первые 18 по частоте; кнопка `+N` раскрывает остальные.

3. **Свитки** — кандзи `巻 · {n}`. Группы по категории, заголовок группы: small-caps Noto Serif JP 11px + название + flex-spacer `1px solid var(--k-rule-soft)`. Внутри список:
   - `№01   О пустоте аргумента   ●`
   - грид `32px 1fr 14px` 9px вертикальные паддинги.
   - Номер: JetBrains Mono 11px, tabular-nums.
   - Title: 13.5px Manrope, `text-wrap: balance`.
   - Печать справа: 10×10 круг киноварь — невидимая если непрочитан, заполнена `var(--k-vermillion)` если прочитан.
   - Active: фон `var(--k-paper-2)`, `border-left: 2px solid var(--k-vermillion)`, номер становится киноварным.

### 3. Reader (`koan-reader` + расширения)

**Контейнер**: centered, `padding: 56px 56px 96px`, `max-width: 760px` внутри.

**Вертикальная брашстройка-марджин**: ::before на `.k-reader` — линия 2px высотой во всю высоту контента, gradient `transparent → ink @8% → ink @92% → transparent`, opacity 0.65, position absolute, left: -36px.

**Шапка коана** (сверху вниз):
- `公案 № 001 · JavaScript` — JetBrains Mono 11px, киноварный `公案` (Noto Serif JP 13px), серый `·` разделитель.
- Title H1 — Manrope 300, 38px, line-height 1.15, letter-spacing -0.015em, `text-wrap: balance`.
- Source — JetBrains Mono italic 12px, ink-mute, с em-dash префиксом.
- Tags chips — `#tag` JetBrains Mono 11px ink-mute, точечная нижняя обводка, hover — киноварь. Клик добавляет в фильтр.

**Сегменты** (gap: 20px):
- `Source` — italic 14.5px ink-mute, max-width 580px.
- `Master` — 16.5px ink, `border-left: 2px solid var(--k-gold)`, padding-left 22px.
- `Student` — 16.5px ink-soft, `border-left: 2px solid var(--k-vermillion)`, padding-left 22px.
- `Action` — italic 14.5px ink-mute, padding-left 22px, `::before { content: '•' }`.
- `Haiku` — Noto Serif JP italic 17px, centered, line-height 1.9, на тонированной полосе бумаги `background: var(--k-paper-tint)`, 1px hairlines сверху-снизу, padding 18px 22px.
- `Question` — отделён `border-top: 1px solid var(--k-rule)` сверху, padding-top 20px. Префикс — квадрат 28×28 с кандзи `問`: киноварный фон, бумажный текст, rotate(-2deg). Дальше идёт сам вопрос.
- `Code` — fenced-блок: тонированная бумага `var(--k-paper-tint)`, без border, padding 16px 22px, JetBrains Mono 13.5px, тонкая золотая полоска `::before` слева. Подсветка: keyword киноварь, string jade, number gold, comment ink-mute italic.

**Footer**:
- Слева: `← Предыдущий` / `Следующий →` — outline на `var(--k-rule)`.
- Справа: `🔗 Скопировать ссылку` — text button ink-mute, hover киноварь. По клику copy `window.location.href`, показывает тост `写 Ссылка скопирована` снизу по центру 2 сек.

### Empty state

Если slug не выбран — большой кандзи `空` 64px ink-faint + строка «Выбери коан из списка слева — или нажми „Дай знак“».

## Interactions

- **Поиск**: debounced 150ms (опционально), фильтрует тексты `title + tags + source + segments.join`.
- **Клик по тегу** в reader: toggle в `activeTags`, скроллит список сверху если нужно.
- **Клик по категории**: toggle, повторный клик снимает.
- **Random «Дай знак»**: выбирает случайный slug из текущего отфильтрованного списка, исключая текущий. Hot-key `R`.
- **Стрелки `←/→`**: prev/next по отфильтрованному списку.
- **Marking read**: при выборе коана через 2.5 сек добавляем slug в `localStorage['koan-read']`.

## Design tokens

См. `angular/styles-koans.scss` — все токены `--k-*` определены там для обеих палитр.

### Sumi (dark, default для koans)

| Token              | Value      | Использование |
|--------------------|------------|---------------|
| `--k-paper`        | `#131110`  | основной фон страницы |
| `--k-paper-2`      | `#1a1816`  | sidebar hover, active item |
| `--k-paper-deep`   | `#221f1c`  | press-state, тостер |
| `--k-paper-tint`   | `#1b1815`  | haiku, code block |
| `--k-ink`          | `#ece2c9`  | основной текст |
| `--k-ink-strong`   | `#faf3e1`  | H1, важные акценты |
| `--k-ink-soft`     | `#b8ad96`  | secondary text, student speech |
| `--k-ink-mute`     | `#80776a`  | source, action, meta |
| `--k-ink-faint`    | `#5a5247`  | placeholder, dim numbers |
| `--k-rule`         | `#2e2925`  | основная hairline |
| `--k-rule-soft`    | `#221f1b`  | внутригрупповые разделители |
| `--k-gold`         | `#d6a850`  | master accent, code golden stripe |
| `--k-gold-soft`    | `#e7c47b`  | hover gold |
| `--k-vermillion`   | `#c25040`  | student accent, печать, links |
| `--k-vermillion-soft` | `#d76858` | hover vermillion, brand dot |
| `--k-jade`         | `#8aa783`  | code strings, calm accents |

### Washi (light, опциональная)

В файле `styles-koans.scss` есть полная пара — переключение через `data-koan-theme="washi"`. Для текущего тикета она опциональна — пользователь хочет Sumi.

### Layout scale

- header: 72px sticky
- sidebar: 320px fixed
- reader max-width: 760px
- reader padding: 56px / 56px / 96px (top, sides, bottom)
- segments gap: 20px
- font-size body: 16px
- font-size code: 13.5px
- line-height body: 1.75

### Шум на фоне

SVG `feTurbulence` baseFrequency 0.9, 2 octaves, opacity 0.18 в sumi (0.42 в washi), `mix-blend-mode: screen` (sumi) / `multiply` (washi). Тонкая «бумажная» фактура. Inline base64 — см. `angular/styles-koans.scss`.

## State

В `KoansFacade` добавляем сигналы:
- `query: WritableSignal<string>`
- `activeCategory: WritableSignal<string | null>`
- `activeTags: WritableSignal<Set<string>>`
- `readSet: WritableSignal<Set<string>>` (boots из localStorage)
- `koanTheme: WritableSignal<'sumi' | 'washi'>` (boots из localStorage)

Computed:
- `filteredList = computed(() => …)` — применяет query + category + tags поверх `koanList()`.
- `groupedList = computed(() => groupByCategory(filteredList()))`.

Методы:
- `setQuery(q)`, `setCategory(c)`, `toggleTag(t)`, `markRead(slug)`, `selectRandomFromFiltered()`, `setKoanTheme(t)`.

Полный патч см. в `angular/data/koans.facade.ts.patch.md`.

## Assets

- Все иконки — inline SVG в шаблонах (см. `koans-page.component.html` или вынеси в `ngKitty-icon`).
- Ensō-логотип: 2 path в SVG (open curve + красная точка). Никаких raster-assets.
- Шрифты: Google Fonts (см. `index.html` патч ниже).

### Подключение шрифтов

В `src/index.html` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+JP:wght@400;500;600&display=swap" rel="stylesheet">
```

Если хочешь self-host — выгрузи WOFF2 из Google Fonts Helper и добавь `@font-face` в `styles.css` перед koans-блоком.

## Шаги внедрения

1. **Bring fonts** → правка `src/index.html`.
2. **Tokens** → дописать содержимое `angular/styles-koans.scss` в конец `src/styles.css`.
3. **Model** → заменить `koan.model.ts` (добавляем поля).
4. **API** → дописать `category` и `tags` в `/.netlify/functions/koan-list` (или временно вернуть стабы).
5. **Marked** → заменить `koan-marked-extensions.ts` (только Question меняется).
6. **Facade** → применить патч из `angular/data/koans.facade.ts.patch.md`.
7. **Components** → заменить `.html`, `.scss`, `.ts` в `koans-page`, `koan-list`, `koan-reader` файлами из `angular/`.
8. **Виджет** — закомментировать `<ngKitty-koan-widget>` в `koans-page.component.html` (как и просили). Файлы компонента не удалять — пригодятся на главной.

После этого `pnpm dev` → `/koans` будет в Sumi.

## QA-чеклист

- [ ] Существующий `tuiTheme` переключатель не ломает страницу `/koans` (она сохраняет свой sumi).
- [ ] `/koans/001-o-pustote-argumenta` грузит коан и его слаг подсвечен в сайдбаре.
- [ ] Поиск «async» оставляет только #24.
- [ ] Клик по тегу `#promises` фильтрует список.
- [ ] «Дай знак» рандомит, не повторяет текущий.
- [ ] Copy link кладёт `https://…/koans/<slug>` в буфер, тост виден.
- [ ] `←/→` перематывают по отфильтрованному списку, отключены на краях.
- [ ] `localStorage['koan-read']` пополняется, печать-точка появляется у прочитанных.
- [ ] Sidebar collapse работает на мобильном (`<width: 920px>`).

— Если что-то конфликтует с TUI-сеткой или router-логикой, дай знать, поправлю.
