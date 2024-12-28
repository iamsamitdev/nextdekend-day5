import { LoginFormData, AuthTokens, User } from '@/types/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
  async login(credentials: LoginFormData): Promise<{ tokens: AuthTokens; user: User }> {
    const response = await fetch(`${API_URL}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return {
      tokens: {
        access: data.access,
        refresh: data.refresh
      },
      user: data.user
    };
  },

  saveTokens(tokens: AuthTokens): void {
    localStorage.setItem('accessToken', tokens.access);
    localStorage.setItem('refreshToken', tokens.refresh);
  },

  saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  },

  getUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  clearAuth(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }
}; 