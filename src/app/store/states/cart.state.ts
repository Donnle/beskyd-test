import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {Cart, CartItem, IAction, Product} from "../../core/interfaces";
import {
  AddProduct,
  DecrementProductAmount,
  IncrementProductAmount,
  RemoveProduct
} from "../actions/cart.actions";


@State<Cart>({
  name: 'cart',
  defaults: []
})
@Injectable()
export class CartState {
  @Action(AddProduct)
  addProduct(ctx: StateContext<Cart>, action: IAction<Product>) {
    const cart: Cart = ctx.getState();
    const product: Product = action.payload;

    const isAlreadyInCart: boolean = cart.some((cartItem: CartItem): boolean => cartItem.id === product.id)

    if (isAlreadyInCart) {
      return;
    }

    const updatedCart: Cart = [...cart, {...product, price: parseFloat(product.price), amount: 1}]
    ctx.setState(updatedCart)
  }

  @Action(RemoveProduct)
  removeProduct(ctx: StateContext<Cart>, action: IAction<string>) {
    const cart: Cart = ctx.getState();
    const productId: string = action.payload

    const updatedCart: Cart = cart.filter((cartItem: CartItem) => cartItem.id !== productId)
    ctx.setState(updatedCart)
  }

  @Action(IncrementProductAmount)
  incrementProductAmount(ctx: StateContext<Cart>, action: IAction<string>) {
    const cart: Cart = ctx.getState();
    const productId: string = action.payload

    const updatedCart: Cart = cart.map((cartItem: CartItem) => {
      if (cartItem.id === productId) {
        return {...cartItem, amount: cartItem.amount + 1}
      }

      return {...cartItem}
    })

    ctx.setState(updatedCart)
  }

  @Action(DecrementProductAmount)
  decrementProductAmount(ctx: StateContext<Cart>, action: IAction<string>) {
    const cart: Cart = ctx.getState();
    const productId: string = action.payload

    const updatedCart: Cart = cart.map((cartItem: CartItem) => {
      if (cartItem.id === productId) {
        return {...cartItem, amount: cartItem.amount > 1 ? cartItem.amount - 1 : 1}
      }

      return {...cartItem}
    })

    ctx.setState(updatedCart)
  }
}
