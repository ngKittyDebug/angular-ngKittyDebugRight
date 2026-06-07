import { Service } from '@angular/core';
import { firestore } from '@env/environment';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

import type { UserProfile } from './models/user-profile.model';

@Service()
export class UserProfileService {
  public async loadProfile(uid: string): Promise<UserProfile | null> {
    const userSnapshot = await getDoc(this.getUserReference(uid));

    if (!userSnapshot.exists()) {
      return null;
    }

    return this.toUserProfile(uid, userSnapshot.data());
  }

  public async createProfile(uid: string, email: string | null, displayName: string | null, dateOfBirth: Date | null) {
    await setDoc(this.getUserReference(uid), {
      createdAt: serverTimestamp(),
      dateOfBirth: dateOfBirth,
      displayName: displayName,
      email: email,
      candels: 0,
      sins: 0,
    });
  }

  public async ensureProviderProfile(uid: string, email: string | null, displayName: string | null) {
    const userReference = this.getUserReference(uid);
    const userSnapshot = await getDoc(userReference);

    if (userSnapshot.exists()) {
      await setDoc(
        userReference,
        {
          displayName: displayName,
          email: email,
        },
        { merge: true }
      );

      return;
    }

    await setDoc(userReference, {
      createdAt: serverTimestamp(),
      dateOfBirth: null,
      displayName: displayName,
      email: email,
      candels: 0,
      sins: 0,
    });
  }

  private getUserReference(uid: string) {
    return doc(firestore, 'users', uid);
  }

  private toUserProfile(uid: string, data: Record<string, unknown>): UserProfile {
    return {
      uid: uid,
      email: this.getNullableString(data['email']),
      displayName: this.getNullableString(data['displayName']),
      dateOfBirth: data['dateOfBirth'] ?? null,
      createdAt: data['createdAt'] ?? null,
      candels: this.getNumber(data['candels']),
      sins: this.getNumber(data['sins']),
    };
  }

  private getNullableString(value: unknown): string | null {
    return typeof value === 'string' ? value : null;
  }

  private getNumber(value: unknown): number {
    return typeof value === 'number' ? value : 0;
  }
}
