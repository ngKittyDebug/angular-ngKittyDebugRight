import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import type { ConfessForm } from '../models/confess-form.model';

@Injectable({
  providedIn: 'root',
})
export class ConfessFormService {
  private readonly fb = inject(FormBuilder);
  public confessForm = this.fb.group<ConfessForm>({
    text: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    severity: this.fb.nonNullable.control('low'),
  });
}
