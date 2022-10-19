import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { BmSessionCreateComponent } from './bm-session/bm-session-create/bm-session-create.component';
import { HomeComponent } from './layout/home/home.component';
import { MenuBarHomeComponent } from './layout/home/menu-bar-home/menu-bar-home.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,    
    AuthenticationComponent,
    LoginComponent,
    BmSessionCreateComponent,
    HomeComponent,
    MenuBarHomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
