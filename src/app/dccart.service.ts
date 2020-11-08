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
  
  constructor() { }

  addToCart(prenda: Prenda) {
    let item: Prenda = this._cartList.find((v1) => v1.name == prenda.name);
    if(!item){
      this._cartList.push({ ... prenda});
    }else{
      item.quantity += prenda.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}
