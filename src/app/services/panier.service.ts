import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  // cartItems = [];
  // totalAmount;

  // constructor(private router: Router) { }

  // addItemsToCart = (product) => {
  //   let productExists = false;

  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].id === product.id) {
  //       this.cartItems[i].quantity++;
  //       productExists = true;
  //       this.getTotalAmount();
  //       break;
  //     }
  //   }
  //   if (!productExists) {
  //     this.cartItems.push({
  //       id: product.id,
  //       nom: product.nom,
  //       prix: product.prix,
  //       description: product.description,
  //       derniere_maj: product.derniere_maj,
  //       quantity: 1,
  //       url: product.url
  //     });
  //   }
  //   this.getTotalAmount();
  // }

  // getTotalAmount() {
  //   if (this.cartItems) {
  //     this.totalAmount = 0;
  //     this.cartItems.forEach((item) => {
  //       this.totalAmount += (item.quantity * item.prix );
  //     });
  //     return {
  //       totalAmount: this.totalAmount
  //     };
  //   }
  // }

  // getItemsFromCart = () => {
  //   return this.cartItems;
  // }
  // getCartCount = () => {
  //   if (this.cartItems) {
  //     let cartCount = 0;
  //     this.cartItems.forEach((item) => {
  //       cartCount += item.quantity;
  //     });
  //     return cartCount;
  //   }
  // }

  // clearCart = () => {
  //   this.cartItems = [];
  //   this.router.navigate(['']);
  // }

  // removeFromCart = (product) => {
  //   this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
  //   if (this.cartItems.length === 0) {
  //     this.router.navigate(['']);
  //   }
  //   this.getTotalAmount();
  // }

  // decrementFromCart = (product) => {
  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].id === product.id) {
  //       if (this.cartItems[i].quantity === 0) {
  //         this.removeFromCart(product);
  //       } else {
  //         this.cartItems[i].quantity--;
  //       }
  //       this.getTotalAmount();
  //       break;
  //     }
  //   }
  //   this.getTotalAmount();
  // }
}


