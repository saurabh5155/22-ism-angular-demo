import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  roleId:any=""
  roleName:any=""
  constructor(private acRoute:ActivatedRoute,private router:Router,private roleService:RoleService,private toster:ToastrService) { }

  ngOnInit(): void {
    this.roleId=this.acRoute.snapshot.params["roleId"]
    this.getRoleById(this.acRoute.snapshot.params["roleId"])
  }

  getRoleById(roleId:any){
    this.roleService.getRoleByIdApi(roleId).subscribe(res=>{
      if(res){
        this.roleName = res.roleName
        this.toster.success("Role Are....")
      }
    },err=>{
      this.toster.error("Role is not found")
      this.router.navigateByUrl("/user/listRole")
    })
  }

  updateRole(){
    let roles={
      "roleId":this.roleId,
      "roleName":this.roleName
    }
    this.roleService.updateRoleById(roles).subscribe(res=>{
      if(res){
        this.toster.success("Role Updated Successfull")
        this.router.navigateByUrl("/user/listRole")

      }
    },err=>{
      this.toster.error("Role Not Updated")
    })
    
  }
}
