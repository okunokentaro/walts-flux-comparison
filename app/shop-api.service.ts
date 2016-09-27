import { Injectable } from '@angular/core'

import { ProductInStock, ProductInCart } from './product'

const _products = [
  {
    "id"       : 1,
    "title"    : "iPad 4 Mini",
    "price"    : 500.01,
    "inventory": 2,
    "image"    : "../common/assets/ipad-mini.png"
  },
  {
    "id"       : 2,
    "title"    : "H&M T-Shirt White",
    "price"    : 10.99,
    "inventory": 10,
    "image"    : "../common/assets/t-shirt.png"
  },
  {
    "id"       : 3,
    "title"    : "Charli XCX - Sucker CD",
    "price"    : 19.99,
    "inventory": 5,
    "image"    : "../common/assets/sucker.png"
  }
]
const TIMEOUT = 100

@Injectable()
export class ShopAPI {
  getProducts(timeout?: number): Promise<ProductInStock[]> {
    timeout = timeout || TIMEOUT
    return new Promise((resolve) => {
      setTimeout(() => resolve(_products), timeout)
    })
  }

  buyProducts(payload: ProductInCart[], timeout?: number): Promise<void> {
    timeout = timeout || TIMEOUT
    return new Promise((resolve) => {
      setTimeout(() => resolve(), timeout)
    })
  }
}
