import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetail } from 'src/Models/Login.models';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  regUser: UserDetail[] | any;
  registrationForm = this._fb.group({
    userId: new FormControl('', [Validators.required]),
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    EmailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    ContactNo: new FormControl('', [Validators.required])
  });
  registerUser(userData:any)
  {
    this._user.registerUser(userData).subscribe({
    next: result =>{
      console.log(result)
        this.regUser = result;
        console.log(this.regUser);
        alert("Registration Successful")
    //console.log("Registered successfully");
    }
    })

    this._router.navigate(['/login']);

  }
  constructor(private _router: Router,
   private _fb: FormBuilder, 
   private _user: UserService)
   {}
}
