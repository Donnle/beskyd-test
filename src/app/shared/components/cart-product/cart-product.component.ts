import {Component, Input} from '@angular/core';
import {Store} from "@ngxs/store";
import {CartItem} from "../../../core/interfaces";
import {DecrementProductAmount, IncrementProductAmount, RemoveProduct} from "../../../store/actions/cart.actions";

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {
  @Input() public cartItem!: CartItem;

  constructor(private store: Store) {
  }

  public incrementProductAmount() {
    this.store.dispatch(new IncrementProductAmount(this.cartItem.id))
  }

  public decrementProductAmount() {
    this.store.dispatch(new DecrementProductAmount(this.cartItem.id))
  }

  public removeProduct() {
    this.store.dispatch(new RemoveProduct(this.cartItem.id))
  }
}
