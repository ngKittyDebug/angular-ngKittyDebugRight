export type KoanCategory = 'javascript' | 'angular' | 'philosophy';

export interface KoanModel {
  number: number;
  title: string;
  slug: string;
  body: string;
  category?: KoanCategory;
  tags?: string[];
  source?: string;
}

export interface KoanListItemModel {
  number: number;
  title: string;
  slug: string;
  category?: KoanCategory;
  tags?: string[];
}

export interface KoanCategoryMeta {
  id: KoanCategory;
  label: string;
  kanji: string;
}

export const KOAN_CATEGORIES: readonly KoanCategoryMeta[] = [
  { id: 'javascript', label: 'JavaScript', kanji: '言' },
  { id: 'angular', label: 'Angular', kanji: '骨' },
  { id: 'philosophy', label: 'Философия', kanji: '道' },
] as const;
