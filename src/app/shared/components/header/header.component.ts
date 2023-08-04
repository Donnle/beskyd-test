import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable, Subscription} from "rxjs";
import {Cart, MenuItem} from "../../../core/interfaces";
import {CartState} from "../../../store/states/cart.state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public countItemsInCart: number = 0;
  public menuItems: MenuItem[] = [
    {
      name: 'Корзина',
      routerLink: 'cart'
    }
  ];

  @Select(CartState) private cart$: Observable<Cart> | undefined
  private cartSubscription: Subscription | undefined;

  ngOnInit() {
    this.cartSubscription = this.cart$?.subscribe({
      next: (cart: Cart) => {
        this.countItemsInCart = cart.length
      }
    })
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe()
  }
}
