import { type FormArray, type FormControl, type FormGroup } from '@angular/forms';

/* Тип, извлекающий типы значений из элементов управления формы */
export type ExtractFormControl<T> = {
  [K in keyof T]-?: T[K] extends FormArray<infer R>
    ? (R extends FormGroup<infer L> ? ExtractFormControl<L> : R extends FormControl<infer L> ? L : R)[]
    : T[K] extends FormControl<infer U>
      ? U
      : T[K] extends FormGroup<infer U>
        ? ExtractFormControl<U>
        : ExtractFormControl<T[K]>;
};
