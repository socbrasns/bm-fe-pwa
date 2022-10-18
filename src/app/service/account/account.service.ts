import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login (user: User): Promise<boolean>{
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'new-token')
      resolve(true)
    });
  }

  createAccount(account: any): Promise<boolean>{
    return new Promise((resolve) => {
      resolve(true)
    });
  }
}
