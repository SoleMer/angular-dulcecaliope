import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prenda } from '../clothes-list/Prenda';
import { DCcartService } from '../dccart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  
  cartList$: Observable<Prenda[]>;
//  totalPrice: number;
  
  constructor(private cart: DCcartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
  
/*  getTotalPrice(): void {
    for(let prenda of this.cartList$){
      this.totalPrice += prenda.price;
    }
  }
*/  
  ngOnInit(): void {
  }

}
