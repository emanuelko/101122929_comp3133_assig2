import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly TOKEN_KEY = 'auth_token';

  constructor() { }

  setAuthToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  clearAuthToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }
}
