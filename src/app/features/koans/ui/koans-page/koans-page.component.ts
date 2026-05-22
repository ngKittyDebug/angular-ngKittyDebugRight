import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import type { OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs';

import { TranslocoModule } from '@jsverse/transloco';

import { KoansFacade } from '@features/koans/data/facades/koans.facade';
import { KoanListComponent } from './koan-list/koan-list.component';
import { KoanReaderComponent } from './koan-reader/koan-reader.component';

const READ_DWELL_MS = 2500;
const TOAST_VISIBLE_MS = 2000;

@Component({
  selector: 'ngKitty-koans-page',
  imports: [RouterLink, RouterOutlet, TranslocoModule, KoanListComponent, KoanReaderComponent],
  templateUrl: './koans-page.component.html',
  styleUrl: './koans-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'koans-page',
  },
})
export class KoansPageComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly routeSlug = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.route.firstChild?.snapshot?.paramMap.get('slug') ?? null),
      distinctUntilChanged()
    ),
    { initialValue: null }
  );

  protected readonly facade = inject(KoansFacade);
  protected readonly slug = input<Nullable<string>>(null);
  protected readonly listOpen = signal(true);
  protected readonly toastMessage = signal<Nullable<string>>(null);

  protected readonly currentIndex = computed(() => {
    const current = this.facade.selectedKoan()?.slug;

    if (!current) {
      return -1;
    }

    return this.facade.filteredList().findIndex((k) => k.slug === current);
  });

  protected readonly hasPrev = computed(() => this.currentIndex() > 0);
  protected readonly hasNext = computed(() => {
    const index = this.currentIndex();

    return index >= 0 && index < this.facade.filteredList().length - 1;
  });

  constructor() {
    effect(() => {
      const next = this.slug() ?? this.routeSlug();

      if (next) {
        this.facade.selectKoan(next);
      } else {
        this.facade.clearSelectedKoan();
        this.listOpen.set(true);
      }
    });

    effect((onCleanup) => {
      const koan = this.facade.selectedKoan();

      if (!koan) {
        return;
      }

      const timer = globalThis.setTimeout(() => this.facade.markRead(koan.slug), READ_DWELL_MS);

      onCleanup(() => globalThis.clearTimeout(timer));
    });

    effect((onCleanup) => {
      const handler = (event: KeyboardEvent): void => {
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
      };

      globalThis.addEventListener('keydown', handler);
      onCleanup(() => globalThis.removeEventListener('keydown', handler));
    });
  }

  public ngOnInit(): void {
    this.facade.loadCategories();
    this.facade.loadKoanList();
  }

  protected onQueryInput(event: Event): void {
    this.facade.setQuery((event.target as HTMLInputElement).value);
  }

  protected onClearQuery(): void {
    this.facade.setQuery('');
  }

  protected onCategoryToggle(category: Parameters<KoansFacade['toggleCategory']>[0]): void {
    this.facade.toggleCategory(category);
  }

  protected onTagToggle(tag: string): void {
    this.facade.toggleTag(tag);
  }

  protected onKoanSelect(slug: string): void {
    this.listOpen.set(false);
    void this.router.navigate(['/koans', slug]);
  }

  protected onToggleList(): void {
    this.listOpen.update((open) => !open);
  }

  protected onRandom(): void {
    const next = this.facade.pickRandomFromFiltered();

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
      // TODO AR add translation
      this.showToast('Ссылка скопирована — пусть пройдёт по сетям');
    } catch {
      this.showToast('Не удалось скопировать ссылку');
    }
  }

  private goNeighbor(direction: -1 | 1): void {
    const current = this.facade.selectedKoan()?.slug;

    if (!current) {
      return;
    }

    const list = this.facade.filteredList();
    const index = list.findIndex((k) => k.slug === current);
    const next = list[index + direction];

    if (next) {
      void this.router.navigate(['/koans', next.slug]);
    }
  }

  private showToast(message: string): void {
    this.toastMessage.set(message);
    globalThis.setTimeout(() => this.toastMessage.set(null), TOAST_VISIBLE_MS);
  }
}
