import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-login',
  template: `
  <h2 class="text-center">Sing In</h2>
    <form (ngSubmit)="onSubmit()" #form="ngForm">
      <div class="form-group">
      <input type="email" class="form-control" name="email" id="email" [(ngModel)]="login.email" required>
      </div>
      <div class="form-group">
      <input type="password" class="form-control" name="password" id="password" [(ngModel)]="login.password" required>
      </div>
      <button type="submit" [disabled]="form.form.invalid">Sing in</button>
    </form>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!: User //= { email: '', password: ''}

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
