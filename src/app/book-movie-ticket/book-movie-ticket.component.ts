import { Component } from '@angular/core';

const selectedSeats: string[] = [];
@Component({
  selector: 'app-book-movie-ticket',
  templateUrl: './book-movie-ticket.component.html',
  styleUrls: ['./book-movie-ticket.component.css']
})
export class BookMovieTicketComponent {
   bgColor : string = 'grey';
   toggle = false;
   status = 'Enable'; 
  
  
  data = {
    rowHeader : ['A','B','C','D'],
    columnHeader: ['1','2','3','4'],
    //Price: ["$5", "$10", "$15"],
    //Brand: ["B1", "B2", "B3"]
  }; 
  
onSelection(column: any, row:any)
{
  this.bgColor = 'green';
  //this.toggle = !this.toggle;
  //this.status = this.toggle ? 'Enable' : 'Disable';
  selectedSeats.push(row + column);
  console.log(selectedSeats);
}


ngOnInit() {
 
}

  
}
