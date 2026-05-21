type Nullable<T> = T | null | undefined;
type ValueOf<T> = T[keyof T];
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
type WithOptional<T, K extends keyof T> = Omit<T, K> & { [P in K]?: T[P] };
