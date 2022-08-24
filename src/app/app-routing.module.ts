import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { HomeComponent } from './home/home.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"},
  {component:HomeComponent,path:"home"},
  {component:AddRoleComponent,path:"addRole"},
  {component:ListRoleComponent,path:"listRole"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
