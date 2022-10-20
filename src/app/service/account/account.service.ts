import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private tokenStorageId: string = environment.auth.tokenStorageId
  private authorityStorageId: string = environment.auth.authorityStorageId
  private profilenStorageId: string = environment.auth.profilenStorageId

  constructor(private httpClient: HttpClient) { }
  
  // interface
  login = (user: User): Promise<boolean> => new Promise<boolean>((resolve) => this.loginCallback)
  createAccount = (account: any): Promise<boolean> => new Promise<boolean>((resolve) => this.creatAccountCallback)

  // callbacks
  private loginCallback = (response: any): Promise<boolean> => Promise.resolve(
    this.storeToken(response.token) &&
    this.storeAuthority(response.authority) &&
    this.storeProfile(response.profile)
  )

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
