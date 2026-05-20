import type { KoanCategory } from './koan-category.model';

export interface KoanListItemModel {
  number: number;
  title: string;
  slug: string;
  category?: KoanCategory;
  tags?: string[];
}
