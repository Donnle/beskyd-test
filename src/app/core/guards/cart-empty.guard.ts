import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {Select} from "@ngxs/store";
import {CartState} from "../../store/states/cart.state";
import {Cart} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CartEmptyGuard implements CanActivate {
  @Select(CartState) cart$: Observable<Cart> | undefined;
  private isCartEmpty: boolean = false;

  constructor(private router: Router) {
    this.cart$?.subscribe({
      next: (cart: Cart) => {
        this.isCartEmpty = cart.length <= 0
      }
    })
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isCartEmpty) {
      this.router.navigateByUrl('')
    }
    return true;
  }

}
