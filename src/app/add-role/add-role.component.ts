import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  roleName:String=""
  
  ngOnInit(): void {
  }
  constructor(private roleService:RoleService,private toster:ToastrService,private router:Router) { }

  addRole(){
    console.log(this.roleName);
    let roles = {
      "roleName":this.roleName
    }

    this.roleService.addRoleApi(roles).subscribe(res=>{
      this.toster.success("Role Added","",{timeOut:1200})
      this.router.navigateByUrl("/user/listRole")
    },err=>{
      console.log(err);
      this.toster.error("something went wrong","",{timeOut:1200})
      this.router.navigateByUrl("/user/addRole")
    })
  }
}
