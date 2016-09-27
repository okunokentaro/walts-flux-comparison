import { Injectable } from '@angular/core'
import { State, Store } from 'walts'

import { AppDispatcher } from './app.dispatcher'
import { ProductInStock, ProductInCart } from './product'

export class AppState extends State {
  products?: ProductInStock[]
  cart?: {
    [id: string]: ProductInCart
  }
}

const INIT_STATE: AppState = {
  products: [],
  cart: {}
}

@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher)
  }
}
