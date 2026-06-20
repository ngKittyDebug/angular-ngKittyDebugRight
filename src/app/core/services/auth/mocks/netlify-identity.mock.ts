import { vi } from 'vitest';

export const netlifyIdentityMock = vi.hoisted(() => ({
  getUser: vi.fn(),
  handleAuthCallback: vi.fn(),
  hydrateSession: vi.fn(),
  login: vi.fn(),
  logout: vi.fn(),
  oauthLogin: vi.fn(),
  onAuthChange: vi.fn(),
  requestPasswordRecovery: vi.fn(),
  signup: vi.fn(),
}));

vi.mock('@netlify/identity', () => netlifyIdentityMock);

export const resetNetlifyIdentityMock = (): void => {
  netlifyIdentityMock.getUser.mockReset();
  netlifyIdentityMock.handleAuthCallback.mockReset();
  netlifyIdentityMock.hydrateSession.mockReset();
  netlifyIdentityMock.login.mockReset();
  netlifyIdentityMock.logout.mockReset();
  netlifyIdentityMock.oauthLogin.mockReset();
  netlifyIdentityMock.onAuthChange.mockReset();
  netlifyIdentityMock.requestPasswordRecovery.mockReset();
  netlifyIdentityMock.signup.mockReset();
  netlifyIdentityMock.handleAuthCallback.mockResolvedValue(null);
  netlifyIdentityMock.hydrateSession.mockResolvedValue(null);
  netlifyIdentityMock.getUser.mockResolvedValue(null);
  netlifyIdentityMock.onAuthChange.mockReturnValue(vi.fn());
};
