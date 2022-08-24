import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import toster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import HttpClientModule
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  // declreation for our compenent
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent
  ],
  // declreation for external libreary
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  // provide interseptor class 
  providers: [],
  // boot at first Time
  bootstrap: [AppComponent]
})
export class AppModule { }
