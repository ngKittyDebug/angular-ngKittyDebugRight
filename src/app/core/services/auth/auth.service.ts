import { Injectable } from '@angular/core';
import { getUser, handleAuthCallback, hydrateSession, login, logout, oauthLogin, signup } from '@netlify/identity';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public async initialize(): Promise<void> {
    await handleAuthCallback();
    await hydrateSession();
  }

  public async login(email: string, password: string) {
    return await login(email, password);
  }

  public oauthGithubLogin() {
    // Redirects the browser to the provider's login page
    oauthLogin('github');
  }

  public oauthGoogleLogin() {
    // Redirects the browser to the provider's login page
    oauthLogin('google');
  }

  public async getCurrentUser() {
    return await getUser();
  }

  public async logout() {
    await logout();
  }

  public async signup(email: string, password: string) {
    await signup(email, password);
  }
}
