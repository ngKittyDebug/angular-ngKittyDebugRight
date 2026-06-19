import { inject } from '@angular/core';
import { signalStore, withState } from '@ngrx/signals';
import { UI_STATE } from '@core/store/tokens/ui-state.token';

export const uiStateStore = signalStore(
  { providedIn: 'root' },
  withState(() => inject(UI_STATE))
);
