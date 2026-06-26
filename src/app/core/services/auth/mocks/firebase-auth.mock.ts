import { vi } from 'vitest';
import type { User } from 'firebase/auth';

export const firebaseAuthMock = vi.hoisted(() => {
  const appInstance = {};
  const authInstance: { currentUser: User | null } = { currentUser: null };
  const firestoreInstance = {};
  const serverTimestampFixture = 'server-timestamp';

  function GithubAuthProviderMock(this: { providerId: string }): void {
    this.providerId = 'github.com';
  }

  function GoogleAuthProviderMock(this: { providerId: string }): void {
    this.providerId = 'google.com';
  }

  return {
    addDoc: vi.fn(),
    appInstance,
    authInstance,
    collection: vi.fn(),
    createUserWithEmailAndPassword: vi.fn(),
    deleteDoc: vi.fn(),
    doc: vi.fn(),
    firestoreInstance,
    getDoc: vi.fn(),
    getDocs: vi.fn(),
    query: vi.fn(),
    updateDoc: vi.fn(),
    where: vi.fn(),
    GithubAuthProvider: vi.fn(GithubAuthProviderMock),
    getAuth: vi.fn(() => authInstance),
    getApps: vi.fn(() => [appInstance]),
    getFirestore: vi.fn(() => firestoreInstance),
    GoogleAuthProvider: vi.fn(GoogleAuthProviderMock),
    initializeApp: vi.fn(() => appInstance),
    onAuthStateChanged: vi.fn(),
    sendPasswordResetEmail: vi.fn(),
    serverTimestampFixture,
    serverTimestamp: vi.fn(() => serverTimestampFixture),
    setDoc: vi.fn(),
    signInWithEmailAndPassword: vi.fn(),
    signInWithPopup: vi.fn(),
    signOut: vi.fn(),
  };
});

vi.mock('firebase/app', () => firebaseAuthMock);
vi.mock('firebase/auth', () => firebaseAuthMock);
vi.mock('firebase/firestore', () => firebaseAuthMock);

export const resetFirebaseAuthMock = (): void => {
  firebaseAuthMock.addDoc.mockReset();
  firebaseAuthMock.collection.mockReset();
  firebaseAuthMock.createUserWithEmailAndPassword.mockReset();
  firebaseAuthMock.deleteDoc.mockReset();
  firebaseAuthMock.doc.mockReset();
  firebaseAuthMock.getDoc.mockReset();
  firebaseAuthMock.getDocs.mockReset();
  firebaseAuthMock.query.mockReset();
  firebaseAuthMock.updateDoc.mockReset();
  firebaseAuthMock.where.mockReset();
  firebaseAuthMock.GithubAuthProvider.mockReset();
  firebaseAuthMock.getAuth.mockReset();
  firebaseAuthMock.getApps.mockReset();
  firebaseAuthMock.getFirestore.mockReset();
  firebaseAuthMock.GoogleAuthProvider.mockReset();
  firebaseAuthMock.initializeApp.mockReset();
  firebaseAuthMock.onAuthStateChanged.mockReset();
  firebaseAuthMock.sendPasswordResetEmail.mockReset();
  firebaseAuthMock.serverTimestamp.mockReset();
  firebaseAuthMock.setDoc.mockReset();
  firebaseAuthMock.signInWithEmailAndPassword.mockReset();
  firebaseAuthMock.signInWithPopup.mockReset();
  firebaseAuthMock.signOut.mockReset();
  firebaseAuthMock.authInstance.currentUser = null;
  firebaseAuthMock.addDoc.mockResolvedValue({ id: 'new-sin-id' });
  firebaseAuthMock.collection.mockReturnValue({ path: 'users/firebase-user-1/sins' });
  firebaseAuthMock.doc.mockReturnValue({ path: 'users/firebase-user-1' });
  firebaseAuthMock.getDoc.mockResolvedValue({ exists: () => false });
  firebaseAuthMock.getDocs.mockResolvedValue({ docs: [], size: 0 });
  firebaseAuthMock.query.mockImplementation((_collection, ...constraints) => ({ constraints }));
  firebaseAuthMock.updateDoc.mockResolvedValue(undefined);
  firebaseAuthMock.deleteDoc.mockResolvedValue(undefined);
  firebaseAuthMock.where.mockReturnValue({ field: 'lang', op: '==', value: 'ru' });
  firebaseAuthMock.getAuth.mockReturnValue(firebaseAuthMock.authInstance);
  firebaseAuthMock.getApps.mockReturnValue([firebaseAuthMock.appInstance]);
  firebaseAuthMock.getFirestore.mockReturnValue(firebaseAuthMock.firestoreInstance);
  firebaseAuthMock.initializeApp.mockReturnValue(firebaseAuthMock.appInstance);
  firebaseAuthMock.onAuthStateChanged.mockImplementation((_auth, onNext) => {
    onNext(null);

    return vi.fn();
  });
  firebaseAuthMock.sendPasswordResetEmail.mockResolvedValue(undefined);
  firebaseAuthMock.serverTimestamp.mockReturnValue(firebaseAuthMock.serverTimestampFixture);
  firebaseAuthMock.setDoc.mockResolvedValue(undefined);
  firebaseAuthMock.signOut.mockResolvedValue(undefined);
};
