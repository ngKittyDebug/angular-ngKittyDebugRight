import type { KoanModel } from '@features/koans/data/models/koan.model';

export interface KoanApiResponse {
  frontmatter: Omit<KoanModel, 'body' | 'segments'>;
  body: string;
}
