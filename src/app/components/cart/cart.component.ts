import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(
    private cartService : CartService,

  ) { }
  private subscriptions?: Subscription | undefined;

  allMoviesInCar? : ICart[] = [];

  ngOnInit(): void {
    this.subscriptions = this.cartService.getFromCar().subscribe(movie => this.allMoviesInCar = movie);
  }
  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();

  }

  deleteMovie(id : Number){
    this.subscriptions?.add(this.cartService.deleteMovie(id).subscribe(m => this.allMoviesInCar = m));
  }

  removeAll() {
    this.subscriptions?.add(this.cartService.clerCar().subscribe(m => this.allMoviesInCar = m));
  }
}
