import type { KoanListItemModel } from './koan-list-item.model';

export interface KoanGroup {
  readonly category: string;
  readonly items: readonly KoanListItemModel[];
}
