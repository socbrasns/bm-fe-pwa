import { Injectable, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { of } from 'rxjs';  
import { map , catchError } from 'rxjs/operators';  
import { AuthUser, LoginForm, Token } from '../../model/accountModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private tokenStorageId: string = environment.auth.tokenStorageId
  private authorityStorageId: string = environment.auth.authorityStorageId
  private profilenStorageId: string = environment.auth.profilenStorageId

  constructor() { }



  login = (login: LoginForm): Observable<AjaxResponse<Token>> => {
    const user: AuthUser = login
    return ajax({
      method: 'POST',
      url: environment.auth.api + '/auth',
      body: user,      
    }).pipe(
      map(resp =>  console.log),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    );
  }

  createAccount = (account: any): Promise<boolean> => new Promise<boolean>((resolve) => this.creatAccountCallback)



  // callbacks
  private loginCallback = (token: Token): void => {
    this.storeToken(token.token) //&&
    //this.storeAuthority(response.authority) &&
    //this.storeProfile(response.profile)
  }
    
  

  private creatAccountCallback = (response: any): boolean => true

  // internal logic
  private storeIten = (name: string, iten: string): boolean => {
    try{
      window.localStorage.setItem(name, iten)
      return true
    }catch (err){
      console.log(err)
      return false
    }
  };

  private storeToken = (token: string): boolean => this.storeIten(this.tokenStorageId,token)
  private storeAuthority = (auth: string): boolean => this.storeIten(this.authorityStorageId, auth)
  private storeProfile = (profile: string): boolean => this.storeIten(this.profilenStorageId, profile)

  
}
