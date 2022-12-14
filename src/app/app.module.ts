import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import toster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import HttpClientModule
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { TokenGenrationInterceptor } from './token-genration.interceptor';
import { ListRoleComponent } from './list-role/list-role.component';
// primeng
import {DialogModule} from 'primeng/dialog';
import { ViewRoleComponent } from './view-role/view-role.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { LogoutComponent } from './logout/logout.component';
import { AddUserComponent } from './add-user/add-user.component';  



@NgModule({
  // declreation for our compenent
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AddRoleComponent,
    ListRoleComponent,
    ViewRoleComponent,
    UserComponentComponent,
    UpdateRoleComponent,
    LogoutComponent,
    AddUserComponent,
  ],
  // declreation for external libreary
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    DialogModule,
    ReactiveFormsModule
  ],
  // provide interseptor class 
  providers: [
     {provide:HTTP_INTERCEPTORS,useClass:TokenGenrationInterceptor,multi:true}
  ],
  // boot at first Time
  bootstrap: [AppComponent]
})
export class AppModule { }
