import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  addRoleApi(roles : any):Observable<any>{
    return this.http.post(environment.URL+"private/role",roles);
  }

  listRoleApi():Observable<any>{
    return this.http.get(environment.URL+"private/role");
  }

  deleteRoleApi(roleId:any):Observable<any>{
    return this.http.delete(environment.URL+"private/role/"+roleId)
  }
}
