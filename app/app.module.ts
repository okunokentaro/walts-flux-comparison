import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CartComponent } from './cart.component'
import { CartContainerComponent } from './cart-container.component'
import { ProductItemComponent } from './product-item.component'
import { ProductItemContainerComponent } from './product-item-container.component'
import { ProductsContainerComponent } from './products-container.component'
import { ProductsListComponent } from './products-list.component'

import { AppActions } from './app.actions'
import { AppDispatcher } from './app.dispatcher'
import { AppStore } from './app.store'
import { CartStore } from './cart.store'
import { ProductStore } from './product.store'
import { WebAPIUtils } from './web-api-utils-service'
import { ShopAPI } from './shop-api.service'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CartComponent,
    CartContainerComponent,
    ProductItemComponent,
    ProductItemContainerComponent,
    ProductsContainerComponent,
    ProductsListComponent
  ],
  providers: [
    AppActions,
    AppDispatcher,
    AppStore,
    CartStore,
    ProductStore,
    WebAPIUtils,
    ShopAPI
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
