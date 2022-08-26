import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { AuthTokenGuard } from './auth-token.guard';
import { HomeComponent } from './home/home.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ViewRoleComponent } from './view-role/view-role.component';



const routes: Routes = [
  { component: LoginComponent, path: "login" },
  { component: SignupComponent, path: "signup" },
  {
    component: UserComponentComponent, path: "user", children: [
      { component: HomeComponent, path: "home" },
      { component: AddRoleComponent, path: "addRole" },
      { component: ListRoleComponent, path: "listRole" },
      { component: ViewRoleComponent, path: "viewRole/:roleId" },
      { component: UpdateRoleComponent, path: "updateRole/:roleId" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
