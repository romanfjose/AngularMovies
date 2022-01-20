import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICart } from '../models/cart.model';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private movieService: MovieService) {}

  moviesInCart: ICart[] = [];
  cartMovie: ICart = {
    movieId: 0,
    title: '',
    image: '',
  };
  getFromCar(): Observable<ICart[] | undefined> {
    if (localStorage['cart'] != null)
      return of(JSON.parse(localStorage['cart']));
    else return of(undefined);
  }
  addMovie(id: Number): Observable<ICart[]> {
    if (localStorage['cart'] != null) {
      this.moviesInCart = JSON.parse(localStorage['cart']);
    }
    let i = 0;
    if (this.moviesInCart.length != 0) {
      i = this.moviesInCart.findIndex((index) => index.movieId == id);
    } else i = -1;

    if (i == -1) {
      this.movieService.getMovieById(id).subscribe((m) => {
        if (m != undefined) {
          this.cartMovie.movieId = m.id;
          this.cartMovie.title = m.title;
          this.cartMovie.image = m.image;

          this.moviesInCart.push(this.cartMovie);
          localStorage['cart'] = JSON.stringify(this.moviesInCart);

          alert('Movie added successfull: ' + this.cartMovie.title);
        } else alert('Error during process');
      });
    } else alert("Can't add the same movie twice");

    return of(this.moviesInCart);
  }

  deleteMovie(id: Number): Observable<ICart[]> {
    if (localStorage['cart'] != null)
      this.moviesInCart = JSON.parse(localStorage['cart']);

    let index = this.moviesInCart.findIndex((m) => m.movieId == id);

    if (index != -1) {
      this.moviesInCart.splice(index, 1);
      localStorage['cart'] = JSON.stringify(this.moviesInCart);
    } else alert("this movie doesn't exist in your car");

    return of(this.moviesInCart);
  }
  clerCar(): Observable<ICart[]> {
    localStorage.removeItem('cart');

    this.moviesInCart = [];

    return of(this.moviesInCart);
  }
}
