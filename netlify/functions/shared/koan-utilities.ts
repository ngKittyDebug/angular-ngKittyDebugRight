import { join } from 'node:path';
import { readdir } from 'node:fs/promises';

export const getKoansDirectory = () => join(process.cwd(), 'public', 'koans');

export const getAllKoanFiles = async (): Promise<string[]> => {
  const koansDirectory = getKoansDirectory();
  const allFiles = await readdir(koansDirectory);

  return allFiles.filter((f) => f.endsWith('.mdx'));
};

interface KoanFrontmatter {
  number: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  source: string;
}

interface ParsedKoan {
  frontmatter: Partial<KoanFrontmatter>;
  body: string;
}

export function parseFrontmatter(raw: string): ParsedKoan {
  const { frontmatterBlock, body } = splitRaw(raw);
  const frontmatter = parseFrontmatterBlock(frontmatterBlock);

  return { frontmatter, body };
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

function parseTags(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);

    return Array.isArray(parsed) ? (parsed as string[]) : [];
  } catch {
    return [];
  }
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
      frontmatter.tags = parseTags(value);
    } else if (key === 'title' || key === 'slug' || key === 'category' || key === 'source') {
      frontmatter[key] = value.replaceAll(/^"|"$/g, '');
    }
  }

  return frontmatter;
}
