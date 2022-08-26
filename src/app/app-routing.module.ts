import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { AuthTokenGuard } from './auth-token.guard';
import { HomeComponent } from './home/home.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewRoleComponent } from './view-role/view-role.component';



const routes: Routes = [
  {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"},
  {component:HomeComponent,path:"home",canActivate:[AuthTokenGuard]},
  {component:AddRoleComponent,path:"addRole",canActivate:[AuthTokenGuard]},
  {component:ListRoleComponent,path:"listRole",canActivate:[AuthTokenGuard]},
  {component:ViewRoleComponent,path:"viewRole/:roleId",canActivate:[AuthTokenGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
