import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDetail } from 'src/Models/Movie.models';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  search: any = "";
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
        console.log(result);
        alert("Movie details has been deleted");
      }
    })
  }

  getTicketId(movieName: string)
  {
    
  }
}
