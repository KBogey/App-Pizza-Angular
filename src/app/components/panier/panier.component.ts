import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  cartPizzas !: Pizza[];
  // cartTotalValue;
  // prods;

  // constructor(private panier: PanierService) { 
  //   this.cartPizzas = this.panier.getItemsFromCart();
  //   this.prods = this.panier.getCartCount();
  // }

   ngOnInit(): void {}
  //   setInterval(() => {
  //     this.prods = this.panier.getCartCount();
  //     console.log("nombre produits dans le panier : ",this.panier);
    //  }, 200);}
  

  // handelRemoveItem = (product) => {
  //   this.panier.removeFromCart(product);
  //   this.cartPizzas = this.panier.getItemsFromCart();
  //   this.cartTotalValue =  this.panier.getTotalAmount();
  // }

  // handleIncrement = (product) => {
  //   this.panier.addItemsToCart(product);
  //   this.cartPizzas = this.panier.getItemsFromCart();
  //   this.cartTotalValue =  this.panier.getTotalAmount();
  // }

  // handleDecriment = (product) => {
  //   this.panier.decrementFromCart(product);
  //   this.cartPizzas = this.panier.getItemsFromCart();
  //   this.cartTotalValue =  this.panier.getTotalAmount();
  // }

}