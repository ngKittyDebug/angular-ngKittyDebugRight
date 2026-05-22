export function buildRawKoan(
  number: number,
  slug: string,
  title = 'Заголовок',
  category = 'JavaScript',
  kanji: string | null = '"言"'
): string {
  const lines = ['---', `number: ${number}`, `title: "${title}"`, `slug: "${slug}"`, `category: "${category}"`];

  if (kanji !== null) {
    lines.push(`kanji: ${kanji}`);
  }

  lines.push(
    'tags: ["arguments", "undefined"]',
    'source: "Монастырь Мацуо-дэра"',
    '---',
    '',
    '# Тело коана',
    '',
    'Текст коана.'
  );

  return lines.join('\n');
}

export const RAW_KOAN_FIXTURE: string = buildRawKoan(1, '001-o-pustote-argumenta', 'О пустоте аргумента');
