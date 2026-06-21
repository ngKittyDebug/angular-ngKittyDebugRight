import type { TuiIcon } from '@taiga-ui/core';

export interface Candle {
  id: string;
  purpose: string;
  icon: TuiIcon;
  color: string;
  lit: boolean;
  count: number;
}
