import { LoginFormData, AuthTokens, User } from '@/types/auth';
import Cookies from 'js-cookie';

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
    Cookies.set('accessToken', tokens.access, {
      secure: process.env.NODE_ENV === 'production',
      expires: 7, // 7 days
      path: '/'
    });
    Cookies.set('refreshToken', tokens.refresh, {
      secure: process.env.NODE_ENV === 'production',
      expires: 7,
      path: '/'
    });
  },

  saveUser(user: User): void {
    Cookies.set('user', JSON.stringify(user), {
      secure: process.env.NODE_ENV === 'production',
      expires: 7,
      path: '/'
    });
  },

  getUser(): User | null {
    const userStr = Cookies.get('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  clearAuth(): void {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('user');
  }
};