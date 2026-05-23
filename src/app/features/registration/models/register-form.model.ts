import type { FormControl } from '@angular/forms';

export interface RegisterForm {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  passwordConfirmation: FormControl<string>;
  dateOfBirth: FormControl<string>;
}
