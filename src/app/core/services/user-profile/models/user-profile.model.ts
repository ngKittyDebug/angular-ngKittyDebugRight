export interface UserProfile {
  /** Firestore document id and Firebase Auth uid. */
  uid: string;
  /** User email stored in Firestore profile. */
  email: string | null;
  /** User display name stored in Firestore profile. */
  displayName: string | null;
  /** User date of birth stored in Firestore profile. */
  dateOfBirth: unknown;
  /** Firestore profile creation timestamp. */
  createdAt: unknown;
  /** Number of user candles. */
  candels: number;
  /** Number of user sins. */
  sins: number;
}
