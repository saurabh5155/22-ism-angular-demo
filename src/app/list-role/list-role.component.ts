import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  roles: Array<any> = [];
  constructor(private roleService: RoleService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.listUser()
  }

  listUser() {
    this.roleService.listRoleApi().subscribe(res => {
      console.log(res);
      this.roles = res;
    })
  }

  delete(roleId: any) {
    this.roleService.deleteRoleApi(roleId).subscribe(res => {
      this.toastr.success("Role Deleted", "", { timeOut: 1500 })


      // sift role if deleted long way
      // let newRole=[]
      // for(let i = 0;i<this.roles.length;i++){
      //   if(this.roles[i].roleId != roleId){
      //         newRole.push(this.roles[i]);
      //       }
      // }
      // this.roles=newRole;

      // short way using lamda function
      this.roles = this.roles.filter(r => r.roleId != roleId)

      // not use because it's go to backend
      // this.listUser();
    },err=>{
      this.toastr.error("Role Not Deleted", "", { timeOut: 1500 })
      this.roles
    })
  }
}
