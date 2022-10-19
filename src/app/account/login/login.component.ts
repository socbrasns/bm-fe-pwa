import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-login',
  template: `
  <h2 class="text-center">Sing In</h2>
    
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-12">
        <div class="text-center mb-5">
            <img src="assets/demo/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span class="text-600 font-medium line-height-3">Don't have an account?</span>
            <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>
        <div>
          <form (ngSubmit)="onSubmit()" #form="ngForm">
            <div class="form-group">
                <label for="email" class="block text-900 font-medium mb-2">Email</label>
                <input id="email" name="email" type="text" pInputText class="w-full mb-3" [(ngModel)]="login.email" required>
            </div>
            <div class="form-group">
              <label for="password" class="block text-900 font-medium mb-2">Password</label>
              <input id="password" name="password" type="password" pInputText class="w-full mb-3" [(ngModel)]="login.password" required>
            </div>
            <div class="flex align-items-center justify-content-between mb-6">
              <div class="form-group">
                <div class="flex align-items-center">
                  <p-checkbox [(ngModel)]="rememberme" id="rememberme" name="rememberme" [binary]="true" styleClass="ml-2"></p-checkbox>
                  <label for="rememberme">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
              </div>
            </div>
              <p-button pButton pRipple [disabled]="form.form.invalid" icon="pi pi-user" label="Sing In" type="submit" class="w-full" ></p-button>
          </form>
        </div>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: User = new User();
rememberme: any;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  async onSubmit(){
    try{
      const result = await this.accountService.login(this.login)
      this.router.navigate([''])
    }catch (error){
      console.error('on submit login fail!',error)
    }
  }
}
