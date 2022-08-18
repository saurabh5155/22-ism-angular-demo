import { Component} from '@angular/core';

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

  printData(){
    console.log("Firstname ->"+this.firstName);
    console.log("Lastname ->"+this.lastName);
    console.log("Gender ->"+this.gender);
    console.log("Email ->"+this.email);
    console.log("Password ->"+this.password);
  }
}
