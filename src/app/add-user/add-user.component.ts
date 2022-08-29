import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup
  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  addUser(){
    console.log(this.userForm.value);
    
  }
}
