import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser, LoginForm } from 'src/app/model/accountModel';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-login',
  template: `
  <h2 class="text-center">Sing In</h2>
    
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-12">
        <div class="text-center mb-5">
            <!--<img src="assets/demo/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">-->
            <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span class="text-600 font-medium line-height-3">Don't have an account?</span>
            <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>
    </div>

    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-12">
      <div class="grid p-fluid">

        <div class="field col-12 md:col-12">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <span class="p-float-label">
                    <input type="text" id="email" pInputText [(ngModel)]="login.email"> 
                    <label for="email">e-mail</label>
                </span>
            </div>
        </div>

        <div class="field col-12 md:col-12">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <span class="p-float-label">
                    <input type="text" id="password" pInputText [(ngModel)]="login.password"> 
                    <label for="password">password</label>
                </span>
            </div>
            <!--<div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <span class="p-float-label">
                  <p-password id="password" [(ngModel)]="login.password">
                      <ng-template pTemplate="header">
                          <h6>Pick a password</h6>
                      </ng-template>
                      <ng-template pTemplate="footer">
                          <p-divider></p-divider>
                          <p class="mt-2">Suggestions</p>
                          <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                              <li>At least one lowercase</li>
                              <li>At least one uppercase</li>
                              <li>At least one numeric</li>
                              <li>Minimum 8 characters</li>
                          </ul>
                      </ng-template>
                  </p-password>
                  <label for="password">InputGroup</label>
                </span>-->
            <!--</div>-->
        </div>

        <div class="field col-12 md:col-12">
            <!--<div class="p-inputgroup">-->
                <!--<span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <span class="p-float-label">-->
                <!--<p-checkbox checkboxIcon="pi pi-check" label="remember me" [(ngModel)]="rememberme" [binary]="true"></p-checkbox>-->
                <!--</span>-->
            <!--</div>-->
            <!--<p-checkbox checkboxIcon="pi pi-check" label="remember me" [(ngModel)]="rememberme" [binary]="true"></p-checkbox>-->
        </div>
        <div class="col-6 md:col-6">
          <a class="ml-2 text-blue-500 text-right cursor-pointer">forgot password?</a>
        </div>
      </div>

      <div class="grid p-fluid">
        <div class="col-12 md:col-12">
          <button pRipple  icon="pi pi-user" label="Sing In" type="submit" class="w-full" ></button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: LoginForm
  rememberme: boolean;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { 
    this.rememberme = false
    this.login = new AuthUser()
  }

  ngOnInit(): void {

  }

  async onSubmit(){
    try{
      const result = await this.accountService.login(this.login)
      result.subscribe(r => console.log)
      this.router.navigate([''])
    }catch (error){
      console.error('on submit login fail!',error)
    }
  }
}
