import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { AppDispatcher } from './app.dispatcher'
import { AppStore } from './app.store'

@Injectable()
export class CartStore extends AppStore {
  constructor(protected dispatcher: AppDispatcher) {
    super(dispatcher)
  }

  getAddedProducts(): Observable<any> {
    return this.observable
  }

  getTotal(): Observable<any> {
    return this.observable
  }
}
