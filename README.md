# ngKittyDebug

## Деплой

[![Netlify Status](https://api.netlify.com/api/v1/badges/be597b1e-bdc6-4923-a2cc-0eb263412cab/deploy-status)](https://app.netlify.com/projects/delulu-church/deploys)

## Требования

- `Node.js` (рекомендуется LTS)
- `pnpm` (в проекте зафиксирован `pnpm@10.30.0`)

## Быстрый старт

```bash
pnpm install --frozen-lockfile
pnpm start
```

После запуска dev-сервера приложение доступно по адресу `http://localhost:4200/`.

## Основные команды

```bash
pnpm ng             # Angular CLI
pnpm start          # запуск dev-сервера (ng serve -o)
pnpm build          # production-сборка
pnpm watch          # сборка в watch-режиме (development)
pnpm test           # unit-тесты (Vitest)
pnpm test:watch     # тесты в watch-режиме
pnpm test:cov       # тесты с покрытием
pnpm lint           # eslint + stylelint
pnpm lint:fix       # eslint + stylelint (с autofix)
pnpm format         # проверка форматирования prettier
pnpm format:fix     # форматирование prettier
pnpm typecheck      # проверка TypeScript без эмита
pnpm prepare        # установка git hooks (husky)
```

## Стек

- Angular 21
- TypeScript 5.9
- Vitest
- ESLint + Stylelint + Prettier

## Полезные ссылки

- [Angular CLI](https://angular.dev/tools/cli)
  +++
