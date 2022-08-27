import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthTokenService } from '../auth-token.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private sessionService:SessionService,private toster:ToastrService,private router:Router,private authTokenService:AuthTokenService) { }

  ngOnInit(): void {
    this.logout()
  }

  logout(){

    this.sessionService.logoutApi().subscribe(res=>{
      localStorage.clear
      this.toster.success("Logout Successfully")
      this.router.navigateByUrl("/login")
    },err=>{
      this.toster.error("Logout Not Successfully")
    })
  }

}
