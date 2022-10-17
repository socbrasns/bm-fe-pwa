import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authUserEmitter = new EventEmitter<User>()

  constructor() { }

  async login(user: User) {
    user.authenticated = true
    user.authorization = 'dev'
    this.authUserEmitter.emit(user)
  }
}
