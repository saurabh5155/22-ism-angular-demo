import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenGuard implements CanActivate {
  constructor(private authTokenService:AuthTokenService,private route:Router,private toster:ToastrService){}
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log("AuthTokeGuard Called..............");
      console.log("your token is => "+this.authTokenService.authToken);
      if(this.authTokenService.authToken == undefined || this.authTokenService.authToken=="" || this.authTokenService.authToken.length==0){
        console.log("i m inside false");  
         this.route.navigateByUrl("/login")
        this.toster.error("Please Login Before Any Action")
         return false;
      }
      return true;
  }

}
