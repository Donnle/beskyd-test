import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./shared/pages/home-page/home-page.component";
import {CartPageComponent} from "./shared/pages/cart-page/cart-page.component";
import {OrderPageComponent} from "./shared/pages/order-page/order-page.component";
import {CartEmptyGuard} from "./core/guards/cart-empty.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'order',
    component: OrderPageComponent,
    canActivate: [CartEmptyGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
