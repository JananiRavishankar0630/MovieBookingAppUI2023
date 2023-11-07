import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, ResetPassword, UserDetail } from 'src/Models/Login.models';

const baseUrl = "https://localhost:7083";
//const baseUrl = 'https://moviebookingapi01.azurewebsites.net';
//const baseUrl = "http://localhost:5099";
//const loginData = {username, password};
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  login(loginData: any) : Observable<any>
  {
      return this._http.post<Login>(baseUrl + '/userlogin', loginData, httpOptions);
  }

  registerUser(userData:any) : Observable<UserDetail>
  {
    return this._http.post<UserDetail>(baseUrl + '/api/User/UserRegistration', userData, httpOptions);
  }

  forgotPassword(emailId: any) : Observable<any>
  {
      return this._http.post<any>(baseUrl + '/api/User/ForgotPassword/'+ emailId, httpOptions);
  }

  resetPassword(data: any) : Observable<any>
  {
      return this._http.post<ResetPassword>(baseUrl + '/api/User/ResetPassword', data, httpOptions);
  }

  userBooking(data: any): Observable<any>
  {
    return this._http.post<any>(baseUrl + '/api/User/userTicketBooking' , data, httpOptions);
  }
  
}
