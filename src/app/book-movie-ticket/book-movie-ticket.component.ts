import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

const selectedSeats: string[] = [];
@Component({
  selector: 'app-book-movie-ticket',
  templateUrl: './book-movie-ticket.component.html',
  styleUrls: ['./book-movie-ticket.component.css']
})
export class BookMovieTicketComponent {
  data = {
    rowHeader : ['A','B','C','D','E','F','G'],
    columnHeader: ['1','2','3','4','5','6','7']
  }; 
  payload = {};
  movie:any;
  theatre: any; 
  emailId: any; ticketId: any; totalSeatsBooked: any;
  seatsBooked: any;
  
  
onSelection(column: any, row:any, movie:any,theatre: any)
{
  selectedSeats.push(row + column);
  this.payload = {
    emailId: localStorage.getItem("currentUser"),
    movieName: movie,
    theatreName: theatre,
    ticketId: '',
    totalSeatsBooked: selectedSeats.length,
    seatsBooked: selectedSeats.toString()
  }
  console.log(this.payload);
  //this.bookingConfirmation(this.payload);
}

bookingConfirmation()
{
  console.log(JSON.stringify(this.payload));
  this._user.userBooking(JSON.stringify(this.payload)).subscribe({
    next: result =>{console.log(result);}
  })
}

constructor(private r:ActivatedRoute,
  private _fb:FormBuilder,
  private _user: UserService)
{}

ngOnInit(): void 
{
  this.r.queryParamMap.subscribe(params => {
    console.log(params);
    this.movie = params.get('movie');
    this.theatre = params.get('theatre')
  })
}
  
}

