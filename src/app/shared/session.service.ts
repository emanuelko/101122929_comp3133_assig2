import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly TOKEN_KEY = 'auth_token';

  constructor() { }
}
