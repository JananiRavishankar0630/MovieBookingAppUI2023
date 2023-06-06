import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {TooltipPosition} from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: any;
  public positionOptions: TooltipPosition[] = ['left']; // Tooltip postion
  public position = new FormControl(this.positionOptions[0]); 

isLoggedIn: boolean= false;
  public logOut = () => {
    localStorage.removeItem("jwt");
   // localStorage.removeItem("currentUser");
    this._router.navigate(["/login"]);
  }

  isUserAuthenticated() {    
    const token = localStorage.getItem("jwt");
    this.isLoggedIn = true;
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
  constructor(private _router:Router,
    private jwtHelper:JwtHelperService)
  {}

  ngOnInit(){
   // this.isUserAuthenticated();
    this.username = localStorage.getItem("currentUser");
  }
}
