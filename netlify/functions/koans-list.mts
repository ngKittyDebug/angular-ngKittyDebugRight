import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseFrontmatter } from './shared/parse-frontmatter.mts';

export default async (): Promise<Response> => {
  const koansDir = join(process.cwd(), 'public', 'koans');
  const files = readdirSync(koansDir).filter((f) => f.endsWith('.mdx'));

  const list = files
    .map((file) => {
      const raw = readFileSync(join(koansDir, file), 'utf-8');
      const { frontmatter } = parseFrontmatter(raw);
      return { number: frontmatter.number, title: frontmatter.title, slug: frontmatter.slug };
    })
    .sort((a, b) => a.number - b.number);

  return Response.json(list);
};
