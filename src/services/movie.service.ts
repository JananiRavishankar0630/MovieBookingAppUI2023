import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  } from 'src/Models/Login.models';
import { MovieDetail } from 'src/Models/Movie.models';

const baseUrl = "https://localhost:7083";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http:HttpClient) { }

  getMovies(): Observable<any>
  {
      return this._http.get<MovieDetail>(baseUrl + '/movie', httpOptions);
  }

  getMoviesByName(movieName: string) : Observable<any>
  {
      return this._http.get<MovieDetail>(baseUrl + '/movie/getmoviebyname/' + movieName, httpOptions);
  }

}
