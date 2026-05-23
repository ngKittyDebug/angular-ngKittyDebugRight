import { FormControl, FormGroup } from '@angular/forms';

export const registerFormFixture = new FormGroup({
  name: new FormControl('', { nonNullable: true }),
  email: new FormControl('', { nonNullable: true }),
  password: new FormControl('', { nonNullable: true }),
  passwordConfirmation: new FormControl('', { nonNullable: true }),
  dateOfBirth: new FormControl('', { nonNullable: true }),
});
