import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// App imports
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  usersUrl = environment.apiUrl + '/auth';
  constructor(private http: HttpClient) {}

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(this.usersUrl+'/signup', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(this.usersUrl+'/signin', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(this.usersUrl+'/user-profile');
  }

  // Access user profile
  logout(): Observable<any> {    
    return this.http.post<any>(this.usersUrl+'/logout', '');
  }
}
