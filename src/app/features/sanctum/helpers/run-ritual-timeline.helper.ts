import type { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { BranchJudgment } from '@features/sanctum/data/models/branch-judgment.model';
import type { BranchLitanyLine } from '@features/sanctum/data/models/branch-litany-line.model';
import {
  RITUAL_LITANY_LINE_DELAY_MS,
  RITUAL_VERDICT_REVEAL_DELAY_MS,
} from '@features/sanctum/constants/ritual-timing.config';
import { timer } from 'rxjs';

export function runRitualTimeline(
  judgment: BranchJudgment,
  onLitanyLine: (line: BranchLitanyLine) => void,
  onVerdict: (judgment: BranchJudgment) => void,
  destroyReference: DestroyRef,
  litanyLineDelayMs = RITUAL_LITANY_LINE_DELAY_MS,
  verdictRevealDelayMs = RITUAL_VERDICT_REVEAL_DELAY_MS
): void {
  judgment.litany.forEach((line, index) => {
    timer((index + 1) * litanyLineDelayMs)
      .pipe(takeUntilDestroyed(destroyReference))
      .subscribe(() => {
        onLitanyLine(line);

        if (index !== judgment.litany.length - 1) {
          return;
        }

        timer(verdictRevealDelayMs)
          .pipe(takeUntilDestroyed(destroyReference))
          .subscribe(() => {
            onVerdict(judgment);
          });
      });
  });
}
