import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  constructor(private http: HttpClient) {
    
  }
  
  //  Two Method Promise & Observable -> as an interface to handle a variety of common asynchronous operations
  signupApi(user : any):Observable<any>{
    return this.http.post(environment.URL+ "public/signup",user);  
  }

  loginApi(loginCredentials : any):Observable<any>{
    return this.http.post(environment.URL+"public/login",loginCredentials);
  }

  swagger():Observable<any>{
    return this.http.get(environment.URL+"swagger-ui/index.html")
  }
}
