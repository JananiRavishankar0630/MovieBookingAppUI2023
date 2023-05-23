import { Component } from '@angular/core';


@Component({
  selector: 'app-book-movie-ticket',
  templateUrl: './book-movie-ticket.component.html',
  styleUrls: ['./book-movie-ticket.component.css']
})
export class BookMovieTicketComponent {
  name = "Angular";

  data = {
    rowHeader : ['A','B','C','D'],
    columnHeader: ['1','2','3','4'],
    //Price: ["$5", "$10", "$15"],
    //Brand: ["B1", "B2", "B3"]
  }; 
  
onSelection()
{
  
}



ngOnInit() {
  
}

  
}
