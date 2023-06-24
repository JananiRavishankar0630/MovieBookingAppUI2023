import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MovieDetail } from 'src/Models/Movie.models';
import { Ticket, TicketBooking } from 'src/Models/Ticket.models';

//const baseUrl = "https://localhost:7083/movie";
const baseUrl = environment.apiUrl;
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
      return this._http.get<MovieDetail>(baseUrl, httpOptions);
  }

  getMoviesByName(movieName: string) : Observable<any>
  {
      return this._http.get<MovieDetail>(baseUrl + '/getmoviebyname/' + movieName, httpOptions);
  }

  getTicketId(movieName: string) : Observable<any>
  {
      return this._http.get<TicketBooking>(baseUrl + '/GetTicketId/' + movieName, httpOptions);
  }

  updateTicketStatus(ticketId: string): Observable<any>
  {
    return this._http.put<any>(baseUrl + '/updateticketstatus/' + ticketId , httpOptions);
  }

  deleteMovie(movieName: string): Observable<any>
  {
    return this._http.delete<any>(baseUrl + '/deletemovie/' + movieName, httpOptions);
  }
}
