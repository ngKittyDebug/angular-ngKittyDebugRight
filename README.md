# ngKittyDebug

## :church: About the project

The Church of Holy Deploy — это цифровой храм для программистов, где каждый может исповедоваться в своих багах, вопросить оракула о судьбе деплоя, получить наставление от деда-сеньора и благословение Духа Машины. Входите без страха, и да воздастся вам по вере вашей.

## 🚀 Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/be597b1e-bdc6-4923-a2cc-0eb263412cab/deploy-status)](https://app.netlify.com/projects/delulu-church/deploys)

## 👥 Team Members

| Роль                           | Имя                  | Гитхаб                                           |
| ------------------------------ | -------------------- | ------------------------------------------------ |
| Frontend developer / Team Lead | Daria Melnikova      | [dashque](https://github.com/dashque)            |
| ------------------------------ | -------------------- | ------------------------------------------------ |
| Frontend developer             | Alena1409            | [alena1409](https://github.com/Alena1409)        |
| ------------------------------ | -------------------- | ------------------------------------------------ |
| Frontend developer             | Nadezhda Kozochkina  | [kozochkina82](https://github.com/kozochkina82)  |
| ------------------------------ | -------------------- | ------------------------------------------------ |

## :closed_book:Требования

- `Node.js` (рекомендуется LTS)
- `pnpm` (в проекте зафиксирован `pnpm@10.30.0`)

## ⚡ Get Started

1. Клонировать приложение
   git clone https://github.com/ngKittyDebug/angular-ngKittyDebugRight.git

2. Ввести в командной строке:

```bash
pnpm install --frozen-lockfile
pnpm start
```

После запуска dev-сервера приложение доступно по адресу `http://localhost:4200/`.

## :gear: Основные команды

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

## :hammer_and_wrench: Tech Stack

- Angular 21
- TypeScript 5.9
- Vitest
- ESLint + Stylelint + Prettier
- Taiga UI

## Useful links

- [Angular CLI](https://angular.dev/tools/cli)
