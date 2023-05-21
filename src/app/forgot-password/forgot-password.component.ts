import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

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
    this._route.navigate(['/reset-password'])
  }

  constructor(private _user:UserService,
    private _route:Router){}
}
