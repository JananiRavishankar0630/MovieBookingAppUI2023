import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this._fb.group({
    username: new FormControl('', [Validators.required]),
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
   this._user.login(loginData).subscribe({
    next: result =>{
    console.log("Logged in successfully");
    this.displayLoading=false;
    this.isLoggedIn = false;
    }
    })

    this._router.navigate(['/userHome']);
 }

 //Error in login

 constructor(private _router: Router,
   private _fb: FormBuilder, 
   private _user: UserService)
   {}
}
