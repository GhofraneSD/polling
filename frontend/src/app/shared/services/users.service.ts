import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) {}

  /** GET list of users by filter query from users endpoint */
  getUsers($queryString: string): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + $queryString).pipe();
  }

  /** GET one user by id from users endpoint */
  getUser(id: number): Observable<any> {
    return this.http.get<any>(this.usersUrl + `/${id}`).pipe();
  }

  /** GET one user by id from users endpoint */
  getUserByUsername(username: any): Observable<any> {
    return this.http.get<any>(this.usersUrl + `/${username}`).pipe();
  }

  /** CREATE one user by id from users endpoint */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user).pipe();
  }

  /** DELETE one user by id from users endpoint */
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.usersUrl + `/${id}`).pipe();
  }

  /** UPDATE user by id from users endpoint */
  updateUser(user: User, id: number): Observable<User> {
    return this.http.put<User>(this.usersUrl + `/${id}`, user).pipe();
  }
}
