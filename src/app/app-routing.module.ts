import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { JwtModule } from "@auth0/angular-jwt";
import { GetMoviesComponent } from './get-movies/get-movies.component';
import { AuthGuard } from './guards/auth-guards.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BookMovieTicketComponent } from './book-movie-ticket/book-movie-ticket.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'register', 
    component: UserRegistrationComponent
  },
  {
    path: 'getmovies',
    component: GetMoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-dash',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'bookticket',
    component: BookMovieTicketComponent,
    canActivate: [AuthGuard]
  }
  
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
