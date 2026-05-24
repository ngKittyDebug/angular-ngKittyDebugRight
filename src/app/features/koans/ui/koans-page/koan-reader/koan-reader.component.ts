import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { TuiButton } from '@taiga-ui/core';
import { MarkdownComponent } from 'ngx-markdown';

import { KoansStore } from '@features/koans/data/store/koans.store';
import { formatKoanNumber } from '@features/koans/data/utils/format-koan-number';
import { KoanDividerComponent } from '@features/koans/ui/koans-page/koan-reader/koan-divider/koan-divider.component';

@Component({
  selector: 'ngKitty-koan-reader',
  imports: [TranslocoModule, TuiButton, MarkdownComponent, KoanDividerComponent],
  templateUrl: './koan-reader.component.html',
  styleUrl: './koan-reader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KoanReaderComponent {
  private static readonly LOADING_DELAY_MS = 300;

  private readonly regionRef = viewChild<ElementRef<HTMLElement>>('readerRegion');
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly transloco = inject(TranslocoService);
  private readonly labelMaster = toSignal(this.transloco.selectTranslate('koans.segment-master'), { initialValue: '' });
  private readonly labelStudent = toSignal(this.transloco.selectTranslate('koans.segment-student'), {
    initialValue: '',
  });

  public readonly prev = output<void>();
  public readonly next = output<void>();
  public readonly share = output<void>();

  protected readonly store = inject(KoansStore);
  protected readonly showLoader = signal(false);

  constructor() {
    effect(() => {
      this.store.selectedKoan();
      this.regionRef()?.nativeElement.scrollTo?.({ top: 0, behavior: 'instant' });
    });

    effect(() => {
      const element = this.host.nativeElement;

      element.style.setProperty('--koan-label-master', `"${this.labelMaster()}"`);
      element.style.setProperty('--koan-label-student', `"${this.labelStudent()}"`);
    });

    effect((onCleanup) => {
      if (!this.store.loadingSelected()) {
        this.showLoader.set(false);

        return;
      }

      const timer = setTimeout(() => {
        this.showLoader.set(true);
      }, KoanReaderComponent.LOADING_DELAY_MS);

      onCleanup(() => clearTimeout(timer));
    });
  }

  protected categoryLabel(id: Nullable<string>): Nullable<string> {
    if (!id) {
      return null;
    }

    return this.store.categories().find((c) => c.id === id)?.label ?? id;
  }

  protected padNumber(n: number): string {
    return formatKoanNumber(n, 3);
  }

  protected onTag(tag: string): void {
    this.store.toggleTag(tag);
  }

  protected onPrev(): void {
    this.prev.emit();
  }

  protected onNext(): void {
    this.next.emit();
  }

  protected onShare(): void {
    this.share.emit();
  }
}
