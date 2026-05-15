export function buildRawKoan(number: number, slug: string, title = 'Заголовок'): string {
  return [
    '---',
    `number: ${number}`,
    `title: "${title}"`,
    `slug: "${slug}"`,
    'category: "javascript"',
    'tags: ["arguments", "undefined"]',
    'source: "Монастырь Мацуо-дэра"',
    '---',
    '',
    '# Тело коана',
    '',
    'Текст коана.',
  ].join('\n');
}

export const RAW_KOAN_FIXTURE: string = buildRawKoan(1, '001-o-pustote-argumenta', 'О пустоте аргумента');
