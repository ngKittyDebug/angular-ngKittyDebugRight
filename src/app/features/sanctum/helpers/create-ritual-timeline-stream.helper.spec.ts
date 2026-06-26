import { describe, expect, it, vi } from 'vitest';

import type { RitualSessionState } from '@features/sanctum/data/models/ritual-session-state.model';
import {
  RITUAL_LITANY_LINE_DELAY_MS,
  RITUAL_VERDICT_REVEAL_DELAY_MS,
} from '@features/sanctum/constants/ritual-timing.config';
import { BranchSanctity } from '@features/sanctum/data/models/branch-sanctity.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';
import { analyzeBranchName } from '@features/sanctum/helpers/analyze-branch-name.helper';
import { createRitualTimelineStream } from '@features/sanctum/helpers/create-ritual-timeline-stream.helper';

describe('createRitualTimelineStream', () => {
  it('должен постепенно раскрывать литанию и завершать вердиктом', () => {
    vi.useFakeTimers();

    const request = {
      branch: 'feat/sanctum-branch-blessing',
      ritualIntent: RitualIntent.MERGE,
      spiritLevel: 0,
      requestId: 1,
    };
    const preview = analyzeBranchName(request.branch, request.spiritLevel, request.ritualIntent, 0);
    const ritualDurationMs = preview.litany.length * RITUAL_LITANY_LINE_DELAY_MS + RITUAL_VERDICT_REVEAL_DELAY_MS;
    let lastState: RitualSessionState | undefined;
    const subscription = createRitualTimelineStream(request).subscribe((state) => {
      lastState = state;
    });

    vi.advanceTimersByTime(ritualDurationMs);

    expect(lastState?.litanyLines).toHaveLength(preview.litany.length);
    expect(lastState?.judgment?.sanctity).toBe(BranchSanctity.SACRED);
    subscription.unsubscribe();
    vi.useRealTimers();
  });
});
