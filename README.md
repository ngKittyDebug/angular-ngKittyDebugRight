# ngKittyDebug

## :church: About the project

The Church of the Holy Deploy — это цифровой храм для программистов, где каждый может исповедоваться в своих багах, вопросить оракула о судьбе деплоя, получить наставление от деда-сеньора и благословение Духа Машины. Входите без страха, и да воздастся вам по вере вашей.

Проект включает в себя сервисы:

- онлайн-исповедальня
- дневники разработчика (отслеживание эмоционального состояния)
- гадание на судьбу деплоя (расклад на 3 карты)
- ежедневный астрологический прогноз
- новости космоса + космические фотографии NASA
- погодные условия, UI зависит от стихии дня
- дед-сеньор — генератор цифровой мудрости

## 🚀 Deployment

**Production:** [https://delulu-church.netlify.app/](https://delulu-church.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/be597b1e-bdc6-4923-a2cc-0eb263412cab/deploy-status)](https://app.netlify.com/projects/delulu-church/deploys)

## 👥 Team Members

| Роль                           | Имя                 | Гитхаб                                          |
| ------------------------------ | ------------------- | ----------------------------------------------- |
| Frontend developer / Team Lead | Daria Melnikova     | [dashque](https://github.com/dashque)           |
| Frontend developer             | Alena Alekseeva     | [alena1409](https://github.com/Alena1409)       |
| Frontend developer             | Nadezhda Kozochkina | [kozochkina82](https://github.com/kozochkina82) |

## :closed_book:Требования

- `Node.js` (24.15.0)
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

| Команда             | Что делает                                            |
| ------------------- | ----------------------------------------------------- |
| `pnpm ci`           | Устанавливает зависимости строго по `pnpm-lock.yaml`  |
| `pnpm start`        | Запускает dev-сервер Angular                          |
| `pnpm watch`        | Собирает проект в watch-режиме                        |
| `pnpm build`        | Создаёт production-сборку приложения                  |
| `pnpm typecheck`    | Проверяет TypeScript без генерации файлов             |
| `pnpm lint`         | Запускает ESLint и Stylelint                          |
| `pnpm lint:fix`     | Автоматически исправляет ошибки ESLint и Stylelint    |
| `pnpm format`       | Проверяет форматирование Prettier                     |
| `pnpm format:fix`   | Форматирует файлы через Prettier                      |
| `pnpm test`         | Запускает unit-тесты один раз                         |
| `pnpm test:watch`   | Запускает unit-тесты в watch-режиме                   |
| `pnpm test:cov`     | Запускает тесты с отчётом о покрытии                  |
| `pnpm i18n:extract` | Извлекает ключи локализации Transloco                 |
| `pnpm i18n:find`    | Ищет отсутствующие и неиспользуемые ключи             |
| `pnpm knip`         | Поиск неиспользуемых файлов, экспортов и зависимостей |
| `pnpm deploy`       | Деплоит приложение                                    |

## :hammer_and_wrench: Tech Stack

- Angular 22.0.0
- TypeScript 6.0.3
- Vitest
- ESLint + Stylelint + Prettier
- Taiga UI

## :books: Useful links

- [Angular CLI](https://angular.dev/tools/cli)
