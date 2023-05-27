import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  movie:any;
  theatre: any;
  
onSelection(column: any, row:any, movie:any,theatre: any)
{
  selectedSeats.push(row + column);
  console.log(selectedSeats.toString());  
  console.log(selectedSeats.length);
  console.log(movie);
  console.log(theatre);
}

constructor(private r:ActivatedRoute)
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

