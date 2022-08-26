import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenService } from '../auth-token.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  email:string=""
  password:string=""

  constructor(private sessionService:SessionService,private router:Router,private toster:ToastrService,private authTokenService:AuthTokenService) { }

  login(){

    console.log(this.email);
    console.log(this.password);
    
    let loginCredentials={
      "email":this.email,
      "password":this.password
    }

    this.sessionService.loginApi(loginCredentials).subscribe(res=>{

      console.log(res.users.authenticationToken);

      // add authToken in LocalStorage
      localStorage.setItem("authToken",res.users.authenticationToken);

      // add Auth token In service
      this.authTokenService.authToken = res.users.authenticationToken
      
      this.toster.success("Login Successfull","",{ timeOut:1500 })
      this.router.navigateByUrl("/home")
    },err=>{
      this.toster.error("Invalid loginCredentials","",{ timeOut:1500 })
      this.router.navigateByUrl("/login")     
    })

  }

}
