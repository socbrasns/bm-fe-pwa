import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CheckboxModule } from 'primeng/checkbox';
//import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { BmSessionCreateComponent } from './bm-session/bm-session-create/bm-session-create.component';
import { HomeComponent } from './layout/home/home.component';
import { MenuBarHomeComponent } from './layout/home/menu-bar-home/menu-bar-home.component';
//import { MenubarModule } from 'primeng/menubar';
//import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
//import { ThemeSelectorComponent } from './layout/theme-selector/theme-selector.component'
//import { DropdownModule } from 'primeng/dropdown';
//import { PasswordModule } from 'primeng/password';
//import { DividerModule } from "primeng/divider"
//import { CardModule } from 'primeng/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,    
    AuthenticationComponent,
    LoginComponent,
    BmSessionCreateComponent,
    HomeComponent,
    MenuBarHomeComponent,
  //  ThemeSelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
