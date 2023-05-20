import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { JwtModule } from "@auth0/angular-jwt";


const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'userHome',
    component: UserHomeComponent,
  },
  { 
    path: 'register', 
    component: UserRegistrationComponent
  }
      //{ path: 'register', component: RegisterComponent }
];


//function is use to get jwt token from local storage
export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7038"],
        disallowedRoutes: []
      }
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
