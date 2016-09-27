import { Component } from '@angular/core'

import { AppActions } from './app.actions'
import { AppDispatcher } from './app.dispatcher'

@Component({
  selector: 'fl-app',
  template: `
    <div>
      <fl-products-container></fl-products-container>
      <fl-cart-container></fl-cart-container>
    </div>
  `
})
export class AppComponent {
  constructor(private actions: AppActions,
              private dispatcher: AppDispatcher) {}

  ngOnInit() {
    this.dispatcher.emit(this.actions.fetchAllProducts())
  }
}
