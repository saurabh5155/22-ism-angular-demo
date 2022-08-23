import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstName:String =""
  lastName:String = ""
  gender = "" //Auto string
  email:String =""
  password:String =""

  constructor(private toastr:ToastrService , private router:Router){

  }

  printData(){
    console.log("Firstname ->"+this.firstName);
    console.log("Lastname ->"+this.lastName);
    console.log("Gender ->"+this.gender);
    console.log("Email ->"+this.email);
    console.log("Password ->"+this.password);
    this.toastr.success("Signup Done","",{timeOut:3000});
    this.router.navigateByUrl("/login")
  }
}
