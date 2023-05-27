import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieDetail } from 'src/Models/Movie.models';
import { MovieService } from 'src/services/movie.service';

//let queryParams = new HttpParams(); 

@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  styleUrls: ['./get-movies.component.css']
})
export class GetMoviesComponent {
  search: any = "";
  resultUpdated: Boolean = false;
  movieList: MovieDetail[] | any;  

  constructor(private _router: Router,
    private _mv: MovieService,
    private _fb:FormBuilder) { }
  ngOnInit(): void {
    this._mv.getMovies().subscribe({
      next: result => {
        console.log("List of Movies");
        this.resultUpdated = true;
        console.log(result.data);
        this.movieList = result;
        console.log(this.movieList);
      }

    })
    this.resultUpdated = false;
  }


  getMoviesByName(movieName: string) {
    this._mv.getMoviesByName(movieName).subscribe(result => {
      console.log(result);
      this.resultUpdated = true;
      this.movieList = Array.of(result);
      //return this.movieList;
    });
    this.resultUpdated = false;
  }

  searchValue(e: any) {
    this.search=e.target.value;
    console.log(this.search);
  }

  onBooking(movieName: string,theatreName: string)
  {
    this._router.navigate(['/bookticket'],
    {queryParams:{
      movie: movieName,
      theatre: theatreName
    }})
  }
  
}
