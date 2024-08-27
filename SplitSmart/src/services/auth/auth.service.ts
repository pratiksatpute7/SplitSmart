import { Injectable } from '@angular/core';
import { LoginModel } from '../../models/login-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private authToken : string | null = null;
  private isUserLoggedIn$ = new BehaviorSubject<boolean>(false);;
  
  public get isLoggedIn(): boolean {
    return this.isUserLoggedIn$.value;
  }

  public login(loginDetails : LoginModel) {
    //TODO: make backend call to the server to login in user
  }

  public setToken(token : string) {
    this.authToken = token;
    localStorage.setItem('token', token);
    this.isUserLoggedIn$.next(true);
  }

  public getToken(): string | null {
    return this.authToken || localStorage.getItem('token');
  }

  public logout(): void {
    this.authToken = null;
    localStorage.removeItem('token');
    this.isUserLoggedIn$.next(false);
  }

  //Subscribe to this to get if used is logged in or not
  public isAuthenticated(): Observable<boolean> {
    return this.isUserLoggedIn$.asObservable();
  }

}
