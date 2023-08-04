import {CART_ACTIONS} from "../../core/enums";
import {Product} from "../../core/interfaces";

export class AddProduct {
  static readonly type = CART_ACTIONS.ADD_PRODUCT

  constructor(public payload: Product) {
  }
}

export class RemoveProduct {
  static readonly type = CART_ACTIONS.REMOVE_PRODUCT

  constructor(public payload: string) {
  }
}

export class IncrementProductAmount {
  static readonly type = CART_ACTIONS.INCREMENT_PRODUCT

  constructor(public payload: string) {
  }
}

export class DecrementProductAmount {
  static readonly type = CART_ACTIONS.DECREMENT_PRODUCT

  constructor(public payload: string) {
  }
}
