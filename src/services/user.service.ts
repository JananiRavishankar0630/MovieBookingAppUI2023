import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/Models/Login.models';

const baseUrl = "http://localhost:7083";
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
}
