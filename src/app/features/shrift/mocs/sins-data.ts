import type { Sin } from '../models/sin.model';

export const SINS: Sin[] = [
  { uid: '1', severity: 'critical', text: 'Закоммитил console.log в production', status: 'full' },
  { uid: '2', severity: 'low', text: 'Использовал var вместо const/let', status: 'half' },
  { uid: '3', severity: 'low', text: 'Скопировал код со StackOverflow не понимая его', status: 'none' },
  { uid: '4', severity: 'medium', text: 'Написал TODO и никогда не вернулся к нему', status: 'none' },
  { uid: '5', severity: 'medium', text: 'Пушнул прямо в main без pull request', status: 'half' },
  { uid: '6', severity: 'low', text: 'Сказал "works on my machine"', status: 'full' },
  { uid: '7', severity: 'critical', text: 'Удалил важные файлы из git', status: 'full' },
];
