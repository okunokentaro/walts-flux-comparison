import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { AppStore } from './app.store'
import { Product } from './product'

@Injectable()
export class ProductStore {
  constructor(protected store: AppStore) {}

  getAllProducts(): Observable<Product[]> {
    return this.store.observable.map((state) => {
      return state.products
    })
  }
}
