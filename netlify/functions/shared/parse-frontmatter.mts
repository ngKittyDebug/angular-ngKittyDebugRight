export interface KoanFrontmatter {
  number: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  source: string;
}

export interface ParsedKoan {
  frontmatter: KoanFrontmatter;
  body: string;
}

export function parseFrontmatter(raw: string): ParsedKoan {
  const parts = raw.split(/^---\s*$/m);
  const yamlBlock = parts[1] ?? '';
  const body = parts.slice(2).join('---').trim();

  const frontmatter: Partial<KoanFrontmatter> = {};

  for (const line of yamlBlock.split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;

    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();

    if (key === 'number') {
      frontmatter.number = Number(value);
    } else if (key === 'tags') {
      frontmatter.tags = JSON.parse(value) as string[];
    } else if (key === 'title' || key === 'slug' || key === 'category' || key === 'source') {
      frontmatter[key] = value.replace(/^"|"$/g, '');
    }
  }

  return { frontmatter: frontmatter as KoanFrontmatter, body };
}
