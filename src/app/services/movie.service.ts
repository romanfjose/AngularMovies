import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICart } from '../models/cart.model';
import { IMovie } from '../models/movie.model';
import { moviesMock } from './movies.mock';
//Esto es para htttps
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  rentalMovie: ICart[] = [];
  uniqueMovie: IMovie | undefined;

  getMovies(): Observable<IMovie[]> {
    return of(moviesMock);
  }

  getMovieById(id: Number): Observable<IMovie | undefined> {
    return of(moviesMock.find((movies) => movies.id === id));
  }
 //Nos trae las peliculas nuevas
  getNewReleases(){



    return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=<<apikey>>');

   }
}
