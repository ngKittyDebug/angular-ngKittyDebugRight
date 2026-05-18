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

const QUESTION_SEAL = '<span class="question-mark" aria-hidden="true">問</span>';

function blockTag(tag: string, cssClass: KoanTokenType, seal = '') {
  const open = `<${tag}>`;
  const tagRegExp = new RegExp(String.raw`^<${tag}>([\s\S]*?)<\/${tag}>`);

  return {
    name: cssClass,
    level: 'block' as const,
    start: (source: string) => source.indexOf(open),
    tokenizer(source: string): KoanToken | undefined {
      const match = tagRegExp.exec(source);

      if (!match) {
        return undefined;
      }

      return { type: cssClass, raw: match[0], text: match[1].trim() };
    },
    renderer(token: Tokens.Generic): string {
      return `<p class="segment ${cssClass}">${seal}${renderInline((token as KoanToken).text)}</p>\n`;
    },
  };
}

export const koanMarkedExtensions: MarkedExtension = {
  extensions: [
    blockTag('Master', 'master'),
    blockTag('Student', 'student'),
    blockTag('Source', 'source'),
    blockTag('Action', 'action'),
    blockTag('Haiku', 'haiku'),
    blockTag('Question', 'question', QUESTION_SEAL),
  ],
};

export const koanHeadingExtension: MarkedExtension = {
  renderer: {
    heading({ text, depth }: Tokens.Heading): string {
      return `<h${depth + 1}>${text}</h${depth + 1}>\n`;
    },
  },
};
