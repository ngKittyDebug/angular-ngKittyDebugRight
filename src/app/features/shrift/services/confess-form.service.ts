import { inject, Service } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import type { ConfessForm } from '../models/confess-form.model';

@Service({
  autoProvided: false,
})
export class ConfessFormService {
  private readonly fb = inject(FormBuilder);
  public readonly confessForm = this.fb.group<ConfessForm>({
    text: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
    severity: this.fb.nonNullable.control('low'),
  });
}
