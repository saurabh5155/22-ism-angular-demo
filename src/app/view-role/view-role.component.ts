import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  roleName:string=""
  roleId=""
  constructor(private acRoute:ActivatedRoute,private roleService:RoleService,private toster:ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.roleId=this.acRoute.snapshot.params["roleId"]
    this.getRolebyId(this.acRoute.snapshot.params["roleId"])
  }

  getRolebyId(roleId:any){
    this.roleService.getRoleByIdApi(roleId).subscribe(res=>{
      if(res){
        this.roleName = res.roleName
        this.toster.success("Role Are....")
      }
    },err=>{
      this.toster.error("Role is not found")
      this.route.navigateByUrl("/user/listRole")
    })
  }
}
