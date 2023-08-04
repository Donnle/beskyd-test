import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable, Subscription} from "rxjs";
import {CartState} from "../../../store/states/cart.state";
import {Cart, CartItem} from "../../../core/interfaces";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  @Select(CartState) cart$: Observable<Cart> | undefined;
  public cart: Cart = [];
  public totalPrice: number = 0;

  private cartSubscription: Subscription | undefined;

  ngOnInit() {
    this.cartSubscription = this.cart$?.subscribe({
      next: (cart: Cart) => {
        this.cart = cart
        this.totalPrice = this.calculateTotalPrice(cart)
      }
    })
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe()
  }

  private calculateTotalPrice(cart: Cart): number {
    return cart.reduce((acc: number, cartItem: CartItem) => acc + (cartItem.price * cartItem.amount), 0)
  }
}
