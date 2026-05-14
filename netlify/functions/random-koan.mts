import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseFrontmatter } from './shared/parse-frontmatter.mts';

export default async (): Promise<Response> => {
  const koansDir = join(process.cwd(), 'public', 'koans');
  const files = readdirSync(koansDir).filter((f) => f.endsWith('.mdx'));
  const file = files[Math.floor(Math.random() * files.length)];
  const raw = readFileSync(join(koansDir, file), 'utf-8');
  const parsed = parseFrontmatter(raw);

  return Response.json(parsed);
};
