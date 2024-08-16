import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  private isUserLoggedIn = true;
  
  public get isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  } 
}
