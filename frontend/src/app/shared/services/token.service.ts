import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private issuer = {
    login: environment.apiUrl + '/auth/login',
    register: environment.apiUrl + '/auth/register',
  };

  constructor() {}

  handleData(token: any, name: any, email: any, id: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('auth_token', token);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  // Verify the token
  isValidToken() {
    const token = this.getToken();

    if (token) {
    return true
    } else {
      return false;
    }
  }

  payload(token: string) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  isLoggedIn() {
    console.log(this.isValidToken());
    return this.isValidToken();
  }

  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }

  getUsername(){
    return localStorage.getItem('name')
  }
}
