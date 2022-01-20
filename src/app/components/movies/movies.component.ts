import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { IMovie } from 'src/app/models/movie.model';
import { CartService } from 'src/app/services/cart.service';
import { MovieService } from 'src/app/services/movie.service';
//Esto es para pedidos http
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {

  newMovies:any[] = [];

  constructor(
    private movieService: MovieService,

    private router: Router,

    private cartService: CartService,

    private http: HttpClient
  )
  {
    this.movieService.getNewReleases().subscribe((data:any) =>{

      console.log(data.results);
      this.newMovies = data.results;

    })

  }

  private subscription: Subscription | undefined;

  allMovie: IMovie[] = [];

  ngOnInit(): void {
    this.subscription = this.movieService
      .getMovies()
      .subscribe((movie) => (this.allMovie = movie));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  addToCart(id: number) {
    this.cartService.addMovie(id);
  }
}
