export const Sins = [
  {
    id: 1,
    severity: 'critical',
    severityLabel: {
      en: 'critical',
      ru: 'критично',
    },
    text: {
      en: 'Committed console.log to production',
      ru: 'Закоммитил console.log в production',
    },
    description: {
      en: 'Left debug statements in production code, leaking internal data and cluttering logs.',
      ru: 'Оставил отладочные вызовы в продакшн-коде, засоряя логи и раскрывая внутренние данные.',
    },
    status: 'full',
    statusLabel: {
      en: 'redeemed',
      ru: 'искуплен',
    },
  },
  {
    id: 2,
    severity: 'low',
    severityLabel: {
      en: 'low',
      ru: 'низкая',
    },
    text: {
      en: 'Used var instead of const/let',
      ru: 'Использовал var вместо const/let',
    },
    description: {
      en: 'Ignored modern scoping rules, causing unpredictable hoisting and variable leaks.',
      ru: 'Игнорировал современные правила области видимости, провоцируя непредсказуемый хойстинг и утечки переменных.',
    },
    status: 'half',
    statusLabel: {
      en: 'half redeemed',
      ru: 'полу-искуплен',
    },
  },
  {
    id: 3,
    severity: 'low',
    severityLabel: {
      en: 'low',
      ru: 'низкая',
    },
    text: {
      en: 'Copied code from StackOverflow without understanding it',
      ru: 'Скопировал код со StackOverflow не понимая его',
    },
    description: {
      en: 'Pasted an answer without reading it, introducing hidden bugs and unmaintainable code.',
      ru: 'Вставил ответ не читая его, внеся скрытые баги и нечитаемый код в проект.',
    },
    status: 'none',
    statusLabel: {
      en: 'not redeemed',
      ru: 'не искуплен',
    },
  },
  {
    id: 4,
    severity: 'medium',
    severityLabel: {
      en: 'medium',
      ru: 'средняя',
    },
    text: {
      en: 'Wrote TODO and never came back to it',
      ru: 'Написал TODO и никогда не вернулся к нему',
    },
    description: {
      en: 'Left TODO comments as permanent tombstones in the codebase, forever haunting future developers.',
      ru: 'Оставил TODO-комментарии как вечные надгробия в кодовой базе, пугая будущих разработчиков.',
    },
    status: 'none',
    statusLabel: {
      en: 'not redeemed',
      ru: 'не искуплен',
    },
  },
  {
    id: 5,
    severity: 'medium',
    severityLabel: {
      en: 'medium',
      ru: 'средняя',
    },
    text: {
      en: 'Pushed directly to main without a pull request',
      ru: 'Пушнул прямо в main без pull request',
    },
    description: {
      en: 'Bypassed code review entirely, deploying untested changes directly to the main branch.',
      ru: 'Полностью обошёл ревью кода, задеплоив непроверенные изменения прямо в основную ветку.',
    },
    status: 'half',
    statusLabel: {
      en: 'half redeemed',
      ru: 'полу-искуплен',
    },
  },
  {
    id: 6,
    severity: 'low',
    severityLabel: {
      en: 'low',
      ru: 'низкая',
    },
    text: {
      en: 'Said "works on my machine"',
      ru: 'Сказал "works on my machine"',
    },
    description: {
      en: 'Dismissed a reproducible bug by declaring the environment at fault instead of the code.',
      ru: 'Отмахнулся от воспроизводимого бага, объявив виновным окружение, а не свой код.',
    },
    status: 'full',
    statusLabel: {
      en: 'redeemed',
      ru: 'искуплен',
    },
  },

  {
    id: 7,
    severity: 'critical',
    severityLabel: {
      en: 'critical',
      ru: 'критично',
    },
    text: {
      en: 'Deleted important files from git',
      ru: 'Удалил важные файлы из git',
    },
    description: {
      en: 'Force-pushed or permanently removed critical tracked files, potentially destroying project history.',
      ru: 'Сделал force-push или безвозвратно удалил важные отслеживаемые файлы, уничтожив историю проекта.',
    },
    status: 'full',
    statusLabel: {
      en: 'redeemed',
      ru: 'искуплен',
    },
  },
];
