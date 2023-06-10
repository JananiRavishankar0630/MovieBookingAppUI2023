import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this._fb.group({
    username: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required]),
    roles: new FormControl('', [Validators.required])
  });
 isLoggedIn = false;
 roles: any;
 displayError = false;
 displayLoading = false;
 
 //login function
 login(loginData: any)
 {
   this.displayLoading=true;
   this.isLoggedIn = true;
   this._user.login(loginData).subscribe(
    result =>
    {
      const token = result.token;
      const username = loginData.username;
      localStorage.setItem("jwt", token);
      localStorage.setItem("currentUser", username);
      console.log("Logged in successfully");
      this.displayLoading=false;
      this.isLoggedIn = false;
      if (loginData.roles == "User")
      {
      this._router.navigate(['/getmovies']);
      }
      else
      {
      this._router.navigate(['/admin-dash']);
      }
    }, err => {
      console.log(err);
      this.displayError = true;
      this.displayLoading = false;
    })    
 }

 isUserAuthenticated() {
  const token = localStorage.getItem("jwt");
  //const currentUser =localStorage.getItem("currentUser");
  if (token && !this.jwtHelper.isTokenExpired(token)) {
    return true;
  }
  else {
    return false;
  }
}

onClick(input: any)
{
  if(input == "login")
  {
    this._router.navigate(['/login']);
  }
  else
  {
    this._router.navigate(['/register']);
  }
}

public logOut = () => {
  localStorage.removeItem("jwt");
  this._router.navigate(["/"]);
}

get f() {  return this.loginForm.controls;}
 //Error in login

 constructor(private _router: Router,
   private _fb: FormBuilder, 
   private _user: UserService,
   private jwtHelper: JwtHelperService)
   {}
}
