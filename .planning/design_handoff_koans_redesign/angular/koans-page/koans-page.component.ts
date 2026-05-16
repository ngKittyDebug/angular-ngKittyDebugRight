import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KoansFacade } from '@features/koans/data/facades/koans.facade';
import { KoanListComponent } from './koan-list/koan-list.component';
import { KoanReaderComponent } from './koan-reader/koan-reader.component';

@Component({
  selector: 'ngKitty-koans-page',
  imports: [KoanListComponent, KoanReaderComponent],
  templateUrl: './koans-page.component.html',
  styleUrl: './koans-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // host bindings put `data-koan-theme` on the root so the scoped tokens kick in
  host: {
    class: 'koans-page',
    '[attr.data-koan-theme]': 'store.theme()',
  },
})
export class KoansPageComponent implements OnInit {
  private readonly router = inject(Router);
  protected readonly store = inject(KoansFacade);
  protected readonly slug = input<string | null>(null);
  protected readonly listOpen = signal(true);
  protected readonly toastMessage = signal<string | null>(null);

  /** Index of the currently selected koan inside the filtered list. */
  protected readonly currentIndex = computed(() => {
    const slug = this.store.selectedKoan()?.slug;
    if (!slug) return -1;
    return this.store.filteredList().findIndex((k) => k.slug === slug);
  });
  protected readonly hasPrev = computed(() => this.currentIndex() > 0);
  protected readonly hasNext = computed(() => {
    const i = this.currentIndex();
    return i >= 0 && i < this.store.filteredList().length - 1;
  });

  constructor() {
    // Sync route slug → store
    effect(() => {
      const slug = this.slug();
      if (slug) this.store.selectKoan(slug);
    });

    // Auto-mark current koan as read after 2.5s dwell
    effect((onCleanup) => {
      const koan = this.store.selectedKoan();
      if (!koan) return;
      const timer = window.setTimeout(() => this.store.markRead(koan.slug), 2500);
      onCleanup(() => window.clearTimeout(timer));
    });

    // Keyboard navigation: ←/→/R (when not typing in an input)
    effect((onCleanup) => {
      const onKey = (e: KeyboardEvent): void => {
        const t = e.target as HTMLElement | null;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
        if (e.key === 'ArrowLeft') this.goNeighbor(-1);
        if (e.key === 'ArrowRight') this.goNeighbor(1);
        if (e.key === 'r' || e.key === 'к') this.onRandom();
      };
      window.addEventListener('keydown', onKey);
      onCleanup(() => window.removeEventListener('keydown', onKey));
    });
  }

  public ngOnInit(): void {
    this.store.loadKoanList();
  }

  /* ─── Handlers ─── */

  protected readonly onQueryInput = (e: Event): void => {
    this.store.setQuery((e.target as HTMLInputElement).value);
  };

  protected readonly onClearQuery = (): void => this.store.setQuery('');

  protected readonly onCategoryToggle = (cat: string | null): void => {
    this.store.toggleCategory(cat as never);
  };

  protected readonly onTagToggle = (t: string): void => this.store.toggleTag(t);

  protected readonly onKoanSelect = (slug: string): void => {
    this.listOpen.set(false);
    void this.router.navigate(['/koans', slug]);
  };

  protected readonly onToggleList = (): void => {
    this.listOpen.update((open) => !open);
  };

  protected readonly onToggleTheme = (): void => this.store.toggleTheme();

  protected readonly onRandom = (): void => {
    const current = this.store.selectedKoan()?.slug ?? null;
    const list = this.store.filteredList();
    const others = list.filter((k) => k.slug !== current);
    const pool = others.length ? others : list;
    if (!pool.length) return;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    void this.router.navigate(['/koans', pick.slug]);
  };

  protected readonly onPrev = (): void => this.goNeighbor(-1);
  protected readonly onNext = (): void => this.goNeighbor(1);

  protected readonly onShare = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      this.toastMessage.set('Ссылка скопирована — пусть пройдёт по сетям');
      window.setTimeout(() => this.toastMessage.set(null), 2000);
    } catch {
      this.toastMessage.set('Не удалось скопировать ссылку');
      window.setTimeout(() => this.toastMessage.set(null), 2000);
    }
  };

  private goNeighbor(direction: -1 | 1): void {
    const current = this.store.selectedKoan()?.slug;
    if (!current) return;
    const list = this.store.filteredList();
    const idx = list.findIndex((k) => k.slug === current);
    const next = list[idx + direction];
    if (next) void this.router.navigate(['/koans', next.slug]);
  }
}
