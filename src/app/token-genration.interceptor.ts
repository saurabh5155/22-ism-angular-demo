import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenGenrationInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authToken = localStorage.getItem("authToken") as string

    console.log("HTTP METHOD : => ");
    console.log(request.method)
    //header 

    //body 
    if (request.method.toLowerCase() == "post") { // 

      console.log("yes we are in post request");
      if (request.body instanceof FormData) {
        console.log("AuthToken Added in Body")
        request = request.clone({
          body: request.body.append("authToken", authToken)
        })
      } else {
        console.log(typeof (request.body));
        console.log(request.body);

        // let body = request.body
        // return next.handle(request.clone({
        //   setHeaders:{authToken} 
        //   ,body:{body,"authToken":authToken}
        // }))

        // let body = request.body
        // body["authToken"] = authToken

      }

    }
    console.log(authToken);
    

    console.log("auth Token interceptor.....")
    return next.handle(request.clone({ setHeaders: { authToken } })); // go forward with header  

  }
}
