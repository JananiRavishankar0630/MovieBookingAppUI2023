import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

const selectedSeats: string[] = [];
const container = document.querySelector(".container");
@Component({
  selector: 'app-book-movie-ticket',
  templateUrl: './book-movie-ticket.component.html',
  styleUrls: ['./book-movie-ticket.component.css']
})
export class BookMovieTicketComponent {
  data = {
    rowHeader : ['A','B','C','D','E','F','G'],
    columnHeader: ['1','2','3','4','5','6','7'],
  }; 
  reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'G4'];
  isSelected : boolean = false;
  isAvailable : boolean = false;
  isOccupied : boolean = false;
  payload = {};
  movie:any;
  theatre: any; 
  emailId: any; ticketId: any; totalSeatsBooked: any;
  seatsBooked: any;
  
  
onSelection(seatPos: string, movie:any,theatre: any)
{
  //selectedSeats.push(row + column);
  this.seatClicked(seatPos);
  this.payload = {
    emailId: localStorage.getItem("currentUser"),
    movieName: movie,
    theatreName: theatre,
    ticketId: '',
    totalSeatsBooked: selectedSeats.length,
    seatsBooked: selectedSeats.toString(),
  }
   console.log(this.payload);
  //this.bookingConfirmation(this.payload);  
}

onClick(e: any)
{
  console.log(e.target.value);
  this.isSelected = true;
}

 //return status of each seat
 getStatus = (seatPos: string) => {
  if(this.reserved.indexOf(seatPos) !== -1) {
      return 'reserved';
  }
  else if(selectedSeats.indexOf(seatPos) !== -1) {
      return 'selected';
  }
  else
  {
    return '';
  }
}

seatClicked = (seatPos: string) => {
  var index = selectedSeats.indexOf(seatPos);
  
  if(index !== -1) {
      // seat already selected, remove
      selectedSeats.splice(index, 1)
  }    //push to selected array only if it is not reserved
  else if(this.reserved.indexOf(seatPos) === -1)
          selectedSeats.push(seatPos);
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

