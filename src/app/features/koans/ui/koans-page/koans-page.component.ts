import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import type { OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, skip, Subject } from 'rxjs';

import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { TuiButton } from '@taiga-ui/core';

import { KoanApiService } from '@features/koans/data/api/koan-api.service';
import { KoanCategoryService } from '@features/koans/data/api/koan-category.service';
import { KoansStore } from '@features/koans/data/store/koans.store';
import { KoanListComponent } from './koan-list/koan-list.component';
import { KoanReaderComponent } from './koan-reader/koan-reader.component';

const READ_DWELL_MS = 2500;
const TOAST_VISIBLE_MS = 2000;
const SEARCH_DEBOUNCE_MS = 300;

@Component({
  selector: 'ngKitty-koans-page',
  imports: [TranslocoModule, TuiButton, KoanListComponent, KoanReaderComponent],
  templateUrl: './koans-page.component.html',
  styleUrl: './koans-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'koans-page',
  },
})
export class KoansPageComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly transloco = inject(TranslocoService);
  private readonly koanApi = inject(KoanApiService);
  private readonly koanCategories = inject(KoanCategoryService);
  private readonly queryInput$ = new Subject<string>();

  protected readonly store = inject(KoansStore);
  protected readonly slug = input<Nullable<string>>(null);
  protected readonly listOpen = signal(true);
  protected readonly toastMessage = signal<Nullable<string>>(null);

  constructor() {
    this.queryInput$
      .pipe(debounceTime(SEARCH_DEBOUNCE_MS), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((query) => this.store.setQuery(query));

    this.transloco.langChanges$.pipe(skip(1), takeUntilDestroyed()).subscribe(() => {
      this.koanApi.invalidate();
      this.koanCategories.invalidate();
      this.store.loadKoanList();
      this.store.loadCategories();

      const currentSlug = this.store.selectedKoan()?.slug;

      if (currentSlug) {
        this.store.selectKoan(currentSlug);
      }
    });

    effect(() => {
      const next = this.slug();

      if (next) {
        this.store.selectKoan(next);
      } else {
        this.store.clearSelectedKoan();
        this.listOpen.set(true);
      }
    });

    effect((onCleanup) => {
      const koan = this.store.selectedKoan();

      if (!koan) {
        return;
      }

      const timer = globalThis.setTimeout(() => this.store.markRead(koan.slug), READ_DWELL_MS);

      onCleanup(() => globalThis.clearTimeout(timer));
    });

    fromEvent<KeyboardEvent>(globalThis, 'keydown')
      .pipe(takeUntilDestroyed())
      .subscribe((event) => {
        const target = event.target as Nullable<HTMLElement>;

        if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
          return;
        }

        if (event.key === 'ArrowLeft') {
          this.goNeighbor(-1);
        } else if (event.key === 'ArrowRight') {
          this.goNeighbor(1);
        } else if (event.key === 'r' || event.key === 'к') {
          this.onRandom();
        }
      });
  }

  public ngOnInit(): void {
    this.store.loadCategories();
    this.store.loadKoanList();
  }

  protected onQueryInput(event: Event): void {
    this.queryInput$.next((event.target as HTMLInputElement).value);
  }

  protected onClearQuery(): void {
    this.store.setQuery('');
  }

  protected onKoanSelect(slug: string): void {
    this.listOpen.set(false);
    void this.router.navigate(['/koans', slug]);
  }

  protected onToggleList(): void {
    this.listOpen.update((open) => !open);
  }

  protected onRandom(): void {
    const next = this.store.pickRandomFromFiltered();

    if (next) {
      void this.router.navigate(['/koans', next]);
    }
  }

  protected onPrev(): void {
    this.goNeighbor(-1);
  }

  protected onNext(): void {
    this.goNeighbor(1);
  }

  protected async onShare(): Promise<void> {
    try {
      await navigator.clipboard.writeText(globalThis.location.href);
      this.showToast(this.transloco.translate('koans.toast-copied'));
    } catch {
      this.showToast(this.transloco.translate('koans.toast-copy-failed'));
    }
  }

  private goNeighbor(direction: -1 | 1): void {
    const next = this.store.pickNeighbor(direction);

    if (next) {
      void this.router.navigate(['/koans', next]);
    }
  }

  private showToast(message: string): void {
    this.toastMessage.set(message);
    globalThis.setTimeout(() => this.toastMessage.set(null), TOAST_VISIBLE_MS);
  }
}
