export type KoanSegmentType = 'heading' | 'source' | 'code' | 'master' | 'student' | 'action' | 'haiku' | 'question';

export interface KoanSegment {
  type: KoanSegmentType;
  text: string;
  lang?: string;
}

export interface KoanFrontmatter {
  number: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  source: string;
}

export interface KoanModel extends KoanFrontmatter {
  body: string;
  segments: KoanSegment[];
}

export interface KoanListItemModel {
  number: number;
  title: string;
  slug: string;
}
