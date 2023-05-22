import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { HttpParams } from '@angular/common/http'; 

let queryParams = new HttpParams(); 

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPassword(emailId: string) {
    this._user.forgotPassword(emailId).subscribe({
      next: result => { console.log(result); 
    }
    })
    this._route.navigate(['/reset-password'],
    {queryParams:{
      username: emailId
    }})
  }

  constructor(private _user:UserService,
    private _route:Router){}
}
