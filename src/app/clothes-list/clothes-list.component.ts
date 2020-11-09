import { Component, OnInit } from '@angular/core';
import { DCcartService } from '../dccart.service';
//import { Module } from 'module';
import { Prenda } from './Prenda';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

  prendas: Prenda[] = [
    {
      name: "Buzo",
      size: "12",
      price: 850,
      stock: 3,
      image: "assets/img/buzo.jpeg",
      quantity: 0,
    },
    {
      name: "Vestido Sandias",
      size: "12 a 18 m",
      price: 740,
      stock: 1,
      image: "assets/img/vestido-sandia.jpg",
      quantity: 0,
    },
    {
      name: "Body autitos",
      size: "3 a 6 m",
      price: 490,
      stock: 1,
      image: "assets/img/body-autitos.jpg",
      quantity: 0,
    }
  ]

  constructor(private cart: DCcartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(prenda):void {
    if(prenda.quantity!=0){
      this.cart.addToCart(prenda);
      prenda.stock -=prenda.quantity;
      prenda.quantity = 0;
    }
  }

  maxReached(m:string){
    alert(m);
  }
}
