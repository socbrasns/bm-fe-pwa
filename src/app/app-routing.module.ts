import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { BmSessionCreateComponent } from './bm-session/bm-session-create/bm-session-create.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children:[
      { path: '', component: BmSessionCreateComponent}
    ],
    canActivate: [AuthGuard]
  },
  { path: '', component: AuthenticationComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      { path: 'create-account', component: CreateAccountComponent}
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
