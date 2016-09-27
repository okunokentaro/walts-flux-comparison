import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { AppStore } from './app.store'
import { ProductInCart } from './product'

@Injectable()
export class CartStore {
  constructor(protected store: AppStore) {}

  getAddedProducts(): Observable<ProductInCart[]> {
    return this.store.observable.map((state) => {
      return Object.keys(state.cart).map((id) => {
        return state.cart[id]
      })
    })
  }

  getTotal(): Observable<string> {
    return this.store.observable.map((state) => {
      return Object.keys(state.cart).reduce((total, id) => {
        const product = state.cart[id]
        total += product.price * product.quantity
        return total
      }, 0).toFixed(2)
    })
  }
}
