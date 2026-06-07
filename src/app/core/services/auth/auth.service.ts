import { computed, DestroyRef, inject, Service, signal } from '@angular/core';
import { auth, firestore } from '@env/environment';
import type { AuthProvider, User } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

@Service()
export class AuthService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly _user = signal<User | null>(null);
  private readonly _error = signal<unknown | null>(null);
  private readonly _isLoading = signal(false);
  public readonly user = this._user.asReadonly();
  public readonly isLoading = this._isLoading.asReadonly();
  public readonly error = this._error.asReadonly();
  public readonly isAuthenticated = computed(() => this._user() !== null);

  public async initialize() {
    return new Promise<User | null>((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        this._user.set(user);
        resolve(user);
      });

      this.destroyRef.onDestroy(unsubscribe);
    });
  }

  public async loadUser() {
    const user = auth.currentUser;

    this._user.set(user);

    return user;
  }

  public async login(email: string, password: string) {
    this.startLoading();
    this._error.set(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      this._user.set(userCredential.user);

      return userCredential.user;
    } catch (error) {
      this._error.set(error);

      throw error;
    } finally {
      this.stopLoading();
    }
  }

  public async signup(email: string, password: string, data?: Record<string, unknown>) {
    this.startLoading();
    this._error.set(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(firestore, 'users', userCredential.user.uid), {
        createdAt: serverTimestamp(),
        dateOfBirth: this.getSignupDateOfBirth(data),
        displayName: this.getSignupDisplayName(data),
        email: userCredential.user.email ?? email,
        candels: 0,
        sins: 0,
      });

      this._user.set(userCredential.user);

      return userCredential.user;
    } catch (error) {
      this._error.set(error);

      throw error;
    } finally {
      this.stopLoading();
    }
  }

  public async logout() {
    this.startLoading();
    this._error.set(null);

    try {
      await signOut(auth);
      this._user.set(null);
    } catch (error) {
      this._error.set(error);

      throw error;
    } finally {
      this.stopLoading();
    }
  }

  public loginWithGithub() {
    return this.loginWithProvider(new GithubAuthProvider());
  }

  public loginWithGoogle() {
    return this.loginWithProvider(new GoogleAuthProvider());
  }

  public async requestPasswordRecovery(email: string) {
    this._error.set(null);

    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      this._error.set(error);

      throw error;
    }
  }

  private startLoading() {
    this._isLoading.set(true);
  }

  private stopLoading() {
    this._isLoading.set(false);
  }

  private async loginWithProvider(provider: AuthProvider) {
    this.startLoading();
    this._error.set(null);

    try {
      const userCredential = await signInWithPopup(auth, provider);

      await setDoc(doc(firestore, 'users', userCredential.user.uid), {
        createdAt: serverTimestamp(),
        dateOfBirth: null,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        candels: 0,
        sins: 0,
      });

      this._user.set(userCredential.user);

      return userCredential.user;
    } catch (error) {
      this._error.set(error);

      throw error;
    } finally {
      this.stopLoading();
    }
  }

  private getSignupDisplayName(data?: Record<string, unknown>): string | undefined {
    const fullName = data?.['full_name'];

    return typeof fullName === 'string' && fullName.trim() ? fullName.trim() : undefined;
  }

  private getSignupDateOfBirth(data?: Record<string, unknown>): Date | null {
    const dateOfBirth = data?.['date_of_birth'];

    return dateOfBirth instanceof Date ? dateOfBirth : null;
  }
}
