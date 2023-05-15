import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'userHome',
    component: UserHomeComponent,
  }
      //{ path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
