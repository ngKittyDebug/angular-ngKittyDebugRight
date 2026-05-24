export interface KoanModel {
  number: number;
  title: string;
  slug: string;
  body: string;
  category: string;
  tags?: string[];
  source?: string;
}
