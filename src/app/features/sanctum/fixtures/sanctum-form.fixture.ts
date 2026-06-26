import { FormControl, FormGroup } from '@angular/forms';
import type { SanctumForm } from '@features/sanctum/data/models/sanctum-form.model';
import { RitualIntent } from '@features/sanctum/data/models/ritual-intent.model';

export const sanctumFormFixture = new FormGroup<SanctumForm>({
  branch: new FormControl('', { nonNullable: true }),
  ritualIntent: new FormControl(RitualIntent.MERGE, { nonNullable: true }),
});
