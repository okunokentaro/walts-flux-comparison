import { Component, Input } from '@angular/core'

import { AppActions } from './app.actions'
import { AppDispatcher } from './app.dispatcher'
import { Product } from './product';

@Component({
  selector: 'fl-product-item-container',
  template: `
    <fl-product-item
      [product]="product"
      (addToCartClicked)="onAddToCartClicked()"
    ></fl-product-item>
  `
})
export class ProductItemContainerComponent {
  @Input() key: number
  @Input() product: Product

  constructor(private actions: AppActions,
              private dispatcher: AppDispatcher) {}

  onAddToCartClicked() {
    this.dispatcher.emit(this.actions.addToCart(this.product))
  }
}
