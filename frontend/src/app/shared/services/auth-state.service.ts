import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {

  private userState = new BehaviorSubject<boolean>(this.token.isLoggedIn());
  userAuthState = this.userState.asObservable();

  constructor(public token: TokenService) {}

  setAuthState(value: boolean) {
    this.userState.next(value);
  }

  getCurrentUser() {
    var user: User = {
      id: parseInt(localStorage.getItem('id') || ''),
      name: localStorage.getItem('name') || '',
      email: localStorage.getItem('email') || '',
    };
    return user;
  }
}
