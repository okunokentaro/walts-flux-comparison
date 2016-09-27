import { Component, Input } from '@angular/core'

import { AppActions } from './app.actions'
import { AppDispatcher } from './app.dispatcher'

@Component({
  selector: 'fl-product-item-container',
  template: `
    <fl-product-item
      [product]="product"
      (addToCartClicked)="onAddToCartClicked($event)"
    ></fl-product-item>
  `
})
export class ProductItemContainerComponent {
  @Input() product: any

  constructor(private actions: AppActions,
              private dispatcher: AppDispatcher) {}

  onAddToCartClicked(ev: any) {
    this.dispatcher.emit(this.actions.addToCart(this.product))
  }
}
