import {Component, Input} from '@angular/core';
import {Store} from "@ngxs/store";
import {Product} from "../../../core/interfaces";
import {AddProduct} from "../../../store/actions/cart.actions";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() public productData!: Product;

  constructor(private store: Store) {
  }

  public addToCart() {
    this.store.dispatch(new AddProduct(this.productData))
  }
}
