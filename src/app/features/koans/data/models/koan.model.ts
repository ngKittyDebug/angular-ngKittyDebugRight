export interface KoanModel {
  number: number;
  title: string;
  slug: string;
  body: string;
}

export interface KoanListItemModel {
  number: number;
  title: string;
  slug: string;
  category?: string;
  tags?: string[];
}
