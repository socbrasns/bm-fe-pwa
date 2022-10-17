import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  template: `
<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <input [(ngModel)]="user.email" id="email" type="text" pInputText class="w-full mb-3">

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <input [(ngModel)]="user.password" id="password" type="password" pInputText class="w-full mb-3">

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <p-checkbox id="rememberme1" [binary]="true" styleClass="mr-2"></p-checkbox>
                <label for="rememberme1" class="text-900">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <button (onClick)="login" pButton pRipple label="Sign In" icon="pi pi-user" class="w-full"></button>
    </div>
</div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  login(){
this.authService.login(this.user)
  }

}
