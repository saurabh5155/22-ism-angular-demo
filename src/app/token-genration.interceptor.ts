import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenGenrationInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authToken = localStorage.getItem("authToken") as string

    console.log(authToken);
    console.log("auth Token interceptor.....")

     let headers1 = new HttpHeaders({'authToken':authToken});
     let req = request.clone({headers:headers1})
    console.log("auth Token interceptor.....headers==> ", req.headers)
    
    return next.handle(req);
    // forward with header  
  }
}
