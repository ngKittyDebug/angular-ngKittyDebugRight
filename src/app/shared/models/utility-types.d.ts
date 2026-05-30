import type { FormArray, FormControl, FormGroup } from '@angular/forms';

type Nullable<T> = T | null | undefined;
type ValueOf<T> = T[keyof T];
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
type WithOptional<T, K extends keyof T> = Omit<T, K> & { [P in K]?: T[P] };
/* Тип, извлекающий типы значений из элементов управления формы */
type ExtractFormControl<T> = {
  [K in keyof T]-?: T[K] extends FormArray<infer R>
    ? (R extends FormGroup<infer L> ? ExtractFormControl<L> : R extends FormControl<infer L> ? L : R)[]
    : T[K] extends FormControl<infer U>
      ? U
      : T[K] extends FormGroup<infer U>
        ? ExtractFormControl<U>
        : ExtractFormControl<T[K]>;
};
