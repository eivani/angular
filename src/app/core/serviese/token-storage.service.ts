import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('Token', token);
  }

  getToken() {
    return localStorage.getItem('Token');
  }

  saveUser(user: string) {
    localStorage.setItem('User', user);
  }

  getUser() {
    return localStorage.getItem('User');
  }

}
