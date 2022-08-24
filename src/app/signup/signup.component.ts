import { HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstName: String = ""
  lastName: String = ""
  gender = "" //Auto string
  email: String = ""
  password: String = ""

  constructor(private toastr: ToastrService, private router: Router, private sessionService: SessionService) {

  }

  signup() {
    console.log("Firstname ->" + this.firstName);
    console.log("Lastname ->" + this.lastName);
    console.log("Gender ->" + this.gender);
    console.log("Email ->" + this.email);
    console.log("Password ->" + this.password);

    let user = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "gender": this.gender,
      "email": this.email,
      "password": this.password,
    }

    this.sessionService.signupApi(user).subscribe(res => {
      if (res) {
        this.toastr.success("Signup Done", "", { timeOut: 1500 });
        this.router.navigateByUrl("/login")
      }
    },err=>{
      if (err) {
        this.toastr.error("SWR", "", { timeOut: 1500 });
        this.router.navigateByUrl("/signup")
      }
    });
  }
}
