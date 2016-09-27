import { Injectable } from '@angular/core'

import { ShopAPI } from './shop-api.service'
import { ProductInStock, ProductInCart } from './product'

@Injectable()
export class WebAPIUtils {
  constructor(private shop: ShopAPI) {}

  getAllProducts(): Promise<ProductInStock[]> {
    return this.shop.getProducts()
  }

  checkoutProducts(products: ProductInCart[]): Promise<void> {
    return this.shop.buyProducts(products)
  }
}
