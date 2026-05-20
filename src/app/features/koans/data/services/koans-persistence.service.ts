import { Injectable } from '@angular/core';

import type { KoanTheme } from '@features/koans/data/models/koan-theme.model';

@Injectable({ providedIn: 'root' })
export class KoansPersistenceService {
  private readonly READ_KEY = 'koan-read';
  private readonly THEME_KEY = 'koan-theme';

  public loadReadSet(): ReadonlySet<string> {
    try {
      const raw = localStorage.getItem(this.READ_KEY);

      return new Set<string>(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      return new Set();
    }
  }

  public saveReadSet(readSet: ReadonlySet<string>): void {
    localStorage.setItem(this.READ_KEY, JSON.stringify([...readSet]));
  }

  public loadTheme(): KoanTheme {
    return localStorage.getItem(this.THEME_KEY) === 'washi' ? 'washi' : 'sumi';
  }

  public saveTheme(theme: KoanTheme): void {
    localStorage.setItem(this.THEME_KEY, theme);
  }
}
