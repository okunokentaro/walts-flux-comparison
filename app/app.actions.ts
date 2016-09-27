import { Injectable } from '@angular/core'
import { Actions, Action } from 'walts'

import { AppState } from './app.store'
import { WebAPIUtils } from './web-api-utils-service'
import { ProductInCart, Product } from './product'

@Injectable()
export class AppActions extends Actions<AppState> {

  constructor(private api: WebAPIUtils) {
    super()
  }

  fetchAllProducts(): Action<AppState> {
    return (state) => {
      return this.delayed((apply) => {
        this.api.getAllProducts().then((products) => {
          apply((state) => ({
            products
          }))
        })
      })
    }
  }

  addToCart(product: Product): Action<AppState> {
    return (state) => {
      const id = product.id;

      const target = state.products.find((p) => p.id === id)
      target.inventory = target.inventory > 0
        ? target.inventory - 1
        : 0;

      const _product = product as ProductInCart
      _product.quantity = id in state.cart
        ? state.cart[id].quantity + 1
        : 1;
      state.cart[id] = Object.assign({}, _product);
      return state
    }
  }

  cartCheckout(products: ProductInCart[]): Action<AppState>[] {
    return this.combine(
      (state) => {
        return {
          cart: {}
        } as AppState
      },
      (state) => {
        return this.delayed((apply) => {
          this.api.checkoutProducts(products).then(() => {
            apply(this.finishCheckout(products))
          });
        })
      }
    )
  }

  finishCheckout(products: ProductInCart[]): Action<AppState> {
    return (state) => {
      console.log('YOU BOUGHT:', products)
      return state
    }
  }

}