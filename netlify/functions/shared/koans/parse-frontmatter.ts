interface KoanFrontmatter {
  number: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  source: string;
}

interface ParsedKoan {
  frontmatter: KoanFrontmatter;
  body: string;
}

export function parseFrontmatter(raw: string): ParsedKoan {
  const { frontmatterBlock, body } = splitRaw(raw);
  const frontmatter = parseFrontmatterBlock(frontmatterBlock);

  return { frontmatter: frontmatter as KoanFrontmatter, body };
}

function splitRaw(raw: string): { frontmatterBlock: string; body: string } {
  const parts = raw.split(/^---\s*$/m);

  return {
    frontmatterBlock: parts[1] ?? '',
    body: parts.slice(2).join('---').trim(),
  };
}

function parseLine(line: string): [string, string] | null {
  const colon = line.indexOf(':');

  if (colon === -1) {
    return null;
  }

  return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
}

function parseFrontmatterBlock(frontmatterBlock: string): Partial<KoanFrontmatter> {
  const frontmatter: Partial<KoanFrontmatter> = {};

  for (const line of frontmatterBlock.split('\n')) {
    const parsed = parseLine(line);

    if (!parsed) {
      continue;
    }

    const [key, value] = parsed;

    if (key === 'number') {
      frontmatter.number = Number(value);
    } else if (key === 'tags') {
      frontmatter.tags = JSON.parse(value) as string[];
    } else if (key === 'title' || key === 'slug' || key === 'category' || key === 'source') {
      frontmatter[key] = value.replaceAll(/^"|"$/g, '');
    }
  }

  return frontmatter;
}
