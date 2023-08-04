import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './shared/components/product/product.component';
import {HomePageComponent} from './shared/pages/home-page/home-page.component';
import {CartPageComponent} from './shared/pages/cart-page/cart-page.component';
import {OrderPageComponent} from './shared/pages/order-page/order-page.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {HeaderComponent} from './shared/components/header/header.component';
import {GamesState} from "./store/states/games.state";
import {CartState} from "./store/states/cart.state";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {CartProductComponent} from "./shared/components/cart-product/cart-product.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomePageComponent,
    CartPageComponent,
    OrderPageComponent,
    HeaderComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([GamesState, CartState], {
      developmentMode: true
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
