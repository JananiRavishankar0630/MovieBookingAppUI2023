import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MovieDetail } from 'src/Models/Movie.models';
import { TicketBooking } from 'src/Models/Ticket.models';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  ticketDetails: TicketBooking[] | any;
  resultUpdated: Boolean = false;
  movieList: MovieDetail[] | any;
  

  constructor(private _router: Router,
    private _mv: MovieService) { }
  ngOnInit(): void {
    this._mv.getMovies().subscribe({
      next: result => {
        console.log("List of Movies");
        this.movieList = result;
        console.log(this.movieList);
      }
    })
  }

  deleteMovie(movieName: string)
  {
    this._mv.deleteMovie(movieName).subscribe({
      next: result => 
      {
        this.ngOnInit();
        console.log(result);       
      }
    })
    alert("Movie details has been deleted");
  }

  getTicketId(movieName: string)
  {
    this._mv.getTicketId(movieName).subscribe(
      result =>
      {
        //console.log(typeof(result));
        console.log(result);
        console.log(result.ticketid);
       
       this.updateTicketStatus(result.ticketid);
      })//
   // console.log(this.ticketID);
  }

  updateTicketStatus(ticketId: string)
  {
    this._mv.updateTicketStatus(ticketId).subscribe({
      next:result =>
      {
       console.log(result);
      }
    })
  }

}
