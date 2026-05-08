# ngKittyDebug

Frontend-приложение на Angular 21 для отладки и разработки UI-фич.

## Требования

- `Node.js` (рекомендуется LTS)
- `pnpm` (в проекте зафиксирован `pnpm@10.30.0`)

## Быстрый старт

```bash
pnpm install
pnpm start
```

После запуска dev-сервера приложение доступно по адресу `http://localhost:4200/`.

## Основные команды

```bash
pnpm start          # запуск dev-сервера
pnpm build          # production-сборка
pnpm watch          # сборка в watch-режиме (development)
pnpm test           # unit-тесты (Jest)
pnpm test:fast      # ускоренный прогон тестов
pnpm test:changed   # тесты только по измененным файлам
pnpm test:watch     # тесты в watch-режиме
pnpm test:cov       # тесты с покрытием
pnpm lint           # eslint + stylelint (с autofix)
pnpm format         # форматирование prettier
pnpm typecheck      # проверка TypeScript без эмита
```

## Работа с ветками и PR

- Для имен веток включена проверка формата:
  `^(chore|feat|fix|docs|style|refactor|perf)\/[a-zA-Z0-9-]+_[a-zA-Z0-9-]+$`
- При открытии PR GitHub Actions автоматически:
  - назначает автора в `Assignees`
  - запрашивает review у команды (кроме автора)

Workflow: `.github/workflows/assigner.yml`.

## Стек

- Angular 21
- TypeScript 5.9
- Jest
- ESLint + Stylelint + Prettier

## Полезные ссылки

- [Angular CLI](https://angular.dev/tools/cli)
