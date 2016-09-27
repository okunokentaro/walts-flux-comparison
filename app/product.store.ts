import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { AppDispatcher } from './app.dispatcher'
import { AppStore } from './app.store'

@Injectable()
export class ProductStore extends AppStore {
  constructor(protected dispatcher: AppDispatcher) {
    super(dispatcher)
  }

  getAllProducts(): Observable<any> {
    return this.observable
  }
}
