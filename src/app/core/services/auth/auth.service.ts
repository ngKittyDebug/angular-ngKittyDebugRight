import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import type { AuthProvider, CallbackResult, SignupData, User } from '@netlify/identity';
import * as netlifyIdentity from '@netlify/identity';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly _user = signal<User | null>(null);
  private readonly _isLoading = signal(false);
  private readonly _lastCallbackResult = signal<CallbackResult | null>(null);
  public readonly user = this._user.asReadonly();
  public readonly isLoading = this._isLoading.asReadonly();
  public readonly lastCallbackResult = this._lastCallbackResult.asReadonly();
  public readonly isAuthenticated = computed(() => this._user() !== null);

  public async initialize() {
    const callbackResult = await netlifyIdentity.handleAuthCallback();

    this._lastCallbackResult.set(callbackResult);

    if (callbackResult?.user) {
      this._user.set(callbackResult.user);
    }

    await netlifyIdentity.hydrateSession();
    await this.loadUser();

    const unsubscribe = netlifyIdentity.onAuthChange((_event, user) => {
      this._user.set(user);
    });

    this.destroyRef.onDestroy(unsubscribe);
  }

  public async loadUser() {
    const user = await netlifyIdentity.getUser();

    this._user.set(user);

    return user;
  }

  public async login(email: string, password: string) {
    this.startLoading();

    try {
      const user = await netlifyIdentity.login(email, password);

      this._user.set(user);

      return user;
    } finally {
      this.stopLoading();
    }
  }

  public async signup(email: string, password: string, data?: SignupData) {
    this.startLoading();

    try {
      const user = await netlifyIdentity.signup(email, password, data);

      this._user.set(user);

      return user;
    } finally {
      this.stopLoading();
    }
  }

  public async logout() {
    this.startLoading();

    try {
      await netlifyIdentity.logout();
      this._user.set(null);
    } finally {
      this.stopLoading();
    }
  }

  public loginWithProvider(provider: AuthProvider) {
    netlifyIdentity.oauthLogin(provider);
  }

  public loginWithGithub() {
    this.loginWithProvider('github');
  }

  public loginWithGoogle() {
    this.loginWithProvider('google');
  }

  public async requestPasswordRecovery(email: string): Promise<void> {
    await netlifyIdentity.requestPasswordRecovery(email);
  }

  private startLoading() {
    this._isLoading.set(true);
  }

  private stopLoading() {
    this._isLoading.set(false);
  }
}
