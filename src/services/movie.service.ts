import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MovieDetail } from 'src/Models/Movie.models';
import { Ticket, TicketBooking } from 'src/Models/Ticket.models';

//const baseUrl = "https://localhost:7083/movie";
const baseUrl = 'https://movieserviceapp01.azurewebsites.net/api/MovieBooking';
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
      return this._http.get<MovieDetail>(baseUrl + '/GetAllMovies' , httpOptions);
  }

  getMoviesByName(movieName: string) : Observable<any>
  {
      return this._http.get<MovieDetail>(baseUrl + '/GetMovieByName/' + movieName, httpOptions);
  }

  getTicketId(movieName: string) : Observable<any>
  {
      return this._http.get<TicketBooking>('https://bookedserviceapp.azurewebsites.net' + '/api/Ticket/GetTicketId/' + movieName, httpOptions);
  }

  updateTicketStatus(ticketId: string): Observable<any>
  {
    return this._http.put<any>('https://bookedserviceapp.azurewebsites.net' + '/api/Ticket/UpdateTicketstatus/' + ticketId , httpOptions);
  }

  deleteMovie(movieName: string): Observable<any>
  {
    return this._http.delete<any>(baseUrl + '/DeleteMovie/' + movieName, httpOptions);
  }
}
