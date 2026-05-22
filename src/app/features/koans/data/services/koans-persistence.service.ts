import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KoansPersistenceService {
  private readonly READ_KEY = 'koan-read';

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
}
