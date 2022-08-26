import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  addRoleApi(roles: any): Observable<any> {
    // let authToken = localStorage.getItem("authToken") as string 
    // let headers1 = new HttpHeaders({'authToken':authToken});
 
    return this.http.post(environment.URL + "private/role", roles);
  }

  listRoleApi(): Observable<any> {
    let authToken = localStorage.getItem("authToken") as string 
    let headers1 = new HttpHeaders({'authToken':authToken});
 
    return this.http.get(environment.URL + "private/role",{headers:headers1});
  }

  deleteRoleApi(roleId: any): Observable<any> {
    return this.http.delete(environment.URL + "private/role/" + roleId)
  }
  getRoleByIdApi(roleId: any): Observable<any> {
    return this.http.get(environment.URL + "private/role/" + roleId)
  }
}
