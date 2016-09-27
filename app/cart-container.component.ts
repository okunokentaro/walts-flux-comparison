import {Component} from '@angular/core'

import {CartStore} from './cart.store'

@Component({
  selector: 'fl-cart-container',
  template: `
    <fl-cart
      products={this.state.products}
      total={this.state.total}
      onCheckoutClicked={this.onCheckoutClicked}
    ></fl-cart>
  `
})
export class CartContainerComponent {
  private products: any
  private total: any

  constructor(private cartStore: CartStore) {}

  ngOnInit() {
    this.cartStore.getAddedProducts().subscribe((v) => this.products = v)
    this.cartStore.getTotal()        .subscribe((v) => this.total = v)
  }
}
