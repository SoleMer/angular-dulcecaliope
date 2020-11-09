import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Prenda } from './clothes-list/Prenda';
/**
 * Maneja la lista de compras
 */
@Injectable({
  providedIn: 'root'
})
export class DCcartService {

  private _cartList: Prenda[] = [];
  cartList: BehaviorSubject <Prenda[]> = new BehaviorSubject([]);
  //private _totalPrice: number;
  
  constructor() { }

  addToCart(prenda: Prenda) {
    let item: Prenda = this._cartList.find((v1) => v1.name == prenda.name);
    if(!item){
      prenda.price = prenda.price * prenda.quantity;
      this._cartList.push({... prenda});
      prenda.price = prenda.price / prenda.quantity;
    }else{
      item.quantity += prenda.quantity;
      item.price += prenda.price * prenda.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}
