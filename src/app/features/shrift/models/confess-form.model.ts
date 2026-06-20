import type { FormControl } from '@angular/forms';
import type { Severity } from './sin.model';

export interface ConfessForm {
  text: FormControl<string>;
  severity: FormControl<Severity>;
}
