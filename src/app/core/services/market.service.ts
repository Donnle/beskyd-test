import {Injectable} from '@angular/core';
import {Select} from "@ngxs/store";
import {CartState} from "../../store/states/cart.state";
import {Observable} from "rxjs";
import {Cart, CustomerData} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  @Select(CartState) cart$: Observable<Cart> | undefined;
  private cart: Cart = [];

  constructor() {
    this.cart$?.subscribe({
      next: (cart: Cart) => {
        this.cart = cart
      }
    })
  }

  public buyProducts(customerData: CustomerData) {
    console.log(`Покупець:`, customerData, `, Купує`, this.cart)
  }
}
