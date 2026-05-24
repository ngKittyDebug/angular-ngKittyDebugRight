import { vi } from 'vitest';

import type { MockedObject } from 'vitest';
import type { KoanCategoryService } from './koan-category.service';

export const KoanCategoryServiceMock = {
  getCategories: vi.fn(),
  invalidate: vi.fn(),
} as const satisfies MockedObject<Pick<KoanCategoryService, 'getCategories' | 'invalidate'>>;
