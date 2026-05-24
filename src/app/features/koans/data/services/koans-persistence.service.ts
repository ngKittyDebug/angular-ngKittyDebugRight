import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KoansPersistenceService {
  private readonly READ_KEY = 'koan-read';

  public loadReadSet(): ReadonlySet<string> {
    try {
      const raw = localStorage.getItem(this.READ_KEY);
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      const list = Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];

      return new Set<string>(list);
    } catch {
      return new Set();
    }
  }

  public saveReadSet(readSet: ReadonlySet<string>): void {
    localStorage.setItem(this.READ_KEY, JSON.stringify([...readSet]));
  }
}
