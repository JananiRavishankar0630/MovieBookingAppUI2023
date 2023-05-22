import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from 'src/Models/Login.models';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  username : any;
  resetPasswordform = this._fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

ngOnInit(): void 
{
  this.r.queryParamMap.subscribe(params => {
    console.log(params);
    this.username = params.get('username');
  })
}

  resetPassword(data: any) {
    
    this._user.resetPassword(data).subscribe({
      next: result => { console.log(result); 
    }
    })
    alert("Your password has been reset successfully");
    this._route.navigate(['/login'])
  }

  constructor(private _user:UserService,
    private _route:Router,
    private _fb: FormBuilder,
    private r: ActivatedRoute){}
}
