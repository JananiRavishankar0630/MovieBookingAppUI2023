import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDetail } from 'src/Models/Movie.models';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  styleUrls: ['./get-movies.component.css']
})
export class GetMoviesComponent {
  search : String =" ";
  movieList: MovieDetail[] | any;
  constructor(private _router: Router,
    private _mv: MovieService) {}
    ngOnInit(): void
  //getMovies(MovieDetail: MovieDetail)
  {
    this._mv.getMovies().subscribe({
      next: result => {
        console.log("List of Movies");
        this.movieList = result;
      }
    })
  }
}
