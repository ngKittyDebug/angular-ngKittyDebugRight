import type { KoanCategory } from './koan-category.model';
import type { KoanListItemModel } from './koan-list-item.model';

export type KoanGroupCategory = KoanCategory | 'other';

export interface KoanGroup {
  readonly category: KoanGroupCategory;
  readonly items: readonly KoanListItemModel[];
}
