import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userAuthenticated= false;

  get userAuthenticated(){
    return this._userAuthenticated;
  }

  constructor() { }

  loginUser(){
    this._userAuthenticated = true;
  }

  logoutUser(){
    this._userAuthenticated = false;
  }
}
