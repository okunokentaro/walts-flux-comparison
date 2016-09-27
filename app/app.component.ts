import {Component} from '@angular/core'

import {AppStore} from './app.store'

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
  constructor(private store: AppStore) {}
}
