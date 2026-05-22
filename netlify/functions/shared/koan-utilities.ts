import { join } from 'node:path';
import { readdir, readFile } from 'node:fs/promises';

import matter from 'gray-matter';

export const KOAN_FILE_EXTENSION = '.mdx';
export const SUPPORTED_LANGS = ['ru', 'en'] as const;
export type KoanLang = (typeof SUPPORTED_LANGS)[number];

const SLUG_PATTERN = /^[0-9a-z-]+$/;
const SLUG_MAX_LENGTH = 100;

export const isValidLang = (value: string): value is KoanLang => (SUPPORTED_LANGS as readonly string[]).includes(value);

export const getKoansDirectory = (lang: KoanLang) => join(process.cwd(), 'public', 'koans', lang);

export const isValidSlug = (value: string): boolean => value.length <= SLUG_MAX_LENGTH && SLUG_PATTERN.test(value);

export const toKoanFileName = (slug: string): string => `${slug}${KOAN_FILE_EXTENSION}`;

export const getAllKoanFiles = async (lang: KoanLang): Promise<string[]> => {
  const allFiles = await readdir(getKoansDirectory(lang));

  return allFiles.filter((f) => f.endsWith(KOAN_FILE_EXTENSION));
};

// Koan files are bundled with the deployment and do not change at runtime, so the
// file list is cached per language for the lifetime of a warm function instance.
const cachedKoanFiles: Partial<Record<KoanLang, string[]>> = {};

export const getCachedKoanFiles = async (lang: KoanLang): Promise<string[]> => {
  cachedKoanFiles[lang] ??= await getAllKoanFiles(lang);

  return cachedKoanFiles[lang]!;
};

interface KoanFrontmatter {
  number: number;
  title: string;
  slug: string;
  category: string;
  kanji?: string;
  tags: string[];
  source: string;
}

interface ParsedKoan {
  frontmatter: Partial<KoanFrontmatter>;
  body: string;
}

export function parseFrontmatter(raw: string): ParsedKoan {
  try {
    const { data, content } = matter(raw);

    return { frontmatter: data as Partial<KoanFrontmatter>, body: content.trim() };
  } catch {
    return { frontmatter: {}, body: raw };
  }
}

// Frontmatter comes from raw .mdx files, so `parseFrontmatter` honestly returns a
// `Partial`. This type guard reports whether it is fully populated and valid — used
// to skip malformed koans in the list and to back the assertion below.
export function isKoanFrontmatter(frontmatter: Partial<KoanFrontmatter>): frontmatter is KoanFrontmatter {
  const { number, title, slug, category, tags, source } = frontmatter;

  return (
    typeof number === 'number' &&
    Number.isFinite(number) &&
    !!title &&
    !!slug &&
    !!category &&
    !!source &&
    Array.isArray(tags)
  );
}

// Narrows a single koan, throwing on malformed content. Used by get/random where a
// bad requested koan should surface as an error rather than be silently dropped.
export function assertIsKoanFrontmatter(frontmatter: Partial<KoanFrontmatter>): asserts frontmatter is KoanFrontmatter {
  if (!isKoanFrontmatter(frontmatter)) {
    throw new Error('Invalid koan frontmatter');
  }
}

export interface Koan extends KoanFrontmatter {
  body: string;
}

// Reads and parses a single koan file, throwing on malformed content. Used by the
// get/random endpoints, where a bad koan should surface as an error.
export async function readKoanFile(file: string, lang: KoanLang): Promise<Koan> {
  const raw = await readFile(join(getKoansDirectory(lang), file), 'utf-8');
  const { frontmatter, body } = parseFrontmatter(raw);

  assertIsKoanFrontmatter(frontmatter);

  return { ...frontmatter, body };
}
