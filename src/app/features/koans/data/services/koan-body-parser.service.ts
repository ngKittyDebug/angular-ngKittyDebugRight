import { Injectable } from '@angular/core';
import { lexer } from 'marked';

import type { MarkedToken } from 'marked';
import type { KoanSegment } from '@features/koans/data/models/koan.model';

@Injectable({ providedIn: 'root' })
export class KoanBodyParserService {
  public parse(body: string): KoanSegment[] {
    const tokens = lexer(body) as unknown as MarkedToken[];
    const segments: KoanSegment[] = [];
    let seenCode = false;
    let lastParagraphIndex = -1;

    for (const token of tokens) {
      if (token.type === 'space') {
        continue;
      }

      if (token.type === 'code') {
        seenCode = true;
        segments.push({ type: 'code', text: token.text, lang: token.lang ?? 'js' });
      } else if (token.type === 'heading') {
        segments.push({ type: 'heading', text: token.text });
      } else if (token.type === 'paragraph') {
        const { text } = token;

        if (!seenCode) {
          segments.push({ type: 'source', text });
        } else if (text.startsWith('С чем ты уйдёшь:')) {
          if (lastParagraphIndex >= 0) {
            segments[lastParagraphIndex].type = 'haiku';
          }

          segments.push({ type: 'question', text });
          lastParagraphIndex = -1;
        } else if (/^Мастер\s*:/.test(text)) {
          segments.push({ type: 'master', text });
          lastParagraphIndex = segments.length - 1;
        } else if (/^Ученик\s*:/.test(text)) {
          segments.push({ type: 'student', text });
          lastParagraphIndex = segments.length - 1;
        } else {
          segments.push({ type: 'action', text });
          lastParagraphIndex = segments.length - 1;
        }
      }
    }

    return segments;
  }
}
