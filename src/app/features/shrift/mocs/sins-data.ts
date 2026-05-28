import type { Sin } from '../models/sin.model';

export const SINS: Sin[] = [
  { id: 1, severity: 'critical', text: 'Закоммитил console.log в production', status: 'full' },
  { id: 2, severity: 'low', text: 'Использовал var вместо const/let', status: 'half' },
  { id: 3, severity: 'low', text: 'Скопировал код со StackOverflow не понимая его', status: 'none' },
  { id: 4, severity: 'medium', text: 'Написал TODO и никогда не вернулся к нему', status: 'none' },
  { id: 5, severity: 'medium', text: 'Пушнул прямо в main без pull request', status: 'half' },
  { id: 6, severity: 'low', text: 'Сказал "works on my machine"', status: 'full' },
  { id: 7, severity: 'critical', text: 'Удалил важные файлы из git', status: 'full' },
];
