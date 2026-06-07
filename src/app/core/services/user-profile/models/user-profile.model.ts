export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  dateOfBirth: unknown;
  createdAt: unknown;
  candles: number;
  sins: number;
}
