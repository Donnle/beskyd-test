export type Games = Game[]
export type Products = Product[]
export type Cart = CartItem[]

export interface Game {
  gameID: string
  steamAppID?: string
  cheapest: string
  cheapestDealID: string
  external: string
  internalName: string
  thumb: string
}

export interface MenuItem {
  name: string
  routerLink: string
}

export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  amount: number;
}

export interface IAction<T> {
  type: string;
  payload: T,
}

export interface CustomerData {
  fullName: string | null;
  phoneNumber: string | null;
}
