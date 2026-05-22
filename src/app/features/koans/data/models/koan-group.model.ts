import type { KoanListItemModel } from './koan-list-item.model';

export type KoanGroupCategory = string;

export interface KoanGroup {
  readonly category: KoanGroupCategory;
  readonly items: readonly KoanListItemModel[];
}
