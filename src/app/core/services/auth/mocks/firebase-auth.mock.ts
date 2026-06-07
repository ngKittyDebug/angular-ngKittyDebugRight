import { vi } from 'vitest';
import type { User } from 'firebase/auth';

export const firebaseAuthMock = vi.hoisted(() => {
  const authInstance: { currentUser: User | null } = { currentUser: null };

  function GithubAuthProviderMock(this: { providerId: string }): void {
    this.providerId = 'github.com';
  }

  function GoogleAuthProviderMock(this: { providerId: string }): void {
    this.providerId = 'google.com';
  }

  return {
    authInstance,
    createUserWithEmailAndPassword: vi.fn(),
    GithubAuthProvider: vi.fn(GithubAuthProviderMock),
    getAuth: vi.fn(() => authInstance),
    GoogleAuthProvider: vi.fn(GoogleAuthProviderMock),
    onAuthStateChanged: vi.fn(),
    sendPasswordResetEmail: vi.fn(),
    signInWithEmailAndPassword: vi.fn(),
    signInWithPopup: vi.fn(),
    signOut: vi.fn(),
    updateProfile: vi.fn(),
  };
});

vi.mock('firebase/auth', () => firebaseAuthMock);

export const resetFirebaseAuthMock = (): void => {
  firebaseAuthMock.createUserWithEmailAndPassword.mockReset();
  firebaseAuthMock.GithubAuthProvider.mockReset();
  firebaseAuthMock.getAuth.mockReset();
  firebaseAuthMock.GoogleAuthProvider.mockReset();
  firebaseAuthMock.onAuthStateChanged.mockReset();
  firebaseAuthMock.sendPasswordResetEmail.mockReset();
  firebaseAuthMock.signInWithEmailAndPassword.mockReset();
  firebaseAuthMock.signInWithPopup.mockReset();
  firebaseAuthMock.signOut.mockReset();
  firebaseAuthMock.updateProfile.mockReset();
  firebaseAuthMock.authInstance.currentUser = null;
  firebaseAuthMock.getAuth.mockReturnValue(firebaseAuthMock.authInstance);
  firebaseAuthMock.onAuthStateChanged.mockImplementation((_auth, onNext) => {
    onNext(null);

    return vi.fn();
  });
  firebaseAuthMock.sendPasswordResetEmail.mockResolvedValue(undefined);
  firebaseAuthMock.signOut.mockResolvedValue(undefined);
  firebaseAuthMock.updateProfile.mockResolvedValue(undefined);
};
