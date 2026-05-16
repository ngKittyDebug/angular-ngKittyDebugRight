import DOMPurify from 'dompurify';
import { marked } from 'marked';
import type { MarkedExtension, Tokens } from 'marked';

type KoanTokenType = 'master' | 'student' | 'source' | 'action' | 'haiku' | 'question';

interface KoanToken {
  type: KoanTokenType;
  raw: string;
  text: string;
}

function renderInline(text: string): string {
  return DOMPurify.sanitize(marked.parseInline(text) as string);
}

function blockTag(tag: string, cssClass: KoanTokenType) {
  const open = `<${tag}>`;
  const tagRegExp = new RegExp(String.raw`^<${tag}>([\s\S]*?)<\/${tag}>`);

  return {
    name: cssClass,
    level: 'block' as const,
    start: (source: string) => source.indexOf(open),
    tokenizer(source: string): KoanToken | undefined {
      const match = new RegExp(tagRegExp).exec(source);

      if (!match) {
        return undefined;
      }

      return { type: cssClass, raw: match[0], text: match[1].trim() };
    },
    renderer(token: Tokens.Generic): string {
      return `<p class="segment ${cssClass}">${renderInline((token as KoanToken).text)}</p>\n`;
    },
  };
}

export const koanMarkedExtensions: MarkedExtension = {
  extensions: [
    blockTag('Master', 'master'),
    blockTag('Student', 'student'),
    blockTag('Source', 'source'),
    blockTag('Action', 'action'),
    {
      name: 'haiku',
      level: 'block' as const,
      start: (source: string) => source.indexOf('<Haiku>'),
      tokenizer(source: string): KoanToken | undefined {
        const match = new RegExp(/^<Haiku>([\s\S]*?)<\/Haiku>/).exec(source);

        if (!match) {
          return undefined;
        }

        return { type: 'haiku', raw: match[0], text: match[1].trim() };
      },
      renderer(token: Tokens.Generic): string {
        // 「Свиток」: render haiku as a single paragraph with `segment haiku` class
        // (matches new koan-reader.component.scss). Keeps the markup minimal —
        // the visual texture (paper tint, hairlines, centered italic) comes from CSS.
        return `<p class="segment haiku">${renderInline((token as KoanToken).text)}</p>\n`;
      },
    },
    /* Question — prepend a 問 vermillion seal so the prompt at the end of every
       koan reads as a stamp on the scroll. The kanji is wrapped in an aria-hidden
       span so screen readers don't speak it. */
    {
      name: 'question',
      level: 'block' as const,
      start: (source: string) => source.indexOf('<Question>'),
      tokenizer(source: string): KoanToken | undefined {
        const match = new RegExp(/^<Question>([\s\S]*?)<\/Question>/).exec(source);

        if (!match) {
          return undefined;
        }

        return { type: 'question', raw: match[0], text: match[1].trim() };
      },
      renderer(token: Tokens.Generic): string {
        const seal = `<span class="question-mark" aria-hidden="true">問</span>`;
        return `<p class="segment question">${seal}${renderInline((token as KoanToken).text)}</p>\n`;
      },
    },
  ],
};

export const koanHeadingExtension: MarkedExtension = {
  renderer: {
    heading({ text, depth }: Tokens.Heading): string {
      return `<h${depth + 1}>${text}</h${depth + 1}>\n`;
    },
  },
};
