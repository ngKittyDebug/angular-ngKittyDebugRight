# Angular drop-in files — карта путей

Все файлы в этой папке кладутся **поверх** соответствующих файлов в твоей ветке `feat/koans-feature`. Структура слева → путь в репозитории справа.

| Файл из пакета                                           | Путь в репозитории |
|----------------------------------------------------------|--------------------|
| `styles-koans.scss`                                      | **append** в конец `src/styles.css` |
| `data/koan.model.ts`                                     | `src/app/features/koans/data/models/koan.model.ts` (заменить) |
| `data/koans.facade.ts.patch.md`                          | патч-инструкция к `src/app/features/koans/data/facades/koans.facade.ts` |
| `koan-marked-extensions.ts`                              | `src/app/features/koans/koan-marked-extensions.ts` (заменить) |
| `koans-page/koans-page.component.ts`                     | `src/app/features/koans/ui/koans-page/koans-page.component.ts` (заменить) |
| `koans-page/koans-page.component.html`                   | `src/app/features/koans/ui/koans-page/koans-page.component.html` (заменить) |
| `koans-page/koans-page.component.scss`                   | `src/app/features/koans/ui/koans-page/koans-page.component.scss` (заменить) |
| `koan-list/koan-list.component.ts`                       | `src/app/features/koans/ui/koans-page/koan-list/koan-list.component.ts` (заменить) |
| `koan-list/koan-list.component.html`                     | `src/app/features/koans/ui/koans-page/koan-list/koan-list.component.html` (заменить) |
| `koan-list/koan-list.component.scss`                     | `src/app/features/koans/ui/koans-page/koan-list/koan-list.component.scss` (заменить) |
| `koan-reader/koan-reader.component.ts`                   | `src/app/features/koans/ui/koans-page/koan-reader/koan-reader.component.ts` (заменить) |
| `koan-reader/koan-reader.component.html`                 | `src/app/features/koans/ui/koans-page/koan-reader/koan-reader.component.html` (заменить) |
| `koan-reader/koan-reader.component.scss`                 | `src/app/features/koans/ui/koans-page/koan-reader/koan-reader.component.scss` (заменить) |

## Затронутые тесты — будут падать

Файлы со снапшотами/asserts по старой разметке поломаются. Список:

- `koans-page.component.spec.ts` — selectors `.koans-title`, `.list-toggle`, наличие `<ngKitty-koan-widget>` → стало `.kp-header`, `.kp-list-toggle`, виджет убран.
- `koan-list.component.spec.ts` — `.koan-list-button`, `.koan-list-number`, `.koan-list-title` → `.kl-item`, `.kl-item-num`, `.kl-item-title`.
- `koan-reader.component.spec.ts` — `.koan-reader`, `.reader-empty` → `.kr-article`, `.kr-empty`.
- `koans.facade.spec.ts` — добавлены новые computed/methods, существующие тесты компиляции должны пройти, но добавь покрытие `setQuery / toggleCategory / toggleTag / markRead / toggleTheme / filteredList / groupedList`.

Названия CSS-классов специально переименованы из `koan-*` в `kp-*` / `kl-*` / `kr-*` чтобы не конфликтовать со старой разметкой во время миграции (можно положить файлы рядом и переключать селектор страницы).

## Зависимости

Уже есть в проекте:
- `@ngrx/signals`
- `ngx-markdown` + `marked` + `dompurify`
- Angular 18+ control flow (`@if`/`@for`/`@let`)

Добавлять не нужно ничего. Если хочется подсветки кода — опциональный `ngx-highlightjs` или `prismjs` подвяжется без изменений шаблонов: см. комментарий в `koan-reader.component.scss` рядом с блоком `pre`.

## Шрифты

Добавь в `src/index.html` (в `<head>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+JP:wght@400;500;600&display=swap" rel="stylesheet">
```

Если хочешь self-host — выгрузи WOFF2 через [google-webfonts-helper](https://gwfh.mranftl.com/), положи в `public/fonts/` и опиши `@font-face` блоки в `src/styles.css` ПЕРЕД секцией `styles-koans.scss`.

## Backend / Netlify functions

`/.netlify/functions/koan-list` должна возвращать в каждом элементе **дополнительно** `category` и `tags`:

```ts
// было
type ListItem = { number: number; title: string; slug: string };
// стало
type ListItem = { number: number; title: string; slug: string; category: KoanCategory; tags: string[] };
```

Эти данные уже лежат в frontmatter каждого `.mdx` файла (`category`, `tags`) — нужно только пробросить в response. Если backend ещё не правится — фронт деградирует мягко: фильтр по категориям/тегам будет пустым, остальное работает.

## Маршруты — не меняются

`KOANS_ROUTES` остаются как есть:

```ts
[
  { path: '', component: KoansPageComponent, providers: koansProviders },
  { path: ':slug', component: KoansPageComponent, providers: koansProviders },
]
```

Шеринг по прямой ссылке работает «бесплатно»: `slug` приходит как `input` из роутера, эффект в `KoansPageComponent.constructor` вызывает `store.selectKoan(slug)`.

## Виджет «коан дня»

В новой странице `<ngKitty-koan-widget>` **не используется** — он переедет на главную, как ты и говорил. Файлы компонента не удаляй: `koan-widget.component.{ts,html,scss}` остаются на месте, просто не импортируются в `koans-page.component.ts`.

## Compatibility-проверка

Глобальные `:root[tuiTheme='light']` и `:root[tuiTheme='dark']` в `src/styles.css` **не трогаем**. Новая палитра живёт в скоупе `.koans-page[data-koan-theme='sumi'|'washi']`. Атрибут `data-koan-theme` ставится через host-binding на `KoansPageComponent` и обновляется при переключении темы через `store.theme()`.

Если у пользователя в `<html>` стоит `tuiTheme='light'` — на других страницах сохраняется ваша золотая лофайная тема. На `/koans` поверх неё включается отдельный sumi (по умолчанию) или washi.

## Известные ограничения / TODO для разработчика

1. **Подсветка синтаксиса кода**: в HTML-прототипе она своя; в Angular я оставил блок `<pre>` без highlight — поставь `ngx-highlightjs` или подобное, и токены подсветятся автоматически без правки шаблона.
2. **Дебаунс поиска**: сейчас onInput → store.setQuery срабатывает на каждый символ. Если коанов станет 200+ — оборачивай в `rxjs.debounce(120ms)` через `toSignal(fromEvent(...).pipe(debounceTime(120)))`.
3. **i18n**: вшиты русские строки. Если будет английская версия — выносить в `@angular/localize` ключи.
4. **Reduced motion**: ослабленные transitions учтены в SCSS (`@media (prefers-reduced-motion: reduce)`).
5. **Печать прочитанных** хранится в `localStorage['koan-read']` массивом slug’ов. Никакой синхронизации между устройствами.

Если есть желание — могу также собрать вариант `washi` с принтерскими цветами для возможной светлой темы или нарисовать «коан дня» виджет в новой стилистике для главной.
